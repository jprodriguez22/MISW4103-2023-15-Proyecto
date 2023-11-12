const BasePage = require("./basePage");

class TagsPage extends BasePage {

    async navigateToTags(){
        let button = await this.driver.$('[data-test-nav="tags"]')
        await button.click()
    }

    async selectTag() {

        let tagButton = await this.driver.$('[data-test-tag="654fd7171592bf46c4853c09"]');
        await tagButton.click();
    }

    async createTag() {
        let newButton = await this.driver.$('span=New Tag');
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
