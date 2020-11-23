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
    describe.only("With links", () => {
        beforeEach( () => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        it("check popup link",  () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html' )
        })

        it('Should access popup dinamically', () => {
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('texto funciona')
            })
        })
        
        it('Sould force link on same page',  () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield').type('texto funciona')
        })
    })
})

