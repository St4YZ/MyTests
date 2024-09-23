import { Locator, Page } from "@playwright/test";
import { Credentials } from "../../src/app/interfaces/Credentials";
export class LoginPage {
    readonly emailInput: Locator = this.page.getByRole('textbox', { name: 'Email' })
    readonly passwordInput: Locator = this.page.getByRole('textbox', { name: 'Password' })
    readonly signInButton: Locator = this.page.getByRole('button', { name: 'Sign In' })
    
    constructor(readonly page: Page) { }
    async openLoginPage() { 
        await this.page.goto('/customer/account/login');
        
    }
    
    async login(credentials: Credentials): Promise<void> {
        await this.emailInput.fill(credentials.userEmail);
        await this.passwordInput.fill(credentials.userPassword);
        await this.signInButton.click();
    }
}