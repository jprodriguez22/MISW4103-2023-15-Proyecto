/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')


context('#18 Editar el nombre de un miembro creado por un correo y validar el cambio', () => {
    let memberIndexToEdit = 1;
    // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I edit a member's name
  it('Editar el nombre de un miembro', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeUsers()).then(mockUser => {
      const user1 = mockInterface.getRandom(mockUser)
      cy.get(membersPage.panelButton).click()
      cy.wait(1000);
      cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
      cy.wait(1000);
      cy.get(membersPage.nameField).clear();
      cy.wait(1000);
      cy.get(membersPage.nameField).type(user1.email,{ force: true });
      cy.wait(1000);
      cy.get(membersPage.saveButtonMember).click();
      cy.wait(1000);

      // Then I validate the member's name is updated
      cy.get(membersPage.panelButton).click();
      cy.wait(2000);
    })  
  })
})