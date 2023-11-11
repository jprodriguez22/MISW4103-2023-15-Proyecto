const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/loginPage');
const PagesPage = require('../page_objects/pagesPage');
const { clickThemeButton } = require("../page_objects/userPage");
const { clickUserButton } = require("../page_objects/userPage");
const { clickYourProfileButton } = require("../page_objects/userPage");

Given('I login into the page with my email {kraken-string} and password {kraken-string} - test_10', async function (email, password) {   
    loginPageObject = new LoginPage(this.driver) 
    return await loginPageObject.login(email, password)    
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
