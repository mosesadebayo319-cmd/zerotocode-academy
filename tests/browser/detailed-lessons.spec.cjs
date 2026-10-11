const { test, expect } = require('@playwright/test');

test('detailed explanations have contents, walkthroughs, and explained solutions on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#learn/python/py-01?path=beginner');
  await expect(page.getByRole('heading', { name: 'Before you begin' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Walk through the code' })).toBeVisible();
  const route = page.url();
  await page.getByRole('navigation', { name: 'Explanation contents' }).getByRole('link', { name: 'Understand the quotation marks' }).click();
  await expect(page.getByRole('heading', { name: 'Understand the quotation marks', exact: true })).toBeFocused();
  expect(page.url()).toBe(route);
  const exercise = page.locator('.exercise-box').first();
  await expect(exercise.locator('.solution-box')).toBeHidden();
  await exercise.getByRole('button', { name: 'Show Solution', exact: true }).click();
  await expect(exercise.locator('.solution-box')).toContainText('Each message is a string argument');
  await expect(exercise.locator('[data-solution-code]')).toContainText('print(');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('all tracks render their reference guide, and legacy lessons remain usable', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const [track, id] of [['javascript','js-01'],['web','web-01'],['go','go-01'],['rust','rs-01']]) {
    await page.goto(`/#learn/${track}/${id}?path=all`);
    await expect(page.getByRole('heading', { name: 'Before you begin' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Walk through the code' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Read more in the documentation' })).toBeVisible();
    await expect(page.locator('.exercise-box')).toHaveCount(3);
  }
  await page.goto('/#learn/python/py-06?path=beginner');
  await expect(page.locator('#lesson-contents')).toBeHidden();
  const exercise = page.locator('.exercise-box').first();
  await exercise.getByRole('button', { name: 'Show Solution', exact: true }).click();
  await expect(exercise.locator('[data-solution-code]')).not.toBeEmpty();
  expect(errors).toEqual([]);
});

test('every HTML reference document produces its stated structure and visible content', async ({ page }) => {
  await page.goto('/#learn/web/web-01?path=all');
  const lesson = await page.evaluate(() => ZeroToCode.courseData.web.lessons[0]);
  const examples = [lesson.codeExample, ...lesson.guide.variations.map(e => e.code), ...lesson.exercises.map(e => e.solution)];
  for (const code of examples) {
    await page.locator('#code-runner-editor').fill(code);
    await page.getByRole('button', { name: 'Preview HTML' }).click();
    const frame = page.frameLocator('#code-runner-frame');
    const heading = code.match(/<h1>(.*?)<\/h1>/)[1];
    const paragraph = code.match(/<p>(.*?)<\/p>/)[1];
    await expect(frame.getByRole('heading', { level: 1 })).toHaveText(heading);
    await expect(frame.locator('p')).toHaveText(paragraph);
    await expect(frame.locator('html')).toHaveAttribute('lang', 'en');
    if (code.includes('color: teal')) await expect(frame.getByRole('heading')).toHaveCSS('color', 'rgb(0, 128, 128)');
  }
});
