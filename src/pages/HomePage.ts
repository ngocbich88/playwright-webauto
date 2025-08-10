import { chromium, Locator, Page } from 'playwright'; // To use cucumber
import { expect } from '@playwright/test';


export class HomePage {

  get editProfileMenu(): Locator {return this.page.getByRole('link', { name: 'Edit Profile' });}
  
  constructor(private page: Page) {}

  async tabEditProfile() {
    await this.editProfileMenu.click();
  }
 
}
