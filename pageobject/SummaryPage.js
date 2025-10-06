
class SummaryPage {

    constructor(page) {

        this.page = page;
        this.AccountSummaryLink = page.locator('#account_summary_link');
        this.accountSummaryTab = page.locator('#account_summary_tab');
        this.balance = page.locator('.table th', { hasText: 'Balance' }).first();
        this.amount = page.locator('.table td', { hasText: '$' }).first();
    }

    async SummaryPage() {
        await this.page.goto('http://zero.webappsecurity.com/online-banking.html');
        await this.AccountSummaryLink.click();
        //await this.page.goto('http://zero.webappsecurity.com/bank/account-summary.html');

    }
}

module.exports = { SummaryPage };