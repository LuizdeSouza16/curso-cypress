/// <reference types = "cypress" />


describe('Dinamic test', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(()=> {
        cy.reload()
    })

    const foods = [
        'Carne', 
        'Frango',
        'Pizza',
        'Vegetariano'
    ]
    foods.forEach(food => {
        it(`Cadastro com comida variada ${food}`, () => {
            cy.get('#formNome').type("Luiz")
            cy.get('#formSobrenome').type('Souza')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.xpath(`//label[contains(., '${food}')]//preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select("Doutorado")
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado').should('contain', "Cadastrado!")
        })
    })

    it.only("Deve selecionar todos usando o each", () => {
        cy.get('#formNome').type("Luiz")
        cy.get('#formSobrenome').type('Souza')
        cy.get(`[name=formSexo][value=M]`).click()
        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() !== 'vegetariano'){
                cy.wrap($el).click()
            }
                
        })
        cy.get('#formEscolaridade').select("Doutorado")
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado').should('contain', "Cadastrado!")
        //cy.clickAlert('#formCadastrar','Tem certeza que voce eh vegetariano?')
    })

    

  
})

