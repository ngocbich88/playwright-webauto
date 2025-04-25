// world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async cleanup() {
    await this.browser.close();
  }

  getPage(): Page {
    return this.page;
  }
}

const world = new CustomWorld();

setWorldConstructor(function () {
  return world;
});

export { world };
export const getPage = () => world.getPage();
