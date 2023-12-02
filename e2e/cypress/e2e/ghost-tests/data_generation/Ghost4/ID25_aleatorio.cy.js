/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const changePasswordPage = require('../../../../../page_objects/cypress/changePasswordPage.json');
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json')

context('#25 Como usuario, quiero cambiar el correo de ingreso a la app', () => {
  // Given I login to my website Ghost 4
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST4),
    cy.get(loginPage.elementEmail4).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton4).click(),
    cy.wait(2000)
})
  // When create 2 members with the same email
  it('Editar el correo del usuario', () => {
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickYourProfileButton4.selector).click();
    cy.wait(1000);
    const uuid = () => Cypress._.random(0, 1e6);
    const emailField = `test.email${uuid()}@gmail.com`;
    cy.get(changePasswordPage.userEmail).clear();
    cy.get(changePasswordPage.userEmail).type(emailField,{ force: true });
    cy.wait(2000);
    cy.get(userPage.clickSave4.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickSignOut.selector).click();
    cy.wait(1000);
    

    // Then I enter the application again and make the propper changes for the other tests to work
    cy.get(loginPage.elementEmail4).type(emailField);
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton4).click();
    cy.wait(1000);
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickYourProfileButton4.selector).click();
    cy.wait(1000);
    cy.get(changePasswordPage.userEmail).clear();
    cy.get(changePasswordPage.userEmail).type(properties.LOGINEMAIL,{ force: true });
    cy.wait(2000);
    cy.get(userPage.clickSave4.selector).click();
    cy.wait(1000);

  });
    
    

})