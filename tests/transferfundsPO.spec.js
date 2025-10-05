const { test, expect } = require('@playwright/test');
const { TransferFundsPage } = require('../pageobject/TransferFundsPage');

// Reuse the logged-in session
//test.use({ storageState: 'storageState.json' });

test('@Transfer Funds', async ({ page }) => {

    //Transfer Funds
    const transferfundspage = new TransferFundsPage(page);
    await transferfundspage.NavigateToTransferFunds();

    //Assertion
    await expect(transferfundspage.TransferFundsTab).toBeVisible();

    await transferfundspage.TransferFunds();

    //Assertions
    await expect(transferfundspage.FromAccount).toBeDisabled();
    await expect(transferfundspage.ToAccount).toBeDisabled();
    await expect(transferfundspage.Amount).toBeDisabled();
    await expect(transferfundspage.Description).toBeDisabled();

    await transferfundspage.TransferFundsCancel();

    //Assertions
    await expect(transferfundspage.FromAccount).toBeEnabled();
    await expect(transferfundspage.ToAccount).toBeEnabled();
    await expect(transferfundspage.Amount).toBeEnabled();
    await expect(transferfundspage.Description).toBeEnabled();
    await expect(transferfundspage.ContinueButton).toBeVisible();

    await transferfundspage.TransferFunds();

    await transferfundspage.TransferFundsSubmit();

    //Assertions
    await expect(transferfundspage.ConfirmMessage).toHaveText('Transfer Money & Make Payments - Confirm');
    await expect(transferfundspage.SuccessMessage).toHaveText('You successfully submitted your transaction.');
    console.log(await transferfundspage.ConfirmMessage.textContent());
    console.log(await transferfundspage.SuccessMessage.textContent());


});
