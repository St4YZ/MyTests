import { Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly netlifyBaseURL: String;
  readonly practiceBaseURL: String;

  constructor(page: Page) {
    this.page = page;
    this.netlifyBaseURL = 'https://qa-practice.netlify.app';
    this.practiceBaseURL = 'https://www.qa-practice.com';
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