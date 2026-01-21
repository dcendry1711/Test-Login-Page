import { Page, Locator } from "@playwright/test";

export class LogoutPage {

    logoutBtn: Locator

    constructor(private page: Page) {
        this.logoutBtn = this.page.getByRole('link', { name: 'Logout' });
    }
}