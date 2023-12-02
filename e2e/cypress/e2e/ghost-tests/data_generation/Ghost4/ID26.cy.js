/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const properties = require('../../../../../properties.json')

context('#26 Como usuario, elimino todo el contenido de mi página', () => {
  // Given I login to my website Ghost 4
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST4),
    cy.get(loginPage.elementEmail4).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton4).click(),
    cy.wait(2000)
})
  // When I navigate to delete all content
  it('Borrar todo el contenido', () => {
    cy.visit('http://146.190.196.137:3015/ghost/#/settings/labs')
    cy.wait(3000)
    cy.get(settingsPage.deleteAllContent).click()
    cy.wait(1000)
    cy.get(settingsPage.deleteAllContentConfirm).click()
    cy.wait(1000)
    
  });
  // Then I navigate to the dashboard to check the changes
  it('Visitar la página principal y revisar el cambio', () => {
    cy.visit('http://146.190.196.137:3015/ghost/#/dashboard')
    cy.wait(1000)
  })
})