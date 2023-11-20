/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const properties = require('../../../properties.json');

context('#7 Editar el correo de un miembro creado y validar el cambio', () => {
  let memberIndexToEdit = 1;

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID07 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID07 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID07 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID07 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID07 - 4 - Ghost5")
  });

  // When I edit a member's mail
  it('Editar el correo de un miembro', () => {
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID07 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID07 - 6 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.screenshot("ID07 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID07 - 8 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6);
    const emailField = `test.email${uuid()}@gmail.com`;
    cy.get(membersPage.newEmailField).clear({ force: true });
    cy.screenshot("ID07 - 9 - Ghost5")
    cy.get(membersPage.newEmailField).type(emailField, { force: true });
    cy.screenshot("ID07 - 10 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID07 - 11 - Ghost5")
    cy.get(membersPage.saveButtonMember).click();
    cy.screenshot("ID07 - 12 - Ghost5")

    // Then I validate the member's mail is updated
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID07 - 13 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID07 - 14 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
    cy.screenshot("ID07 - 15 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID07 - 16 - Ghost5")
  });
});

