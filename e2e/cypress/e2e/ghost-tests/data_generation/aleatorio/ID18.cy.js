/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json');

context('#18 Eliminar un miembro', () => {
  let memberIndexToEdit = 1;

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:2368/ghost');
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I edit delete a member
  it('Eliminar un miembro', () => {
    cy.get(membersPage.panelButton).click();
    cy.wait(1000);
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.wait(1000);
    cy.get(membersPage.settingsButton).click();
    cy.wait(1000);
    cy.get(membersPage.deleteButton).click();
    cy.wait(1000);
    cy.get(membersPage.confirmButton).click();
    cy.wait(1000);

    // Then I validate the member is gone
    cy.get(membersPage.panelButton).click();
    cy.wait(3000);
  });
});
