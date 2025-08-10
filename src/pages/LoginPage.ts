import { chromium, Locator, Page } from 'playwright'; // To use cucumber
import { expect } from '@playwright/test';


export class LoginPage {

  get emailField(): Locator {return this.page.getByRole('textbox', { name: 'Email' });}
  get passwordField(): Locator {return this.page.getByRole('textbox', { name: 'Password' });}
  get loginButton(): Locator {return this.page.getByRole('button', { name: 'Log in' });}
  get mainContentLabel() : Locator {return this.page.getByRole('heading', { name: 'Broker Insurance WebPage' });}
  get validationMsg(): Locator {return this.page.getByText('Enter your Email address and');}
  constructor(private page: Page) {}

  async tabLogin() {
    await this.loginButton.click();
  }

  async enterPassword(password: string) {
    await this. passwordField.fill(password);
  }
  
  async enterUsername(username: string) {
    await this.emailField.fill(username);
  }

  async verifyDashboardDisplayed() {
    await expect(this.mainContentLabel).toBeVisible();
  }

  async assertValidationMessagesVisible() {
    await expect(this.validationMsg).toBeVisible();
  }
  
  
  // async navigate() {
  //   // await this.page.goto('https://demo.guru99.com/Security/SEC_V1/index.php', {
  //   await this.page.goto('https://demo.guru99.com/insurance/v1/', {
  //     timeout: 20000,  // 20 seconds timeout
  //     waitUntil: 'domcontentloaded', // Wait until the DOM is fully loaded
  //   });
  // }

  // async getTitle() {
  //   return await this.page.title();
  // }
}
