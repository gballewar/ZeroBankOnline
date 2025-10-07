
const {test} = require('@playwright/test');
const {LoginPage} = require('../pageobject/LoginPage');
//require('dotenv').config();

test.use({ storageState: 'storageState.json' });


test('@Login test', async ({page}) => {

//Login to the app
const loginPage = new LoginPage(page);
await loginPage.GoTO();
//await loginPage.ValidLogin();
await loginPage.HomePage();

});
