var lista = []
var regADD = prompt("Quantos jogos deseja adicionar à sua lista de desejos? ")

if (regADD >=1){

for(i=1; i<=regADD; i++){
    alert("\nAdicionando o "+i+"º"+ " jogo")
    
    var reg = prompt("Digite o nome do jogo: ")
    lista.push(reg)
}
alert("\nJogos registrados: " + lista)
}
else{
    alert("Número de registros inválido")
}
