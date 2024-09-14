import { Locator, Page, expect } from '@playwright/test';

class WebElements {
  readonly firstNameField: Locator = this.page.getByLabel('First name');
  readonly lastNameField: Locator = this.page.getByLabel('Last name');
  readonly phoneNumberField: Locator = this.page.getByRole('textbox', { name: 'Enter phone number' });
  readonly countryDropDown: Locator = this.page.getByRole('combobox');
  readonly emailField: Locator = this.page.getByRole('textbox', { name: 'Email' })
  readonly passwordField: Locator = this.page.getByRole('textbox', { name: 'Password' })
  readonly checkBoxes: Locator = this.page.getByRole('checkbox')
  readonly registerButton: Locator = this.page.getByRole('button', { name: 'Register' })
  readonly succesAlert: Locator = this.page.getByRole('alert')
  readonly iFrameLocator = this.page.frameLocator('#iframe-checkboxes')
  readonly iFrameLearnMoreButton: Locator = this.iFrameLocator.getByRole('button', { name: 'Learn more' })
  readonly iFrameShowTextLocator: Locator = this.iFrameLocator.locator('#show-text')
  readonly checkBoxLabels: Locator = this.page.locator('.form-check label')
  readonly submitButton: Locator = this.page.getByRole('button', { name: 'Submit' })
  readonly innerTextsOfCheckBoxLabels: Locator = this.page.locator('.form-check label')
  readonly resultText: Locator = this.page.locator('#result-text')
  constructor(readonly page: Page) {
    this.page = page;
  }
}
export class Actions extends WebElements {
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
  async fillEmailField(email: string) {
    await this.emailField.fill(email);
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