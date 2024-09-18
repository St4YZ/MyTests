import { test as baseTest} from '@playwright/test';
import { LoginPage } from '../../../PageObject/e-commerce/loginPage';
import { Actions } from '../../../PageObject/e-commerce/e-commerce-POM';
import { standardUser } from '../data/credentials';
const test = baseTest.extend<{
    loginPage: LoginPage
    actions: Actions
}>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.openLoginPage()
        await loginPage.login(standardUser);
        await use(loginPage);
    },
    actions: async ({page}, use) => {
        const actions = new Actions(page);
        await use(actions);
    }
});

export { test }
export { expect } from '@playwright/test'