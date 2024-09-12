import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class WebElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getFirstNameLabel() {
    return this.page.getByLabel('First name')
  }
  async getLastNameLabel() {
    return this.page.getByLabel('Last name')
  }
  async getPhoneNumberTextBox() {
    return this.page.getByRole('textbox', { name: 'Enter phone number' })
  }
  async getCountryDropDown() {
    return this.page.getByRole('combobox')
  }
  async getEmailTextBox() {
    return this.page.getByRole('textbox', { name: 'Email' })
  }
  async getPasswordTextBox() {
    return this.page.getByRole('textbox', { name: 'Password' })
  }
  async getCheckBox() {
    return this.page.getByRole('checkbox')
  }
  async getRegisterButton() {
    return this.page.getByRole('button', { name: 'Register' })
  }
  async getSuccessAlert() {
    return this.page.getByRole('alert')
  }
  async getIFrameLocator() {
    return this.page.frameLocator('#iframe-checkboxes')
  }
  async getIFrameLearnMoreButton () {
    return (await this.getIFrameLocator()).getByRole('button', { name: 'Learn more' })
  }
  async getIFrameShowTextLocator() {
    return (await this.getIFrameLocator()).locator('#show-text')
  }
  async getCheckBoxLabels() {
    return this.page.locator('.form-check label')
  }
  async getSubmitButton() {
    return this.page.getByRole('button', { name: 'Submit' })
  }
  async getInnerTextsOfCheckBoxLabels() {
    return (await this.getCheckBoxLabels()).allInnerTexts()
  }
  async getResultText() {
    return this.page.locator('#result-text')
  }
  async clickAtIFrameLearnMoreButton () {
    await (await this.getIFrameLearnMoreButton()).click()
  }
  async fillFirstNameField() {
    await (await this.getFirstNameLabel()).type(faker.person.firstName())
  }
  async fillLastNameField() {
    await (await this.getLastNameLabel()).type(faker.person.lastName())
  }
  async fillPhoneNumberField() {
    await (await this.getPhoneNumberTextBox()).type(faker.phone.number({ style: 'international' }))
  }
  async selectCountryOption() {
    await (await this.getCountryDropDown()).selectOption(faker.location.country())
  }
  async fillEmailField() {
    await (await this.getEmailTextBox()).type(faker.internet.email())
  }
  async fillPasswordField() {
    await (await this.getPasswordTextBox()).type(faker.internet.password())
  }
  async checkTermsAndConditionsCheckbox() {
    await (await this.getCheckBox()).check()
  }
  async clickAtRegisterButton() {
    await (await this.getRegisterButton()).click()
  }
  async checkAllCheckBoxes() {
    for (const checkbox of await (await this.getCheckBox()).all()) {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
  }
  async checkSpecificCheckBox(index) {
    await (await this.getCheckBox()).nth(index).check()
  }
  async clickAtSubmitButton() {
    await (await this.getSubmitButton()).click()
  }
}