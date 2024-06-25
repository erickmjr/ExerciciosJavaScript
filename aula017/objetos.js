//EM JAVASCRIPT, O ARRAY É UM OBJECT E O OBJETO TAMBÉM É UM OBJECT
let amigo = {
    nome: 'Érick',
    sexo: 'm',
    peso: 65.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }

}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//console.log(amigo.nome) MOSTRA APENAS O ÍNIDICE "NOME" DO OBJETO