/// <reference types = "cypress" />

describe('Work with Popup' , ()=> {
    it('Testando popup', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    
        cy.get('#frame1').then(iframe  => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona ?')
                .should('have.value', 'funciona ?')
        })
    })

    it.only('Deve verificar se o popup foi invocado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')

       

    })

})