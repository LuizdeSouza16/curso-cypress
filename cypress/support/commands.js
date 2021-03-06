// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('clickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal(message)
    })
})

Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('http://barrigareact.wcaquino.me/')
  cy.get(loc.LOGIN.USER).type(usuario)
  cy.get(loc.LOGIN.PASSWORD).type(senha)
  cy.get(loc.LOGIN.BTN_LOGIN).click()
  cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.get(loc.MENU.RESET).click()
  cy.get(loc.MESSAGE).should('contain', 'Dados resetados com sucesso!')
})

Cypress.Commands.add('getToken', (usuario, senha) => {
  cy.request({
    method: 'POST',
    url: '/signin',
    body: {
        email: usuario,
        redirecionar: false,
        senha: senha
    }
    
  }).its('body.token').should('not.be.empty')
  .then(token => {
    Cypress.env('token', token)
    return token
  })
})

Cypress.Commands.add('resetRest', (token) => {
    cy.request({
      method: 'GET',
      url: '/reset',
      headers: {Authorization: `JWT ${token}`},
    }).its('status').should('be.equal', 200)
})

Cypress.Commands.add('getAccountByName', name => {
  cy.getToken("luiz@luiz.com", "12345678").then(token => {
    cy.request({
      url: '/contas',
      method: 'GET',
      headers: {Authorization: `JWT ${token}`},
      qs: {
          nome: name,
      }
    }).then(res => {
      return res.body[0].id
    })
  
  })
  
})

Cypress.Commands.overwrite('request', (originalFunction, ...options) => {
  if(options.length === 1) {
    if(Cypress.env('token')) {
      options[0].headers =  {
        Authorization: `JWT ${Cypress.env('token')}`
      }
    }
  }
  
  return originalFunction(...options)
})
