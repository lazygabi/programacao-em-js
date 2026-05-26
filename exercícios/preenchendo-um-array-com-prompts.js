var lista = []
var regADD = prompt("Quantos registros deseja adicionar? ")

if (regADD >=1){

for(i=1; i<=regADD; i++){
    
    var reg = prompt("Qual será o registro " + i +"? ")

    lista.push(reg)
}
alert("Registros: " + lista)
}
else{
    alert("Número de registros inválido")
}
