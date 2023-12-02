/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const postsPage = require('../../../../../page_objects/cypress/postsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const membersPage = require('../../../../../page_objects/cypress/membersPage.json');
const properties = require('../../../../../properties.json')

context('#24 Como usuario, quiero eliminar todos los miembros', () => {
  // Given I login to my website Ghost 4
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST4),
    cy.get(loginPage.elementEmail4).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword4).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton4).click(),
    cy.wait(3000)
})
  // When create 2 members with the same email
  it('Borrar todos los miembros', () => {
    cy.wait(1000)
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.get('.gh-nav-member-count').invoke('text').then((countText) => {
        const memberCount = parseInt(countText, 10);
        //cy.log(`El número dentro del elemento es: ${memberCount}`);
        for (let i = 0; i < memberCount; i++) {
            cy.wait(1000);
            // Seleccionar el miembro en la posición i
            cy.get(membersPage.member4).eq(0).click();
            cy.wait(1000);
            // Hacer clic en Configuración
            cy.get(membersPage.settings4).click();
            cy.wait(1000);
            // Hacer clic en Eliminar
            cy.get(membersPage.deleteMember4).eq(1).click();
            cy.wait(1000);
            // Confirmar eliminación
            cy.get(membersPage.confirmDeleteMember4).click();
            cy.wait(1000);
          }

      });
    
    
    
  });
  // Then I try to validate the changes, it shouldnt let me
  it('Visitar la pestaña de miembros y revisar el cambio', () => {
    cy.visit('http://146.190.196.137:3015/ghost/#/members')
    cy.wait(1000)
  })
})