/// <reference types = "cypress" />

describe('Should test at functional test..', () => {
    beforeEach(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('luiz@luiz.com')
        cy.get('[data-test=passwd]').type('12345678')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/reset"]').click()
        cy.get('.toast-message').should('contain', 'Dados resetados com sucesso!')
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()

    }) 

    it('Should add a account', () => {
        cy.get('.form-control').type('Conta de teste do cypress')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')
        
    })

    it('Should delete a account', () => {
        cy.xpath("//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-trash-alt']").click({timeout: 6000})
        cy.get('.toast-message').should('contain', 'Conta excluída com sucesso!')
    })

    it('Should insert a account with a existent name', () => {
        cy.get('.form-control').type('Conta mesmo nome')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Erro: Error: Request failed with status code 400')
    })

    it('Should edit a account', () => {
        cy.xpath("//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-edit']").click()
        cy.get('.form-control')
            .clear()
            .type('Conta nome diferente')
        
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso!')
    })

})