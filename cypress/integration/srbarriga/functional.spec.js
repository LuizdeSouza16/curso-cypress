/// <reference types = "cypress" />

import loc from '../../support/locators'

describe('Should test at functional test..', () => {
    beforeEach(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('luiz@luiz.com')
        cy.get(loc.LOGIN.PASSWORD).type('12345678')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.RESET).click()
        cy.get(loc.MESSAGE).should('contain', 'Dados resetados com sucesso!')
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()

    }) 

    it('Should add a account', () => {
        cy.get(loc.CONTAS.INP_NOME).type('Conta de teste do cypress')
        cy.get('.btn').click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        
    })

    it('Should delete a account', () => {
        cy.xpath("//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-trash-alt']").click({timeout: 6000})
        cy.get(loc.MESSAGE).should('contain', 'Conta excluída com sucesso!')
    })

    it('Should insert a account with a existent name', () => {
        cy.get(loc.CONTAS.INP_NOME).type('Conta mesmo nome')
        cy.get('.btn').click()
        cy.get(loc.MESSAGE).should('contain', 'Erro: Error: Request failed with status code 400')
    })

    it('Should edit a account', () => {
        cy.xpath("//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-edit']").click()
        cy.get(loc.CONTAS.INP_NOME)
            .clear()
            .type('Conta nome diferente')
        
        cy.get('.btn').click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })

})