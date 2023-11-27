/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../page_objects/cypress/userPage.json');
const changePasswordPage = require('../../../page_objects/cypress/changePasswordPage.json');
const properties = require('../../../properties.json');

context('#14 Cambiar la contraseña de un usuario dos veces', () => {

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID14 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID14 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID14 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID14 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 4 - Ghost5")
  });

  // When change the credentials of a user
  it('Editar el nombre de un miembro', () => {
    cy.get(userPage.clickUserButton.selector).click();
    cy.screenshot("ID14 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 6 - Ghost5")
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.screenshot("ID14 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 8 - Ghost5")
    cy.get(userPage.clickPasswordButton.selector).click();
    cy.screenshot("ID14 - 9 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 10 - Ghost5")
    cy.get(changePasswordPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID14 - 11 - Ghost5")
    cy.get(changePasswordPage.elementNewPassword).type(properties.NEWPASSWORD);
    cy.screenshot("ID14 - 12 - Ghost5")
    cy.get(changePasswordPage.elementVerifyPassword).type(properties.NEWPASSWORD);
    cy.screenshot("ID14 - 13 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID14 - 14 - Ghost5")
    cy.get(userPage.clickChangePasswordButton.selector).click();
    cy.screenshot("ID14 - 15 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID14 - 16 - Ghost5")
    cy.get(userPage.clickSave.selector).click();
    cy.screenshot("ID14 - 17 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 18 - Ghost5")
    cy.get(userPage.clickDone.selector).click();
    cy.screenshot("ID14 - 19 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 20 - Ghost5")
    cy.get(userPage.clickUserButton.selector).click();
    cy.screenshot("ID14 - 21 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 22 - Ghost5")
    cy.get(userPage.clickSignOut.selector).click();
    cy.screenshot("ID14 - 23 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 24 - Ghost5")
    

    // Then I enter the application again and make the propper changes for the other tests to work
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID14 - 25 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.NEWPASSWORD);
    cy.screenshot("ID14 - 26 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID14 - 27 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 28 - Ghost5")
    cy.get(userPage.clickUserButton.selector).click();
    cy.screenshot("ID14 - 29 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 30 - Ghost5")
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.screenshot("ID14 - 31 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 32 - Ghost5")
    cy.get(userPage.clickPasswordButton.selector).click();
    cy.screenshot("ID14 - 33 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 34 - Ghost5")
    cy.get(changePasswordPage.elementPassword).type(properties.NEWPASSWORD);
    cy.screenshot("ID14 - 35 - Ghost5")
    cy.get(changePasswordPage.elementNewPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID14 - 36 - Ghost5")
    cy.get(changePasswordPage.elementVerifyPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID14 - 37 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID14 - 38 - Ghost5")
    cy.get(userPage.clickChangePasswordButton.selector).click();
    cy.screenshot("ID14 - 39 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID14 - 40 - Ghost5")
    cy.get(userPage.clickSave.selector).click();
    cy.screenshot("ID14 - 41 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 42 - Ghost5")
    cy.get(userPage.clickDone.selector).click();
    cy.screenshot("ID14 - 43 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID14 - 44 - Ghost5")

  });
});

