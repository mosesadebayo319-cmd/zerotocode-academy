const { test, expect } = require('@playwright/test');

async function openLesson(page, lang = 'javascript', id = 'js-01', path = 'all') {
  await page.goto(`/#learn/${lang}/${id}?path=${path}`);
  await expect(page.locator('#lesson-heading')).toBeVisible();
}

test('quiz feedback supports retries, best scores, and completion without duplicate XP', async ({ page }) => {
  await openLesson(page);
  await expect(page.locator('#btn-complete-lesson')).toBeDisabled();
  await page.getByRole('button', { name: 'Check answers' }).click();
  await expect(page.locator('#quiz-result-js-01')).toContainText('Answer every question');
  await page.getByRole('radio', { name: 'Only on servers' }).check();
  await page.getByRole('button', { name: 'Check answers' }).click();
  await expect(page.locator('#quiz-result-js-01')).toContainText('Score 0%');
  await expect(page.locator('#q-feedback-js-01-0')).toContainText('Browsers include a JS engine');
  await page.getByRole('button', { name: 'Try again' }).click();
  await page.getByRole('radio', { name: 'In every modern browser' }).check();
  await page.getByRole('button', { name: 'Check answers' }).click();
  await expect(page.locator('#quiz-result-js-01')).toContainText('Score 100%');
  await page.evaluate(() => ZeroToCode.checkQuiz('js-01', 'javascript'));
  await expect(page.locator('#quiz-result-js-01')).toContainText('Score 100%');
  await page.getByRole('button', { name: 'Try again' }).click();
  await page.getByRole('radio', { name: 'Only on servers' }).check();
  await page.getByRole('button', { name: 'Check answers' }).click();
  await expect(page.locator('#quiz-result-js-01')).toContainText('earlier passing score is saved');
  await page.getByRole('button', { name: 'Complete lesson' }).click();
  await expect(page.locator('#btn-complete-lesson')).toBeDisabled();
  await page.evaluate(() => ZeroToCode.markLessonComplete('javascript', 'js-01'));
  await page.goto('/#dashboard');
  await expect(page.locator('#total-xp')).toHaveText('80');
  await expect(page.locator('#lessons-completed')).toHaveText('1 / 217');
});

test('drafts, deep links, and browser back survive navigation and reload', async ({ page }) => {
  await openLesson(page, 'python', 'py-01', 'beginner');
  const draft = 'print("line one\\nline two")';
  await page.locator('#code-runner-editor').fill(draft);
  await page.getByRole('button', { name: 'Next lesson' }).click();
  await expect(page).toHaveURL(/py-02/);
  await page.goBack();
  await expect(page.locator('#code-runner-editor')).toHaveValue(draft);
  await page.reload();
  await expect(page.locator('#code-runner-editor')).toHaveValue(draft);
  await expect(page.locator('#lesson-heading')).toContainText('Your First Line');
  await page.getByRole('link', { name: 'My learning', exact: true }).filter({ visible: true }).click();
  await expect(page.locator('#view-dashboard')).toBeVisible();
  await page.getByRole('button', { name: 'Resume learning' }).click();
  await expect(page.locator('#code-runner-editor')).toHaveValue(draft);
});

test('JavaScript output preserves lines and asynchronous logs without page storage access', async ({ page }) => {
  await openLesson(page);
  await page.locator('#code-runner-editor').fill('console.log("first"); setTimeout(() => console.log("second"), 20);');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await expect(page.locator('#code-runner-output')).toHaveText('first\nsecond');
  await page.locator('#code-runner-editor').fill('console.log(typeof document, typeof localStorage);');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await expect(page.locator('#code-runner-output')).toHaveText('undefined undefined');
});

test('a looping JS program times out and the next run still works', async ({ page }) => {
  await openLesson(page);
  await page.locator('#code-runner-editor').fill('while (true) {}');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await expect(page.locator('#code-runner-output')).toContainText('time limit reached', { timeout: 10000 });
  await page.locator('#code-runner-editor').fill('console.log(2 + 2)');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await expect(page.locator('#code-runner-output')).toHaveText('4');
});

test('manual stop and navigating away clean up active programs', async ({ page }) => {
  await openLesson(page);
  await page.locator('#code-runner-editor').fill('while (true) {}');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await page.getByRole('button', { name: 'Stop', exact: true }).click();
  await expect(page.locator('#code-runner-output')).toContainText('Run stopped');
  await page.locator('#code-runner-editor').fill('setTimeout(() => console.log("old lesson"), 500)');
  await page.getByRole('button', { name: 'Run JS' }).click();
  await page.getByRole('button', { name: 'Next lesson' }).click();
  await page.waitForTimeout(700);
  await expect(page.locator('#code-runner-output')).toHaveText('Run the code to see what happens.');
});

