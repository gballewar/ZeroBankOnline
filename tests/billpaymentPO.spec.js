const { test, expect } = require('@playwright/test');
const { BillPaymentPage } = require('../pageobject/BillPaymentPage');

// Reuse the logged-in session
//test.use({ storageState: 'storageState.json' });

test('@Bill Payment', async ({ page }) => {

    //Transfer Funds
    const billpaymentpage = new BillPaymentPage(page);

    await billpaymentpage.NavigateToBillPayment();

    //Assertion
    await expect(billpaymentpage.PayBillsTab).toBeVisible();
    await expect(billpaymentpage.PaySavedPayee).toBeVisible();
    await expect(billpaymentpage.PayBillTitle).toHaveText('Make payments to your saved payees');

    await billpaymentpage.BillPayment();

    //Assertions
    await expect(billpaymentpage.SuccessMessage).toHaveText('The payment was successfully submitted.');
    console.log(await billpaymentpage.SuccessMessage.textContent());



});