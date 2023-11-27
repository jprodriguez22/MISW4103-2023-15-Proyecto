/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#12 - Crear una página con un número dinámico aleatorio de título', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a new page
  it('Crear un nuevo post', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeUsers()).then(mockUser => {
      const user1 = mockInterface.getRandom(mockUser)
      cy.get(pagesPage.panelButton).click()    
      cy.get(pagesPage.newPageButton).click()
      cy.wait(1000)
      const pageTitle = user1.age // And add a dynamic random age to the page title
      cy.get(pagesPage.newPagetitleField).type(pageTitle)
      cy.get(pagesPage.newPagePostField).type(user1.biography)
      cy.wait(3000)
      cy.get(pagesPage.publishButton).click()
      cy.get(pagesPage.continueButton).click()
      cy.get(pagesPage.confirmButton).click()
      // Then I should access it from the URL
      cy.visit(properties.G5HOME+pageTitle)
    })    
  })
})