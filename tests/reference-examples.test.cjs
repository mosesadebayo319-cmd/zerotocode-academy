const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { loadCourses } = require('../scripts/curriculum-audit.cjs');
const { examplesFor, localPath, writeFixtures, runtimeFor } = require('../scripts/lesson-examples.cjs');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', timeout: 90000, maxBuffer: 4 * 1024 * 1024, ...options });
  assert.equal(result.status, 0, `${command}: ${result.error || result.stderr}`);
  return result.stdout.replace(/\r\n/g, '\n').replace(/\n$/, '');
}

async function runJavaScript(code) {
  const lines = [];
  const timers = new Set();
  const format = value => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number' && Number.isNaN(value)) return 'NaN';
    if (value === Infinity) return 'Infinity';
    if (value === -Infinity) return '-Infinity';
    if (Object.is(value, -0)) return '-0';
    return JSON.stringify(value) ?? String(value);
  };
  const log = (...values) => lines.push(values.map(format).join(' '));
  const context = {
    console: Object.fromEntries(['log', 'info', 'warn', 'error', 'debug', 'table'].map(name => [name, log])),
    setTimeout: (fn, ms, ...args) => { const id = setTimeout(() => { timers.delete(id); fn(...args); }, ms); timers.add(id); return id; },
    clearTimeout: id => { clearTimeout(id); timers.delete(id); },
    URL, URLSearchParams
  };
  let deadline;
  try {
    const completion = vm.runInNewContext(`(async () => {\n${code}\n})()`, context, { timeout: 5000 });
    await Promise.race([completion, new Promise((_, reject) => { deadline = setTimeout(() => reject(new Error('JavaScript example exceeded five seconds')), 5000); })]);
    return lines.join('\n');
  } finally { clearTimeout(deadline); for (const timer of timers) clearTimeout(timer); }
}

const groups = new Map();
for (const course of loadCourses()) for (const lesson of course.lessons.filter(l => l.guide)) {
  for (const example of examplesFor(lesson)) {
    const runtime = runtimeFor(course, lesson, example);
    if (['web', 'browser', 'browser-local', 'javascript-module'].includes(runtime)) continue; // Covered by browser/curriculum-examples.spec.cjs.
    if (!groups.has(runtime)) groups.set(runtime, []);
    groups.get(runtime).push({ lesson, example });
  }
}

for (const [runtime, examples] of groups) {
  test(`${runtime}: ${examples.length} curriculum programs match their documented output`, async t => {
    const extended = ['python-data', 'python-django', 'python-mysql', 'python-mongodb'].includes(runtime);
    const database = ['python-mysql', 'python-mongodb'].includes(runtime);
    const enabled = (!extended || process.env.ACADEMY_FULL_CURRICULUM === '1') && (!database || process.env.ACADEMY_DATABASE_TESTS === '1');
    if (!enabled) return t.skip('See docs/CURRICULUM-VALIDATION.md for dependency and local database setup.');
    const python = process.env.ACADEMY_PYTHON || 'python3';
    const compiler = runtime.startsWith('python') ? python : { go: 'go', rust: 'rustc', node: 'node' }[runtime];
    if (compiler) {
      const version = spawnSync(compiler, runtime === 'go' ? ['version'] : ['--version'], { encoding: 'utf8' });
      const signature = runtime.startsWith('python') ? /^Python 3\./ : { go: /^go version go/, rust: /^rustc /, node: /^v/ }[runtime];
      const available = version.status === 0 && signature.test(version.stdout);
      if (!available) return t.skip(`Install ${compiler} and put it on PATH to verify ${runtime}.`);
    }
    for (const { lesson, example } of examples) {
      const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zerotocode-example-'));
      try {
        const validation = example.validation;
        writeFixtures(directory, validation.files);
        const options = { cwd: directory, input: validation.stdin || '', env: { ...process.env, MPLBACKEND: 'Agg', MPLCONFIGDIR: path.join(directory, '.matplotlib'), PYTHONHASHSEED: '0' } };
        let actual;
        if (runtime.startsWith('python')) {
          const entrypoint = validation.entrypoint || 'main.py';
          writeFixtures(directory, { [entrypoint]: example.code });
          // Isolate user configuration, but allow this example's own supporting modules.
          actual = run(python, ['-I', '-c', 'import os, runpy, sys; sys.path.insert(0, os.getcwd()); runpy.run_path(sys.argv[1], run_name="__main__")', entrypoint], options);
        } else if (runtime === 'javascript') {
          actual = await runJavaScript(example.code);
        } else if (runtime === 'node') {
          const entrypoint = validation.entrypoint || 'main.cjs';
          writeFixtures(directory, { [entrypoint]: example.code });
          actual = run('node', [entrypoint], options);
        } else if (runtime === 'go') {
          writeFixtures(directory, { [validation.entrypoint || 'main.go']: example.code });
          if (!fs.existsSync(path.join(directory, 'go.mod'))) writeFixtures(directory, { 'go.mod': 'module example.com/go-practice\n\ngo 1.20\n' });
          actual = run('go', ['run', '.'], { ...options, env: { ...options.env, GOTOOLCHAIN: 'local', GOCACHE: path.join(os.tmpdir(), 'zerotocode-go-cache') } });
        } else if (runtime === 'rust') {
          const entrypoint = validation.entrypoint || 'main.rs';
          writeFixtures(directory, { [entrypoint]: example.code });
          const program = path.join(directory, process.platform === 'win32' ? 'example.exe' : 'example');
          run('rustc', ['--edition=' + (validation.edition || '2021'), entrypoint, '-o', program], options);
          actual = run(program, [], options);
        } else throw new Error('No execution adapter for ' + runtime);
        assert.equal(actual, example.expectedOutput, `${lesson.id}: ${example.title}`);
        for (const artifact of validation.artifacts || []) assert.ok(fs.statSync(localPath(directory, artifact)).size > 0, `${lesson.id}: missing or empty ${artifact}`);
      } catch (error) {
        error.message = `${lesson.id} / ${example.title}: ${error.message}`;
        throw error;
      } finally { fs.rmSync(directory, { recursive: true, force: true }); }
    }
  });
}
