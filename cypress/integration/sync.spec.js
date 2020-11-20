/// <reference types = "cypress" />

describe('Waits...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#buttonDelay').click()
        cy.get("#novoCampo").should('not.exist')
        cy.get("#novoCampo").type('testando')
        cy.get("#novoCampo").should('exist')
    })

})