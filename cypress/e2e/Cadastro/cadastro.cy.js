/// <references types="cypress" />

context('Cadastro', () => {
  it('Cadastro de usuário', () => {
    cy.visit('https://demo.automationtesting.in/Register.html')
    
    cy.get('input[placeholder="First Name"]')
      .type('Aluno');

    cy.get('input[placeholder="Last Name"]')
      .type('Agilizei');

    cy.get('input[ng-model^=Email]')
      .type('aluno@mail.com');

    cy.get('input[placeholder="First Name"]')
      .type('Aluno');

    cy.get('input[ng-model^=Phone]')
      .type('1234567890');


  });
});