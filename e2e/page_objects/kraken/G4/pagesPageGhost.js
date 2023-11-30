const BasePage = require("./basePage");

class pagesPageGhost3 extends BasePage{

    async navigateToTab(){
        let button = await this.driver.$('[data-test-nav="pages"]')
        await button.click()
    }

    async prepareNewPage(title, body){
        let newPageButton = await this.driver.$("span=New page");
        await newPageButton.click()
        let titleField = await this.driver.$('[placeholder="Page Title"]');
        await titleField.setValue(title);
        await titleField.keys('Enter')
        await titleField.keys(body)
    }

    async publishCurrentPage(){
        let updateButton1 = await this.driver.$('[role="button"]');
        await updateButton1.click();
        let updateButton2 = await this.driver.$("span=Publish");        
        await updateButton2.click();
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

module.exports = pagesPageGhost3;