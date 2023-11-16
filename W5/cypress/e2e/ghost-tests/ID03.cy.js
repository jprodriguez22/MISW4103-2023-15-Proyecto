/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../page_objects/cypress/postsPage.json')
const properties = require('../../../properties.json')

context('#03 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo elimino y visualizo listado', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID03 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID03 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID03 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID03 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID03 - 4 - Ghost5")
})
  // When I create and delete a post
  it('Crear y eliminar un post', () => {
    cy.get(postsPage.panelButton).click()    
    cy.screenshot("ID03 - 5 - Ghost5")
    cy.get(postsPage.newPostButton).click()
    cy.screenshot("ID03 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID03 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6)
    const postTitle = `testpost${uuid()}`
    cy.get(postsPage.newPosttitleField).type(postTitle).type('{enter}')
    cy.screenshot("ID03 - 8 - Ghost5")
    cy.wait(3000)
    cy.screenshot("ID03 - 9 - Ghost5")
    cy.get(postsPage.publishButton).click()
    cy.screenshot("ID03 - 10 - Ghost5")
    cy.get(postsPage.continueButton).click()
    cy.screenshot("ID03 - 11 - Ghost5")
    cy.get(postsPage.confirmButton).click()
    cy.screenshot("ID03 - 12 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost/#/editor/post/'+postTitle.toLowerCase())
    cy.screenshot("ID03 - 13 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID03 - 14 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost')
    cy.screenshot("ID03 - 15 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID03 - 16 - Ghost5")
    cy.get(postsPage.panelButton).click()
    cy.screenshot("ID03 - 17 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID03 - 18 - Ghost5")
    cy.get('h3').contains(postTitle).click()
    cy.screenshot("ID03 - 19 - Ghost5")
    cy.get(postsPage.postSettings).click()
    cy.screenshot("ID03 - 20 - Ghost5")
    cy.get(postsPage.deletePostButton).click()
    cy.screenshot("ID03 - 21 - Ghost5")
    cy.get(postsPage.deleteConfirmButton).filter(':visible').click()
    cy.screenshot("ID03 - 22 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID03 - 23 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost/#/posts')
    cy.screenshot("ID03 - 24 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID03 - 25 - Ghost5")
  });
})
