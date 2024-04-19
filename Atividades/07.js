// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let macas = parseInt(prompt("Digite quantas maças deseja: "))
const preco = 0.30;
const preco2 = 0.25;
let resultado;

if (macas <=11){
    resultado = preco * macas;
    console.log("Você deseja "+macas+" Maçãs, valor total da compra: "+resultado+"R$")

}else{
    resultado = preco2 * macas;
    console.log("Você deseja "+macas+" Maçãs, valor total da compra: "+resultado+"R$")
}