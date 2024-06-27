let valores = []
let erro = document.querySelector('div#erro')
let txtval = document.querySelector('div#valores')
let txtres = document.querySelector('div#resultado')

function guardar(){
    erro.innerHTML = ''
    txtval.innerHTML = ''
    let num = Number(document.querySelector('input#num').value)
    if (num == ''){
        erro.innerHTML = 'Digite algum valor para ser guardado.'
    }else{
        valores.push(num)
        erro.innerHTML = 'Valor guardado com sucesso!'
    }
    
}

function consultar(){
    if (valores == ''){
        erro.innerHTML = 'Não há valores a serem consultados.'
    }else{
        txtval.innerHTML = ''
        erro.innerHTML = ''
        erro.innerHTML = `Valores guardados até o momento:\n`
        for (let c in valores){
            txtval.innerHTML += `\nPosição ${Number(c)+1}: ${valores[c]}` + "<br>"
        }
    }
}