const prompt = require("prompt-sync")();
let juros = 0.1;
let saldo = 100;

async function aplicarJuros() {
    const promise = new Promise(resolve => {
        setInterval(() => {
            resolve(saldo *= (1 + juros));
            console.log("Seu saldo atual é: " + saldo.toFixed(2));
        }, 3000); 
    });
}

console.log("Incrementando saldo");
aplicarJuros();
nome = prompt("Digite seu nome: ");
console.log(nome);