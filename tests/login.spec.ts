import { expect, test } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../test-pages/login.page";

test.describe("Login Page Tests", () => {

let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("");
    loginPage = new LoginPage(page);
  });

  test("successful login", async ({}) => {
    //ARRANGE
    const login = loginData.userLogin;
    const password = loginData.userPassword;
    //ACT
    await loginPage.userNameInput.fill(login);
    await loginPage.userPasswordInput.fill(password);
    await loginPage.loginButton.click();
    //ASSERT
    await expect(loginPage.loginMessage).toContainText("You logged into a secure area!");
  });
});
