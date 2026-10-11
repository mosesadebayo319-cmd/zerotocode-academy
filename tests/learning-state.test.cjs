const { test } = require('node:test');
const assert = require('node:assert/strict');
const { create, normalize, touchStreak, streakCount, localDay, KEY } = require('../learning-state.js');
const courses = { python: { lessons: [{ id: 'py-01', path: 'beginner' }, { id: 'py-02', path: 'beginner' }] } };
function storage(entries = {}) {
  const map = new Map(Object.entries(entries));
  return { getItem: (k) => map.get(k) ?? null, setItem: (k, v) => map.set(k, v), removeItem: (k) => map.delete(k) };
}

test('migrates legacy learners, discards unknown IDs, and does not double-count completion', () => {
  const disk = storage({ zerotocode_progress: JSON.stringify({ python: ['py-01', 'py-01', 'removed'] }), zerotocode_quiz: JSON.stringify({ 'python:py-01': 100 }) });
  const store = create(disk, courses);
  assert.deepEqual(store.state.progress.python, ['py-01']);
  assert.equal(store.state.scores['python:py-01'], 100);
  assert.equal(store.persist(), true);
  assert.deepEqual(create(disk, courses).state, store.state);
});

test('corrupt and inaccessible browser storage do not prevent learning', () => {
  const warnings = [];
  assert.deepEqual(create(storage({ [KEY]: '{broken' }), courses, (v) => warnings.push(v)).state.progress.python, []);
  assert.equal(warnings.length, 1);
  const blocked = { getItem() { throw Error('blocked'); }, setItem() { throw Error('quota'); } };
  const store = create(blocked, courses);
  store.state.progress.python.push('py-01');
  assert.equal(store.persist(), false);
  assert.equal(JSON.parse(store.export()).progress.python[0], 'py-01');
});

test('backup restore combines achievements and preserves existing drafts', () => {
  const a = create(storage(), courses);
  a.state.progress.python = ['py-01'];
  a.state.scores['python:py-01'] = 100;
  a.state.drafts['python:py-01'] = 'new work';
  const b = create(storage(), courses);
  b.state.progress.python = ['py-02'];
  b.state.scores['python:py-01'] = 25;
  b.state.drafts['python:py-01'] = 'old work';
  b.state.drafts['python:py-02'] = 'restored work';
  a.import(b.export());
  assert.deepEqual(a.state.progress.python, ['py-01', 'py-02']);
  assert.equal(a.state.scores['python:py-01'], 100);
  assert.equal(a.state.drafts['python:py-01'], 'new work');
  assert.equal(a.state.drafts['python:py-02'], 'restored work');
  assert.throws(() => a.import('{"version":9}'), /version 1/);
  assert.throws(() => a.import('not json'), /valid JSON/);
  assert.throws(() => a.import('x'.repeat(6000001)), /too large/);
});

test('normalizes malformed data and inconsistent routes without trusting imported values', () => {
  const state = normalize({ progress: { python: 'py-01' }, scores: { 'python:py-01': 500 }, drafts: { 'python:py-01': 25 }, lastLesson: { lang: 'python', id: 'py-01', path: 'backend' } }, courses);
  assert.deepEqual(state.progress.python, []);
  assert.deepEqual(state.scores, {});
  assert.deepEqual(state.drafts, {});
  assert.equal(state.lastLesson.path, 'all');
  assert.equal(normalize({ lastLesson: { lang: '__proto__', id: 'evil' } }, courses).lastLesson, null);
});

test('streaks count local calendar days, including month boundaries, once per day', () => {
  const first = new Date(2026, 9, 31, 23, 50);
  let streak = touchStreak({ last: '', count: 0 }, first);
  assert.equal(streak.last, localDay(first));
  assert.equal(touchStreak(streak, first).count, 1);
  streak = touchStreak(streak, new Date(2026, 10, 1, 0, 10));
  assert.equal(streak.count, 2);
  assert.equal(streakCount(streak, new Date(2026, 10, 2)), 2);
  assert.equal(streakCount(streak, new Date(2026, 10, 3)), 0);
  assert.equal(touchStreak(streak, new Date(2026, 10, 3)).count, 1);
});

test('reset removes migrated and current state', () => {
  const disk = storage({ zerotocode_progress: '{"python":["py-01"]}' });
  const store = create(disk, courses);
  store.persist();
  assert.equal(store.reset(), true);
  assert.deepEqual(create(disk, courses).state.progress.python, []);
});
