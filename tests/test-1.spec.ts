import { test } from '@playwright/test';

test('test', async ({ page }) => {
  // This will navigate to http://127.0.0.1:3000/login
  await page.goto('./login');
});