/// <reference types = "cypress" />

import loc from '../../support/locators'

describe('Should test at functional test..', () => {
    beforeEach(() =>{
        cy.login("luiz@luiz.com", "12345678")
        cy.resetApp()
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
    }) 

    it('Should add a account', () => {
        cy.get(loc.CONTAS.INP_NOME).type('Conta de teste do cypress')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        
    })

    it('Should delete a account', () => {
        cy.xpath(loc.CONTAS.XP_BTN_EXCLUIR).click({timeout: 6000})
        cy.get(loc.MESSAGE).should('contain', 'Conta excluída com sucesso!')
    })

    it('Should insert a account with a existent name', () => {
        cy.get(loc.CONTAS.INP_NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Erro: Error: Request failed with status code 400')
    })

    it('Should edit a account', () => {
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.INP_NOME)
            .clear()
            .type('Conta nome diferente')
        
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })

})