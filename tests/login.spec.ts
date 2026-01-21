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
    await loginPage.executeLoginUser(login, password);
    //ASSERT
    await expect(loginPage.loginMessage).toContainText(
      "You logged into a secure area!",
    );
  });

  test("unsuccessful login with wrong userName", async ({page}) => {
    //ARRANGE
    const login = "pr";
    const password = loginData.userPassword;
    //ACT
    await loginPage.executeLoginUser(login, password);
    //ASSERT
    await expect(loginPage.loginMessage).toHaveText(
      "Your username is invalid!",
    );
  });

  test("unsuccessful login with wrong password", async ({page}) => {
    //ARRANGE
    const login = loginData.userLogin;
    const password = "wrongPassword";
    //ACT
    await loginPage.executeLoginUser(login, password);
    //ASSERT
    await expect(loginPage.loginMessage).toHaveText(
      "Your password is invalid!",
    );
  })

});
