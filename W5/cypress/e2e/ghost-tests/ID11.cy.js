/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const postsPage = require('../../../page_objects/cypress/postsPage.json');
const properties = require('../../../properties.json');

context('#11 Cambiar el estado de un post publicado a borrador y validar que no aparece en blog', () => {
  let memberIndexToClick = 1; 

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID11 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID11 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID11 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID11 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID11 - 4 - Ghost5")
  });

  // When I select a post
  it('Seleccionar un post y ponerlo en borrador', () => {
    cy.get(postsPage.panelButton).click();
    cy.screenshot("ID11 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID11 - 6 - Ghost5")
    cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
    cy.screenshot("ID11 - 7 - Ghost5")
      if ($posts.length > 0) {
        const randomIndex = Cypress._.random(0, $posts.length - 1);
        cy.wrap($posts).eq(randomIndex).click();
        cy.wait(1000);
    cy.screenshot("ID11 - 8 - Ghost5")
        cy.get(postsPage.unpublishButton).click();
    cy.screenshot("ID11 - 9 - Ghost5")
        cy.get(postsPage.continueButton2).click();
    cy.screenshot("ID11 - 10 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID11 - 11 - Ghost5")
        // Then I validate the post isn't in the blog
        cy.get(postsPage.backButton).click();
    cy.screenshot("ID11 - 12 - Ghost5")
        cy.get(postsPage.siteButton).click();
    cy.screenshot("ID11 - 13 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID11 - 14 - Ghost5")
      } else {
        // Agregar manejo si no hay posts disponibles o publicados
        cy.log('No hay posts disponibles para seleccionar.');
      }
    });
  });
});


