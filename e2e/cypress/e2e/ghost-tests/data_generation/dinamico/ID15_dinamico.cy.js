/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#15 - Crear una nota descriptiva con un name random', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a new note
  it('Crear una nueva nota', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeMembers()).then(mockMember => {
      const member = mockInterface.getRandom(mockMember)
      cy.get(membersPage.panelButton).click();
      cy.wait(1000);
      cy.get(membersPage.memberButton).eq(memberIndexToClick).click();
      cy.wait(1000);
      const note = member.name 
      cy.get(membersPage.noteField).type(note).type('{enter}');
      ccy.wait(2000);
      cy.get(membersPage.saveButtonMember).click();
      
      // Then I validate the note is saved for the member
      cy.get(membersPage.panelButton).click();
      cy.wait(2000);
      cy.get(membersPage.memberButton).eq(memberIndexToClick).click();
      cy.wait(2000);
    })    
  })
})