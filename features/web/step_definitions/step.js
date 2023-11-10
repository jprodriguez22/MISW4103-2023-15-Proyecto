const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/loginPage');
const PagesPage = require('../page_objects/pagesPage');

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
})

Then('I navigate to the page with name {kraken-string}', async function(name){
    return await this.driver.url("http://localhost:2368/"+name)
})