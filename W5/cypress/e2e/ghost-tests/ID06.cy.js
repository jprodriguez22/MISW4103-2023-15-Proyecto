/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const tagsPage = require('../../../page_objects/cypress/tagsPage.json');
const properties = require('../../../properties.json');

context('#6 Crear dos miembros nuevos, asignarles un tag y filtrarlos', () => {
    
  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID06 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID06 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID06 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID06 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 4 - Ghost5")
  });

  // When I create a new member
  it('Crear dos nuevos miembros', () => {
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID06 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 6 - Ghost5")
    cy.get(membersPage.newMemberButton).click();
    cy.screenshot("ID06 - 7 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 8 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6);
    const nameField = `testname${uuid()}`;
    cy.get(membersPage.nameField).type(nameField,{ force: true });
    cy.screenshot("ID06 - 9 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 10 - Ghost5")
    const member_n = () => Cypress._.random(0, 1e6);
    const emailField = `test.email${member_n()}@gmail.com`;
    cy.get(membersPage.newEmailField).type(emailField, { force: true });
    cy.screenshot("ID06 - 11 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 12 - Ghost5")
    const tag = () => Cypress._.random(0, 1e6);
    const tagField = `testtag${tag()}`;
    cy.get(membersPage.inputField).type(tagField).type('{enter}');
    cy.screenshot("ID06 - 13 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID06 - 14 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 15 - Ghost5")
    cy.get(membersPage.saveButtonMember).click();
    cy.screenshot("ID06 - 16 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 17 - Ghost5")


    // Segundo Miembro //
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID06 - 18 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 19 - Ghost5")
    cy.get(membersPage.newMemberButton).click();
    cy.screenshot("ID06 - 20 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 21 - Ghost5")
    const n2 = () => Cypress._.random(0, 1e6);
    const n2Field = `testname${n2()}`;
    cy.get(membersPage.nameField).type(n2Field,{ force: true });
    cy.screenshot("ID06 - 22 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 23 - Ghost5")
    const em = () => Cypress._.random(0, 1e6);
    const emField = `test.email${em()}@gmail.com`;
    cy.get(membersPage.newEmailField).type(emField, { force: true });
    cy.screenshot("ID06 - 24 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 25 - Ghost5")
    const tag2 = () => Cypress._.random(0, 1e6);
    const tag2Field = `testtag${tag2()}`;
    cy.get(membersPage.inputField).type(tag2Field).type('{enter}');
    cy.screenshot("ID06 - 26 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID06 - 27 - Ghost5")

    cy.wait(1000);
    cy.screenshot("ID06 - 28 - Ghost5")
    cy.get(membersPage.saveButtonMember).click();
    cy.screenshot("ID06 - 29 - Ghost5")
    
    // Then I apply the filters to see the members
    cy.get(membersPage.panelButton).click();
    cy.screenshot("ID06 - 30 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID06 - 31 - Ghost5")
    cy.get(membersPage.filterButton).click();
    cy.screenshot("ID06 - 32 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 33 - Ghost5")
    cy.get(membersPage.display).select('label');
    cy.screenshot("ID06 - 34 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 35 - Ghost5")
    cy.get(membersPage.inputElement).click();
    cy.screenshot("ID06 - 36 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 37 - Ghost5")
    cy.get(membersPage.listItem).click();
    cy.screenshot("ID06 - 38 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID06 - 39 - Ghost5")
    cy.get(membersPage.filtersButton).click({ force: true });
    cy.screenshot("ID06 - 40 - Ghost5")
    cy.wait(2000);
    cy.screenshot("ID06 - 41 - Ghost5")
  });
});
