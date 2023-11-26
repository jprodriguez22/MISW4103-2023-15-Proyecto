/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#17 Cambiar el título de la página web por un naughty string en el título', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I navigate to the title settings and change it
  it('Cambiar el título de la página', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializeHex()).then(mockHex => {
      const hex1 = mockInterface.getRandom(mockHex)
      cy.visit(settingsPage.announcementSettingsURL)
      cy.get(settingsPage.announcementTextField).clear().type(hex1.naughty.replace(/[.,]/g, "           "))
      cy.wait(2000)
      cy.get(settingsPage.announcementsaveButton).click( { force: true } )
      cy.wait(1000)
      // Then I validate it in the homepage
      cy.visit(homePage.url)
    })  
  })
})