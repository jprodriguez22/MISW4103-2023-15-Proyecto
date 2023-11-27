/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#05 Como usuario, creo un miembro y valido el incremento', () => {
  // Given I login to my website
  before(name, () => {
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
    const mockMember = mockInterface.prioriInitializeMembers()
    const member = mockInterface.getRandom(mockMember)
    const nameMember = "vu3Vc$pavaFz?0g1,[Z4;(9_&r}{@d!jV!4QB7ZH"
    const emailMember = member.email
    cy.get(membersPage.panelButton).click()  
    cy.wait(2000)  
    cy.get(membersPage.newMemberButton).click()
    cy.wait(1000)
    cy.get(membersPage.newMemberNameField).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberEmailField).scrollIntoView({ scrollBehavior: false }).type(emailMember, { force: true })
    cy.wait(2000)
    cy.get(membersPage.saveButton).click()
    cy.visit(properties.GHOST5+'/#/members')
    cy.wait(2000)
  })
})