const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const tracks = ['python', 'javascript', 'web', 'go', 'rust'];

function loadCourses() {
  return tracks.map(track => {
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(root, `${track}-course.js`), 'utf8'), context);
    return context.window[track.toUpperCase() + '_COURSE'];
  });
}

function coverage(lesson) {
  const guide = lesson.guide;
  return {
    'preparation and outcomes': guide?.prerequisites?.length > 0 && guide?.outcomes?.length >= 3,
    'organised explanation': (lesson.explanation.match(/<h4\b/g) || []).length >= 4,
    'output and walkthrough': Boolean(guide?.expectedOutput?.trim()) && guide?.walkthrough?.length > 0,
    'worked variation': guide?.variations?.length > 0,
    'specific troubleshooting': guide?.mistakes?.length >= 3,
    'progressive explained practice': lesson.exercises.length >= 3 && lesson.exercises.every(e => e.hint && e.solution && e.solutionExplanation && e.expectedOutput && e.successCriteria?.length),
    'substantive quiz structure': lesson.quiz?.length >= 4 && lesson.quiz.every(q => q.explanation?.trim()),
    'recap and references': guide?.summary?.length >= 3 && guide?.references?.length > 0
  };
}

function report() {
  const courses = loadCourses();
  const all = courses.flatMap(c => c.lessons);
  const ready = lesson => Object.values(coverage(lesson)).every(Boolean);
  const count = all.filter(ready).length;
  const md = [
    '# Curriculum depth coverage', '',
    'Generated from the course files by `npm run audit:curriculum`. The [lesson standard](LESSON-STANDARD.md) applies to every lesson. This report measures authoring components, not factual accuracy or learning effectiveness.', '',
    `**${count} of ${all.length} lessons have the reference structure; ${all.length - count} remain in the expansion backlog.** Structural completion is not editorial sign-off.`, '',
    'Reference lessons were written individually for their topics. Explanation word counts below are diagnostic only; no word-count threshold earns a pass. An older lesson can be lengthy yet still lack a walkthrough, meaningful practice, or topic-specific feedback.', '',
    '| Track | Lessons | Reference structure | Needs expansion |', '|---|---:|---:|---:|',
    ...courses.map(c => `| ${c.name} | ${c.lessons.length} | ${c.lessons.filter(ready).length} | ${c.lessons.filter(l => !ready(l)).length} |`), '',
    '## Every lesson', '',
    'Missing components identify gaps in structured coverage, not a judgment that all existing prose is unusable. Read each lesson before revising it. Project lessons should receive an equivalent rubric and worked project treatment.', ''
  ];
  for (const course of courses) {
    md.push(`### ${course.name}`, '', '| ID | Lesson | Explanation words | Coverage / remaining work |', '|---|---|---:|---|');
    for (const lesson of course.lessons) {
      const missing = Object.entries(coverage(lesson)).filter(([, value]) => !value).map(([name]) => name);
      const words = lesson.explanation.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
      md.push(`| ${lesson.id} | ${lesson.title.replace(/\|/g, '\\|')} | ${words} | ${missing.length ? missing.join('; ') : 'Reference structure present; editorial review still applies'} |`);
    }
    md.push('');
  }
  return md.join('\n');
}

if (require.main === module) {
  fs.writeFileSync(path.join(root, 'docs/CURRICULUM-AUDIT.md'), report());
  console.log('Updated docs/CURRICULUM-AUDIT.md for the current catalog.');
}
module.exports = { loadCourses, coverage, report };
