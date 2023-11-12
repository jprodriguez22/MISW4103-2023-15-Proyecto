/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../page_objects/cypress/postsPage.json')
const properties = require('../../../properties.json')

context('#02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://localhost:2368/ghost'),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a post
  it('Crear un post', () => {
    cy.get(postsPage.panelButton).click()    
    cy.get(postsPage.newPostButton).click()
    cy.wait(1000)
    const uuid = () => Cypress._.random(0, 1e6)
    const postTitle = `testpost${uuid()}`
    cy.get(postsPage.newPosttitleField).type(postTitle).type('{enter}')
    cy.wait(3000)
    cy.get(postsPage.publishButton).click()
    // Then I should access it from the URL
    cy.visit('http://localhost:2368/'+postTitle.toLowerCase())
  })
})