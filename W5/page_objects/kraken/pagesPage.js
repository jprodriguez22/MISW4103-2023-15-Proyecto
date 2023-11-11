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

    async exitAfterPublish(){
        let backToEditorButton = await this.driver.$('[data-test-button="back-to-editor"]')
        await backToEditorButton.click()
    }

    async exitEditor(){
        let backToPageButton = await this.driver.$('[data-test-link="pages"]')
        await backToPageButton.click()
    }

    async deletePage(name){
        let pageName = await this.driver.$('h3='+name)
        await pageName.click()
        let pageSettings = await this.driver.$('[title="Settings"]')
        await pageSettings.click()
        let deleteButton = await this.driver.$('.settings-menu-delete-button button')
        await deleteButton.click()
        await deleteButton.keys('Tab')
        await deleteButton.keys('Tab')
        await deleteButton.keys('Enter')
    }
}

module.exports = pagesPage;