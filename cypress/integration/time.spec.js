/// <reference types = "cypress" />


describe('Work with time', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(()=> {
        cy.reload()
    })

    it('Voltando ao passado', () => {
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '23/11/2020')

        //cy.clock()
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012,3,10,15,23,50)

        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

    it.only('Goes to future..', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '16061')
        cy.get('#resultado > span').invoke('text').should('gt', '1606157751350')

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0 )
        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 5000 )

        cy.tick(10000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 15000 )
    })

})