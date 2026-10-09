const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { loadCourses } = require('../scripts/curriculum-audit.cjs');

function examples(lesson) {
  return [
    { title: 'main example', code: lesson.codeExample, expectedOutput: lesson.guide.expectedOutput },
    ...lesson.guide.variations,
    ...lesson.exercises.map(e => ({ title: e.title, code: e.solution, expectedOutput: e.expectedOutput }))
  ];
}
function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', timeout: 90000, ...options });
  assert.equal(result.status, 0, `${command}: ${result.error || result.stderr}`);
  return result.stdout.replace(/\r\n/g, '\n').replace(/\n$/, '');
}

for (const course of loadCourses().filter(c => ['python', 'javascript', 'go', 'rust'].includes(c.id))) {
  test(`${course.id}: expanded examples and reference solutions produce the documented output`, t => {
    const lessons = course.lessons.filter(l => l.guide);
    if (!lessons.length) return;
    const compiler = { python: 'python3', go: 'go', rust: 'rustc' }[course.id];
    if (compiler) {
      const version = spawnSync(compiler, course.id === 'go' ? ['version'] : ['--version'], { encoding: 'utf8' });
      const signature = { python: /^Python 3\./, go: /^go version go/, rust: /^rustc / }[course.id];
      const available = version.status === 0 && signature.test(version.stdout);
      if (process.env.CI) assert.ok(available, `CI requires ${compiler} on PATH to validate ${course.id} examples.`);
      if (!available) {
        t.skip(`Install ${compiler} and put it on PATH to verify this track locally.`);
        return;
      }
    }
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zerotocode-examples-'));
    try {
      for (const lesson of lessons) for (const example of examples(lesson)) {
        let actual;
        if (course.id === 'python') actual = run('python3', ['-I', '-c', example.code]);
        if (course.id === 'javascript') {
          const lines = [];
          vm.runInNewContext(example.code, { console: { log: (...values) => lines.push(values.map(String).join(' ')) } }, { timeout: 1000 });
          actual = lines.join('\n');
        }
        if (course.id === 'go') {
          fs.writeFileSync(path.join(directory, 'main.go'), example.code);
          fs.writeFileSync(path.join(directory, 'go.mod'), 'module example.com/go-practice\n\ngo 1.20\n');
          actual = run('go', ['run', '.'], { cwd: directory, env: { ...process.env, GOTOOLCHAIN: 'local', GOCACHE: path.join(os.tmpdir(), 'zerotocode-go-cache') } });
        }
        if (course.id === 'rust') {
          fs.writeFileSync(path.join(directory, 'main.rs'), example.code);
          const program = path.join(directory, process.platform === 'win32' ? 'example.exe' : 'example');
          run('rustc', ['--edition=2021', 'main.rs', '-o', program], { cwd: directory });
          actual = run(program, []);
        }
        assert.equal(actual, example.expectedOutput, `${lesson.id}: ${example.title}`);
      }
    } finally { fs.rmSync(directory, { recursive: true, force: true }); }
  });
}
