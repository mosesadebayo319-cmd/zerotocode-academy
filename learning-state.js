/* Browser-only learner state. Legacy progress is migrated without deleting it. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LearningState = api;
})(typeof window === 'undefined' ? globalThis : window, function () {
  'use strict';
  const KEY = 'zerotocode_learning_v1';
  const PATHS = ['all', 'beginner', 'data', 'backend', 'dsa'];
  const record = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
  function localDay(date = new Date()) {
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
  }
  function yesterday(date = new Date()) {
    const previous = new Date(date);
    previous.setDate(previous.getDate() - 1);
    return localDay(previous);
  }
  function normalize(raw, courses) {
    raw = record(raw) ? raw : {};
    const state = { version: 1, progress: {}, scores: {}, drafts: {}, lastLesson: null, streak: { last: '', count: 0 } };
    for (const [lang, course] of Object.entries(courses)) {
      const ids = new Set(course.lessons.map((l) => l.id));
      state.progress[lang] = [...new Set((Array.isArray(raw.progress?.[lang]) ? raw.progress[lang] : []).filter((id) => ids.has(id)))];
      for (const lesson of course.lessons) {
        const key = `${lang}:${lesson.id}`;
        const score = raw.scores?.[key];
        if (Number.isInteger(score) && score >= 0 && score <= 100) state.scores[key] = score;
        const draft = raw.drafts?.[key];
        if (typeof draft === 'string' && draft.length <= 20000) state.drafts[key] = draft;
      }
    }
    const last = raw.lastLesson;
    if (record(last) && Object.hasOwn(courses, last.lang) && courses[last.lang].lessons.some((l) => l.id === last.id)) {
      const lesson = courses[last.lang].lessons.find((l) => l.id === last.id);
      const path = last.lang === 'python' && PATHS.includes(last.path) && (last.path === 'all' || lesson.path === last.path) ? last.path : 'all';
      state.lastLesson = { lang: last.lang, id: last.id, path };
    }
    if (record(raw.streak) && /^\d{4}-\d{2}-\d{2}$/.test(raw.streak.last) && Number.isInteger(raw.streak.count) && raw.streak.count > 0 && raw.streak.count < 100000) {
      state.streak = { last: raw.streak.last, count: raw.streak.count };
    }
    return state;
  }
  function streakCount(streak, now = new Date()) {
    return streak.last === localDay(now) || streak.last === yesterday(now) ? streak.count : 0;
  }
  function touchStreak(streak, now = new Date()) {
    if (streak.last === localDay(now)) return streak;
    return { last: localDay(now), count: streak.last === yesterday(now) ? streak.count + 1 : 1 };
  }
  function create(storage, courses, onWarning = () => {}) {
    let warningSent = false;
    const warn = () => {
      if (!warningSent) onWarning('Your browser could not load or save all learning data. You can keep learning, but download a backup before leaving.');
      warningSent = true;
    };
    function read(key) {
      try { const value = storage.getItem(key); return value === null ? null : JSON.parse(value); }
      catch { warn(); return null; }
    }
    const raw = read(KEY);
    if (raw !== null && (!record(raw) || raw.version !== 1)) warn();
    let state = normalize(raw?.version === 1 ? raw : {
      progress: read('zerotocode_progress'), scores: read('zerotocode_quiz'), streak: read('zerotocode_streak_data')
    }, courses);
    return {
      get state() { return state; },
      persist() {
        try { storage.setItem(KEY, JSON.stringify(state)); return true; }
        catch { warn(); return false; }
      },
      export() { return JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2); },
      import(text) {
        if (text.length > 6000000) throw new Error('This backup is too large. Choose a ZeroToCode backup under 6 MB.');
        let raw;
        try { raw = JSON.parse(text); } catch { throw new Error('This file is not a valid JSON backup.'); }
        if (!record(raw) || raw.version !== 1 || !record(raw.progress) || !record(raw.scores) || !record(raw.drafts)) {
          throw new Error('Choose a version 1 ZeroToCode learning backup.');
        }
        const incoming = normalize(raw, courses);
        for (const lang of Object.keys(courses)) state.progress[lang] = [...new Set([...state.progress[lang], ...incoming.progress[lang]])];
        for (const [key, score] of Object.entries(incoming.scores)) state.scores[key] = Math.max(state.scores[key] || 0, score);
        // Preserve newer work already on this browser; restore missing drafts.
        state.drafts = { ...incoming.drafts, ...state.drafts };
        state.lastLesson = state.lastLesson || incoming.lastLesson;
        if (incoming.streak.last > state.streak.last) state.streak = incoming.streak;
        return this.persist();
      },
      reset() {
        state = normalize({}, courses);
        try {
          for (const key of [KEY, 'zerotocode_progress', 'zerotocode_quiz', 'zerotocode_streak_data']) storage.removeItem(key);
          return true;
        } catch { warn(); return false; }
      }
    };
  }
  return { create, normalize, localDay, streakCount, touchStreak, KEY };
});
