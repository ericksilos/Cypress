describe('Login error credenciales', () => {
  it('Debería mostrar un mensaje de error con credenciales incorrectas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('test');
        cy.get('input[name="password"]').type('test123');
    cy.get('button[type="submit"]').click();
    cy.get('p.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials');
    cy.screenshot();
  });
});
