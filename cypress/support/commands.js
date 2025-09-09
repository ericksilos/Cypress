Cypress.Commands.add('login', (username, password) => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').type(Admin);
  cy.get('input[name="password"]').type(admin123);
  cy.get('button[type="submit"]').click();
});
