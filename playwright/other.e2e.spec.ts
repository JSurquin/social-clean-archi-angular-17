import { test, expect } from '@playwright/test';
import { setup } from './builder/setup';

const url = 'http://localhost:4200/feed';

test('it should have finalApp title when go to webpage', async () => {
  const { page, browser } = await setup();
  await page.goto(url);
  expect(await page.title()).toBe('FinalApp');
});

test('it should has a get request for /users endpoint api', async () => {
  const { page, browser } = await setup();
  const urlUsers = 'https://jsonplaceholder.typicode.com/users';
  const requestPromise2 = page.waitForRequest(urlUsers);
  await page.goto(url);
  const request2 = await requestPromise2;
  expect(request2.url()).toContain(urlUsers);
});

test('it should has a get request for /posts endpoint api', async () => {
  const { page, browser } = await setup();
  const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  const requestPromise3 = page.waitForRequest(urlPosts);
  await page.goto('http://localhost:4200/feed');
  const request3 = await requestPromise3;
  expect(request3.url()).toContain(urlPosts);
});

test('it should go on login page and fill form and login', async () => {
  const { page, browser } = await setup();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1200, height: 700 },
    },
  });
  await page.goto('http://localhost:4200/login');
  await page.fill('[formControlName="email"]', 'votre_email@example.com');
  await page.fill('[formControlName="password"]', 'votre_mot_de_passe');
  await page.click('button');
});

test("mocks a fruit and doesn't call api", async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async (route) => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  await page.goto('https://demo.playwright.dev/api-mocking');

  await expect(page.getByText('Strawberry')).toBeVisible();
});
