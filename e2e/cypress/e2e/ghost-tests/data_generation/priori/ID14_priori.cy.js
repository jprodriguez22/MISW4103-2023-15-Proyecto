/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const userPage = require('../../../../../page_objects/cypress/userPage.json');
const changePasswordPage = require('../../../../../page_objects/cypress/changePasswordPage.json');
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')


context('#14 Cambiar la contraseña de un usuario por una edad', () => {

  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})

  // When change the credentials of a user
  it('Editar el nombre de un miembro', () => {
    const mockInterface = new MockarooInterface()
    const mockUser = mockInterface.prioriInitializeUsers()
    const user1 = mockInterface.getRandom(mockUser)
      cy.get(userPage.clickUserButton.selector).click();
      cy.wait(1000);
      cy.get(userPage.clickYourProfileButton.selector).click();
      cy.wait(1000);
      cy.get(userPage.clickPasswordButton.selector).click();
      cy.wait(1000);
      const new_pass = user1.age;
      cy.get(changePasswordPage.elementPassword).type(properties.LOGINPASSWORD);
      cy.get(changePasswordPage.elementNewPassword).type(new_pass);
      cy.get(changePasswordPage.elementVerifyPassword).type(new_pass);
      cy.wait(2000);
      
    

      // Then I validate the changes, it shouldnt let me use such a small string
      cy.get(userPage.clickChangePasswordButton.selector).click();
      cy.wait(2000);
    })  
  });
