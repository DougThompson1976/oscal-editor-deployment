describe('Test Loading System Security Plans', () => {
  it('Successfully Loads SSPs by REST Mode', () => {
    cy.visit(Cypress.env('base_url')) 
    cy.findByText('OSCAL Catalog Viewer').should('exist')
    cy.get('button').first().click()
    cy.contains('System Security Plan Viewer').click()
    cy.findByText('OSCAL System Security Plan Viewer').should('be.visible')
    cy.contains('Select OSCAL SSP').parent().click()
    cy.contains('Enterprise Logging and Auditing System Security Plan').click()
    cy.contains('Enterprise Logging and Auditing System Security Plan').should('be.visible')
    cy.get(`[aria-label="show code"]`).click()
    cy.scrollTo('bottom')
    cy.contains('This is the control implementation for the system.').should('be.visible')
  })
  it('Successfully Loads SSPs by URL', () => {
    cy.visit(Cypress.env('base_url')) 
    cy.findByText('OSCAL Catalog Viewer').should('exist')
    cy.get('button').first().click()
    cy.contains('System Security Plan Viewer').click()
    cy.findByText('OSCAL System Security Plan Viewer').should('be.visible')
    cy.contains("REST Mode").click()
    cy.contains('OSCAL SSP URL').first().should('exist').next().click().clear().type(Cypress.env('base_url') + "/oscal/v1/system-security-plans/cff8385f-108e-40a5-8f7a-82f3dc0eaba8")
    cy.contains('Reload').click()
    cy.contains('Enterprise Logging and Auditing System Security Plan').should('be.visible')
    cy.scrollTo('bottom')
    cy.contains('This is the control implementation for the system.').should('be.visible')
  })
})
    
describe('Test Loading Component Definitions', () => {
  it('Successfully Loads Components by REST Mode', () => {
    cy.visit(Cypress.env('base_url')) 
    cy.findByText('OSCAL Catalog Viewer').should('exist')
    cy.get('button').first().click()
    cy.contains('Component Viewer').click()
    cy.contains('OSCAL Component Viewer').should('be.visible')
    cy.contains('Select OSCAL Component').parent().click()
    cy.contains('Test Component Definition').click()
    cy.contains('Test Component Definition').should('be.visible')
    cy.contains('Test Vendor').should('be.visible')
    cy.scrollTo('bottom')
  })
  it('Successfully Loads Components by URL', () => {
    cy.visit(Cypress.env('base_url')) 
    cy.findByText('OSCAL Catalog Viewer').should('exist')
    cy.get('button').first().click()
    cy.contains('Component Viewer').click()
    cy.contains('OSCAL Component Viewer').should('be.visible')
    cy.contains("REST Mode").click()
    cy.contains('OSCAL Component URL').first().should('exist').next().click().clear().type(Cypress.env('base_url') + "/oscal/v1/component-definitions/8223d65f-57a9-4689-8f06-2a975ae2ad72")
    cy.contains('Reload').click()
    cy.contains('Test Component Definition').should('be.visible')
    cy.contains('Test Vendor').should('be.visible')
    cy.scrollTo('bottom')
  })
})
