/* Considere a seguinte lista de nomes: 

var nomes = ["Ana", "Carlos", "Beatriz", "Iago", "Amanda", "Rodrigo", "Leo", "Fernanda"] 

    1- Use for para percorrer o array e exibir com alert somente os nomes que tenham mais de 5 letras.
    
    2- Use for para percorrer o array e exibir somente os nomes que começam com a letra "A". 
    
    3- Use for para percorrer o array e exibir somente os nomes que tenham 3 letras ou menos. No final, mostre também quantos nomes assim existem no array. ]
    
    4- Use for para percorrer o array e exibir somente os nomes que terminam com a letra "o". 
    
    5- Use for para percorrer o array e exibir todos os nomes, mas junto com cada um mostre em que posição ele está no array (começando do 1, não do 0). 
    
    6- Use for para percorrer o array e exibir somente os nomes que não contenham a letra "e" (maiúsculo ou minúsculo). No final, mostre o total encontrado.
*/

var nomes = ["Ana", "Carlos", "Beatriz", "Iago", "Amanda", "Rodrigo", "Leo", "Fernanda"] 

console.log("Parte 1:")

for(i=0; i < nomes.length; i++){
    if (nomes[i].length > 5) {
        alert("["+(i+1)+"]. "+ nomes[i])
    }
}

console.log("\nParte 2:")

for(i=0; i < nomes.length; i++){
    if (nomes[i][0] == "A") {
        alert("["+(i+1)+"]. "+ nomes[i])
    }
}

console.log("\nParte 3:")

var quantosArrays = 0

for(i=0; i < nomes.length; i++){
    
    if (nomes[i].length <= 3) {
        alert("["+(i+1)+"]. "+ nomes[i])
        quantosArrays+=1
    }
    
    if (i == nomes.length-1) {
        alert("\n↑ Há um total de "+quantosArrays+ " nomes dentro do array com três letras ou menos")
    }
}
   
console.log("\nParte 4:")
  
for(i=0; i < nomes.length; i++){
    var ultimaLetra = nomes[i].length-1
    
    if (nomes[i][ultimaLetra] == "o") {
        alert("["+(i+1)+"]. "+ nomes[i])
    }
    
}

console.log("\nParte 5:")

for(i=0; i < nomes.length; i++){
    alert("["+(i+1)+"]. "+ nomes[i])
}

console.log("\nParte 6:") // Deu mais trabalho, então optei por comentar pra não me perder

quantosArrays = 0 // Reseta pra aproveitar variável, mas dá pra criar outra

for(i=0; i < nomes.length; i++){ // Roda por todo o array
    var tem = false
    
    for(letra=0; letra < nomes[i].length; letra++){ // Roda para cada palavra dentro do array
        var palavraLowerCase = nomes[i].toLowerCase() // Deixa a palavra em minúsculo
        
        if (palavraLowerCase[letra] == "e") { // Se tiver "e", meio que dá "blacklist"
            tem = true // Adiciona na "blacklist" caso tenha "e"
            break
        }
        
    }
    
    if (tem == false) {
        alert("["+(i+1)+"]. "+ nomes[i])
        quantosArrays++
    }
    
}

alert("\n↑ Há um total de "+quantosArrays+ " nomes dentro do array que não contêm a letra 'e'")
