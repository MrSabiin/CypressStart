/// <reference types = "cypress" />

let Chance = require('chance')
let chance = new Chance()



When(/^informar meus dados$/, () => {
    cy.get('input[placeholder="First Name"]')
      .type(chance.first());

    cy.get('input[placeholder="Last Name"]')
      .type(chance.last());

    cy.get('input[ng-model^=Email]')
      .type(chance.email())

    cy.get('input[ng-model^=Phone]')
      .type(chance.phone({ formatted: false }))

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
    cy.get('span[class=selection]')
      .eq(0)
      .click()

    cy.wait(500);

    cy.get('input[class=select2-search__field]')
      .type('Bangladesh')

    cy.get('.select2-results__option')
      .click()

    cy.get('select[id^=yearbox]')
      .select('1992')

    cy.get('select[ng-model^=monthbox]')
      .select('February')

    cy.get('select[id^=daybox]')
      .select('25')

    cy.get('input[id^=first]')
      .type('Abc123')

    cy.get('input[id^=second]')
      .type('Abc123')

    cy.get('input[id=imagesrc]').attachFile('frase-motivadora.jpg')    
});

When(/^Salvar$/, () => {
    cy.get('button[id=submitbtn]')
      .click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    // chamada de requisições de rotas e eperars
    //  cy.wait('@postNewTable').then((resNewTable) => {
    //  console.log(resNewTable.status)
    //  cy.log(resNewTable.status)})
    //  expect(resNewtable.status).to.eq(200)
    
    cy.url().should('contain', 'WebTable.html')

});


