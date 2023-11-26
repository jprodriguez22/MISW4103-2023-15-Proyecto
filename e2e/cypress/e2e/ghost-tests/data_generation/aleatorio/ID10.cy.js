/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const properties = require('../../../../../properties.json');

context('#10 cambiar el tema de la aplicación y navegar al menú de usuario', () => {

  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})

  // When I change the application theme
  it('Editar el nombre de un miembro', () => {
    cy.wait(2000);
    cy.get(userPage.clickThemeButton.selector).click();
    cy.wait(1000);
    
    // Then I validate the theme works in other tabs
    cy.get(userPage.clickUserButton.selector).click();
    cy.wait(1000);
    cy.get(userPage.clickYourProfileButton.selector).click();
    cy.wait(1000);
  });
});
