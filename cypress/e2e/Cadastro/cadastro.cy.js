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

    // Radio and Checks
    cy.get('input[value^=Male]')
      .click()

    cy.get('input[type=checkbox')
      .check('Hockey')

    cy.get('input[id="checkbox1"]')
      .check()

    cy.get('input[type=checkbox]')
    .check('Movies')

    // Dropdowns & Combos
    cy.get('select[id="Skills"]')
    .select('Javascript')

    // Verificar pq não está pegando o campo pelo elemento
    cy.get('#country')
    .select('Australia')
    
    cy.get('select[id^=yearbox]')
    .select('1992')

    cy.get('select[ng-model^=monthbox]')
    .select('February')

    cy.get('select[id^=daybox]')
    .select('25')

    cy.get('input[id*=password]')
    .select('Abc123')

    cy.get('input[id^=second]')
    .select('Abc123')

    //cy.get('');
    
  });
});