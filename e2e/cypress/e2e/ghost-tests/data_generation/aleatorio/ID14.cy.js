/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const changePasswordPage = require('../../../../../page_objects/cypress/changePasswordPage.json');
const properties = require('../../../../../properties.json');

context('#14 Cambiar la contraseña de un usuario dos veces', () => {

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:2368/ghost');
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When change the credentials of a user
  it('Editar el nombre de un miembro', () => {
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickPasswordButton.selector).click();
    cy.wait(1000);
    cy.get(changePasswordPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(changePasswordPage.elementNewPassword).type(properties.NEWPASSWORD);
    cy.get(changePasswordPage.elementVerifyPassword).type(properties.NEWPASSWORD);
    cy.wait(2000);
    cy.get(userPage.clickChangePasswordButton.selector).click();
    cy.wait(2000);
    cy.get(userPage.clickSave.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickDone.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickSignOut.selector).click();
    cy.wait(1000);
    

    // Then I enter the application again and make the propper changes for the other tests to work
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.NEWPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickPasswordButton.selector).click();
    cy.wait(1000);
    cy.get(changePasswordPage.elementPassword).type(properties.NEWPASSWORD);
    cy.get(changePasswordPage.elementNewPassword).type(properties.LOGINPASSWORD);
    cy.get(changePasswordPage.elementVerifyPassword).type(properties.LOGINPASSWORD);
    cy.wait(2000);
    cy.get(userPage.clickChangePasswordButton.selector).click();
    cy.wait(2000);
    cy.get(userPage.clickSave.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickDone.selector).click();
    cy.wait(1000);

  });
});
