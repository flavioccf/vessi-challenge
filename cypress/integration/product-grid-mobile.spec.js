/// <reference types="cypress" />
describe('Test Product Grid On Mobile',{
  viewportHeight: 780,
  viewportWidth: 480,
}, () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Should filter products and find filtered', () => {
    cy.get('.imgContainer').should('have.length', 6)
    cy.get('button').eq(0).click();
    cy.get('button').eq(2).click();
    cy.get('.small').eq(3).click();
    cy.get('.imgContainer').should('have.length', 2)
    cy.get('.details').eq(1).find('li').eq(1).should('have.text', 'LINEN BEIGE')
  })

  it('Should display and close Quick Add modal', function() {
    cy.get('.quickAdd').eq(0).click();
    cy.get('.sizePicker > :nth-child(4)').click();
    cy.get('.productDetails').should('have.length', 1)
    cy.get('.selected').should('have.length', 1)
    cy.get('#closeQuickAdd').click();
    cy.get('.productDetails').should('have.length', 0)
    cy.get('.selected').should('have.length', 0)
  });
})