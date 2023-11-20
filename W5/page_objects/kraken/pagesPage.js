const BasePage = require("./basePage");

class pagesPage extends BasePage{

    async navigateToTab(){
        let button = await this.driver.$('[data-test-nav="pages"]')
        await button.click()
    }

    //Prueba 16 Ghost 3
    async navigateToTab3(){
        let button = await this.driver.$("a[href='#/pages/']")
        await button.click()
    }

    async clickNewPage3(){
        let newPageButton = await this.driver.$("a[href='#/editor/page/']");
        await newPageButton.click()
    }

    async prepareNewPage3(title, body){
        let titleField = await this.driver.$("textarea[class$='gh-editor-title ember-text-area gh-input ember-view']");
        await titleField.setValue(title);
        await titleField.keys('Enter')
        await titleField.keys(body)
    }

    async clickSaveNewPage3(){
        let saveNewPageButton = await this.driver.$("div[class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']");
        await saveNewPageButton.click()
        let confirmSaveNewPageButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        await confirmSaveNewPageButton.click()
    }

    async deletePage3(name){
        let pageName = await this.driver.$('h3='+name)
        await pageName.click()
        let pageSettings = await this.driver.$("button[class$='post-settings']")
        await pageSettings.click()
        let deleteButton = await this.driver.$("button[class$='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']")
        await deleteButton.click()
        let confirmdeleteButton = await this.driver.$("button[class$='gh-btn gh-btn-red gh-btn-icon ember-view']")
        await confirmdeleteButton.click()

    }
    //

    async prepareNewPage(title, body){
        let newPageButton = await this.driver.$('[data-test-new-page-button=""]');
        await newPageButton.click()
        let titleField = await this.driver.$('[placeholder="Page title"]');
        await titleField.setValue(title);
        await titleField.keys('Enter')
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