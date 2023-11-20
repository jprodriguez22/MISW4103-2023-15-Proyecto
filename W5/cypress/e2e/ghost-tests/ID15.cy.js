/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const properties = require('../../../properties.json');

context('#15 Crear una nota descriptiva y validarla', () => {
  let memberIndexToClick = 1;


  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID15 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID15 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID15 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID15 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID15 - 4 - Ghost5")
  });

  // When I create a new note
  it('Crear una nueva nota', () => {
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID15 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID15 - 6 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToClick).click();
    cy.screenshot("ID15 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID15 - 8 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6);
    const noteField = `testnote${uuid()}`;
    cy.get(membersPage.noteField).type(noteField).type('{enter}');
    cy.screenshot("ID15 - 9 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID15 - 10 - Ghost5")
    cy.get(membersPage.saveButtonMember).click();
    cy.screenshot("ID15 - 11 - Ghost5")
    
    // Then I validate the note is saved for the member
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID15 - 12 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID15 - 13 - Ghost5")
    cy.get(membersPage.memberButton).eq(memberIndexToClick).click();
    cy.screenshot("ID15 - 14 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID15 - 15 - Ghost5")
  });
});


