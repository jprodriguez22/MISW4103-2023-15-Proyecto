/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#04 Como usuario, creo un miembro y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a member
  it('Crear un member', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeMembers()).then(mockMember => {
      const member = mockInterface.getRandom(mockMember)
      const nameMember = member.name.toLowerCase().replace(" ","-")
      const emailMember = member.email
      cy.get(membersPage.panelButton).click()    
      cy.get(membersPage.newMemberButton).click()
      cy.wait(1000)
      cy.get(membersPage.newMemberNameField).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
      cy.get(membersPage.newMemberEmailField).scrollIntoView({ scrollBehavior: false }).type(emailMember, { force: true })
      cy.wait(2000)
      cy.get(membersPage.saveButton).click()
      cy.wait(2000)
    })
  })
})