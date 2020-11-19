/// <reference types = "cypress" />


it('Equality' , () => {
    const a = 1

    expect(a, 'Deveria ser 1').equal(1)
    expect(a).equal(1)
    expect('a').not.to.be.equal('b')
})


it('Truthy', ()=> {
    const a = true
    const b = null
    let c
    expect(a).to.be.true
    expect(b).to.be.null
    expect(c).to.be.undefined
})

it('Equality Object', ()=> {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).eq(obj)
    expect(obj).to.be.deep.equal({a: 1,b: 2 })
    expect(obj).eql({a: 1,b: 2 })
    expect(obj).include({a:1})
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,2,3])
    expect(arr).to.be.not.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'str'
    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('Strings', () => {
    const str = 'String de teste'
    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/^String/)
    expect(str).to.match(/teste$/)
    expect(str).to.match(/\w+/)
    expect(str).to.match(/\D+/)
})


it('Numbers', () => {
    const number = 5
    const float = 5.24

    expect(number).to.equal(5)
    expect(number).above(3)
    expect(number).below(7)
    expect(float).to.be.closeTo(5.2, 0.1)
    expect(number).above(4)
})

