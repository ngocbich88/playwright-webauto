// world.ts
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from 'src/pages/LoginPage';
import { EditProfilePage } from 'src/pages/EditProfilePage';
import { HomePage } from 'src/pages/HomePage';
import { QuotationPage } from 'src/pages/QuotationPage';

setDefaultTimeout(60000); // Set default timeout to 30 secs

export class CustomWorld extends World {
  context!: BrowserContext;
  page!: Page;
  homePage !: HomePage;
  loginPage !: LoginPage;
  editprofilePage !: EditProfilePage;
  quotationPage !: QuotationPage;
}

setWorldConstructor(CustomWorld); 
