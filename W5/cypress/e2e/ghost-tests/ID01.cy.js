/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../page_objects/cypress/postsPage.json')
const properties = require('../../../properties.json')

context('#01 Como usuario, creo un post, lo publico y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  before(name, () => {
    cy.viewport('macbook-16'),
    cy.visit('http://146.190.196.137:2368/ghost'),
    cy.screenshot("ID01 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.screenshot("ID01 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.screenshot("ID01 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click(),
    cy.screenshot("ID01 - 3 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID01 - 4 - Ghost5")
})
  // When I create a post
  it('Crear un post', () => {
    cy.get(postsPage.panelButton).click()    
    cy.screenshot("ID01 - 5 - Ghost5")
    cy.get(postsPage.newPostButton).click()
    cy.screenshot("ID01 - 6 - Ghost5")
    cy.wait(1000)
    cy.screenshot("ID01 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6)
    const postTitle = `testpost${uuid()}`
    cy.get(postsPage.newPosttitleField).type(postTitle).type('{enter}')
    cy.screenshot("ID01 - 8 - Ghost5")
    cy.wait(3000)
    cy.screenshot("ID01 - 9 - Ghost5")
    cy.get(postsPage.publishButton).click()
    cy.screenshot("ID01 - 10 - Ghost5")
    cy.get(postsPage.continueButton).click()
    cy.screenshot("ID01 - 11 - Ghost5")
    cy.get(postsPage.confirmButton).click()
    cy.screenshot("ID01 - 12 - Ghost5")
    cy.visit('http://146.190.196.137:2368/ghost/#/editor/post/'+postTitle.toLowerCase())
    cy.screenshot("ID01 - 13 - Ghost5")
    cy.wait(2000)
    cy.screenshot("ID01 - 14 - Ghost5")
  })
})
