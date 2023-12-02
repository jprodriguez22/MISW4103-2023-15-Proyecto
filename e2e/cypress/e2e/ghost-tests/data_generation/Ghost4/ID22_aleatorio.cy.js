/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json')

context('#22 Como usuario, quiero crear 5 mimebros con el mismo nombre y diferente correo', () => {
  // Given I login to my website Ghost 4
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST4),
    cy.get(loginPage.elementEmail4).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton4).click(),
    cy.wait(3000)
})
  // When create 5 members
  it('Crear 5 miembros', () => {
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    const uuid = () => Cypress._.random(0, 1e6)
    const nameMember = `nameMember${uuid()}`
    const emailMember = `emailMember${uuid()}@gmail.com`
    const emailMember2 = `emailMember${uuid()}@gmail.com`
    const emailMember3 = `emailMember${uuid()}@gmail.com`
    const emailMember4 = `emailMember${uuid()}@gmail.com`
    const emailMember5 = `emailMember${uuid()}@gmail.com`
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
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember2, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    cy.wait(1000)
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember3, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    cy.wait(1000)
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember4, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
    cy.get(membersPage.newMember4).click();
    cy.wait(1000)
    cy.wait(1000)
    cy.get(membersPage.newMembername4).scrollIntoView({ scrollBehavior: false }).type(nameMember, { force: true })
    cy.get(membersPage.newMemberemail4).scrollIntoView({ scrollBehavior: false }).type(emailMember5, { force: true })
    cy.wait(1000)
    cy.get(membersPage.saveMember4).click();
    cy.wait(1000)
    
  });
  // Then I navigate to the members page to check the changes
  it('Visitar la pestaña de miembros y revisar el cambio', () => {
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
  })
})