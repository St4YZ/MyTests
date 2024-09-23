import { test, expect } from '../../src/app/fixtures/baseFixture';

test('Buying the product', async ({  actions }) => {
    await actions.gotoMagentoCommerce();
    await actions.gotoMenShortsCategoryAndSelectItem(1)
    await actions.clickAtAddToCartButton()
    await actions.goToFillingShippingAddress()
    await actions.fillShippingAddress()
    await actions.placingShippingOrder()
    await expect(actions.successPurchaseMessage).toBeVisible()
})

test('Comparing the product', async ({  actions }) => {
    await actions.gotoMagentoCommerce();
    await actions.gotoMenShortsCategoryAndSelectItem(1)
    await actions.addProductToComparisonAndBackToHomePage()
    await actions.gotoMenShortsCategoryAndSelectItem(2)
    await actions.gotoProductToComparisonPage()
    await actions.clickAtLowestPriceProductItem()
    await actions.selectSizeOption()
    await actions.selectColorOption()
    await actions.clickAtAddToCartButton()
    await actions.goToFillingShippingAddress()
    await actions.fillShippingAddress()
    await actions.placingShippingOrder()
    await expect(actions.successPurchaseMessage).toBeVisible()
});