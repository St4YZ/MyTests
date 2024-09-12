import { test, expect } from '@playwright/test';
import { MainPage } from '../../PageObject/mainPage';
import { WebElements } from '../../PageObject/webElements';

test('Fill out register form', async ({ page }) => {
    const mainPage = new MainPage(page);
    const webElements = new WebElements(page);
    await mainPage.gotoRegisterPage();
    await webElements.fillFirstNameField();
    await webElements.fillLastNameField();
    await webElements.fillPhoneNumberField();
    await webElements.selectCountryOption();
    await webElements.fillEmailField();
    await webElements.fillPasswordField();
    await webElements.checkTermsAndConditionsCheckbox();
    await webElements.clickAtRegisterButton();
    await expect(await webElements.getSuccessAlert()).toBeVisible();
})

test('Click inside frame', async ({ page }) => {
    const mainPage = new MainPage(page);
    const webElements = new WebElements(page);
    await mainPage.gotoIFramePage();
    await webElements.clickAtIFrameLearnMoreButton();
    await expect(await webElements.getIFrameShowTextLocator()).toBeVisible();
})

test('Checkboxes', async ({ page }) => {
    const mainPage = new MainPage(page);
    const webElements = new WebElements(page);
    await mainPage.gotoCheckBoxPage();
    await webElements.checkAllCheckBoxes();
    await expect(await webElements.getSubmitButton()).toBeEnabled();
    expect(await webElements.getInnerTextsOfCheckBoxLabels()).toEqual(["One", "Two", "Three"]);
    await expect(await webElements.getCheckBox()).toHaveCount(3);
})

test('Case: Checkboxes are not selected.', async ({ page }) => {
    const mainPage = new MainPage(page);
    const webElements = new WebElements(page);
    await mainPage.gotoCheckBoxPage();
    await webElements.clickAtSubmitButton();
    await expect(await webElements.getResultText()).toBeHidden();
})

test('Case: Checkboxes are selected.', async ({ page }) => {
    const mainPage = new MainPage(page);
    const webElements = new WebElements(page);
    await mainPage.gotoCheckBoxPage();
    await webElements.checkSpecificCheckBox(0);
    await webElements.checkSpecificCheckBox(1);
    await webElements.clickAtSubmitButton();
    await expect(await webElements.getResultText()).toBeVisible();
})