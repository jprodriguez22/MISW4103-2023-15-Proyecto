/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const membersPage = require('v../../../page_objects/cypress/membersPage.json');
const tagsPage = require('../../../../../page_objects/cypress/tagsPage.json');
const properties = require('../../../../../properties.json');

context('#6 Crear dos miembros nuevos, asignarles un tag y filtrarlos', () => {
    
  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:2368/ghost');
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I create a new member
  it('Crear dos nuevos miembros', () => {
    cy.get(membersPage.panelButton).click();
    cy.wait(1000);
    cy.get(membersPage.newMemberButton).click();
    cy.wait(1000);
    const uuid = () => Cypress._.random(0, 1e6);
    const nameField = `testname${uuid()}`;
    cy.get(membersPage.nameField).type(nameField,{ force: true });
    cy.wait(1000);
    const member_n = () => Cypress._.random(0, 1e6);
    const emailField = `test.email${member_n()}@gmail.com`;
    cy.get(membersPage.newEmailField).type(emailField, { force: true });
    cy.wait(1000);
    const tag = () => Cypress._.random(0, 1e6);
    const tagField = `testtag${tag()}`;
    cy.get(membersPage.inputField).type(tagField).type('{enter}');
    cy.wait(2000);
    cy.wait(1000);
    cy.get(membersPage.saveButtonMember).click();
    cy.wait(1000);


    // Segundo Miembro //
    cy.get(membersPage.panelButton).click();
    cy.wait(1000);
    cy.get(membersPage.newMemberButton).click();
    cy.wait(1000);
    const n2 = () => Cypress._.random(0, 1e6);
    const n2Field = `testname${n2()}`;
    cy.get(membersPage.nameField).type(n2Field,{ force: true });
    cy.wait(1000);
    const em = () => Cypress._.random(0, 1e6);
    const emField = `test.email${em()}@gmail.com`;
    cy.get(membersPage.newEmailField).type(emField, { force: true });
    cy.wait(1000);
    const tag2 = () => Cypress._.random(0, 1e6);
    const tag2Field = `testtag${tag2()}`;
    cy.get(membersPage.inputField).type(tag2Field).type('{enter}');
    cy.wait(2000);

    cy.wait(1000);
    cy.get(membersPage.saveButtonMember).click();
    
    // Then I apply the filters to see the members
    cy.get(membersPage.panelButton).click();
    cy.wait(2000);
    cy.get(membersPage.filterButton).click();
    cy.wait(1000);
    cy.get(membersPage.display).select('label');
    cy.wait(1000);
    cy.get(membersPage.inputElement).click();
    cy.wait(1000);
    cy.get(membersPage.listItem).click();
    cy.wait(1000);
    cy.get(membersPage.filtersButton).click({ force: true });
    cy.wait(2000);
  });
});