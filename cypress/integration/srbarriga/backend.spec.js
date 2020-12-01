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

    it('Should update an account', () => {
        cy.getAccountByName('Conta para alterar').then(contaId => {
            cy.request({
                url: `/contas/${contaId}`,
                method: 'PUT',
                //
                body: {
                    nome: 'Conta alterada via rest'
                }
            }).as('response')
        })
        

       cy.get('@response').its('status').should('be.equal', 200)
    })
    
    it('Should not a create an account with same name', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            
            body: {
                nome: "Conta mesmo nome"
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.have.equal('Já existe uma conta com esse nome!')
        })
    })
   it('Should a insert a transaction', () => {
        cy.getAccountByName('Conta para alterar').then(contaId => {
            cy.request({
                method:  'POST',
                url: '/transacoes',
                
                body: {
                    conta_id: contaId,
                    data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: "desc",
                    envolvido: "qe",
                    status: true,
                    tipo: "REC",
                    valor: "4445",
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })

    it('Deve Calcular saldo', () => {
        
            cy.request({
                method: 'GET',
                url: 'transacoes',
                
                qs: {descricao: 'Movimentacao 1, calculo saldo'}
            }).then(res => {
                cy.request({
                    url: `/transacoes/${res.body[0].id}`,
                    method: 'PUT',
                    
                    body: {
                        status: true,
                        data_transacao: Cypress.moment(res.body[0].dataTransacao).format("DD/MM/YYYY"),
                        data_pagamento: Cypress.moment(res.body[0].dataTransacao).format("DD/MM/YYYY"),
                        descricao: res.body[0].descricao,
                        envolvido: res.body[0].envolvido,
                        valor: res.body[0].valor,
                        conta_id: res.body[0].conta_id,
                    }
                }).its('status').should('be.equal', 200)
            })

            cy.request({
                url: '/saldo',
                method: 'GET',
                
            }).then(res => {
                let saldoConta = null
                res.body.forEach(c => {
                    if(c.conta === 'Conta para saldo') saldoConta = c.saldo
                })
                expect(saldoConta).to.be.equal('4034.00')
          
        })
    })

    it('Should a remove a transaction', () => {
        cy.request({
            method: 'GET',
            url: 'transacoes',
            
            qs: {descricao: 'Movimentacao para exclusao'}
        }).then(res => {
            cy.request({
                url: `/transacoes/${res.body[0].id}`,
                method: 'DELETE',
                

            }).its('status').should('be.equal', 204)
        })
    })

})
