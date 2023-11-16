/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const properties = require('../../../properties.json');

context('#18 Eliminar un miembro', () => {
  let memberIndexToEdit = 1;

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID18 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID18 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID18 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID18 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 4 - Ghost5")
  });

  // When I edit delete a member
  it('Eliminar un miembro', () => {
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID18 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 6 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.screenshot("ID18 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 8 - Ghost5")
    cy.get(membersPage.settingsButton).click();
    cy.screenshot("ID18 - 9 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 10 - Ghost5")
    cy.get(membersPage.deleteButton).click();
    cy.screenshot("ID18 - 11 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 12 - Ghost5")
    cy.get(membersPage.confirmButton).click();
    cy.screenshot("ID18 - 13 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID18 - 14 - Ghost5")

    // Then I validate the member is gone
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID18 - 15 - Ghost5")
    cy.wait(3000);
    cy.screenshot("ID18 - 16 - Ghost5")
  });
});

