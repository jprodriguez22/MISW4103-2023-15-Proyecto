/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../page_objects/cypress/postsPage.json')
const properties = require('../../../properties.json')

context('#02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID02 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID02 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID02 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID02 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 4 - Ghost5")
})
  // When I create and edit a post
  it('Crear y editar un post', () => {
    cy.get(postsPage.panelButton).click()    
    cy.screenshot("ID02 - 5 - Ghost5")
    cy.get(postsPage.newPostButton).click()
    cy.screenshot("ID02 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6)
    const postTitle = `testpost${uuid()}`
    cy.get(postsPage.newPosttitleField).type(postTitle).type('{enter}')
    cy.screenshot("ID02 - 8 - Ghost5")
    cy.wait(3000)
    cy.screenshot("ID02 - 9 - Ghost5")
    cy.get(postsPage.publishButton).click()
    cy.screenshot("ID02 - 10 - Ghost5")
    cy.get(postsPage.continueButton).click()
    cy.screenshot("ID02 - 11 - Ghost5")
    cy.get(postsPage.confirmButton).click()
    cy.screenshot("ID02 - 12 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost/#/editor/post/'+postTitle.toLowerCase())
    cy.screenshot("ID02 - 13 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID02 - 14 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost')
    cy.screenshot("ID02 - 15 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 16 - Ghost5")
    cy.get(postsPage.panelButton).click()
    cy.screenshot("ID02 - 17 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 18 - Ghost5")
    cy.get('h3').contains(postTitle).click()
    cy.screenshot("ID02 - 19 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 20 - Ghost5")
    cy.get(postsPage.newPosttitleField).type('modify').type('{enter}')
    cy.screenshot("ID02 - 21 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID02 - 22 - Ghost5")
    cy.get(postsPage.updateButton).click()
    cy.screenshot("ID02 - 23 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID02 - 24 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost/#/posts')
    cy.screenshot("ID02 - 25 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID02 - 26 - Ghost5")
  });
})
