it('nada agora', function() { })

//function soma(a,b) {
//    return a+b
//}

//funcao anonima
//const soma = function (a,b) {
//    return a + b
//}

//const soma = (a,b) => {
//    return a + b
//}

// cost soma = (a,b) => a + b

const soma = () => 5 + 5

//console.log(soma(1,5))

it('an function test...' , function(){
    console.log('function', this)
})

it('a arrow function test...', () => {
    console.log('arrow', this)
})

