/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json')

context('#23 Como usuario, quiero crear 2 miembros con el mismo correo', () => {
  // Given I login to my website Ghost 4
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST4),
    cy.get(loginPage.elementEmail4).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton4).click(),
    cy.wait(3000)
})
  // When create 2 members with the same email
  it('Crear 2 miembros con el mismo correo', () => {
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    const uuid = () => Cypress._.random(0, 1e6)
    const nameMember = `nameMember${uuid()}`
    const nameMember2 = `nameMember${uuid()}`
    const emailMember = `emailMember${uuid()}@gmail.com`
    cy.wait(1000)
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    cy.wait(1000)
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember2, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    
    
  });
  // Then I try to validate the changes, it shouldnt let me
  it('Visitar la pestaña de miembros y revisar el cambio', () => {
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
  })
})