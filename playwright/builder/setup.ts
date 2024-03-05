import { chromium } from 'playwright';

export const setup = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  return { page, browser };
};
