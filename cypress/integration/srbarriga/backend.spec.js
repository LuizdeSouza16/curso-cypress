/// <reference types = "cypress" />


describe('Should test at backend test..', () => {

    let token
    before(() =>{
        cy.getToken('luiz@luiz.com', '12345678')
            .then(tkn => {
                token = tkn
            })
    }) 

    beforeEach(() => {
        cy.resetRest(token)
    })

    it('Should a create an account', () => {
       
    cy.request({
        url: '/contas',
        method: 'POST',
        headers: {Authorization: `JWT ${token}`},
        body: {
            nome: "Conta via rest"
        },
    }).as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome','Conta via rest')
        })
    })

})
