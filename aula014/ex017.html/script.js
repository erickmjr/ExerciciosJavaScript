function tabuada(){
    let numero = document.querySelector('input#num')
    let tab = document.getElementById('tabela')
    
    if (num.value == ''){
        alert('Digite um número.')
    } else{
       tab.innerHTML = ''
        let n = Number(numero.value)
        for (let c = 1; c<=10; c++){
            let item = document.createElement('option')
                item.text = `${numero.value} x ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
        }
    }
    
}