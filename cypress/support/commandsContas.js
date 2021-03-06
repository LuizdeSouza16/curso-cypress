import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})        
      
Cypress.Commands.add('inserirConta', conta => {
    cy.get(loc.CONTAS.INP_NOME).type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})
        