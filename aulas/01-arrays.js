/*
var nome1 = "Daniel"
var nome2 = "Wesley"
var nome3 = "Ana"
var nome4 = "Carlos"

 Como não fazer /\                   */

var nomes = ["Daniel", "Wesley", "Ana", "Carlos"]

    for(i=0; i<=3; i++){ // Início / Até onde vai / De quanto aumenta em quanto aumenta 
        alert("Seja bem-vindo " + nomes[i] + " ao sistema! ") // + em JS é pra concatenar coisas

    }

alert("\nOutro método:\n")

// EM JS!
nomes.forEach(nome => alert(nome)) // Repete pra cada elemento (nome= meio que uma váriavel pra cada elemento, pode ser usado por exemplo, n => alert(n) )
