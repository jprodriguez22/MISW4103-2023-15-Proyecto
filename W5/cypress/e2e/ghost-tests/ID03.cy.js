/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../page_objects/cypress/postsPage.json')
const properties = require('../../../properties.json')

context('#03 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo elimino y visualizo listado', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://localhost:2368/ghost'),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create and delete a post
  it('Crear y eliminar un post', () => {
    cy.get(postsPage.panelButton).click()    
    cy.get(postsPage.newPostButton).click()
    cy.wait(1000)
    const uuid = () => Cypress._.random(0, 1e6)
    const postTitle = `testpost${uuid()}`
    cy.get(postsPage.newPosttitleField).type(postTitle).type('{enter}')
    cy.wait(3000)
    cy.get(postsPage.publishButton).click()
    cy.visit('http://localhost:2368/ghost/#/editor/post/'+postTitle.toLowerCase())
    cy.wait(3000)
    cy.get(postsPage.panelButton).click()
    cy.get('h3').contains(postTitle).click()
    cy.get(postsPage.deletePageButton).click()
    cy.get(postsPage.deleteConfirmButton).filter(':visible').click()
    cy.get(postsPage.panelButton).click()
    cy.wait(1000)
    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(2000)
  });
})