/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL', () => {
  // Given I login to my website
  before(name, () => {
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
    const mockPost = mockInterface.prioriInitializePosts()
    const post = mockInterface.getRandom(mockPost)
    const title = post.title.toLowerCase().replace(" ","-")
    const body = "vu3Vc$pavaFz?0g1,[Z4;(9_&r}{@d!jV!4QB7ZHT0xU+nZ&mhvp:YGXEj{YPR47,Xh&M@=HEt{m0_K-jQ,xreJxpcw-eQd+=dJ[;gLAj0XivBcG?%=.8GF.6UzvQzK.FAwQ2+w$C:AfjZ7q*t/nxJ@+1*WEh4EMq}#RyxY0YiWjnrUfh2vvcf/Zzq(TFb&dJ-82#X=[Mg{HH$%vhW3D/Wu,Sk8[U09W&Ki0KiNctX4uC14?EH/8T#.p_{Q3afb"
    cy.get(postsPage.panelButton).click()    
    cy.get(postsPage.newPostButton).click()
    cy.wait(1000)
    cy.get(postsPage.newPosttitleField).type(title).type('{enter}')
    cy.get(postsPage.newPostbodyField).type(body, { parseSpecialCharSequences: false })
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
  });
})