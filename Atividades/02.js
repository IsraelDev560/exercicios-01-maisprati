// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require("prompt-sync")()

let eleitores = prompt("Digite o numero de eleitores: ");
let brancos = prompt("Digite o numero de votos brancos: ");
let nulos = prompt("Digite o numero de votos nulos: ");
let validos = prompt("Digite o numero de votos validos: ");

resultado = brancos / eleitores;
resultado2 = resultado * 100;
console.log(resultado2+"% de votos brancos")

resultado = nulos / eleitores;
resultado2 = resultado * 100;
console.log(resultado2+"% de votos nulos")

resultado = validos / eleitores;
resultado2 = resultado * 100;
console.log(resultado2+"% de votos validos")