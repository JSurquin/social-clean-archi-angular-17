describe('template spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:4200');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[formcontrolname="email"]').type('johndoetest', {
      delay: 300,
    });
    cy.get('[formcontrolname="password"]').type('supersamy');
    cy.get('form.ng-invalid > button').click();
    cy.get('#loginButton').click();
    cy.get('[data-testid="profil"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.form-control').clear();
    cy.get('.form-control').type('clementine bauch');
    /* ==== End Cypress Studio ==== */
  });
});
