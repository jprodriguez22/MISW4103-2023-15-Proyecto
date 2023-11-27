/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#12 - Intentar crear una página con 256 caracteres', () => {
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
  it('Crear un nuevo post', () => {
    const mockInterface = new MockarooInterface()
    const mockUser = mockInterface.prioriInitializeUsers()
    const reallyLongString255 = "vu3Vc$pavaFz?0g1,[Z4;(9_&r}{@d!jV!4QB7ZHT0xU+nZ&mhvp:YGXEj{YPR47,Xh&M@=HEt{m0_K-jQ,xreJxpcw-eQd+=dJ[;gLAj0XivBcG?%=.8GF.6UzvQzK.FAwQ2+w$C:AfjZ7q*t/nxJ@+1*WEh4EMq}#RyxY0YiWjnrUfh2vvcf/Zzq(TFb&dJ-82#X=[Mg{HH$%vhW3D/Wu,Sk8[U09W&Ki0KiNctX4uC14?EH/8T#.p_{Q3afb"
    const reallyLongString256 = "v!u3Vc$pavaFz?0g1,[Z4;(9_&r}{@d!jV!4QB7ZHT0xU+nZ&mhvp:YGXEj{YPR47,Xh&M@=HEt{m0_K-jQ,xreJxpcw-eQd+=dJ[;gLAj0XivBcG?%=.8GF.6UzvQzK.FAwQ2+w$C:AfjZ7q*t/nxJ@+1*WEh4EMq}#RyxY0YiWjnrUfh2vvcf/Zzq(TFb&dJ-82#X=[Mg{HH$%vhW3D/Wu,Sk8[U09W&Ki0KiNctX4uC14?EH/8T#.p_{Q3afb"
    const user1 = mockInterface.getRandom(mockUser)
    cy.get(pagesPage.panelButton).click()    
    cy.get(pagesPage.newPageButton).click()
    cy.wait(1000)
    cy.get(pagesPage.newPagetitleField).type(reallyLongString256, { parseSpecialCharSequences: false })
    cy.get(pagesPage.newPagePostField).type(user1.biography)
    cy.wait(2000)
    cy.get(pagesPage.publishButton).should('not.exist') // Then I try to publish the page with max characters
    cy.get(pagesPage.newPagetitleField).clear().type(reallyLongString255, { parseSpecialCharSequences: false }) // Then I try to publish a string with 255 characters
    cy.get(pagesPage.newPagePostField).click() // And click on the editor to make the button appear
    cy.wait(2000)
    cy.get(pagesPage.publishButton).should('exist') // And I verify that the button exist
    cy.get(pagesPage.newPagetitleField).click().type('1') // And add another character after
    cy.wait(500)
    cy.get(pagesPage.publishButton).click() 
    cy.get(pagesPage.alertMessage).should('exist') // And I verify that an error message appears
  })
})