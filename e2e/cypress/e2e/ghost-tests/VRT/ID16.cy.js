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
    cy.screenshot("ID16 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID16 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID16 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID16 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID16 - 4 - Ghost5")
})
  // When I create a new page
  it('Crear una nueva página y visitarla', () => {
    cy.get(pagesPage.panelButton).click()    
    cy.screenshot("ID16 - 5 - Ghost5")
    cy.get(pagesPage.newPageButton).click()
    cy.screenshot("ID16 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID16 - 7 - Ghost5")
    cy.get(pagesPage.newPagetitleField).type(pageTitle).type('{enter}')
    cy.screenshot("ID16 - 8 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID16 - 9 - Ghost5")
    cy.get(pagesPage.publishButton).click()
    cy.screenshot("ID16 - 10 - Ghost5")
    cy.get(pagesPage.continueButton).click()
    cy.screenshot("ID16 - 11 - Ghost5")
    cy.get(pagesPage.confirmButton).click()
    cy.screenshot("ID16 - 12 - Ghost5")
    cy.visit('http://146.190.196.137:2368/'+pageTitle.toLowerCase())
    cy.screenshot("ID16 - 13 - Ghost5")
  });
  // Then I delete it from the webpage and confirm its elimination
  it('Eliminar la página y validar su eliminación', () => {
    cy.get(pagesPage.panelButton).click()
    cy.screenshot("ID16 - 14 - Ghost5")
    cy.get('h3').contains(pageTitle).click()
    cy.screenshot("ID16 - 15 - Ghost5")
    cy.get(pagesPage.pageSettings).click()
    cy.screenshot("ID16 - 16 - Ghost5")
    cy.get(pagesPage.deletePageButton).click()
    cy.screenshot("ID16 - 17 - Ghost5")
    cy.get(pagesPage.deleteConfirmButton).filter(':visible').click()
    cy.screenshot("ID16 - 18 - Ghost5")
  })
})
