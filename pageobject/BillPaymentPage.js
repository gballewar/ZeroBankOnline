class BillPaymentPage {

    constructor(page) {

        this.page = page;
        this.OnlineBankingLink = page.locator('#onlineBankingMenu');
        this.PayBillsLink = page.locator('#pay_bills_link');
        this.PayBillsTab = page.locator('#pay_bills_tab');
        this.PaySavedPayee = page.locator('[class*="ui-state-active"]');
        this.Payee = page.locator('#sp_payee');
        this.Account = page.locator('#sp_account');
        this.Amount = page.locator('#sp_amount');
        this.Calendar = page.locator('#sp_date');
        this.Date = page.locator('.ui-state-default', {hasText:'18'});
        this.Description = page.locator('#sp_description');
        this.PayButton = page.getByRole('button', {name: 'Pay'});
        this.PayBillTitle = page.locator('.board-header');
        this.SuccessMessage = page.locator('#alert_content');

    }

    async NavigateToBillPayment() {
        await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
        await this.PayBillsLink.click();
    }

    async BillPayment() {

        await this.Payee.selectOption('Apple');
        await this.Account.selectOption('Checking');
        await this.Amount.fill('400');
        await this.Calendar.click();
        await this.Date.click();
        await this.Description.fill('Pay Bills Test');
        await this.PayButton.click();

    }
}

module.exports = {BillPaymentPage};