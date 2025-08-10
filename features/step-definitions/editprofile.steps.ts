import { Given, When, Then } from '@cucumber/cucumber';
import { EditProfilePage } from '../../src/pages/EditProfilePage';
import { CustomWorld } from '@support/world';
import { time } from 'console';
import './common.steps';

let editprofilePage : EditProfilePage;
  
When('I change my first name to {string}', async function(this: CustomWorld, s: string){

})

When('I click update user', async function (this: CustomWorld){
    this.editprofilePage.clickUpdateUser();
})

When('I change my address to {string}', (s: string) => {
// Write code here that turns the phrase above into concrete actions
})

Then('I should see a success message', () => {
// Write code here that turns the phrase above into concrete actions
})
  
Then('I should see the name is updated', () => {
    // Write code here that turns the phrase above into concrete actions
  })
  