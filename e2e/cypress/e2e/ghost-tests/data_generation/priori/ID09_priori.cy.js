/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const tagsPage = require('../../../../../page_objects/cypress/tagsPage.json');
const properties = require('../../../../../properties.json');
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface');

context('#9 - Editar un tag con un nombre random y asignarselos a varias publicaciones para validarlo', () => {
  // Given I login to my website
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit(properties.GHOST5);
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  // When I edit a tag
  it('Editar un tag', () => {
    const mockInterface = new MockarooInterface();
    const mockTag = mockInterface.prioriInitializeTags();
    const tag_mod = "OPK";
    const tag = mockInterface.getRandom(mockTag);
    cy.get(tagsPage.panelButton).click();
    cy.wait(1000);
    cy.get(tagsPage.tagList).find(tagsPage.tagItems).then(($tags) => {
      if ($tags.length > 0) {
        const randomIndex = Cypress._.random(0, $tags.length - 1);
        cy.wrap($tags).eq(randomIndex).click();
        cy.wait(1000);
        cy.get(tagsPage.modifynameField).type(tag_mod);
        cy.wait(1000);
        cy.get(tagsPage.saveButton).click();
        cy.wait(1000);
        // Then I apply the filters to tags and see the updated name
        cy.get(tagsPage.postsButton).click();
        cy.get(tagsPage.filterButton).click();
        cy.wait(1000);
        cy.get(tagsPage.displaynew).click();
        cy.wait(2000);
      } else {
        // Agregar manejo si no hay tags disponibles
        cy.log('No hay tags disponibles para seleccionar.');
      }
    });
  });
});
