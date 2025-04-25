import { chromium, Locator, Page } from 'playwright'; // To use cucumber


export class HomePage {
  private txtUsername = "[name='uid']";
  private txtPassword = "[name='password']";
  private btnLogin = "[name='btnLogin']";

  get usernameField(): Locator {return this.page.locator("[name='uid']");}
  get passwordField(): Locator {return this.page.locator("[name='password']");}
  get loginButton(): Locator {return this.page.locator("[name='btnLogin']");}

  async tabLogin() {
    await this.page.click(this.btnLogin,{timeout:5000});
  }
  async enterPassword(password: string) {
    await this.page.fill(this.txtPassword, password,{timeout:5000});
  }
  async enterUsername(username: string) {
    await this.page.fill(this.txtUsername, username,{timeout:5000});
  }
  
  constructor(private page: Page) {}

// HomePage.ts

  async navigate() {
    await this.page.goto('https://demo.guru99.com/Security/SEC_V1/index.php', {
      timeout: 20000,  // 20 seconds timeout
      waitUntil: 'domcontentloaded', // Wait until the DOM is fully loaded
    });
  }

  async getTitle() {
    return await this.page.title();
  }
}
