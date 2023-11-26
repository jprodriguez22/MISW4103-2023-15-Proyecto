/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')

context('#13 Crear una página nueva y agregarla en el navbar', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://localhost:2368/ghost'),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a new announcement
  it('Crear un nuevo anuncio en la página', () => {
    cy.visit(settingsPage.announcementSettingsURL)
    cy.get(settingsPage.announcementTextField).clear().type(`announcement${uuid()}`)
    cy.get(settingsPage.announcementfreeMembersInput).click()
    cy.get(settingsPage.announcementvisitorsInput).click()
    cy.get(settingsPage.announcementsaveButton).click()
    // Then I validate it in the homepage
    cy.visit(homePage.url)
  });
})