/// <reference types = "cypress" />

describe('Cypress Basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
            .should('be.equal', 'Campo de Treinamento') 
            .and('contain', 'Campo')
        
        
        cy.title().then(title => {
            console.log(title)
        })
       
        let syncTitle

       
        cy.title().then(title => {
            cy.get('#formNome').type(title)
            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })
})

//cy.debug() and cy.pause()