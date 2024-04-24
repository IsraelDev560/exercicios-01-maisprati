// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require("prompt-sync")();

let numero = 0;
let peso = 0;
let media;

let somaNumeros = 0;
let somaPesos = 0;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal: "));
    peso = parseFloat(prompt("Digite o peso do último número: "));
    if (numero === 0) {
        console.log("Programa encerrado!")
        break;
    }
    else if (isNaN(numero) && isNaN(peso)) {
        console.log("Isso não é um Número")
    }
    else {
        somaNumeros += numero * peso;
        somaPesos += peso;
    }


} media = somaNumeros / somaPesos;

console.log("A media dos números decimais é: " + media.toFixed(2));
