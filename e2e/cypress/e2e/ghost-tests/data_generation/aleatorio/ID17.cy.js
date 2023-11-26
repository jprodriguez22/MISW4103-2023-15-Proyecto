/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')

const uuid = () => Cypress._.random(0, 1e9)
const webPageTitle = `Titulo: ${uuid()}`

context('#17 Cambiar el título de la página web', () => {
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
    cy.get(settingsPage.settingsTab).click()
    cy.get(settingsPage.editTitle).first().click()
    cy.get(settingsPage.titleField).clear().type(webPageTitle)
    cy.get(settingsPage.titleSaveButton).first().click()
    cy.wait(500)
  });
  // Then I navigate to the main site and validate the new title on the frontpage and the loginpage
  it('Visitar la página principal y revisar el cambio', () => {
    cy.visit(homePage.url)
    cy.wait(1000)
  })
})