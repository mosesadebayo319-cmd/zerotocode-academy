const fs = require('node:fs');
const path = require('node:path');

function examplesFor(lesson) {
  return [
    { title: 'main example', code: lesson.codeExample, expectedOutput: lesson.guide.expectedOutput, validation: lesson.guide.validation || {} },
    ...lesson.guide.variations,
    ...lesson.exercises.map(e => ({ title: e.title, code: e.solution, expectedOutput: e.expectedOutput, validation: e.validation || {} }))
  ].map(example => ({ ...example, validation: example.validation || {} }));
}

function localPath(directory, name) {
  if (typeof name !== 'string' || !name || name.includes('\\') || path.isAbsolute(name)) throw new Error('Expected a relative fixture path: ' + name);
  const target = path.resolve(directory, name);
  if (!target.startsWith(path.resolve(directory) + path.sep)) throw new Error('Fixture path leaves the example directory: ' + name);
  return target;
}

function writeFixtures(directory, files = {}) {
  for (const [name, content] of Object.entries(files)) {
    if (typeof content !== 'string') throw new Error('Fixture contents must be text: ' + name);
    const target = localPath(directory, name);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
}

function runtimeFor(course, lesson, example) {
  return example.validation.runtime || lesson.guide.validation?.runtime || course.id;
}

module.exports = { examplesFor, localPath, writeFixtures, runtimeFor };
