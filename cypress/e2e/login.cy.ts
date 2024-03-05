// Test 1: Login and navigate
it('should go to login page, fill form, and login', () => {
  cy.visit('http://localhost:4200/login');
  cy.get('[formControlName="email"]').type('votre_email@example.com');
  cy.get('[formControlName="password"]').type('votre_mot_de_passe');
  cy.get('#loginButton').click();
  cy.get('[data-testid="profil"]').click();
  cy.contains('profil works!').should('be.visible');
  cy.contains('Home').click();
});

// Test 2: Unauthorized access to profile page
it('should not allow access to profile page if not authenticated', () => {
  cy.visit('http://localhost:4200/profil/3');
  cy.url().should('eq', 'http://localhost:4200/login');
});

// Test 3: Check content on profil/3 page after login
it('should have "clementine bauch" in the profil/3 page', () => {
  cy.visit('http://localhost:4200/login');
  cy.get('[formControlName="email"]').type('votre_email@example.com');
  cy.get('[formControlName="password"]').type('votre_mot_de_passe');
  cy.get('#loginButton').click();

  cy.get('[data-testid="profil"]').click();
  cy.contains('Clementine Bauch').should('be.visible');
});
