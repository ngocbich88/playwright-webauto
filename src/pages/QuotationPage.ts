import { Locator, Page } from 'playwright';

export class QuotationPage {
  constructor(private page: Page) {}

  // === Form Fields ===
  get breakdownCoverDropdown(): Locator { return this.page.getByLabel('Breakdowncover'); }
  get incidentField(): Locator { return this.page.getByRole('textbox', { name: 'Enter incidents' }); }
  get vehicleRegistrationField(): Locator { return this.page.getByRole('textbox', { name: 'Enter vehicle registration' }); }
  get annualMileageField(): Locator { return this.page.getByRole('textbox', { name: 'Enter vehicle mileage' }); }
  get parkingLocationDropdown(): Locator { return this.page.locator('#quotation_vehicle_attributes_parkinglocation'); }
  get policyStartDateField(): Locator { return this.page.getByLabel('Policy Start Date'); }

  // === Buttons ===
  get resetButton(): Locator { return this.page.getByRole('button', { name: 'Reset' }); }
  get saveQuotationButton(): Locator { return this.page.getByRole('button', { name: 'Save Quotation' }); }

  // === Confirmation / Messages ===
  get quotationIdLabel(): Locator { return this.page.locator('.quotation-id'); } // Adjust if needed

  // === Actions ===
  // async selectBreakdownCover(option: string) { await this.breakdownCoverDropdown.selectOption({ label: option }); }
  async selectBreakdownCover(option: string) { await this.breakdownCoverDropdown.selectOption('3'); }
  async enterIncident(incident: string) { await this.incidentField.fill(incident); }
  async enterVehicleRegistration(registration: string) { await this.vehicleRegistrationField.fill(registration); }
  async enterAnnualMileage(mileage: string) { await this.annualMileageField.fill(mileage); }
  async selectParkingLocation(option: string) { await this.parkingLocationDropdown.selectOption({ label: option }); }
  async selectPolicyStartDate(date: string) { await this.policyStartDateField.fill(date); }
  async clickResetButton() { await this.resetButton.click(); }
  async clickSaveQuotation() { await this.saveQuotationButton.click(); }

  // === Get Values / Assertions ===
  async getVehicleRegistration(): Promise<string> { return await this.vehicleRegistrationField.inputValue(); }
  async getAnnualMileage(): Promise<string> { return await this.annualMileageField.inputValue(); }
  async getQuotationID(): Promise<string | null> { return await this.quotationIdLabel.textContent(); }

  // === Fill entire form in one step (data-driven) ===
  async fillQuotationForm(data: {
    breakdownCover: string;
    incident: string;
    registration: string;
    mileage: string;
    parking: string;
    policyStartDate: string;
  }) {
    await this.selectBreakdownCover(data.breakdownCover);
    await this.enterIncident(data.incident);
    await this.enterVehicleRegistration(data.registration);
    await this.enterAnnualMileage(data.mileage);
    await this.selectParkingLocation(data.parking);
    await this.selectPolicyStartDate(data.policyStartDate);
  }
}
