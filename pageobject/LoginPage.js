const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.SignInLink = page.locator('#signin_button');
        this.Username = page.locator('#user_login');
        this.Password = page.locator('#user_password')
        this.SignInButton = page.getByRole('button', { name: 'Sign in' });

    }

    async GoTO() {
        await this.page.goto('http://zero.webappsecurity.com/');
    }

    async ValidLogin() {

        await this.SignInLink.click();
        await this.Username.fill('username');
        await this.Password.fill('password');
        await this.SignInButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.goBack();

    }

    async HomePage() {
        const title = await this.page.locator('div >> h4', {hasText: 'Online Banking'})
        .nth(0).textContent();

        const text = await this.page.locator('div >> p')
        .nth(0).textContent();

        console.log(title);
        console.log(text);
    }

 

}

module.exports = {LoginPage};