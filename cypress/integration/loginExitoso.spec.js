describe('Login', () => {
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.screenshot();
  });

   it('Debería permitir el login con credenciales válidas y hacer logout', () => {
    cy.url().should('include', '/dashboard');
    cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard');
    cy.get('img.oxd-userdropdown-img').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').should('contain', 'Login');
    cy.screenshot();
  });
});
