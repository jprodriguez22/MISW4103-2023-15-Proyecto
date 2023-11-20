/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../page_objects/cypress/homePage.json')
const properties = require('../../../properties.json')

const uuid = () => Cypress._.random(0, 1e9)
const webPageTitle = `Titulo: ${uuid()}`

context('#17 Cambiar el título de la página web', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID17 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID17 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID17 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID17 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID17 - 4 - Ghost5")
})
  // When I navigate to the title settings and change it
  it('Cambiar el título de la página', () => {
    cy.get(settingsPage.settingsTab).click()
    cy.screenshot("ID17 - 5 - Ghost5")
    cy.get(settingsPage.editTitle).first().click()
    cy.screenshot("ID17 - 6 - Ghost5")
    cy.get(settingsPage.titleField).clear().type(webPageTitle)
    cy.screenshot("ID17 - 7 - Ghost5")
    cy.get(settingsPage.titleSaveButton).first().click()
    cy.screenshot("ID17 - 8 - Ghost5")
    cy.wait(500)
    cy.screenshot("ID17 - 9 - Ghost5")
  });
  // Then I navigate to the main site and validate the new title on the frontpage and the loginpage
  it('Visitar la página principal y revisar el cambio', () => {
    cy.visit(homePage.url)
    cy.screenshot("ID17 - 10 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID17 - 11 - Ghost5")
  })
})
