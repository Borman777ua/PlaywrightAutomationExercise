import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
// import path from 'path';
 dotenv.config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: process.env.CI ? 60000 : 60000,
  globalTimeout: 200000,

  expect:{
    timeout: process.env.CI ? 30000 : 10000
  },
  maxFailures: process.env.CI ? 2 : 2,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', 
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    viewport: {width : 1920 , height: 1080},
     headless: true,
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://www.automationexercise.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on-first-retry',

    launchOptions: {
      slowMo : process.env.SLOMO ? 0 : 0
    }
    

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, 
      outputDir: 'reports/chrome'
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      outputDir: 'reports/firefox'
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // //Run your local dev server before starting the tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:4200/',
  //   timeout: 120 * 1000,
  // },
});
