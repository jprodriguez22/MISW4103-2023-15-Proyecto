/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')

const uuid = () => Cypress._.random(0, 1e9)
const pageTitle = `testpage${uuid()}`

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
  it('Crear una nueva página y visitarla', () => {
    cy.get(pagesPage.panelButton).click()    
    cy.get(pagesPage.newPageButton).click()
    cy.wait(1000)
    cy.get(pagesPage.newPagetitleField).type(pageTitle).type('{enter}')
    cy.wait(2000)
    cy.get(pagesPage.publishButton).click()
    cy.get(pagesPage.continueButton).click()
    cy.get(pagesPage.confirmButton).click()
    cy.visit('http://146.190.196.137:2368/'+pageTitle.toLowerCase())
  });
  // Then I delete it from the webpage and confirm its elimination
  it('Eliminar la página y validar su eliminación', () => {
    cy.get(pagesPage.panelButton).click()
    cy.get('h3').contains(pageTitle).click()
    cy.get(pagesPage.pageSettings).click()
    cy.get(pagesPage.deletePageButton).click()
    cy.get(pagesPage.deleteConfirmButton).filter(':visible').click()
  })
})