import { test, expect } from '@playwright/test';
import { MainPage } from '../../PageObject/mainPage';
import { Actions } from '../../PageObject/webElements';
import { faker } from '@faker-js/faker';

test('Fill out register form', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actions = new Actions(page);
    await mainPage.gotoRegisterPage();
    await actions.fillFirstName(faker.person.firstName());
    await actions.fillLastName(faker.person.lastName());
    await actions.fillPhoneNumber(faker.phone.number({ style: 'international' }));
    await actions.selectCountry(faker.location.country());
    await actions.fillEmailField(faker.internet.email());
    await actions.fillPasswordField(faker.internet.password());
    await actions.checkTermsAndConditionsCheckbox();
    await actions.clickAtRegisterButton();
    await expect(actions.succesAlert).toBeVisible();
})

test('Click inside frame', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actions = new Actions(page);
    await mainPage.gotoIFramePage();
    await actions.clickAtIFrameLearnMoreButton();
    await expect(actions.iFrameShowTextLocator).toBeVisible();
})

test('Checkboxes', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actions = new Actions(page);
    await mainPage.gotoCheckBoxPage();
    await actions.checkAllCheckBoxes();
    await expect(actions.submitButton).toBeEnabled();
    expect(await actions.innerTextsOfCheckBoxes()).toEqual(["One", "Two", "Three"]);
    await expect(actions.checkBoxes).toHaveCount(3);
})

test('Case: Checkboxes are not selected.', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actions = new Actions(page);
    await mainPage.gotoCheckBoxPage();
    await actions.clickAtSubmitButton();
    await expect(actions.resultText).toBeHidden();
})

test('Case: Checkboxes are selected.', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actions = new Actions(page);
    await mainPage.gotoCheckBoxPage();
    await actions.checkSpecificCheckBox(0);
    await actions.checkSpecificCheckBox(1);
    await actions.clickAtSubmitButton();
    await expect(actions.resultText).toBeVisible();
})