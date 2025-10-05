
class TransferFundsPage {

    constructor(page) {

        this.page = page;
        this.TranferFundsLink = page.locator('#transfer_funds_link');
        this.TransferFundsTab = page.locator('#transfer_funds_tab');
        this.FromAccount = page.locator('#tf_fromAccountId');
        this.ToAccount = page.locator('#tf_toAccountId');
        this.Ammount = page.locator('#tf_amount');
        this.Description = page.locator('#tf_description')
        this.ContinueButton = page.getByRole('button', {name: 'Continue'});
        this.CancelButton = page.locator('#btn_cancel');
        this.SubmitButton = page.getByRole('button', {name: 'Submit'});
        this.ConfirmMessage = page.locator('.board-header');
        this.SuccessMessage = page.locator('.alert.alert-success');


    }

    async NavigateToTransferFunds() {

        //await this.page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');
        await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
        await this.TranferFundsLink.click();

    }

    async TransferFunds() {


        await this.FromAccount.selectOption('Savings(Avail. balance = $ 1548)');
        await this.ToAccount.selectOption('Brokerage(Avail. balance = $ 197)');
        await this.Ammount.fill('300');
        await this.Description.fill('Test Transfer Funds');
        await this.ContinueButton.click();

    }

    async TransferFundsCancel()
    {
        await this.CancelButton.click();

    }

    async TransferFundsSubmit()
    {
        await this.SubmitButton.click();

    }
}

module.exports = {TransferFundsPage};