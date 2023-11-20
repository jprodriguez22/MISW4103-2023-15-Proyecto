/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../page_objects/cypress/pagesPage.json')
const properties = require('../../../properties.json')

context('#12 Crear una página nueva y navegar hacia ella', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID12 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID12 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID12 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID12 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID12 - 4 - Ghost5")
})
  // When I create a new page
  it('Crear un nuevo post', () => {
    cy.get(pagesPage.panelButton).click()    
    cy.screenshot("ID12 - 5 - Ghost5")
    cy.get(pagesPage.newPageButton).click()
    cy.screenshot("ID12 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID12 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6)
    const pageTitle = `testpage${uuid()}`
    cy.get(pagesPage.newPagetitleField).type(pageTitle).type('{enter}')
    cy.screenshot("ID12 - 8 - Ghost5")
    cy.wait(3000)
    cy.screenshot("ID12 - 9 - Ghost5")
    cy.get(pagesPage.publishButton).click()
    cy.screenshot("ID12 - 10 - Ghost5")
    cy.get(pagesPage.continueButton).click()
    cy.screenshot("ID12 - 11 - Ghost5")
    cy.get(pagesPage.confirmButton).click()
    cy.screenshot("ID12 - 12 - Ghost5")
    // Then I should access it from the URL
    cy.visit('http://146.190.196.137:2368/'+pageTitle.toLowerCase())
    cy.screenshot("ID12 - 13 - Ghost5")
  })
})
