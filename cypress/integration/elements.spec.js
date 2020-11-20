/// <reference types = "cypress" />

describe('Work with basic elements' , ()=> {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })
    
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...' )
    })

    it('Links', () => {
        cy.get("a[href='#']").click()
        cy.get('#resultado').should('have.text', "Voltou!")
        cy.reload()
        cy.get('#resultado').should('have.not.text', "Voltou!")
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', "Voltou!")
    })

    it('Texts fiels', () => {
        cy.get('#formNome').type('Cypress test').should('have.value', 'Cypress test')

        cy.get('#elementosForm\\:sugestoes')
        .type('text area').should('have.value', 'text area')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('???')

        cy.get('[data-cy=dataSobrenome]').type('teste12345{backspace}{backspace}').should('have.value', 'teste123')
        
        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto', {delay: 100}).should('have.value', 'acerto')
      

    })

    it('Radio Button', () => {
        cy.get('#formSexoFem').click()
            .should('be.checked')
        
        cy.get('#formSexoMas').should('not.be.checked')
        
        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('[name=formComidaFavorita]').click({multiple:true})
        cy.get('#formComidaPizza').click().should('not.be.checked')
    })

    it('Combobox', ()=> {
        cy.get('#formEscolaridade')
            .select('2o grau completo')
            .should('have.value', "2graucomp")

            cy.get('#formEscolaridade')
            .select('mestrado')
            .should('have.value', "mestrado")
    
        //TODO validar as opcções do campo    
    })

    it('Combo multiplo', ()=> {
        cy.get('#formEsportes')
            .select(['natacao', 'Corrida', 'nada'])

            //TODO validar opções do combo multiplo
    })
})
