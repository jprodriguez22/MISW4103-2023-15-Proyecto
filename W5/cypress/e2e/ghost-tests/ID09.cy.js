/// <reference types="cypress" />
const loginPage = require('../../../page_objects/cypress/loginPage.json');
const tagsPage = require('../../../page_objects/cypress/tagsPage.json');
const postsPage = require('../../../page_objects/cypress/postsPage.json');
const properties = require('../../../properties.json');

context('#9 Editar un tag y asignarlo a varias publicaciones y validarlo', () => {

  before(() => {
    cy.viewport('macbook-16');
    cy.visit('http://146.190.196.137:2368/ghost');
    cy.screenshot("ID09 - 0 - Ghost5")
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL);
    cy.screenshot("ID09 - 1 - Ghost5")
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD);
    cy.screenshot("ID09 - 2 - Ghost5")
    cy.get(loginPage.loginButton).click();
    cy.screenshot("ID09 - 3 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID09 - 4 - Ghost5")
  });

  it('Editar un tag', () => {
    cy.get(tagsPage.panelButton).click();
    cy.screenshot("ID09 - 5 - Ghost5")
    cy.wait(1000);
    cy.screenshot("ID09 - 6 - Ghost5")
    cy.get(tagsPage.tagList).find(tagsPage.tagItems).then(($tags) => {
    cy.screenshot("ID09 - 7 - Ghost5")
        if ($tags.length > 0) {
            const randomIndex = Cypress._.random(0, $tags.length - 1);
            cy.wrap($tags).eq(randomIndex).click();
            cy.wait(1000);
    cy.screenshot("ID09 - 8 - Ghost5")
            const uuid = () => Cypress._.random(0, 1e6);
            const tagField = `testtag${uuid()}`;
            cy.get(tagsPage.modifynameField).type(tagField).type('{enter}');
    cy.screenshot("ID09 - 9 - Ghost5")
            cy.wait(1000);
    cy.screenshot("ID09 - 10 - Ghost5")
            cy.get(tagsPage.saveButton).click();
    cy.screenshot("ID09 - 11 - Ghost5")
            cy.wait(1000);
    cy.screenshot("ID09 - 12 - Ghost5")
            cy.get(tagsPage.postsButton).click();
    cy.screenshot("ID09 - 13 - Ghost5")
            cy.get(postsPage.filterButton).click();
    cy.screenshot("ID09 - 14 - Ghost5")
            cy.wait(1000);
    cy.screenshot("ID09 - 15 - Ghost5")
            cy.get(postsPage.displaynew).click();
    cy.screenshot("ID09 - 16 - Ghost5")
            cy.wait(2000);
    cy.screenshot("ID09 - 17 - Ghost5")
          } else {
            cy.log('No hay tags disponibles para seleccionar.');
          }
        });
      });
    });

