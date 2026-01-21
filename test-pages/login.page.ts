import { Page, Locator } from "@playwright/test";

export class LoginPage {
  userNameInput: Locator;
  userPasswordInput: Locator;
  loginButton: Locator;
  loginMessage: Locator;

  async executeLoginUser(login: string, password: string): Promise<void> {
    await this.userNameInput.fill(login);
    await this.userPasswordInput.fill(password);
    await this.loginButton.click();
  }

  constructor(private page: Page) {
    this.userNameInput = this.page.locator("#username")
    this.userPasswordInput = this.page.locator("#password")
    this.loginButton = this.page.locator("#submit-login")
    this.loginMessage = this.page.locator("#flash")
  }
}
