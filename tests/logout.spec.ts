import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../test-pages/login.page";
import { LogoutPage } from "../test-pages/logout.page";

test.describe("Login Page Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("");
    loginPage = new LoginPage(page);
    loginPage.executeLoginUser(loginData.userLogin, loginData.userPassword);
  });

  test("logout from app", async ({ page }) => {
    //ARRANGE
    const logoutPage = new LogoutPage(page);
    //ACT
    await logoutPage.logoutBtn.click();
    //ASSERT
    await expect(loginPage.loginButton).toBeVisible();
  });
}) 