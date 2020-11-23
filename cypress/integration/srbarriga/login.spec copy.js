/// <reference types = "cypress" />


describe('Should test at functional test..', () => {
    beforeEach(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
    }) 

    it('Login Success', () => {
        cy.get('[data-test=email]').type('luiz@luiz.com')
        cy.get('[data-test=passwd]').type('12345678')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo, Luiz!')
    })

    it('Login Failure', () => {
        cy.get('[data-test=email]').type('luiz@luiz.com')
        cy.get('[data-test=passwd]').type('123456')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Erro: Error: Request failed with status code 401')
    })
})