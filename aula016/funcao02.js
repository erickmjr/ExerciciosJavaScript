function soma(n1, n2){
    return n1 + n2
}

let somar = soma(1,3)
console.log(somar)

//outra forma para evitar undefined
function soma(n1d = 0, n2 = 0){
    return n1 + n2
}

let som = soma(1,3)
console.log(som)