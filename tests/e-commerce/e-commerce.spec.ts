import { test, expect } from '../../src/app/fixtures/baseFixture';

test('Buying the product', async ({ actions }) => {
    await actions.gotoMagentoCommerce();
    await actions.selectManShortsProductSizeAndColor(1,0,0)
    await actions.clickAtAddToCartButton()
    await actions.goToFillingShippingAddress()
    await actions.fillShippingAddress()
    await actions.placingShippingOrder()
    await expect(actions.successPurchaseMessage).toBeVisible()
})

test('Comparing the product', async ({ actions }) => {
    await actions.gotoMagentoCommerce();
    await actions.selectManShortsProductSizeAndColor(0,0,0)
    await actions.addProductToComparisonAndBackToHomePage()
    await actions.selectManShortsProductSizeAndColor(1,0,0)
    await actions.gotoProductToComparisonPage()
    await actions.clickAtLowestPriceProductItem()
    await actions.selectSizeOption(0)
    await actions.selectColorOption(0)
    await actions.clickAtAddToCartButton()
    await actions.goToFillingShippingAddress()
    await actions.fillShippingAddress()
    await actions.placingShippingOrder()
    await expect(actions.successPurchaseMessage).toBeVisible()
});