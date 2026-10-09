const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

for (const track of ['python', 'javascript', 'web', 'go', 'rust']) {
  test(`${track}: published lessons have valid IDs, exercises, and quiz answers`, () => {
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', `${track}-course.js`), 'utf8'), context);
    const course = context.window[track.toUpperCase() + '_COURSE'];
    const ids = new Set();
    for (const lesson of course.lessons) {
      assert.match(lesson.id, /^[a-z0-9-]+$/);
      assert.ok(!ids.has(lesson.id), `Duplicate ${lesson.id}`);
      ids.add(lesson.id);
      for (const key of ['title', 'objective', 'explanation', 'codeExample']) assert.ok(lesson[key]?.trim(), `${lesson.id}: missing ${key}`);
      assert.ok(lesson.exercises.length > 0, lesson.id);
      for (const question of lesson.quiz || []) {
        assert.ok(question.q.trim(), lesson.id);
        assert.ok(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, lesson.id);
        assert.equal(new Set(question.options).size, question.options.length, `${lesson.id}: ambiguous duplicate choices`);
      }
    }
  });
}
