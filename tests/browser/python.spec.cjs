const { test, expect } = require('@playwright/test');
const path = require('node:path');

test('real Python runtime supports input, error recovery, time limits, and reruns', async ({ page, context }) => {
  test.skip(!process.env.PYODIDE_ASSET_DIR, 'Optional real-runtime test: cache Pyodide using scripts/cache-python-runtime.py first.');
  test.setTimeout(90000);
  await context.route('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/**', async route => {
    const name = new URL(route.request().url()).pathname.split('/').pop();
    const allowed = ['pyodide.js', 'pyodide.asm.js', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json'];
    if (!allowed.includes(name)) return route.abort();
    await route.fulfill({ path: path.join(process.env.PYODIDE_ASSET_DIR, name), contentType: name.endsWith('.js') ? 'text/javascript' : name.endsWith('.wasm') ? 'application/wasm' : 'application/octet-stream', headers: { 'access-control-allow-origin': '*' } });
  });
  await page.goto('/#learn/python/py-01?path=beginner');
  await page.locator('#code-runner-editor').fill('name = input("Your name: ")\nprint("Hello,", name)\nprint(2 + 3)');
  await page.getByText('Program input', { exact: true }).click();
  await page.locator('#runner-stdin').fill('Ada');
  await page.getByRole('button', { name: 'Run Python' }).click();
  await expect(page.locator('#code-runner-output')).toContainText('Hello, Ada\n5', { timeout: 30000 });
  await page.locator('#code-runner-editor').fill('print("missing quote)');
  await page.getByRole('button', { name: 'Run Python' }).click();
  await expect(page.locator('#code-runner-output')).toContainText('SyntaxError', { timeout: 30000 });
  await page.locator('#code-runner-editor').fill('while True:\n    pass');
  await page.getByRole('button', { name: 'Run Python' }).click();
  await expect(page.locator('#code-runner-output')).toContainText('time limit reached', { timeout: 30000 });
  await page.locator('#code-runner-editor').fill('print("Recovered")');
  await page.getByRole('button', { name: 'Run Python' }).click();
  await expect(page.locator('#code-runner-output')).toHaveText('Recovered', { timeout: 30000 });
});
