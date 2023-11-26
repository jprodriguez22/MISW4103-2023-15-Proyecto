/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json');
const tagsPage = require('../../../../../page_objects/cypress/tagsPage.json');
const postsPage = require('../../../../../page_objects/cypress/postsPage.json');
const properties = require('../../../../../properties.json');

context('#9 Editar un tag y asignarlo a varias publicaciones y validarlo', () => {

  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:2368/ghost');
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.get(loginPage.loginButton).click();
    cy.wait(1000);
  });

  it('Editar un tag', () => {
    cy.get(tagsPage.panelButton).click();
    cy.wait(1000);
    cy.get(tagsPage.tagList).find(tagsPage.tagItems).then(($tags) => {
        if ($tags.length > 0) {
            const randomIndex = Cypress._.random(0, $tags.length - 1);
            cy.wrap($tags).eq(randomIndex).click();
            cy.wait(1000);
            const uuid = () => Cypress._.random(0, 1e6);
            const tagField = `testtag${uuid()}`;
            cy.get(tagsPage.modifynameField).type(tagField).type('{enter}');
            cy.wait(1000);
            cy.get(tagsPage.saveButton).click();
            cy.wait(1000);
            cy.get(tagsPage.postsButton).click();
            cy.get(postsPage.filterButton).click();
            cy.wait(1000);
            cy.get(postsPage.displaynew).click();
            cy.wait(2000);
          } else {
            cy.log('No hay tags disponibles para seleccionar.');
          }
        });
      });
    });
