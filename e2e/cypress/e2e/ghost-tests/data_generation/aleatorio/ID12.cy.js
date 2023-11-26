/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const properties = require('../../../../../properties.json')

context('#12 Crear una página nueva y navegar hacia ella', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://localhost:2368/ghost'),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a new page
  it('Crear un nuevo post', () => {
    cy.get(pagesPage.panelButton).click()    
    cy.get(pagesPage.newPageButton).click()
    cy.wait(1000)
    const uuid = () => Cypress._.random(0, 1e6)
    const pageTitle = `testpage${uuid()}`
    cy.get(pagesPage.newPagetitleField).type(pageTitle).type('{enter}')
    cy.wait(3000)
    cy.get(pagesPage.publishButton).click()
    cy.get(pagesPage.continueButton).click()
    cy.get(pagesPage.confirmButton).click()
    // Then I should access it from the URL
    cy.visit('http://localhost:2368/'+pageTitle.toLowerCase())
  })
})