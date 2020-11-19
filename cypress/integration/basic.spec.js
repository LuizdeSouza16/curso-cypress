/// <reference types = "cypress" />

describe('Cypress Basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title()
            .should('be.equal', 'Campo de Treinamento') 
            .and('contain', 'Campo')
    })

    //TODO Escrever title no console
    //TODO Escrever o title em um campo de testo
})