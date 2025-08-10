import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test';

// When(
//     'I fill in the quotation form with valid data: {string}, {string}, {string}, {string}, {string}, {string}',
//     async function (
//       this: CustomWorld,
//       breakdownCover: string,
//       incident: string,
//       registration: string,
//       mileage: string,
//       parking: string,
//       policyStartDate: string
//     ) {
//       await this.quotationPage.selectBreakdownCover(breakdownCover);
//       await this.quotationPage.enterIncident(incident);
//       await this.quotationPage.enterVehicleRegistration(registration);
//       await this.quotationPage.enterAnnualMileage(mileage);
//       await this.quotationPage.selectParkingLocation(parking);
//       await this.quotationPage.selectPolicyStartDate(policyStartDate);
//     }
//   );  

When('I click the reset form button', async function (this: CustomWorld) {
  await this.quotationPage.clickResetButton();
});

Then('all form fields should be cleared or reset to default values', async function (this: CustomWorld) {
  const regValue = await this.quotationPage.getVehicleRegistration();
  const mileageValue = await this.quotationPage.getAnnualMileage();
  expect(regValue).toBe('');
  expect(mileageValue).toBe('');
  // Add more checks depending on defaults
});

When('I click the save quotation button', async function (this: CustomWorld) {
  await this.quotationPage.clickSaveQuotation();
});

Then('I should be redirected to the quotation confirmation page', async function (this: CustomWorld) {
  await this.page.waitForURL(/quotation\.php/); // Update this based on actual URL pattern
});

Then('I should see a quotation ID', async function (this: CustomWorld) {
  const quoteId = await this.quotationPage.getQuotationID();
  expect(quoteId).toMatch(/\d+/); // Match a numeric ID
});

Given('I am on the Request Quotation tab', async function (this: CustomWorld) {
    await this.page.getByRole('link', { name: 'Request Quotation' }).click();
    await this.quotationPage.breakdownCoverDropdown.waitFor({ state: 'visible' });
  });

When('I fill in the quotation form with valid data: {string}, {string}, {string}, {string}, {string}, {string}',
    async function (
      this: CustomWorld,
      breakdownCover: string,
      incident: string,
      registration: string,
      mileage: string,
      parking: string,
      policyStartDate: string
    ) {
      await this.quotationPage.selectBreakdownCover(breakdownCover);
      await this.quotationPage.enterIncident(incident);
      await this.quotationPage.enterVehicleRegistration(registration);
      await this.quotationPage.enterAnnualMileage(mileage);
      await this.quotationPage.selectParkingLocation(parking);
      await this.quotationPage.selectPolicyStartDate(policyStartDate);
    }
  );


