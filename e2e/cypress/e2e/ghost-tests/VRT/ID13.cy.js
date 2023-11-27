/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../page_objects/cypress/homePage.json')
const properties = require('../../../properties.json')

const uuid = () => Cypress._.random(0, 1e9)
const pageTitle = `testpage${uuid()}`

context('#13 Crear una página nueva y agregarla en el navbar', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID13 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID13 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID13 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID13 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID13 - 4 - Ghost5")
})
  // When I create a new page
  it('Crear una nueva página', () => {
    cy.get(pagesPage.panelButton).click()    
    cy.screenshot("ID13 - 5 - Ghost5")
    cy.get(pagesPage.newPageButton).click()
    cy.screenshot("ID13 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID13 - 7 - Ghost5")
    cy.get(pagesPage.newPagetitleField).type(pageTitle).type('{enter}')
    cy.screenshot("ID13 - 8 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID13 - 9 - Ghost5")
    cy.get(pagesPage.publishButton).click()
    cy.screenshot("ID13 - 10 - Ghost5")
    cy.get(pagesPage.continueButton).click()
    cy.screenshot("ID13 - 11 - Ghost5")
    cy.get(pagesPage.confirmButton).click()
    cy.screenshot("ID13 - 12 - Ghost5")
  });
  // And I add it to the navbar
  it('Agregar el nuevo post a la barra de navegación y acceder a él', () => {
    cy.visit(settingsPage.navigationSettingsURL)
    cy.screenshot("ID13 - 13 - Ghost5")
    cy.wait(500)
    cy.screenshot("ID13 - 14 - Ghost5")
    cy.get(settingsPage.newNavInput).filter(':visible').type(pageTitle)
    cy.screenshot("ID13 - 15 - Ghost5")
    cy.get(settingsPage.newNavUrl).filter(':visible').last().type(pageTitle)
    cy.screenshot("ID13 - 16 - Ghost5")
    cy.get(settingsPage.newNavOkButton).click()
    cy.screenshot("ID13 - 17 - Ghost5")
    // Then I navigate to the homepage and select the element in the navbar
    cy.visit(homePage.url)
    cy.screenshot("ID13 - 18 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID13 - 19 - Ghost5")
    cy.get('.nav-'+pageTitle.toLowerCase())
    cy.screenshot("ID13 - 20 - Ghost5")
  })
})
