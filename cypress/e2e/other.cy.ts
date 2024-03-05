// Test 1: Vérifier le titre de la page
it('devrait avoir le titre "FinalApp" en accédant à la page web', () => {
  // Visiter l'URL de la page
  cy.visit('http://localhost:4200/feed');

  // Vérifier que le titre de la page est "FinalApp"
  cy.title().should('eq', 'FinalApp');
});

// Test 2: Vérifier la requête GET pour l'endpoint /users de l'API
it("devrait avoir une requête GET pour l'endpoint /users de l'API", () => {
  // Intercepter la requête GET vers l'endpoint /users de l'API
  cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users').as(
    'usersRequest'
  );

  // Visiter l'URL de la page
  cy.visit('http://localhost:4200/feed');

  // Attendre la fin de la requête
  cy.wait('@usersRequest')
    .its('response.statusCode') // Vérifier la propriété statusCode de la réponse
    .should('eq', 200);

  // Vérifier que la requête a été faite
  //cy.get('@usersRequest').should('have.property', 'response.statusCode', 200);
});

// Test 3: Vérifier la requête GET pour l'endpoint /posts de l'API
it("devrait avoir une requête GET pour l'endpoint /posts de l'API", () => {
  // Intercepter la requête GET vers l'endpoint /posts de l'API
  cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts').as(
    'postsRequest'
  );

  // Visiter l'URL de la page
  cy.visit('http://localhost:4200/feed');

  // Attendre la fin de la requête
  cy.wait('@postsRequest')
    .its('response.statusCode') // Vérifier la propriété statusCode de la réponse
    .should('eq', 200);
});

// Test 4: Connexion à la page de connexion
it('devrait aller sur la page de connexion, remplir le formulaire et se connecter', () => {
  // Visiter la page de connexion
  cy.visit('http://localhost:4200/login');

  // Remplir le formulaire de connexion
  cy.get('[formControlName="email"]').type('votre_email@example.com');
  cy.get('[formControlName="password"]').type('votre_mot_de_passe');
  cy.get('#loginButton').click();
});

// Test 5: Simuler une requête API pour les fruits
it("devrait simuler une requête API pour les fruits sans appeler l'API", () => {
  // Intercepter la requête API pour les fruits
  cy.intercept('GET', '**/api/v1/fruits', { fixture: 'fruits.json' }).as(
    'fruitsRequest'
  );

  // Visiter la page
  cy.visit('https://demo.playwright.dev/api-mocking');

  // Attendre la fin de la requête
  cy.wait('@fruitsRequest');

  // Vérifier la présence de la fraise
  cy.contains('Strawberry').should('be.visible');
});
