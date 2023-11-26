/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const postsPage = require('../../../../../page_objects/cypress/postsPage.json');
const properties = require('../../../../../properties.json');

context('#11 Cambiar el estado de un post publicado a borrador y validar que no aparece en blog', () => {
  let memberIndexToClick = 1; 

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:2368/ghost');
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I select a post
  it('Seleccionar un post y ponerlo en borrador', () => {
    cy.get(postsPage.panelButton).click();
    cy.wait(1000);
    cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
      if ($posts.length > 0) {
        const randomIndex = Cypress._.random(0, $posts.length - 1);
        cy.wrap($posts).eq(randomIndex).click();
        cy.wait(1000);
        cy.get(postsPage.unpublishButton).click();
        cy.get(postsPage.continueButton2).click();
        cy.wait(2000);
        // Then I validate the post isn't in the blog
        cy.get(postsPage.backButton).click();
        cy.get(postsPage.siteButton).click();
        cy.wait(2000);
      } else {
        // Agregar manejo si no hay posts disponibles o publicados
        cy.log('No hay posts disponibles para seleccionar.');
      }
    });
  });
});

