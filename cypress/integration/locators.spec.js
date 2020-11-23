/// <reference types = "cypress" />

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('[onclick*="Francisco"]').click()
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3)").type('Olá')
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6)")
    })

    it('using xpath',() => {
        cy.xpath('//input')
        cy.xpath('//input[contains(@onclick, "Francisco")]')
        cy.xpath('//table[@id="tabelaUsuarios"]//td[contains(., "Francisco")]/..//input[@type="text"]')
        cy.xpath(('//td[contains(., "Usuario A")]/following-sibling::td[contains(.,"Mestrado")]/..//input[@type="text"]')).type("funciona no xpath")
    })

})