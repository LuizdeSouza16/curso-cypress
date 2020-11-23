/// <reference types = "cypress" />

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('[onclick*="Francisco"]').click()
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3)").type('Olá')
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6)")
    })

})