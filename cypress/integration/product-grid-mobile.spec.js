/// <reference types="cypress" />
describe('Test Product Grid On Mobile',{
  viewportHeight: 780,
  viewportWidth: 480,
}, () => {
  beforeEach(() => {
    cy.visit('https://vessi-challenge.vercel.app')
  })
  it('Should filter products', () => {
    cy.get('.imgContainer').should('have.length', 6)
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.bxyzTZ > .sc-hKwDye > span').click();
    cy.get('.kropAr > .sc-gKclnd > .sc-hKwDye > span').click();
    cy.get('.kropAr > :nth-child(3) > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.imgContainer').should('have.length', 2)
    cy.get('.details').eq(1).find('li').eq(1).should('have.text', 'ONYX BLACK')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Should display and close Quick Add modal', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.hnDGdS > .quickAdd').click();
    cy.get('.sizePicker > :nth-child(4)').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.productDetails').should('have.length', 1)
    cy.get('.selected').should('have.length', 1)
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#closeQuickAdd').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.productDetails').should('have.length', 0)
    cy.get('.selected').should('have.length', 0)
  });
})