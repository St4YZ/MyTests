import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Fill out register form', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/register');
    await page.getByLabel('First name').type(faker.person.firstName())
    await page.getByLabel('Last name').type(faker.person.lastName())
    await page.getByRole('textbox', { name: 'Enter phone number' }).type(faker.phone.number({ style: 'international' }))
    await page.getByRole('combobox').selectOption(faker.location.country())
    await page.getByRole('textbox', { name: 'Email' }).type(faker.internet.email())
    await page.getByRole('textbox', { name: 'Password' }).type(faker.internet.password())
    await page.getByRole('checkbox').check()
    await page.getByRole('button', { name: 'Register' }).click()
    const successionAlert = page.getByRole('alert')
    await expect(successionAlert).toBeVisible()
})

test('Click inside frame', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/iframe')
    const iFrameLocator = page.frameLocator('#iframe-checkboxes')
    await iFrameLocator.getByRole('button', { name: 'Learn more' }).click()
    const learnMoreAlert = iFrameLocator.locator('#show-text')
    await expect(learnMoreAlert).toBeVisible()
})

test('Checkboxes', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
    const checkBoxes = page.getByRole('checkbox')
    const checkBoxLabels = page.locator('.form-check label')
    const submitButton = page.getByRole('button', { name: 'Submit' })

    for (const checkbox of await checkBoxes.all()) {
        await checkbox.check()
        await expect(checkbox).toBeChecked()

    }
    await expect(submitButton).toBeEnabled()
    expect(await checkBoxLabels.allInnerTexts()).toEqual(["One", "Two", "Three"]);
    await expect(checkBoxes).toHaveCount(3)
})

test('Case: Checkboxes are not selected.', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
    const submitButton = page.getByRole('button', { name: 'Submit' })
    const result = page.locator('#result-text')
    await submitButton.click()

    await expect(result).toBeHidden()
})

test('Case: Checkboxes are selected.', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
    const submitButton = page.getByRole('button', { name: 'Submit' })
    const result = page.locator('#result-text')
    const checkBoxes = page.getByRole('checkbox')
    await checkBoxes.nth(0).check()
    await checkBoxes.nth(1).check()
    await submitButton.click()

    await expect(result).toBeVisible()
    
})