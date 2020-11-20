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

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get("#novoCampo").should('not.exist').should('exist')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span').should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Alterando wait e timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get("#novoCampo", {timeout: 1000}).should('exist')
        
        //cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        //cy.get('#lista li span', {timeout: 6000})
        //.should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout: 6000})
            .should('have.length', 1)
        
    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

})