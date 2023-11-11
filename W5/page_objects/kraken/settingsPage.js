const BasePage = require("./basePage");

class settingsPage extends BasePage{

    async navigateToAnnouncementTab(){
        await this.driver.url('http://localhost:2368/ghost/#/settings/announcement-bar/edit')
    }
    async navigateToNavigationTab(){
        await this.driver.url('http://localhost:2368/ghost/#/settings/navigation/edit')
    }
    async addNewPage(title){
        let newPageInput = await this.driver.$('[placeholder="New item label"]')
        await newPageInput.setValue(title)
        await newPageInput.keys('Tab')
        await newPageInput.keys(title)
        await newPageInput.keys('Tab')
        await newPageInput.keys('Enter')
        await newPageInput.keys('Tab')
        await newPageInput.keys('Tab')
        await newPageInput.keys('Enter')
    }
    async newAnnouncement(text){
        let textField = await this.driver.$('.kg-prose p')
        let visitorsInput = await this.driver.$('input[value="visitors"]')
        let freeMembersInput = await this.driver.$('input[value="free_members"]')
        let saveButton = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div/div/div[2]/div[1]/div/button[2]/span')
        await textField.clearValue()
        await textField.setValue(text)
        await visitorsInput.click()
        await freeMembersInput.click()
        await saveButton.click()
    }
}
module.exports = settingsPage;