import { Locator, Page } from 'playwright'; // To use cucumber


export class EditProfilePage {
  
  get updateUserBtn(): Locator {return this.page.getByRole('button', { name: 'Update User' });  }  
  constructor(private page: Page) {}

  async clickUpdateUser() {
    await this.updateUserBtn.click();
  }

}
