const { test } = require('@playwright/test');
const {LoginPage} = require('../pageobject/LoginPage');

test('login and save storage state', async ({ page }) => {
    //const page = browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.GoTO();
    await loginPage.ValidLogin();

  // Save the session (cookies + localStorage) to a file
  await page.context().storageState({ path: 'storageState.json' });
});