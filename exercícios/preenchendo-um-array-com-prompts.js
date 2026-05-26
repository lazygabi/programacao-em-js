var lista = []
var regADD = prompt("Quantos registros deseja adicionar? ")

for(i=1; i<=regADD; i++){
    
    var reg = prompt("Qual será o registro " + i +"? ")

    lista.push(reg)
}

alert("Registros: " + lista)
