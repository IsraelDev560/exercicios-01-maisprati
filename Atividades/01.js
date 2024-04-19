// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite a temperatura "));
let multiplicacao = 1.8;
let resultado;
let atribuicao;

    atribuicao = multiplicacao * numero;
    resultado = atribuicao + 32;
if (numero == -273){
    console.log("Não é possivel converter ")
} else{
    console.log(`a temperatura em ${numero} Graus Celsius foi transformada para ${resultado} Fahrenheit`);
}

    

