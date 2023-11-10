const BasePage = require("./basePage");

class pagesPage extends BasePage{

    async navigateToTab(){
        let button = await this.driver.$('[data-test-nav="pages"]')
        await button.click()
    }

    async prepareNewPage(title, body){
        let newPageButton = await this.driver.$('[data-test-new-page-button=""]');
        await newPageButton.click()
        let titleField = await this.driver.$('[placeholder="Page title"]');
        await titleField.setValue(title);
        await titleField.keys('Enter')
        await titleField.keys(body)
    }

    async publishCurrentPage(){
        let publishButton = await this.driver.$('[data-test-button="publish-flow"]')
        await publishButton.click()
        let continueButton = await this.driver.$('[data-test-button="continue"]')
        await continueButton.click()
        let confirmButton = await this.driver.$('[data-test-button="confirm-publish"]')
        await confirmButton.click()
    }
}

module.exports = pagesPage;