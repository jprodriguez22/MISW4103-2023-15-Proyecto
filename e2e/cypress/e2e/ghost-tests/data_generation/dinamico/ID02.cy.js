/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create and edit a post
  it('Crear y editar un post', () => {
    const mockInterface = new MockarooInterface()
    cy.wrap(mockInterface.dynamicInitializePosts()).then(mockPost => {
      const post = mockInterface.getRandom(mockPost)
      const title = post.title.toLowerCase().replace(" ","-")
      cy.get(postsPage.panelButton).click()    
      cy.get(postsPage.newPostButton).click()
      cy.wait(1000)
      cy.get(postsPage.newPosttitleField).type(title).type('{enter}')
      cy.wait(3000)
      cy.get(postsPage.publishButton).click()
      cy.get(postsPage.continueButton).click()
      cy.get(postsPage.confirmButton).click()
      cy.visit(properties.GHOST5+'/#/editor/post/'+title)
      cy.wait(2000)
      cy.visit(properties.GHOST5)
      cy.wait(1000)
      cy.get(postsPage.panelButton).click()
      cy.wait(1000)
      cy.get('h3').contains(title).click()
      cy.wait(1000)
      cy.get(postsPage.newPosttitleField).type('modify').type('{enter}')
      cy.wait(2000)
      cy.get(postsPage.updateButton).click()
      cy.wait(1000)
      cy.visit(properties.GHOST5+'/#/posts')
      cy.wait(2000)
    })
  });
})