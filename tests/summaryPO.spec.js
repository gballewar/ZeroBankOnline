const { test, expect } = require('@playwright/test');
const { SummaryPage } = require('../pageobject/SummaryPage');

// Reuse the logged-in session
//test.use({ storageState: 'storageState.json' });

test('Account @Summary', async ({ page }) => {

    //Account Summary
    const summaryPage = new SummaryPage(page);
    await summaryPage.SummaryPage();

    //Assertions
    await expect(summaryPage.accountSummaryTab).toBeVisible();
    await expect(summaryPage.balance).toBeVisible();
    await expect(summaryPage.amount).toBeVisible();


});