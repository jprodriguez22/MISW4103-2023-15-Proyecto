/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface');

context('#6 - Crear dos nuevos miembros con nombre y email random de x caracteres, asignarles un tag de su nombre y aplicar un filtro', () => {
  // Given I login to my website
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit(properties.GHOST5);
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I create a new member
  it('Crear dos nuevos miembros', () => {
    const mockInterface = new MockarooInterface();
    cy.wrap(mockInterface.dynamicInitializeMembers()).then(mockMember => {
      const member = mockInterface.getRandom(mockMember);
      const name = member.name;
      const email = member.email;
      const tag = member.name;

      // Primer Miembro
      cy.get(membersPage.panelButton).click();
      cy.wait(1000);
      cy.get(membersPage.newMemberButton).click();
      cy.wait(1000);
      cy.get(membersPage.newNameField).scrollIntoView({ scrollBehavior: false }).type(name, { force: true });
      cy.wait(1000);
      cy.get(membersPage.newEmailField).scrollIntoView({ scrollBehavior: false }).type(email, { force: true });
      cy.wait(1000);
      cy.get(membersPage.inputField).type(tag).type('{enter}');
      cy.wait(2000);
      cy.wait(1000);
      cy.get(membersPage.saveButtonMember).click();
      cy.wait(1000);

      // Segundo Miembro
      const mockInterface2 = new MockarooInterface();
      cy.wrap(mockInterface2.dynamicInitializeMembers()).then(mockMember2 => {
        const member2 = mockInterface2.getRandom(mockMember2);
        const name2 = member2.name;
        const email2 = member2.email;
        const tag2 = member2.name;
        cy.get(membersPage.panelButton).click();
        cy.wait(1000);
        cy.get(membersPage.newMemberButton).click();
        cy.wait(1000);
        cy.get(membersPage.newNameField).scrollIntoView({ scrollBehavior: false }).type(name2, { force: true });
        cy.wait(1000);
        cy.get(membersPage.newEmailField).scrollIntoView({ scrollBehavior: false }).type(email2, { force: true });
        cy.wait(1000);
        cy.get(membersPage.inputField).type(tag2).type('{enter}');
        cy.wait(2000);
        cy.wait(1000);
        cy.get(membersPage.saveButtonMember).click();
        cy.wait(1000);

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
  });
});
