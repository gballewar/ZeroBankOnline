const {test} = require('@playwright/test');
const {LoginPage} = require('../pageobject/LoginPage');
const {LogoutPage} = require('../pageobject/LogoutPage');
//require('dotenv').config();

// Reuse the logged-in session
//test.use({ storageState: 'storageState.json' });

test.afterAll('Logout test', async ({page}) => {


//Login to the app
const loginPage = new LoginPage(page);
await loginPage.GoTO();
//await loginPage.ValidLogin();

//Logout
const logoutPage = new LogoutPage(page);
await logoutPage.LogOut();

});