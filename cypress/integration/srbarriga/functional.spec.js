/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'


describe('Should test at functional test..', () => {
    beforeEach(() =>{
        cy.login("luiz@luiz.com", "12345678")
        cy.resetApp()
        
    }) 

    it('Should add a account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        
    })

    it('Should delete a account', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_EXCLUIR).click({timeout: 6000})
        cy.get(loc.MESSAGE).should('contain', 'Conta excluída com sucesso!')
    })

    it('Should not created an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    })

    it('Should edit a account', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.INP_NOME)
            .clear()
            .type('Conta nome diferente')
        
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })

    it('Should a insert a movimentation', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.INP_DESCRICAO).type("Testando inserção da movimentação")
        cy.get(loc.MOVIMENTACAO.INP_VALOR).type("600")
        cy.get(loc.MOVIMENTACAO.INP_ENVOLVIDO).type("Bira rico")
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Movimentação inserida com sucesso!')
    })

    it.only('Shoud get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain' , '534,00')
    })

})