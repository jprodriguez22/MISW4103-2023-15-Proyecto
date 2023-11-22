/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../page_objects/cypress/userPage.json');
const properties = require('../../../properties.json');

context('#10 cambiar el tema de la aplicación y navegar al menú de usuario', () => {

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID10 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID10 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID10 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID10 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID10 - 4 - Ghost5")
  });

  // When I change the application theme
  it('Editar el nombre de un miembro', () => {
    cy.wait(2000);
    cy.screenshot("ID10 - 5 - Ghost5")
    cy.get(userPage.clickThemeButton.selector).click();
    cy.screenshot("ID10 - 6 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID10 - 7 - Ghost5")
    
    // Then I validate the theme works in other tabs
    cy.get(userPage.clickUserButton.selector).click();
    cy.screenshot("ID10 - 8 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID10 - 9 - Ghost5")
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.screenshot("ID10 - 10 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID10 - 11 - Ghost5")
  });
});

