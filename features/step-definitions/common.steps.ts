import { Given, When, Then } from '@cucumber/cucumber';
// import { HomePage } from '../../src/pages/LoginPage';
import { CustomWorld } from '../support/world';

let URL = "https://demo.guru99.com/insurance/v1";

Given('the user is on the login page', async function (this:CustomWorld) {
  await this.page.goto( URL + '/index');
  console.log("User is on " + await this.page.title() + " page");
})

Given('I am on the edit profile page', async function (this:CustomWorld) {
  await this.homePage.tabEditProfile();
})


