const { Given, When, Then } = require("@cucumber/cucumber");

Given("I login G4 into the page with my email {kraken-string} and password {kraken-string}", async function (email, password) {
    loginPageObjectGhost3 = new LoginPageGhost3(this.driver);
    return await loginPageObjectGhost3.login(email, password);
});

When("I create G4 a new page with title {kraken-string} and body {kraken-string}", async function (title, body) {
    pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
    return await pagesPageObjectGhost3.prepareNewPage(title, body);
});

When("I publish G4 the new page", async function () {
    pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
    return await pagesPageObjectGhost3.publishCurrentPage();
});

When("I create G4 a post with title {kraken-string} and body {kraken-string}", async function (title, body) {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.prepareNewPost(title, body);
});

When("I publish G4 the new post", async function () {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.publishCurrentPost();
});

When("I select G4 a post created with name {kraken-string}", async function (name) {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.selectCurrentPost(name);
});

When("I select G4 a post created with name {kraken-string}", async function (name) {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.selectCurrentPost(name);
});

When("I go G4 to the posts tab", async function () {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.navigateToPosts();
});

When("I update G4 the post", async function () {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.updatePost();
});

When("I go G4 to the settings tab", async function () {
    settingsPageObjectGhost3 = new SettingsPageGhost3(this.driver);
    return await settingsPageObjectGhost3.navigateToSettingsTab();
});

Then("I add G4 the page {kraken-string} to the website navigation", async function (page) {
    settingsPageObjectGhost3 = new SettingsPageGhost3(this.driver);
    await settingsPageObjectGhost3.addNewPage(page);
    return;
});

Then("I delete G4 the post with name {kraken-string}", async function (name) {
    pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
    return await pagesPageObjectGhost3.deletePage(name);
});

Then("I delete G4 the post created with name {kraken-string}", async function (name) {
    postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
    return await postsPageObjectGhost3.deletePost(name);
});