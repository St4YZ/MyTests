import { Page } from '@playwright/test';

export class MainPage {
  readonly netlifyBaseURL: string = 'https://qa-practice.netlify.app'
  readonly practiceBaseURL: string = 'https://www.qa-practice.com'
  constructor(readonly page: Page) {
    this.page = page;
  }
  async gotoRegisterPage() {
    await this.page.goto(this.netlifyBaseURL + '/register')
  }
  async gotoIFramePage() {
    await this.page.goto(this.netlifyBaseURL + '/iframe')
  }
  async gotoCheckBoxPage() {
    await this.page.goto(this.practiceBaseURL + '/elements/checkbox/mult_checkbox')
  }
}