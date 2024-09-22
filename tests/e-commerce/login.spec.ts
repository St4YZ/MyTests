import { test, expect } from '../../src/app/fixtures/baseFixture';
    
test('Login', async ({ loginPage, actions }) => {
    await actions.addProductToWishList(1)
    await expect(actions.wishProductItems).toHaveCount(1)
    await actions.deleteItemFromWishList()
    await expect(actions.wishProductItems).toHaveCount(0)
})
