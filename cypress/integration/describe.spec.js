/// <reference types = "cypress" />

it('A external test..', () => {

})

describe('Should group tests ..', () => {
    describe('Should group more specific tesst..', () => {
        it.skip('A specific test...', () => {

        })
    })

    describe('Should group more specific tesst..2 ', () => {
        
    })
    
    
    it.skip('A internal test..', () => {

    })
})