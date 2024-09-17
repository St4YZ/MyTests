import { test, expect } from '@playwright/test';
import { Actions } from '../../PageObject/e-commerce/e-commerce-POM';

test('Buying the product', async ({ page }) => {
    const actions = new Actions(page);
    await actions.gotoMagentoCommerce();
    await actions.selectManShortsProductSizeAndColor(1,0,0)
    await actions.clickAtAddToCartButton()
    await actions.goToFillingShippingAddress()
    await actions.fillShippingAddress()
    await actions.placingShippingOrder()
    await expect(actions.successPurchaseMessage).toBeVisible()
})

test('Comparing the product', async ({ page }) => {
    const actions = new Actions(page);
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