// hooks.ts
import {BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world'; // adjust path as needed
import {HomePage} from '../../src/pages/HomePage';
import { Browser, chromium } from 'playwright';
import { LoginPage } from '../../src/pages/LoginPage';
import { EditProfilePage } from '../../src/pages/EditProfilePage';
import { QuotationPage } from '../../src/pages/QuotationPage';

let browser: Browser;

BeforeAll(async () => {
  console.log('Launching browser once before all tests');
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  console.log('Closing browser after all tests');
  await browser.close();
});

Before(async function (this: CustomWorld) {
  console.log('Creating new context and page for scenario');
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.editprofilePage = new EditProfilePage(this.page);
  this.homePage = new HomePage(this.page);
  this.quotationPage = new QuotationPage(this.page);
});

After(async function (this: CustomWorld) {
  console.log('Closing context after scenario');
  await this.page?.close();
  await this.context?.close();
});
