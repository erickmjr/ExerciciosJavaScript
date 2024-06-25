function verificar(){
    let inicio = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#pas')
    let res = document.querySelector('div#resultado')

    if((inicio.value == '') || (fim.value == '') || (passo.value == '')){
        alert('Certifique-se de preencher todos os campos e tente novamente.')
    }
    else if (passo.value <= 0){
        alert('"Passo" não pode ser nulo/negativo, digite um valor válido.')
    } 
    else if (inicio.value > fim.value){
        res.innerHTML = ''
        for(let v = Number(inicio.value); v <= Number(fim.value); v += Number(passo.value)){
            res.innerHTML += `${v}➡️`
        }
        res.innerHTML += '🚩'
    } else{
        res.innerHTML = ''
        for(let c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)){
            res.innerHTML += `${c}➡️`
        }
        res.innerHTML += '🚩'
    }
}    