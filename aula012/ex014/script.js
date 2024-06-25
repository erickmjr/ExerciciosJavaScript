function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var baixo = document.querySelector('footer#baixo')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12){
        //BOM DIA   
        imagem.src = 'manha.png'
        baixo.innerHTML = "Bom dia!"
        document.body.style.background = '#fac07d'
    } 
    else if (hora >= 12 && hora <18){
        //BOA TARDE
        imagem.src = 'tarde.png'
        baixo.innerHTML = "Boa tarde!"
        document.body.style.background = '#3a2538'
    }else{
        //BOA NOITE
        imagem.src = 'noite.png'
        baixo.innerHTML = "Boa noite!"
        document.body.style.background = '#0a1a19'
    }
}
