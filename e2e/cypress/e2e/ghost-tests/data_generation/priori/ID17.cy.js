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
    const mockHex = mockInterface.prioriInitializeHex()
    const hex1 = mockInterface.getRandom(mockHex)
    cy.get(settingsPage.settingsTab).click()
    cy.get(settingsPage.editTitle).first().click()
    cy.get(settingsPage.titleField).clear().type(hex1.naughty)
    cy.get(settingsPage.titleSaveButton).first().click()
    cy.wait(500)
    // Then I navigate to the main site and validate the new title on the frontpage and the login page
    cy.visit(homePage.url)
    cy.wait(1000)
    // And I change back the title to the normal one
    cy.visit(properties.GHOST5)
    cy.get(settingsPage.settingsTab).click()
    cy.get(settingsPage.editTitle).first().click()
    cy.get(settingsPage.titleField).clear().type('Grupo 13 - MISW4103')
    cy.get(settingsPage.titleSaveButton).first().click()
    })  
  })