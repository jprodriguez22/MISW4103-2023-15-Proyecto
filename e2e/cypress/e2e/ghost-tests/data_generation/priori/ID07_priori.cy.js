/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')


context('#7 Editar el correo de un miembro creado y validar el cambio', () => {
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
  // When I edit a member's email for a naughty string
  it('Editar el correo de un miembro', () => {
    const mockInterface = new MockarooInterface()
    const mockHex = mockInterface.prioriInitializeHex()
    const hex1 = mockInterface.getRandom(mockHex)
      cy.get(membersPage.panelButton).click()
      cy.wait(1000);
      cy.get(membersPage.memberButton).eq(memberIndexToEdit).click();
      cy.wait(1000);
      cy.get(membersPage.newEmailField).clear({ force: true });
      cy.wait(1000);
      cy.get(membersPage.newEmailField).type(hex1.naughty,{ force: true });
      cy.wait(1000);
      cy.get(membersPage.saveButtonMember).click();
      cy.wait(1000);

      // Then I validate the member's email is not updated (would be a mistake)
      cy.get(membersPage.panelButton).click();
      cy.wait(2000);
    })  
  })
