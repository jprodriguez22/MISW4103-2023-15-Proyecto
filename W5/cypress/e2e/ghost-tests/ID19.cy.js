/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const properties = require('../../../properties.json');

context('#19 Editar el nombre de un miembro creado y validar el cambio', () => {
  let memberIndexToEdit = 1;

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID19 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID19 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID19 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID19 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID19 - 4 - Ghost5")
  });

  // When I edit a member's name
  it('Editar el nombre de un miembro', () => {
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID19 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID19 - 6 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.screenshot("ID19 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID19 - 8 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6);
    const nameField = `testname${uuid()}`;
    cy.get(membersPage.nameField).type(nameField,{ force: true });
    cy.screenshot("ID19 - 9 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID19 - 10 - Ghost5")
    cy.get(membersPage.saveButtonMember).click();
    cy.screenshot("ID19 - 11 - Ghost5")

    // Then I validate the member's name is updated
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID19 - 12 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID19 - 13 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.screenshot("ID19 - 14 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID19 - 15 - Ghost5")
  });
});

