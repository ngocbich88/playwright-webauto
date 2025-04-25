import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../../src/pages/HomePage';
import { getPage } from '../support/world';
import { time } from 'console';

let homePage: HomePage;

Given('I open the application', async () => {
  homePage = new HomePage(getPage());
  await homePage.navigate();
});

Then('I should see the home page', async () => {
  const title = await homePage.getTitle();
  if (!title.includes('Guru99 Bank Home Page')) {
    throw new Error(`Unexpected title: ${title}`);
  }
});

// login.step.ts
When('I login with username {string} and password {string}', async (username: string, password: string) => {
  await homePage.enterUsername(username);
  await homePage.enterPassword(password);
  await homePage.tabLogin();
});


Then('I should see the forbidden page', async () => {
  const title = await homePage.getTitle();
  if (!title.includes('Guru99 Bank Home Page')) {
    throw new Error(`Unexpected title: ${title}`);
  }
})



