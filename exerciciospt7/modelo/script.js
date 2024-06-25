let valores = []
let numero = document.querySelector('input#num')
let msg = document.querySelector('div#mensagens')
let tbl = document.querySelector('select#tabela')

function adicionar(){
    if (numero.value == ''){
        msg.innerHTML = 'Digite algum valor para ser adicionado à lista.'
    } else if ((valores.indexOf(Number(numero.value)) != -1) ||(Number(numero.value) < 1 || Number(numero.value) > 100)){
        msg.innerHTML = 'Este valor é inválido ou já foi adicionado anteriormente.'
    }
    else{
        msg.innerHTML = ''
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tbl.appendChild(item)
        msg.innerHTML = 'Valor adicionado com sucesso!'
    }
    numero.value = '' //APAGA A STRING DIGITADA NO INPUT
    numero.focus() //MANTÉM O CURSOR NO INPUT
}

function consultar(){
    let somaval = 0
   
    if (valores.length == 0){
        msg.innerHTML = 'Não há nenhum número cadastrado.'
    } else{
        for(let c in valores){
            somaval += Number(valores[c])

        }

    let media = Number(somaval/Number(valores.length))
        msg.innerHTML = `Ao todo, temos ${valores.length} número(s) cadastrado(s)` + '<br>'
        msg.innerHTML += `O maior valor informado foi ${Math.max(...valores)}` + '<br>'
        msg.innerHTML += `O menor valor informado foi ${Math.min(...valores)}` + '<br>'
        msg.innerHTML += `Somando todos os valores, temos: ${somaval}` + '<br>'
        msg.innerHTML += `A média dos valores digitados é: ${media.toFixed(2)}`
    }

}