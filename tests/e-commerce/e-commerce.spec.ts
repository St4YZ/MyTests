import { test, expect } from '@playwright/test';
import { Actions } from '../../PageObject/e-commerce/e-commerce-POM';

test('Buying the product', async ({ page }) => {
    const actions = new Actions(page);
    await actions.gotoMagentoCommerce();
    await actions.clickAtMenCategory()
    await actions.clickAtShortsSubCategory()
    await actions.clickAtProductItem(1)
    await actions.selectSizeOption(0)
    await actions.selectColorOption(0)
    await actions.clickAtAddToCartButton()
    await actions.waitForAlertMessageToBeVisible(0)
    await actions.clickAtShoppingCartLink()
    await actions.clickAtProceedToCheckOutButton()
    await actions.fillShippingAddress()
    await actions.waitForShippingAlertToBeHidden()
    await actions.clickAtShippingMethodRadioButton()
    await actions.clickAtNextButton()
    await actions.clickAtPlaceOrderButton()
    await expect(actions.successPurchaseMessage).toBeVisible()
})

test('Comparing the product', async ({ page }) => {
    const actions = new Actions(page);
    await actions.gotoMagentoCommerce();
    await actions.clickAtMenCategory()
    await actions.clickAtShortsSubCategory()
    await actions.clickAtProductItem(0)
    await actions.selectSizeOption(0)
    await actions.selectColorOption(0)
    await actions.clickAtAddToCompareButton()
    await actions.clickAtHomePageLinkButton()
    await actions.clickAtMenCategory()
    await actions.clickAtShortsSubCategory()
    await actions.clickAtProductItem(1)
    await actions.selectSizeOption(0)
    await actions.selectColorOption(0)
    await actions.clickAtAddToCompareButton()
    await actions.clickAtComparisonListLink()
    await actions.clickAtLowestPriceProductItem()
    await actions.selectSizeOption(0)
    await actions.selectColorOption(0)
    await actions.clickAtAddToCartButton()
    await actions.waitForAlertMessageToBeVisible(0)
    await actions.clickAtShoppingCartLink()
    await actions.clickAtProceedToCheckOutButton()
    await actions.fillShippingAddress()
    await actions.waitForShippingAlertToBeHidden()
    await actions.clickAtShippingMethodRadioButton()
    await actions.clickAtNextButton()
    await actions.clickAtPlaceOrderButton()
    // await expect(actions.successPurchaseMessage).toBeVisible()
});