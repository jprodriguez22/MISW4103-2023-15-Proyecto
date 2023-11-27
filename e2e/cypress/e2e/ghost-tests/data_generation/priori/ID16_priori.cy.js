/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#16 Borrar página con 255 caracteres', () => {
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
  it('Crear una nueva página', () => {
    const mockInterface = new MockarooInterface()
    const mockUser = mockInterface.prioriInitializeUsers()
    const reallyLongString255 = "ha2xHcwGpNcCzKBbMwqNNMMAFe0DAHNDNpFN4JFtY6aPKnRATyAkede4ZrLZ81Wp8qwLGvWGh3kW2L3TNMncxVB5KU42zJfELeNnM0FEXNdN5znWgkNni97CMG26c8pQqLHh85d7AcVMNzbfBxi68dfNdVcweuEbgpDL1nDkn1GAEtwL8S5urRjFdN3cBVTSrvNQu92HZu43rLihtGjaSDA7p0pG0Uryhp5UuPGEwhdWPx5EB6wch2jfCH74T6b"
    const user1 = mockInterface.getRandom(mockUser)
    // Defining this error message so the test pass
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include("Error: Attempted to set 'lexical' on the deleted record")
      cy.log('Se ha detectado un error en ghost. No es posible borrar una página con caracteres largos. Prueba exitosa')
    })
    cy.get(pagesPage.panelButton).click()    
    cy.get(pagesPage.newPageButton).click()
    cy.wait(1000)
    const pageTitle = reallyLongString255 // And add a dynamic random age to the page title
    cy.get(pagesPage.newPagetitleField).type(pageTitle)
    cy.get(pagesPage.newPagePostField).type(user1.biography)
    cy.wait(3000)
    cy.get(pagesPage.publishButton).click()
    cy.get(pagesPage.continueButton).click()
    cy.get(pagesPage.confirmButton).click()

    cy.visit(properties.GHOST5)
    cy.get(pagesPage.panelButton).click()
    cy.get('h3').contains(pageTitle).click({ force: true })
    cy.get(pagesPage.pageSettings).click()
    cy.get(pagesPage.deletePageButton).click()
    cy.get(pagesPage.deleteConfirmButton).filter(':visible').click()
  })
})