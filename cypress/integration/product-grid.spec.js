/// <reference types="cypress" />
describe('Test Product Grid on Desktop', () => {
  beforeEach(() => {
    cy.visit('https://vessi-challenge.vercel.app')
  })
  it('Should filter products', () => {
    cy.get('.imgContainer').should('have.length', 6)
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.krtgKK > .sc-gKclnd > .sc-hKwDye > span').click();
    cy.get('.kropAr > :nth-child(1) > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.imgContainer').should('have.length', 2)
    /* ==== Generated with Cypress Studio ==== */
    cy.get('svg').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.imgContainer').should('have.length', 6)
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Should select size 8', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.hnDGdS > .quickAdd').click();
    cy.get('ul > :nth-child(4)').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.selected').should('have.text', '8')
  });
})