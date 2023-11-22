const BasePage = require("./basePage");

class TagsPage extends BasePage {

    async navigateToTags(){
        let button = await this.driver.$('[data-test-nav="tags"]')
        await button.click()
    }

    async selectTag() {
        let tagsList = await this.driver.$('.tags-list');
        let tagItems = await tagsList.$$('li.gh-tags-list-item');
        let randomIndex = Math.floor(Math.random() * tagItems.length);
        let randomTag = tagItems[randomIndex];
        let tagLink = await randomTag.$('a.gh-tag-list-title');
        await tagLink.click();
    }
    

    async createTag() {
        let newButton = await this.driver.$('a[href="#/tags/new/"]');
        await newButton.waitForExist({ timeout: 5000 });
        await newButton.click();
    }
    async insertName(tag) {
        let nameField = await this.driver.$('[data-test-input="tag-name"]');
        await nameField.setValue(tag);
        await nameField.keys('Enter')
    }

    async modifyName(tag) {
        let nameField = await this.driver.$('[data-test-input="tag-name"]');
        await nameField.setValue(tag);
        await nameField.keys('Enter')
    }

    async saveName() {

        let saveButton = await this.driver.$('[data-test-button="save"]');
        await saveButton.click();
    }

    async navigatePosts(){
        let button = await this.driver.$('[data-test-nav="posts"]')
        await button.click()
    }
}

module.exports = TagsPage;
