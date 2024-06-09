// Importar o Modulo readline-sync
const readline = require('readline-sync')

// Entrada de dados
let nome = readline.question("Digite seu nome: ")
let peso = Number(readline.question("Digite seu peso: "))
let idade = Number(readline.question("Digite sua idade: "))
let sx = readline.question("É masculino?").toLowerCase() === 'sim'

// Saída de dados
console.log("O nome digitado foi: ", nome)
console.log("O peso digitado foi: ", peso)
console.log("A idade digitada foi: ", idade)
console.log("É masculino? ", sx)
