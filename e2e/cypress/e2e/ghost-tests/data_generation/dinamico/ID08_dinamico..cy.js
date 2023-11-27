/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const tagsPage = require('../../../../../page_objects/cypress/tagsPage.json');
const postsPage = require('../../../../../page_objects/cypress/postsPage.json'); 
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface');

context('#8 - Crear un tag de 5 caracteres, asignarlo a varios posts y filtrarlo', () => {
  // Given I login to my website
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit(properties.GHOST5);
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I create a new tag
  it('Crear un nuevo tag', () => {
    const mockInterface = new MockarooInterface();
    cy.wrap(mockInterface.dynamicInitializeTags()).then(mockTag => {
      const tag = mockInterface.getRandom(mockTag);
      cy.get(tagsPage.panelButton).click();
      cy.wait(1000);
      cy.get(tagsPage.newtagButton).click();
      const new_tag = tag.tag;
      cy.get(tagsPage.nameField).type(new_tag);
      cy.wait(1000);
      cy.get(tagsPage.saveButton).click();
      cy.wait(1000);

      // Guardar el tag creado
      selectedTag = new_tag;
      cy.get(tagsPage.postsButton).click();
      cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
        if ($posts.length > 0) {
          // Seleccionar el primer post
          cy.wrap($posts).eq(0).click();
          cy.get(postsPage.boxButton).click();
          cy.get(postsPage.selButton).eq(0).click();
          cy.wait(2000);

          // Asignar el tag creado al post
          cy.get(postsPage.tagselButton).eq(0).click();
          cy.wait(2000);

          cy.get(postsPage.updateButton).click();
          cy.wait(1000);

          // Regresar a la lista de posts
          cy.get(postsPage.backButton).click();
          cy.wait(2000);

          // Seleccionar el segundo post al azar
          cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
            if ($posts.length > 1) {
              const randomIndex = Cypress._.random(0, $posts.length - 1);
              cy.wrap($posts).eq(randomIndex).click();
              cy.get(postsPage.boxButton).click();
              cy.get(postsPage.selButton).eq(0).click();
              cy.wait(2000);

              // Asignar el tag creado al segundo post
              cy.get(postsPage.tagselButton).eq(0).click();
              cy.wait(2000);

              cy.get(postsPage.updateButton).click();
              cy.wait(1000);

              // Regresar a la lista de posts
              cy.get(postsPage.backButton).click();
              cy.wait(1000);
            }
          });

          // Then I validate the note is saved for the member
          cy.get(postsPage.fltrButton).click();
          cy.wait(1000);
          cy.get(postsPage.displaynew).click();
          cy.wait(2000);
        }
      });
    });
  });
});
