

  const filePath = 'cypress/fixtures/orange.png'; 

describe('Pruebas en la sección My Info', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.screenshot();
  });

  it('Debería acceder a la sección My Info y validar el título', () => {
    cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('My Info').click();
    cy.url().should('include', '/viewPersonalDetails');
    cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title').should('contain', 'Personal Details');
    cy.get('input[name="firstName"]').clear().type('Erick');
    cy.get('input[name="lastName"]').clear().type('Test');
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').eq(0).clear();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').eq(0).type('909090');
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').eq(1).clear();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').eq(1).type('CESC909090');      
    cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').clear().type('6565678');  
    cy.xpath('(//button[@type="submit"])[1]').click();
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Updated');
    cy.screenshot();
  });

  it('Debería llenar y guardar la información de Custom Fields', () => {
    cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('My Info').click();
    cy.get('.orangehrm-tabs-item').contains('Custom Fields').scrollIntoView();
    cy.get('div.oxd-input-group').contains('Blood Type').next().find('.oxd-select-text-input').click();
    cy.get('.oxd-select-dropdown').contains('O+').click();
    cy.xpath('(//button[@type="submit"])[1]').click();
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Updated');
    cy.screenshot();
  });

 it('Debería cargar y eliminar una imagen', () => {
    cy.get('input[type="file"]').selectFile(filePath);
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Saved');
    cy.get('.oxd-table-body').contains('image.jpg').should('exist');
    cy.get('.oxd-table-body').contains('image.jpg').parent().siblings().find('.oxd-icon--trash').click();
    cy.get('.oxd-button--label-danger').click(); 
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted');
    cy.get('.oxd-table-body').contains('image.jpg').should('not.exist');
     cy.get('img.oxd-userdropdown-img').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
    cy.get('h5.oxd-text oxd-text--h5 orangehrm-login-title').should('contain', 'Login');
    cy.screenshot();
  });
});

