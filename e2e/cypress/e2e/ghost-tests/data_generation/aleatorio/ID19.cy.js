/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json');

context('#19 Editar el nombre de un miembro creado y validar el cambio', () => {
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

  // When I edit a member's name
  it('Editar el nombre de un miembro', () => {
    cy.get(membersPage.panelButton).click();
    cy.wait(1000);
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.wait(1000);
    const uuid = () => Cypress._.random(0, 1e6);
    const nameField = `testname${uuid()}`;
    cy.get(membersPage.nameField).type(nameField,{ force: true });
    cy.wait(1000);
    cy.get(membersPage.saveButtonMember).click();

    // Then I validate the member's name is updated
    cy.get(membersPage.panelButton).click();
    cy.wait(2000);
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.wait(2000);
  });
});
