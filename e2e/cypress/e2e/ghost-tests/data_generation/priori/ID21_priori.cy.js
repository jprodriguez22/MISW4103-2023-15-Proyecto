/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')


context('#21 Cambiar la biografía de un usuario por un naughty string', () => {

  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})

  // When change the biography of the user
  it('Editar el nombre de un miembro', () => {
    const mockInterface = new MockarooInterface()
    const mockHex = mockInterface.prioriInitializeHex()
    const hex1 = mockInterface.getRandom(mockHex)
        cy.get(userPage.clickUserButton.selector).click();
        cy.wait(1000);
        cy.get(userPage.clickYourProfileButton.selector).click();
        cy.wait(1000);
        cy.get(userPage.clickBioButton.selector).clear();
        cy.wait(1000);
        cy.get(userPage.clickBioButton.selector).type(hex1.naughty);
        cy.wait(2000);
        

    

    // Then I validate the changes
        cy.get(userPage.clickSave.selector).click();
        cy.wait(1000);

        
    })  
  });

