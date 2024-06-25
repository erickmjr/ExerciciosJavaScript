function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.len == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]\nVerifique os dados e coloque novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'criancaHomem.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade <50){
                img.setAttribute('src', 'adultoHomem.jpg')
            } else{
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'criancaMulher.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade <50){
                img.setAttribute('src', 'adultoMulher.jpg')
            } else{
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }
}