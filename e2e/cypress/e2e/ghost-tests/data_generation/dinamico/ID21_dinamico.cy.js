/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')


context('#21 Cambiar la biografía de un usuario por más de 200 caracteres', () => {

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
    cy.wrap(mockInterface.dynamicInitializeUsers()).then(mockUser => {
      const user1 = mockInterface.getRandom(mockUser)
        cy.get(userPage.clickUserButton.selector).click();
        cy.wait(1000);
        cy.get(userPage.clickYourProfileButton.selector).click();
        cy.wait(1000);
        cy.get(userPage.clickBioButton.selector).clear();
        cy.wait(1000);
        cy.get(userPage.clickBioButton.selector).type(user1.biography);
        cy.get(userPage.clickBioButton.selector).type(user1.biography);
        cy.get(userPage.clickBioButton.selector).type(user1.biography);
        cy.get(userPage.clickBioButton.selector).type(user1.biography);
        cy.wait(2000);
        

    })  
    

    // Then I validate the changes, it shouldnt let me use such a long bio
        cy.get(userPage.clickSave.selector).click();
        cy.wait(1000);

  });
});
