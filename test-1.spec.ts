import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Feed' }).click();
  await page.getByPlaceholder('rentrez votre description').click();
  await page.fill('[formControlName="description"]', 'test', {
    timeout: 6000,
  });
  await expect(page.locator('.w-12').first()).toBeVisible();
  await page.getByRole('button', { name: 'Publier' }).click();
});
