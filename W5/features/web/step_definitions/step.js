const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../../page_objects/kraken/loginPage');
const PagesPage = require('../../../page_objects/kraken/pagesPage');
const SettingsPage = require('../../../page_objects/kraken/settingsPage');
const HomePage = require('../../../page_objects/kraken/homePage');
const changePasswordPage = require('../../../page_objects/kraken/changePasswordPage');
const MembersPage = require('../../../page_objects/kraken/membersPage');
const PostsPage = require('../../../page_objects/kraken/postsPage');
const TagsPage = require('../../../page_objects/kraken/tagsPage');
const configs = require('../../../properties.json');
const { clickThemeButton } = require("../../../page_objects/kraken/userPage");
const { clickUserButton } = require("../../../page_objects/kraken/userPage");
const { clickYourProfileButton } = require("../../../page_objects/kraken/userPage");
const { clickPasswordButton } = require("../../../page_objects/kraken/userPage");
const { clickChangePasswordButton} = require("../../../page_objects/kraken/userPage");
const { clickSave} = require("../../../page_objects/kraken/userPage");
const { clickDone} = require("../../../page_objects/kraken/userPage");
const { clickSignOut} = require("../../../page_objects/kraken/userPage");


Given('I login into the page with my email {kraken-string} and password {kraken-string}', async function (email, password) {   
    loginPageObject = new LoginPage(this.driver) 
    return await loginPageObject.login(email, password)    
});

Given('I navigate to the page {string}', async function(url) { 
    await this.driver.url(url);
});


When('I go to the pages tab', async function() {
    pagesPageObject = new PagesPage(this.driver)
    return await pagesPageObject.navigateToTab()
});



When('I create a new page with title {kraken-string} and body {kraken-string}', async function(title, body) {
    return await pagesPageObject.prepareNewPage(title, body)
});

When('I publish the new page', async function() {
    return await pagesPageObject.publishCurrentPage()
});

When('I return to the pages list', async function(){
    await pagesPageObject.exitAfterPublish()
    await pagesPageObject.exitEditor()
    return 
});
When('I go to the announcement settings with base_url {kraken-string}', async function(base_url){
    settingsPageObject = new SettingsPage(this.driver)
    await settingsPageObject.navigateToAnnouncementTab(base_url)
    return
});

When('I create a new announcement with the text {kraken-string}', async function(text){
    return await settingsPageObject.newAnnouncement(text)
});

When("I click on 'Change theme' Button", async function () {
    await clickThemeButton(this.driver);
});

When("I click on the 'User' Button", async function () {
    await clickUserButton(this.driver);
});

When("I click on 'Your Profile' Button", async function () {
    await clickYourProfileButton(this.driver);
});

When("I click on 'Sign Out' Button", async function () {
    await clickSignOut(this.driver);
});

When(
    "I create a post with title {kraken-string} and body {kraken-string}",
    async function (title, body) {
      return await postsPageObject.prepareNewPost(title, body);
    }
);
  
When("I publish the new post", async function () {
    return await postsPageObject.publishCurrentPost();
});

When('I select a post created with name {kraken-string}', async function(name) { 
    return await postsPageObject.selectCurrentPost(name); 
});

When(
    "I modify data the a post created with title {kraken-string} and body {kraken-string}",
    async function (title, body) {
      return await postsPageObject.prepareEditPost(title, body);
    }
);

When(
"I create a member with name {kraken-string} and email {kraken-string}",
async function (name, email) {
    return await membersPageObject.prepareNewMember(name, email);
}
);

Then('I navigate to the page with name {kraken-string} and port {kraken-string}', async function(name, port){
    return await this.driver.url("http://"+configs.BASEURL+":"+port+"/"+name)
});

Then('I go to the navigations settings with base_url {kraken-string}', async function(base_url){
    settingsPageObject = new SettingsPage(this.driver)
    await settingsPageObject.navigateToNavigationTab(base_url)
    return
});
Then('I add the page {kraken-string} to the website navigation', async function(page){    
    await settingsPageObject.addNewPage(page)
    return 
});

Then('I click on the navbar page with name {kraken-string}', async function(name){
    homePageObject = new HomePage(this.driver)
    await homePageObject.selectNavPage(name)
    return
});

Then('I delete the post with name {kraken-string}', async function(name){
    return await pagesPageObject.deletePage(name)
});

When("I click on 'Change Password' Button", async function(){
    await clickPasswordButton(this.driver);
});

When('I write my current password {kraken-string} and my new password {kraken-string}', async function (password, newPassword) {   
    changePasswordPageObject = new changePasswordPage(this.driver) 
    return await changePasswordPageObject.changePassword(password, newPassword)    
});

When("I click on 'Change Password red' Button", async function(){
    await clickChangePasswordButton(this.driver);
});

When("I click on 'Save' Button", async function(){
    await clickSave(this.driver);
});

When("I click on 'Done' Button", async function(){
    await clickDone(this.driver);
});

When('I go to the members tab', async function() {     // Prueba 15 //
    membersPageObject = new MembersPage(this.driver)
    return await membersPageObject.navigateToMembers()
});

When('I go to the posts tab', async function() {       //Prueba 11 //
    postsPageObject = new PostsPage(this.driver)
    return await postsPageObject.navigateToPosts()
});

