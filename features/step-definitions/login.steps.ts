import { Given, When, Then } from '@cucumber/cucumber';
import { time } from 'console';
import './common.steps';
import { CustomWorld } from '@support/world';


When('I login with username {string} and password {string}', async function(this:CustomWorld, username: string, password: string) {
  console.log("I login with username {string} and password {string}");
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
  await this.loginPage.tabLogin();
});

When('I click the login button', async function(this:CustomWorld) {
  await this.loginPage.tabLogin();
})

Then('I should see the dashboard', async function(this:CustomWorld) {
  console.log("I should see the dashboard");
  await this.loginPage.verifyDashboardDisplayed();
  
})

Then('I should see validation messages', async function(this:CustomWorld) {
  console.log("I should see validation messages");
  await this.loginPage.assertValidationMessagesVisible();
})

When('I click the login button without entering credentials', () => {
  // Write code here that turns the phrase above into concrete actions
})








