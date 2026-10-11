(function () {
  'use strict';
  let worker = null;
  let timer = null;
  let activeFrame = null;
  let frameListener = null;
  function stop(message) {
    if (worker) worker.terminate();
    worker = null;
    clearTimeout(timer);
    if (frameListener) window.removeEventListener('message', frameListener);
    frameListener = null;
    if (activeFrame) activeFrame.srcdoc = '';
    activeFrame = null;
    const stopButton = document.getElementById('runner-stop');
    if (stopButton) stopButton.disabled = true;
    if (message) {
      const output = document.getElementById('code-runner-output');
      if (output) output.textContent = message;
    }
  }
  function run(language) {
    const editor = document.getElementById('code-runner-editor');
    const out = document.getElementById('code-runner-output');
    if (!editor || !out) return;
    stop();
    out.textContent = 'Starting…';
    let lines = [];
    let finished = false;
    try { worker = new Worker('runner-worker.js'); }
    catch { out.textContent = 'Your browser could not start the runner. Try a current browser or run this example locally.'; return; }
    const currentWorker = worker;
    document.getElementById('runner-stop').disabled = false;
    function timeout(ms) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const message = finished ? null : (lines.length ? lines.join('\n') + '\n\n' : '') + 'Run stopped: time limit reached. Check for a loop that never ends, or try again if Python is still downloading.';
        stop(message);
      }, ms);
    }
    timeout(language === 'python' ? 90000 : 5000);
    worker.onmessage = ({ data }) => {
      if (worker !== currentWorker || !out.isConnected) return;
      if (data.type === 'ready') { out.textContent = 'Running…'; timeout(language === 'python' ? 15000 : 5000); }
      if (data.type === 'status') out.textContent = data.text;
      if (data.type === 'output' && lines.length < 301) { lines.push(data.text); out.textContent = lines.join('\n'); }
      if (data.type === 'done') {
        finished = true;
        out.textContent = lines.join('\n') || '(No output. Try print(...) or console.log(...).)';
        if (language === 'python') stop();
        // Keep JS timers/promises alive for the remainder of the five-second run.
      }
      if (data.type === 'error') {
        out.textContent = (lines.length ? lines.join('\n') + '\n\n' : '') + data.text;
        if (/document is not defined|window is not defined/.test(data.text)) out.textContent += '\n\nThis console has no web page. Put DOM code in a <script> tag with its HTML elements and choose Preview HTML.';
        if (/EOFError/.test(data.text)) out.textContent += '\n\nAdd a line in “Program input” for each input() call, then run again.';
        stop();
      }
    };
    worker.onerror = () => { out.textContent = 'The runner could not finish. Check your connection and try again, or copy the code to run locally.'; stop(); };
    worker.postMessage({ language, code: editor.value, stdin: document.getElementById('runner-stdin')?.value || '' });
  }
  function preview() {
    const editor = document.getElementById('code-runner-editor');
    const out = document.getElementById('code-runner-output');
    const frame = document.getElementById('code-runner-frame');
    if (!editor || !frame) return;
    stop();
    activeFrame = frame;
    document.getElementById('runner-stop').disabled = false;
    out.textContent = 'HTML preview updated. Console messages appear here.';
    let count = 0;
    frameListener = (event) => {
      if (event.source !== frame.contentWindow || event.data?.type !== 'zerotocode-preview' || typeof event.data.text !== 'string' || count >= 100) return;
      if (!count) out.textContent = '';
      count++;
      out.textContent += event.data.text.slice(0, 2000) + '\n';
    };
    window.addEventListener('message', frameListener);
    const bridge = `<script>
      const report = (text) => parent.postMessage({type: 'zerotocode-preview', text: String(text)}, '*');
      for (const method of ['log', 'warn', 'error', 'info']) console[method] = (...values) => report(values.map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' '));
      window.addEventListener('error', event => report(event.message));
      window.addEventListener('unhandledrejection', event => report(event.reason));
    <\/script>`;
    // srcdoc works with an opaque sandbox origin. No allow-same-origin is granted.
    frame.srcdoc = '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' + bridge + editor.value;
  }
  window.LearningRunner = { run, preview, stop };
})();
