/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const membersPage = require('../../../page_objects/cypress/membersPage.json')
const properties = require('../../../properties.json')

context('#04 Como usuario, creo un miembro y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID04 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID04 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID04 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID04 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID04 - 4 - Ghost5")
})
  // When I create a member
  it('Crear un member', () => {
    cy.get(membersPage.panelButton).click()    
    cy.screenshot("ID04 - 5 - Ghost5")
    cy.get(membersPage.newMemberButton).click()
    cy.screenshot("ID04 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID04 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6)
    const nameMember = `nameMember${uuid()}`
    const emailMember = `emailMember${uuid()}@gmail.com`
    cy.wait(2000)
    cy.screenshot("ID04 - 8 - Ghost5")
    cy.get(membersPage.newMemberNameField).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.screenshot("ID04 - 9 - Ghost5")
    cy.get(membersPage.newMemberEmailField).scrollIntoView({ scrollBehavior: false }).type(emailMember, { force: true })
    cy.screenshot("ID04 - 10 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID04 - 11 - Ghost5")
    cy.get(membersPage.saveButton).click()
    cy.screenshot("ID04 - 12 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID04 - 13 - Ghost5")
  })
})
