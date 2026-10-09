/* Learner programs run away from the page so a loop can be stopped. */
'use strict';
const send = self.postMessage.bind(self);
let outputLength = 0;
let outputLines = 0;
function output(value) {
  if (outputLength >= 20000 || outputLines >= 300) return;
  const text = String(value).slice(0, 20000 - outputLength);
  outputLength += text.length;
  outputLines++;
  send({ type: 'output', text });
  if (outputLength >= 20000 || outputLines >= 300) send({ type: 'output', text: '[Output limit reached]' });
}
function format(value) {
  if (typeof value === 'string') return value;
  try { return JSON.stringify(value) ?? String(value); } catch { return String(value); }
}
self.onmessage = async ({ data }) => {
  try {
    if (data.language === 'python') {
      send({ type: 'status', text: 'Loading Python. The first run needs an internet connection and may take a minute…' });
      importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js');
      const py = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
      const lines = data.stdin ? data.stdin.split('\n') : [];
      py.setStdin({ stdin: () => lines.length ? lines.shift() : null });
      py.setStdout({ batched: output });
      py.setStderr({ batched: output });
      send({ type: 'status', text: 'Preparing any Python packages used by this example…' });
      await py.loadPackagesFromImports(data.code);
      send({ type: 'ready' });
      await py.runPythonAsync(data.code);
    } else {
      self.console = Object.fromEntries(['log', 'info', 'warn', 'error', 'debug', 'table'].map((level) => [level, (...args) => output(args.map(format).join(' '))]));
      self.addEventListener('unhandledrejection', (event) => send({ type: 'error', text: String(event.reason) }));
      send({ type: 'ready' });
      await new Function('return (async () => {\n' + data.code + '\n})()')();
    }
    send({ type: 'done' });
  } catch (error) {
    send({ type: 'error', text: String(error) });
  }
};
