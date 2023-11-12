const BasePage = require("./basePage");

class PostsPage extends BasePage {

    async navigateToPosts(){
        let button = await this.driver.$('[data-test-nav="posts"]')
        await button.click()
    }

    async navigateToSite(){
        let sitebutton = await this.driver.$('[data-test-nav="site"]')
        await sitebutton.click()
    }

    async selectPost() {

        let postsList = await this.driver.$('.feature-memberAttribution');
        let postItems = await postsList.$$('li');
        let randomIndex = Math.floor(Math.random() * postItems.length);
        let randomPost = postItems[randomIndex];
        let postLink = await randomPost.$('a.gh-post-list-title');
        await postLink.click();
    }

    async selectRandomPost() {
        let postsList = await this.driver.$('.feature-memberAttribution');
        let postItems = await postsList.$$('li');
        let randomIndex = Math.floor(Math.random() * postItems.length);
        let randomPost = postItems[randomIndex];
        let postLink = await randomPost.$('a.gh-post-list-title');
        await postLink.click();
    }

    async selectPubs() {
        let postsList = await this.driver.$('.feature-memberAttribution');
        let postItems = await postsList.$$('li');
        let randomIndex = Math.floor(Math.random() * postItems.length);
        let randomPost = postItems[randomIndex];
        let postLink = await randomPost.$('a.gh-post-list-title');
        await postLink.click();
    }


    async selectPost8() {

        let postButton = await this.driver.$('[data-test-post-id="654fea191592bf46c4853c66"]');
        await postButton.click();
    }
    
    async selectPost81() {

        let postButton = await this.driver.$('[data-test-post-id="654fea0d1592bf46c4853c5e"]');
        await postButton.click();
    }

    async relateTag() {
        let boxButton = await this.driver.$('[data-test-psm-trigger]');
        await boxButton.click();
    }

    async selectTheTag() {
        let selButton = await this.driver.$('.ember-power-select-trigger-multiple-input');
        await selButton.click();
        await this.driver.pause(1000);
        let tagselButton = await this.driver.$('.ember-power-select-option');
        await this.driver.pause(2000);
        await tagselButton.click();
    }

    async unpublishCurrentPost(){
        let unpublishButton = await this.driver.$('[data-test-button="update-flow"]')
        await unpublishButton.click()
        let continueButton = await this.driver.$('[data-test-button="revert-to-draft"]')
        await continueButton.click()
    }

    async updatePost(){
        let updateButton = await this.driver.$('[data-test-button="publish-save"]')
        await updateButton.click()
    }

    async exitEditor(){
        let backPostButton = await this.driver.$('[data-test-link="posts"]')
        await backPostButton.click()
    }

    async validateBlog() {

        await this.navigateToSite();
    }

    async filterAllTags(){
        let filterbutton = await this.driver.$('[data-test-tag-select="true"]')
        await filterbutton.click()
        let display = await this.driver.$('[data-option-index="4"]')
        await this.driver.pause(3000);
        await display.click()
    }

    async filterNewTags(){
        let filterbutton = await this.driver.$('[data-test-tag-select="true"]')
        await filterbutton.click()
        let display = await this.driver.$('[data-option-index="4"]')
        await display.click()
    }
}

module.exports = PostsPage;
