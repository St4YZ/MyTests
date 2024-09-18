import { Locator, Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

class WebElements {
    readonly magentoURL: string = 'https://magento.softwaretestingboard.com'
    readonly menCategory: Locator = this.page.getByText('Men', { exact: true })
    readonly shortsSubCategory: Locator = this.page.getByRole('link', { name: 'Shop Shorts' })
    readonly productItem: Locator = this.page.locator(".product-item")
    readonly wishProductItems: Locator = this.page.locator('#wishlist-view-form .product-item-info')
    readonly removeItemFromWishListButton: Locator = this.page.getByRole('link', {name: 'Remove Item'})
    readonly sizeOption: Locator = this.page.getByRole('listbox', { name: 'Size' }).getByRole('option')
    readonly colorOption: Locator = this.page.getByRole('listbox', { name: 'Color' }).getByRole('option')
    readonly addToCartButton: Locator = this.page.getByRole('button', { name: 'Add to Cart' })
    readonly alertMessage: Locator = this.page.getByRole('alert')
    readonly shoppingCartLink: Locator = this.page.getByRole('link', { name: 'Shopping cart' })
    readonly proceedToCheckOutButton: Locator = this.page.getByText('Proceed to Checkout')
    readonly emailAddressField: Locator = this.page.getByRole('textbox', { name: 'Email Address' })
    readonly firstNameField: Locator = this.page.getByRole('textbox', { name: 'First Name' })
    readonly lastNameField: Locator = this.page.getByRole('textbox', { name: 'Last Name' })
    readonly companyField: Locator = this.page.getByRole('textbox', { name: 'Company' })
    readonly streetAddressField: Locator = this.page.getByRole('textbox', { name: 'Street Address' })
    readonly cityField: Locator = this.page.getByRole('textbox', { name: 'City' })
    readonly zipPostalCodeField: Locator = this.page.getByRole('textbox', { name: 'Zip/Postal Code' })
    readonly countryDropdown: Locator = this.page.getByRole('combobox', { name: 'Country' })
    readonly phoneNumberField: Locator = this.page.getByRole('textbox', { name: 'Phone Number' })
    readonly shippingAlert: Locator = this.page.getByRole('alert', { name: 'The shipping method is missing.' })
    readonly shippingMethodsRadioButton: Locator = this.page.getByText('$5.00')
    readonly nextButton: Locator = this.page.getByRole('button', { name: 'Next' })
    readonly placeOrderButton: Locator = this.page.getByRole('button', { name: 'Place Order' })
    readonly successPurchaseMessage: Locator = this.page.getByRole('heading', { name: 'Thank you for your purchase!' })
    readonly addToCompareButton: Locator = this.page.getByRole('link', { name: 'Add to Compare' })
    readonly homePageLinkButton: Locator = this.page.getByRole('link', { name: 'Home' })
    readonly productItemsName: Locator = this.page.locator('.product-item-name')
    readonly comparisonListLink: Locator = this.page.getByRole('link', { name: 'Comparison list' })
    readonly wishListButton: Locator = this.page.getByRole('link', {name: 'Add to Wish List'})
    constructor(readonly page: Page) {
        this.page = page;
    }
}
export class Actions extends WebElements {
    constructor(page: Page) {
        super(page);
    }
    // Actions 
    async gotoMagentoCommerce() {
        await this.page.goto(this.magentoURL)
    }
    async clickAtMenCategory() {
        await this.menCategory.click();
    }
    async clickAtShortsSubCategory() {
        await this.shortsSubCategory.click();
    }
    async clickAtProductItem(index: number) {
        await this.productItem.nth(index).click();
    }
    async selectSizeOption(index: number) {
        await this.sizeOption.nth(index).click();
    }
    async selectColorOption(index: number) {
        await this.colorOption.nth(index).click();
    }
    async clickAtAddToCartButton() {
        await this.addToCartButton.click()
    }
    async waitForAlertMessageToBeVisible(index: number) {
        await this.alertMessage.nth(index).waitFor({ state: 'visible' })
    }
    async clickAtShoppingCartLink() {
        await this.shoppingCartLink.click()
    }
    async clickAtProceedToCheckOutButton() {
        await this.proceedToCheckOutButton.nth(1).click()
    }
    async fillEmailField(email: string) {
        await this.emailAddressField.fill(email)
        expect(await this.emailAddressField.inputValue()).toBe(email);
    }
    async fillFirstNameField(name: string) {
        await this.firstNameField.fill(name)
        expect(await this.firstNameField.inputValue()).toBe(name);
    }
    async fillLastNameField(name: string) {
        await this.lastNameField.fill(name)
        expect(await this.lastNameField.inputValue()).toBe(name);
    }
    async fillCompanyField(company: string) {
        await this.companyField.fill(company)
        expect(await this.companyField.inputValue()).toBe(company);
    }
    async fillAddressField(address: string) {
        await this.streetAddressField.first().fill(address)
        expect(await this.streetAddressField.first().inputValue()).toBe(address);
    }
    async fillCityField(city: string) {
        await this.cityField.fill(city)
        expect(await this.cityField.inputValue()).toBe(city);
    }
    async fillZipPostalCodeField(postal: string) {
        await this.zipPostalCodeField.fill(postal)
        expect(await this.zipPostalCodeField.inputValue()).toBe(postal);
    }
    async fillPhoneNumberField(phone: string) {
        await this.phoneNumberField.fill(phone)
        expect(await this.phoneNumberField.inputValue()).toBe(phone);
    }
    async selectCountryDropdownOption(label: string) {
        await this.countryDropdown.selectOption(label)
        expect(await this.countryDropdown.locator('option:checked').textContent()).toBe(label);
    }
    async waitForShippingAlertToBeHidden() {
        await this.shippingAlert.waitFor({ state: 'hidden' })
    }
    async clickAtShippingMethodRadioButton() {
        await this.shippingMethodsRadioButton.click()
    }
    async clickAtNextButton() {
        await this.nextButton.click()
    }
    async clickAtPlaceOrderButton() {
        await this.placeOrderButton.click()
    }
    async fillShippingAddress() {
        await this.fillEmailField(faker.internet.email())
        await this.fillFirstNameField(faker.person.firstName())
        await this.fillLastNameField(faker.person.lastName())
        await this.fillCompanyField(faker.company.name())
        await this.fillAddressField(faker.location.streetAddress(true))
        await this.fillCityField(faker.location.city())
        await this.fillZipPostalCodeField(faker.location.zipCode())
        await this.selectCountryDropdownOption('Ukraine')
        await this.fillPhoneNumberField(faker.phone.number({ style: 'international' }))
    }
    async clickAtAddToCompareButton() {
        await this.addToCompareButton.click()
    }
    async clickAtHomePageLinkButton() {
        await this.homePageLinkButton.click()
    }
    async clickAtComparisonListLink() {
        await this.comparisonListLink.click()
    }
    async clickAtLowestPriceProductItem() {
        const prices = await this.page.$$eval('.price-wrapper', (elements) =>
            elements.map(el => {
                const priceText = el.textContent?.trim().replace('$', '');
                return priceText ? parseFloat(priceText) : 0;
            })
        );
        const lowestPrice = Math.min(...prices);
        const lowestPriceIndex = prices.indexOf(lowestPrice);
        const addToCartButtons = await this.page.$$('.tocart');
        await addToCartButtons[lowestPriceIndex].click();
    }
    async selectManShortsProductSizeAndColor(productNum: number, productSize: number, productColor: number) {
        await this.clickAtMenCategory()
        await this.clickAtShortsSubCategory()
        await this.clickAtProductItem(productNum)
        await this.selectSizeOption(productSize)
        await this.selectColorOption(productColor)
    }
    async goToFillingShippingAddress() {
        await this.waitForAlertMessageToBeVisible(0)
        await this.clickAtShoppingCartLink()
        await this.clickAtProceedToCheckOutButton()
    }
    async placingShippingOrder() {
        await this.waitForShippingAlertToBeHidden()
        await this.clickAtShippingMethodRadioButton()
        await this.clickAtNextButton()
        await this.clickAtPlaceOrderButton()
    }
    async addProductToComparisonAndBackToHomePage() {
        await this.clickAtAddToCompareButton()
        await this.clickAtHomePageLinkButton()
    }
    async gotoProductToComparisonPage() {
        await this.clickAtAddToCompareButton()
        await this.clickAtComparisonListLink()
    }
    async addProductToWishList(productNum: number, productSize: number, productColor: number) {
        await this.clickAtMenCategory()
        await this.clickAtShortsSubCategory()
        await this.clickAtProductItem(productNum)
        await this.selectSizeOption(productSize)
        await this.selectColorOption(productColor)
        await this.wishListButton.click()
    }
    async deleteItemFromWishList(){
        await this.wishProductItems.hover()
        await this.removeItemFromWishListButton.click()
    }
}