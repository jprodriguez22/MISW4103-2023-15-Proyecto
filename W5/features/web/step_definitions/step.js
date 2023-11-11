const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../../page_objects/kraken/loginPage');
const PagesPage = require('../../../page_objects/kraken/pagesPage');
const SettingsPage = require('../../../page_objects/kraken/settingsPage');
const HomePage = require('../../../page_objects/kraken/homePage');

Given('I login into the page with my email {kraken-string} and password {kraken-string}', async function (email, password) {   
    loginPageObject = new LoginPage(this.driver) 
    return await loginPageObject.login(email, password)    
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
When('I go to the announcement settings', async function(){
    settingsPageObject = new SettingsPage(this.driver)
    await settingsPageObject.navigateToAnnouncementTab()
    return
});

When('I create a new announcement with the text {kraken-string}', async function(text){
    return await settingsPageObject.newAnnouncement(text)
});

Then('I navigate to the page with name {kraken-string}', async function(name){
    return await this.driver.url("http://localhost:2368/"+name)
});

Then('I go to the navigations settings', async function(){
    settingsPageObject = new SettingsPage(this.driver)
    await settingsPageObject.navigateToNavigationTab()
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
})