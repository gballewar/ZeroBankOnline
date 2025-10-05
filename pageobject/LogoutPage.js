const {expect} = require('@playwright/test');

class LogoutPage {

    constructor(page) {
        this.page = page;
        this.Username = page.locator('.dropdown-toggle', {hasText:'username'});
        this.LogoutLink = page.locator('#logout_link');
        this.SignInButton = page.locator('#signin_button');

    }

    async LogOut() {

        await this.Username.click();
        await this.LogoutLink.click();
        await expect(this.SignInButton).toBeVisible();
    }
}

module.exports = {LogoutPage};