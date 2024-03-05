import { test, expect } from '@playwright/test';
import { setup } from './builder/setup';
import { chromium } from '@playwright/test';

test('it should go on login page and fill form and login', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1200, height: 700 },
    },
  });
  await page.goto('http://localhost:4200/login');
  await page.fill('[formControlName="email"]', 'votre_email@example.com', {
    timeout: 1000,
  });
  await page.fill('[formControlName="password"]', 'votre_mot_de_passe', {
    timeout: 1000,
  });
  await page.click('#loginButton', { delay: 3000 });
  await page.getByTestId('profil').click();
  await page.getByText('Home').click({ delay: 3000 });
  await browser.close();
});

test('it should not possible to show this route if not authenticated', async () => {
  const { page } = await setup();
  await page.goto('http://localhost:4200/profil/3');
  const url = page.url();
  await page.getByText('Home').click({ delay: 2000 });
  await page.getByTestId('profil').click({ delay: 4000 });
  await page.getByText('Home').click({ delay: 3000 });
  expect(url).toBe('http://localhost:4200/login');
});

test('it should have clementine bauch in profil/3 page', async () => {
  const { page } = await setup();
  await page.goto('http://localhost:4200/login');
  await page.fill('[formControlName="email"]', 'votre_email@example.com', {
    timeout: 1000,
  });
  await page.fill('[formControlName="password"]', 'votre_mot_de_passe', {
    timeout: 1000,
  });
  await page.click('#loginButton', { delay: 3000 });
  await page.getByTestId('profil').click();
  await expect(page.getByText('Clementine Bauch')).toBeVisible();
});