test('HTML preview renders and captures its own console without parent access', async ({ page }) => {
  await openLesson(page, 'web', 'web-01');
  await page.locator('#code-runner-editor').fill('<h1>My first page</h1><button onclick="document.querySelector(\'h1\').textContent=\'It works!\'">Try it</button><script>console.log("preview ready"); try { parent.document.body.innerHTML = "bad"; } catch(e) { console.log("parent protected"); }</script>');
  await page.getByRole('button', { name: 'Preview HTML' }).click();
  await expect(page.frameLocator('#code-runner-frame').getByRole('heading')).toHaveText('My first page');
  await expect(page.locator('#code-runner-output')).toContainText('parent protected');
  await page.frameLocator('#code-runner-frame').getByRole('button', { name: 'Try it' }).click();
  await expect(page.frameLocator('#code-runner-frame').getByRole('heading')).toHaveText('It works!');
  await page.evaluate(() => window.postMessage({ type: 'zerotocode-preview', text: 'forged' }, '*'));
  await expect(page.locator('#code-runner-output')).not.toContainText('forged');
  await expect(page.locator('#lesson-heading')).toBeVisible();
});

test('mobile navigation and course outline remain usable with no overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Start with Python' }).click();
  await expect(page.locator('#course-outline')).toBeHidden();
  await page.getByRole('button', { name: 'Course outline' }).click();
  await expect(page.locator('#course-outline')).toBeVisible();
  await expect(page.locator('#outline-toggle')).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('button', { name: '1.2 Build a Welcome Sign', exact: true }).click();
  await expect(page.locator('#lesson-heading')).toContainText('Welcome Sign');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('link', { name: 'My learning', exact: true }).filter({ visible: true }).click();
  await expect(page.locator('#view-dashboard')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('malformed and unavailable storage leave the learning flow usable', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('zerotocode_learning_v1', '{broken'));
  await openLesson(page);
  await expect(page.locator('#storage-warning')).toBeVisible();
  await expect(page.locator('#code-runner-editor')).toBeEditable();
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('blocked'); };
    Storage.prototype.setItem = () => { throw new Error('blocked'); };
  });
  await page.reload();
  await expect(page.locator('#code-runner-editor')).toBeEditable();
  await page.locator('#code-runner-editor').fill('console.log("kept in memory")');
  await expect(page.locator('#draft-status')).toContainText('in memory only');
});

test('backup downloads restore progress and drafts on a fresh browser', async ({ page, browser }) => {
  await openLesson(page);
  await page.locator('#code-runner-editor').fill('console.log("my draft")');
  await page.getByRole('radio', { name: 'In every modern browser' }).check();
  await page.getByRole('button', { name: 'Check answers' }).click();
  await page.getByRole('button', { name: 'Complete lesson' }).click();
  await page.goto('/#dashboard');
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download backup' }).click();
  const download = await downloadEvent;
  const path = await download.path();
  const context = await browser.newContext();
  const other = await context.newPage();
  await other.goto('http://127.0.0.1:8081/#dashboard');
  await other.locator('#backup-file').setInputFiles(path);
  await expect(other.locator('#backup-status')).toContainText('Backup restored');
  await expect(other.locator('#total-xp')).toHaveText('80');
  await other.getByRole('button', { name: 'Resume learning' }).click();
  await expect(other.locator('#code-runner-editor')).toHaveValue('console.log("my draft")');
  await context.close();
});

test('core views stay styled and functional when external assets are blocked', async ({ page }) => {
  await page.route('**/*', route => route.request().url().startsWith('http://127.0.0.1:8081') ? route.continue() : route.abort());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#view-dashboard')).toBeHidden();
  for (const view of ['dashboard', 'courses', 'paths']) {
    await page.goto('/#' + view);
    await expect(page.locator('#view-' + view)).toBeVisible();
  }
  await openLesson(page, 'go', 'go-01');
  await expect(page.locator('#lesson-practice')).toContainText('local development');
  await page.goto('/#learn/__proto__/bad');
  await expect(page.locator('#view-home')).toBeVisible();
  expect(errors).toEqual([]);
});
