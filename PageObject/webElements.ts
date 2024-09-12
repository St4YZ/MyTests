import { Page, expect } from '@playwright/test';

export class WebElements {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

export class Actions extends WebElements {
  readonly firstNameField = this.page.getByLabel('First name');
  readonly lastNameField = this.page.getByLabel('Last name');
  readonly phoneNumberField = this.page.getByRole('textbox', { name: 'Enter phone number' });
  readonly countryDropDown = this.page.getByRole('combobox');
  readonly emailField = this.page.getByRole('textbox', { name: 'Email' })
  readonly passwordField = this.page.getByRole('textbox', { name: 'Password' })
  readonly checkBoxes = this.page.getByRole('checkbox')
  readonly registerButton = this.page.getByRole('button', { name: 'Register' })
  readonly succesAlert = this.page.getByRole('alert')
  readonly iFrameLocator = this.page.frameLocator('#iframe-checkboxes')
  readonly iFrameLearnMoreButton = this.page.frameLocator('#iframe-checkboxes').getByRole('button', { name: 'Learn more' })
  readonly iFrameShowTextLocator = this.page.frameLocator('#iframe-checkboxes').locator('#show-text')
  readonly checkBoxLabels = this.page.locator('.form-check label')
  readonly submitButton = this.page.getByRole('button', { name: 'Submit' })
  readonly innerTextsOfCheckBoxLabels = this.page.locator('.form-check label')
  readonly resultText = this.page.locator('#result-text')
  constructor(page: Page) {
    super(page);
  }
  // Actions 
  async fillFirstName(name: string) {
    await this.firstNameField.fill(name);
  }
  async fillLastName(name: string) {
    await this.lastNameField.fill(name);
  }
  async fillPhoneNumber(phone: string) {
    await this.phoneNumberField.fill(phone);
  }
  async selectCountry(country: string) {
    await this.countryDropDown.selectOption({ label: country });
  }
  async fillEmailField(country: string) {
    await this.emailField.fill(country);
  }
  async fillPasswordField(password: string) {
    await this.passwordField.fill(password);
  }
  async checkTermsAndConditionsCheckbox() {
    await this.checkBoxes.check()
  }
  async clickAtRegisterButton() {
    await this.registerButton.click()
  }
  async checkAllCheckBoxes() {
    for (const checkbox of await this.checkBoxes.all()) {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
  }
  async checkSpecificCheckBox(index: number) {
    await this.checkBoxes.nth(index).check()
  }
  async clickAtSubmitButton() {
    await this.submitButton.click()
  }
  async clickAtIFrameLearnMoreButton () {
    await this.iFrameLearnMoreButton.click()
  }
  async innerTextsOfCheckBoxes() {
    return await this.innerTextsOfCheckBoxLabels.allInnerTexts()
  }
}