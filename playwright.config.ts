import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

// Generate feature spec files
const testDir = defineBddConfig({
  features: 'tests/UI_tests/Feature/**/*.feature',
  steps: [
    'tests/UI_tests/Steps/login.steps.ts',  // include step definitions here
    'tests/UI_tests/Fixture/fixtures.ts'  // include fixture file here
  ],
});


export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['list'],
    cucumberReporter('html', { outputFile: 'cucumber-report/index.html' }),
    cucumberReporter('json', { outputFile: 'cucumber-report/results.json' }),
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    timezoneId: 'UTC',
  },
  projects: [
    {
      name: 'login-test',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Uncomment if you want Playwright to start your Angular dev server automatically
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:4200',
  //   reuseExistingServer: !process.env.CI,
  // },
});
