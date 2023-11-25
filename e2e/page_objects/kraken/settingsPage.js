const BasePage = require("./basePage");

class settingsPage extends BasePage{

    async navigateToAnnouncementTab(base_url){
        await this.driver.url(base_url+'/ghost/#/settings/announcement-bar/edit')
    }
    async navigateToNavigationTab(base_url){
        await this.driver.url(base_url+'/ghost/#/settings/navigation/edit')
    }
    async navigateToSettingsTab(){
        let button = await this.driver.$('[data-test-nav="settings"]')
        await button.click()
    }

    //Prueba 17
    async navigateToSettingsGeneralTab(){
        let button = await this.driver.$("a[href='#/settings/general/']")
        await button.click()
    }
    async expandTitle(){
        let expandbutton = await this.driver.$("button[class$='gh-btn']")
        await expandbutton.click()
    }
    async changeTitle(title) {
        let titleField = await this.driver.$("input[class$='ember-text-field gh-input ember-view']");
        await titleField.setValue(title);
    }
    async saveTitle(){
        let saveTitleButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']");
        await saveTitleButton.click()
    }
    //

    //Prueba 22 Ghost 3
    async navigateToLabsTab(){
        let labTab = await this.driver.$("a[href='#/settings/labs/']");
        await labTab.click()
    }

    async clickDelete(){
        let deleteButton = await this.driver.$("button[class$='gh-btn gh-btn-hover-red js-delete']");
        await deleteButton.click()
    }

    async clickConfirmDelete(){
        let confirmDeleteButton = await this.driver.$("button[class$='gh-btn gh-btn-red gh-btn-icon ember-view']");
        await confirmDeleteButton.click()
    }

    async navigateToViewSiteTab(){
        let viewSiteTab = await this.driver.$("a[href='#/site/']");
        await viewSiteTab.click()
    }
    //Ghost5
    async navigateToLabTab(){
        let lab = await this.driver.$("a[id$='labs']")
        await lab.click()
        
    }

    async Open() {
        let button = await this.driver.$('//button[contains(@class, "cursor-pointer") and contains(@class, "text-green") and contains(@class, "hover:text-green-400") and contains(@class, "inline-flex") and contains(@class, "items-center") and contains(@class, "justify-center") and contains(@class, "whitespace-nowrap") and contains(@class, "rounded") and contains(@class, "text-sm") and contains(@class, "transition") and contains(@class, "font-bold") and contains(@class, "-m-1") and contains(@class, "p-1") and .//span[contains(text(), "Open")]]');
    
        if (!button) {
            await this.driver.pause(2000);
            button = await this.driver.$('//button[contains(@class, "cursor-pointer") and contains(@class, "text-green") and contains(@class, "hover:text-green-400") and contains(@class, "inline-flex") and contains(@class, "items-center") and contains(@class, "justify-center") and contains(@class, "whitespace-nowrap") and contains(@class, "rounded") and contains(@class, "text-sm") and contains(@class, "transition") and contains(@class, "font-bold") and contains(@class, "-m-1") and contains(@class, "p-1") and .//span[contains(text(), "Open")]]');
        }
        await button.click({ force: true });
    }
    
    

    async clickDelete5() {
        let deleteButton = await this.driver.$('//button[contains(@class, "cursor-pointer") and contains(@class, "bg-red") and contains(@class, "text-white") and contains(@class, "hover:bg-red-400") and contains(@class, "inline-flex") and contains(@class, "items-center") and contains(@class, "justify-center") and contains(@class, "whitespace-nowrap") and contains(@class, "rounded") and contains(@class, "text-sm") and contains(@class, "transition") and contains(@class, "font-bold") and contains(@class, "h-7") and contains(@class, "px-3") and .//span[contains(text(), "Delete")]]');
    
        if (!deleteButton) {
            await this.driver.pause(2000);
            deleteButton = await this.driver.$('//button[contains(@class, "cursor-pointer") and contains(@class, "bg-red") and contains(@class, "text-white") and contains(@class, "hover:bg-red-400") and contains(@class, "inline-flex") and contains(@class, "items-center") and contains(@class, "justify-center") and contains(@class, "whitespace-nowrap") and contains(@class, "rounded") and contains(@class, "text-sm") and contains(@class, "transition") and contains(@class, "font-bold") and contains(@class, "h-7") and contains(@class, "px-3") and .//span[contains(text(), "Delete")]]');
        }

        await deleteButton.waitForExist({ timeout: 10000 });
        await deleteButton.click();
    }
    
    
    async clickConfirmDelete5(){
        let confirmDeleteButton = await this.driver.$("button[class$='cursor-pointer bg-red text-white hover:bg-red-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]']");
        await confirmDeleteButton.click()
    }
    //

    async addNewPage(title){
        let newPageInput = await this.driver.$('[placeholder="New item label"]')
        await newPageInput.setValue(title)
        await newPageInput.keys('Tab')
        await newPageInput.keys(title)
        await this.driver.saveScreenshot("../e2e/reports" + "/suspicion.png")
        await newPageInput.keys('Tab')
        await newPageInput.keys('Enter')
        await newPageInput.keys('Tab')
        await newPageInput.keys('Tab')
        await newPageInput.keys('Enter')
    }
    async newAnnouncement(text){
        let textField = await this.driver.$('p[data-koenig-dnd-droppable="true"]')
        //let visitorsInput = await this.driver.$('input[value="visitors"]')
        //let freeMembersInput = await this.driver.$('input[value="free_members"]')
        let saveButton = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div/div/div[2]/div[1]/div/button[2]/span')
        await textField.clearValue()
        await textField.click()        
        await textField.setValue(text)
        //await visitorsInput.click()
        //await freeMembersInput.click()
        await saveButton.click()
    }
    async selectEditTitleSettings(){
        let editTitle = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button")
        await editTitle.click()
    }
    async addNewTitles(name1, name2, name3){
        let titleField = await this.driver.$("input[placeholder='Site title']")
        await titleField.clearValue()
        await titleField.setValue(name1+" "+name2+" "+name3)
        let saveButton = await this.driver.$("button[class^='cursor-pointer  text-green hover:text-green-400']")
        await saveButton.click()
    }
    async addNewTitle(title){
        let titleField = await this.driver.$("input[placeholder='Site title']")
        await titleField.clearValue()
        await titleField.setValue(title)
        let saveButton = await this.driver.$("button[class^='cursor-pointer  text-green hover:text-green-400']")
        await saveButton.click()
    }
}
module.exports = settingsPage;