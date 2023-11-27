/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const postsPage = require('../../../../../page_objects/cypress/postsPage.json'); 
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface');

context('#11 - Cambiar el estado de un post modificando el titulo y validar que no aparece en el blog', () => {
  // Given I login to my website
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit(properties.GHOST5);
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I select a post
  it('Seleccionar un post y ponerlo en borrador luego de modificar su titulo', () => {
    const mockInterface = new MockarooInterface();
    cy.wrap(mockInterface.dynamicInitializePosts()).then(mockPost => {
      const post = mockInterface.getRandom(mockPost);
      cy.get(postsPage.panelButton).click();
      cy.wait(1000);
      cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
        if ($posts.length > 0) {
          const randomIndex = Cypress._.random(0, $posts.length - 1);
          cy.wrap($posts).eq(randomIndex).click();
          cy.wait(1000);
          const title = post.title;
          cy.get(postsPage.newPosttitleField).type(title); 
          cy.wait(1000);
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
});
