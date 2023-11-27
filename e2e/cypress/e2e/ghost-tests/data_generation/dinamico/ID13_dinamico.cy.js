/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#13 Crear una página nueva y agregarla en el navbar', () => {
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
  it('Crear una nueva página', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeUsers()).then(mockUser => {
      const user1 = mockInterface.getRandom(mockUser)
      const user2 = mockInterface.getRandom(mockUser)
      cy.get(pagesPage.panelButton).click()    
      cy.get(pagesPage.newPageButton).click()
      cy.wait(1000)
      const pageTitle = user2.paragraph.replace(/[@.,]/g, "") // And add a dynamic random age to the page title
      cy.get(pagesPage.newPagetitleField).type(pageTitle)
      cy.get(pagesPage.newPagePostField).type(user1.biography)
      cy.wait(3000)
      cy.get(pagesPage.publishButton).click()
      cy.get(pagesPage.continueButton).click()
      cy.get(pagesPage.confirmButton).click()

      cy.visit(properties.GHOST5)
      cy.visit(settingsPage.navigationSettingsURL)
      cy.wait(1000)
      cy.get(settingsPage.newNavInput).filter(':visible').type(pageTitle)
      cy.get(settingsPage.newNavUrl).filter(':visible').last().type(pageTitle.toLowerCase().replace(/[@. ]/g, "-")).type('{enter}')
      cy.wait(1000)
      cy.get(settingsPage.newNavOkButton).click()
      // Then I navigate to the homepage
      cy.visit(homePage.url)
    })
  })
})