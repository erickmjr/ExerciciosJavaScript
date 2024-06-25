let num = [5, 8, 2, 9, 3]
num.push(80)
num.push(92)
console.log('Array elements:')
for (let c = 0; c <= 6; c++){
    console.log(num[c])
}
console.log(`The array has ${num.length} elements`)


// Função de comparação para ordenar numericamente
function compararNumeros(a, b) {
    return a - b
  }

console.log(`Ordered array:`)
num.sort(compararNumeros)
console.log(num)

//FORMA LONGA DE UTILIZAÇÃO DO FOR PARA LEITURA DE ARRAYS
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


//FORMA SIMPLIFICADA DE UTILIZAR O FOR PARA LEITURA DE ARRAYS
console.log('Utilizando o "For in":')
for (let posicao in num){
    console.log(posicao)
}




