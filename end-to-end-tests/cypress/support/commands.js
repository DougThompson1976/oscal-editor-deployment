// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('navToViewer', (viewerLinkText, titleText) => {
  cy.visit(Cypress.env('base_url'))
  cy.findByText('OSCAL Catalog Viewer').should('exist')
  cy.get('button').first().click()
  cy.contains(viewerLinkText).click()
  cy.findByText(titleText).should('be.visible')
})

Cypress.Commands.add('navToSspViewer', () => {
  cy.navToViewer(
    'System Security Plan Viewer',
    'OSCAL System Security Plan Viewer'
  ) 
})

Cypress.Commands.add('navToTestSspRestMode', (sspTitle) => {
  cy.navToSspViewer()
  cy.contains('Select OSCAL SSP').parent().click()
  cy.contains(sspTitle).click()
  cy.contains(sspTitle).should('be.visible')
})

Cypress.Commands.add('navToCdefViewer', () => {
  cy.navToViewer(
    'Component Viewer',
    'OSCAL Component Viewer'
  ) 
})

Cypress.Commands.add('getInputByLabel', (label) => {
  cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      //cy.get('#' + id)
      cy.get(`input[id="${id}"]`)
    })
})