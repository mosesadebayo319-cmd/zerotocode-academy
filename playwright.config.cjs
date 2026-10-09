const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: 'http://127.0.0.1:8081',
    viewport: { width: 1280, height: 900 },
    launchOptions: {
      ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
      args: ['--no-sandbox']
    },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  webServer: { command: 'npm run build && python3 -m http.server 8081 --directory dist', url: 'http://127.0.0.1:8081', reuseExistingServer: false },
  reporter: 'list'
});
