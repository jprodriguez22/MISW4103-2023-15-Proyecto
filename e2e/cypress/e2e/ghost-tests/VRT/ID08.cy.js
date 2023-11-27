/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const membersPage = require('../../../page_objects/cypress/membersPage.json');
const properties = require('../../../properties.json');
const tagsPage = require('../../../page_objects/cypress/tagsPage.json');
const postsPage = require('../../../page_objects/cypress/postsPage.json');

context('#8 Crear un tag, asignarlo a varios posts y filtrarlo', () => {
  let selectedTag; 

  // Given I login to my website
  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID08 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID08 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID08 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID08 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID08 - 4 - Ghost5")
  });

  // When I create a new tag
  it('Crear un nuevo tag', () => {
    cy.get(tagsPage.panelButton).click();
    cy.screenshot("ID08 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID08 - 6 - Ghost5")
    cy.get(tagsPage.newtagButton).click();
    cy.screenshot("ID08 - 7 - Ghost5")
    const uuid = () => Cypress._.random(0, 1e6);
    const tagField = `testtag${uuid()}`;
    cy.get(tagsPage.nameField).type(tagField).type('{enter}');
    cy.screenshot("ID08 - 8 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID08 - 9 - Ghost5")
    cy.get(tagsPage.saveButton).click();
    cy.screenshot("ID08 - 10 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID08 - 11 - Ghost5")

    // Guardar el tag creado
    selectedTag = tagField;

    cy.get(tagsPage.postsButton).click();
    cy.screenshot("ID08 - 12 - Ghost5")
    cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
    cy.screenshot("ID08 - 13 - Ghost5")
      if ($posts.length > 0) {
        // Seleccionar el primer post
        cy.wrap($posts).eq(0).click();
        cy.get(postsPage.boxButton).click();
    cy.screenshot("ID08 - 14 - Ghost5")
        cy.get(postsPage.selButton).eq(0).click();
    cy.screenshot("ID08 - 15 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID08 - 16 - Ghost5")

        // Asignar el tag creado al post
        cy.get(postsPage.tagselButton).eq(0).click();
    cy.screenshot("ID08 - 17 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID08 - 18 - Ghost5")

        cy.get(postsPage.updateButton).click();
    cy.screenshot("ID08 - 19 - Ghost5")
        cy.wait(1000);
    cy.screenshot("ID08 - 20 - Ghost5")

        // Regresar a la lista de posts
        cy.get(postsPage.backButton).click();
    cy.screenshot("ID08 - 21 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID08 - 22 - Ghost5")
        // Seleccionar el segundo post al azar
        cy.get(postsPage.postsList).find(postsPage.postsItem).then(($posts) => {
    cy.screenshot("ID08 - 23 - Ghost5")
          if ($posts.length > 1) {
            const randomIndex = Cypress._.random(0, $posts.length - 1);
            cy.wrap($posts).eq(randomIndex).click();
            cy.get(postsPage.boxButton).click();
    cy.screenshot("ID08 - 24 - Ghost5")
            cy.get(postsPage.selButton).eq(0).click();
    cy.screenshot("ID08 - 25 - Ghost5")
            cy.wait(2000);
    cy.screenshot("ID08 - 26 - Ghost5")

            // Asignar el tag creado al segundo post
            cy.get(postsPage.tagselButton).eq(0).click();
    cy.screenshot("ID08 - 27 - Ghost5")
            cy.wait(2000);
    cy.screenshot("ID08 - 28 - Ghost5")

            cy.get(postsPage.updateButton).click();
    cy.screenshot("ID08 - 29 - Ghost5")
            cy.wait(1000);
    cy.screenshot("ID08 - 30 - Ghost5")

            // Regresar a la lista de posts
            cy.get(postsPage.backButton).click();
    cy.screenshot("ID08 - 31 - Ghost5")
            cy.wait(1000);
    cy.screenshot("ID08 - 32 - Ghost5")
          }
        });

        // Then I validate the note is saved for the member
        cy.get(postsPage.fltrButton).click();
    cy.screenshot("ID08 - 33 - Ghost5")
        cy.wait(1000);
    cy.screenshot("ID08 - 34 - Ghost5")
        cy.get(postsPage.displaynew).click();
    cy.screenshot("ID08 - 35 - Ghost5")
        cy.wait(2000);
    cy.screenshot("ID08 - 36 - Ghost5")
      }
    });
  });
});



