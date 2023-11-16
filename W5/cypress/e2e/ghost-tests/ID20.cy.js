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
    cy.screenshot("ID20 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID20 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID20 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID20 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID20 - 4 - Ghost5")
})
  // When I create a new announcement
  it('Crear un nuevo anuncio en la página', () => {
    cy.visit(settingsPage.announcementSettingsURL)
    cy.screenshot("ID20 - 5 - Ghost5")
    cy.get(settingsPage.announcementTextField).clear().type(`announcement${uuid()}`)
    cy.screenshot("ID20 - 6 - Ghost5")
    cy.get(settingsPage.announcementfreeMembersInput).click()
    cy.screenshot("ID20 - 7 - Ghost5")
    cy.get(settingsPage.announcementvisitorsInput).click()
    cy.screenshot("ID20 - 8 - Ghost5")
    cy.get(settingsPage.announcementsaveButton).click()
    cy.screenshot("ID20 - 9 - Ghost5")
    // Then I validate it in the homepage
    cy.visit(homePage.url)
    cy.screenshot("ID20 - 10 - Ghost5")
  });
})
