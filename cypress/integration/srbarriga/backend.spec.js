/// <reference types = "cypress" />


describe('Should test at backend test..', () => {
    before(() =>{

    }) 

    beforeEach(() => {
        
    })

    it('Should a create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: 'luiz@luiz.com',
                redirecionar: false,
                senha: '12345678'
            }
           
            
        }).its('body.token').should('not.be.empty')
        .then(token => {
            cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: {Authorization: `JWT ${token}`},
                body: {
                    nome: "Conta via rest"
                },
            }).as('response')
        })
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome','Conta via rest')
        })
    })


    it('Insert an account', () => {
        
    }) 



    

})