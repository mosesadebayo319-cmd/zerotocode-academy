const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
const files = [
  'index.html', 'app.js', 'learning-state.js', 'runners.js', 'runner-worker.js',
  'python-course.js', 'javascript-course.js', 'web-course.js', 'go-course.js', 'rust-course.js',
  'assets/styles.css'
];
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(output, file));
console.log(`Built ${files.length} static files in dist/`);