When('I go to the tags tab', async function() {        // Para 8-9 //
    tagsPageObject = new TagsPage(this.driver)
    return await tagsPageObject.navigateToTags()
});

When('I go to create a new tag', async function() {    // Para 8-9 //
    tagsPageObject = new TagsPage(this.driver)
    return await tagsPageObject.createTag()
});

When('I add a name member {kraken-string}', async function(nombre) {    // Para 8-9 //
    return await membersPageObject.createMember(nombre)
});

When('I add a email member {kraken-string}', async function(correo) {    // Para 8-9 //
    return await membersPageObject.emailMember(correo)
});

When('I set a tag for member {kraken-string}', async function(tag) {    // Para 8-9 //
    membersPageObject = new MembersPage(this.driver)
    return await membersPageObject.tagMember(tag)
});

When('I select a member', async function() {           // Prueba 15 //
    return await membersPageObject.selectMember();
});

When('I select a post', async function() {              // Para 8-11 //
    return await postsPageObject.selectPost(); 
});

When('I select a post to put a tag', async function() { 
    postsPageObject = new PostsPage(this.driver) // Prueba 8 //
    return await postsPageObject.selectRandomPost(); 
});

When('I select another post to put a tag', async function() {  // Prueba 8 //
    return await postsPageObject.selectPubs(); 
});

When('I select to relate a tag for the post', async function() {  // Prueba 8 //
    await postsPageObject.relateTag(); 
    await postsPageObject.selectTheTag();
    return
});

When('I select a tag', async function() {                // Para 9 //
    return await tagsPageObject.selectTag();
});

When('I add a descriptive note {kraken-string}', async function(note) {   // Prueba 15 //
    return await membersPageObject.addDescriptiveNote(note);
});

When('I insert a tag name {kraken-string}', async function(tag) {        // Prueba 8 //
    return await tagsPageObject.insertName(tag); 
});

When('I modify a tag name {kraken-string}', async function(tag) {        // Prueba 9 //
    return await tagsPageObject.modifyName(tag);
});

When('I save the note', async function() {                               // Prueba 15 //
    return await membersPageObject.saveNote();
});

When('I save the member with tag', async function() {                               // Prueba 15 //
    return await membersPageObject.saveNote();
});

When('I save the tag name', async function() {                            // Prueba 8-9 //
    return await tagsPageObject.saveName();
});

When('I unpublish the post', async function() {                           // Prueba 11 //
    return await postsPageObject.unpublishCurrentPost();
});

When('I update the post', async function() {                           // Prueba 11 //
    return await postsPageObject.updatePost();
});

When('I return to the posts list', async function() {                    // Prueba 8-11 // 
    return await postsPageObject.exitEditor();
});

When('I navigate to the posts list', async function() {                  // Prueba 8-9-11 //
    return await tagsPageObject.navigatePosts();
});

Then('I apply the filters to tags and see the updated name', async function() {
    postsPageObject = new PostsPage(this.driver)   // Prueba 9 //
    return await postsPageObject.filterAllTags();
});

Then('I apply the filters to see the new tag', async function() {   // Prueba 8 //
    return await postsPageObject.filterAllTags();
});

Then('I apply the filters to see the members', async function() {   // Prueba 6 //
    return await membersPageObject.filterMembers();
});

Then('I validate the note is saved for the member', async function() {     // Prueba 15//
    return await membersPageObject.validateNote();
});

Then('I validate the post isnt in the blog', async function() {             // Prueba 11 //
    return await postsPageObject.validateBlog();
});


When('I add a descriptive name {kraken-string}', async function(note) {   // Prueba 15 //
    return await membersPageObject.addDescriptiveName(note);
});

When('I change email {kraken-string}', async function(mail) {   // Prueba 7 //
    return await membersPageObject.changeEmail(mail);
});


When("I click on 'Settings' Button", async function(){
    return await membersPageObject.clickSettings();
});


When("I click on 'Delete' Button", async function(){
    return await membersPageObject.delete();
});

When("I click on 'Confirm' Button", async function(){
    return await membersPageObject.confirm();
});

Then("I navigate to the post with name {kraken-string} and port {kraken-string}", async function (name, port) {
    return await this.driver.url("http://"+configs.BASEURL+":"+port+"/" + name);
  });
  
Then(
"I delete the post created with name {kraken-string}",
async function (name) {
    return await postsPageObject.deletePost(name);
}
);
  
Then("I navigate to the member with name {kraken-string} and port {kraken-string}", async function (name, port) {
    return await this.driver.url("http://"+configs.BASEURL+":"+port+"/" + name);
});

When("I go to the settings tab", async function(){
    settingsPageObject = new SettingsPage(this.driver)
    return await settingsPageObject.navigateToSettingsTab()
});

When("I select edit title settings", async function(){
    return await settingsPageObject.selectEditTitleSettings()
});
When("I add one {kraken-string} two {kraken-string} and three {kraken-string} names to the page title", async function(one, two, three){
    return await settingsPageObject.addNewTitles(one, two, three)
});
Given("I take a screenshot with the name {kraken-string}", async function(name){
    return await this.driver.saveScreenshot("./VRTImages/"+name+'.png')
});