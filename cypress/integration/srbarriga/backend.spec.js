/// <reference types = "cypress" />


describe('Should test at backend test..', () => {
    before(() =>{

    }) 

    beforeEach(() => {
        
    })

    it('Should a create a account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: 'luiz@luiz.com',
                redirecionar: false,
                senha: '12345678'
            }
            
        }).its('body.token').should('not.be.empty')
    })

    

})