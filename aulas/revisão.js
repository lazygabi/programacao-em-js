// Revisão para os novatos ( nesse caso, eu :D )

var nome = prompt("Digite o seu nome: ") // prompt pede o teclado do usuário (digitar, no caso)

alert("Seja bem vindo! " + nome)

var nota = prompt("Digite a sua nota: ")


if(nota >= 0 && nota < 60){
    alert("Aluno reprovado")
}
else if (nota >= 60 && nota < 100){
    alert("Aluno aprovado")
}
else{
    alert("Nota inválida")
}
