// world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000); // Set default timeout to 30 secs

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
    if (this.page) {
      await this.page.close();
    }
  
    if (this.context) {
      await this.context.close();
    }
  
    if (this.browser) {
      await this.browser.close();
    }
  
    this.page = undefined as any;
    this.context = undefined as any;
    this.browser = undefined as any;
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
