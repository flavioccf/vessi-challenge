/// <reference types="cypress" />
describe('Test Product Grid on Desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Should filter products', () => {
    cy.get('.imgContainer').should('have.length', 6)
    cy.get('button').eq(2).click();
    cy.get('.small').eq(3).click();
    cy.get('.imgContainer').should('have.length', 2)
    cy.get('svg').click();
    cy.get('.imgContainer').should('have.length', 6)
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Should select size 8', function() {
    const firstCard = cy.get('.quickAdd').eq(0)
    firstCard.click();
    firstCard.find('ul > :nth-child(4)').click();
    cy.get('.selected').should('have.text', '8')
  });
})