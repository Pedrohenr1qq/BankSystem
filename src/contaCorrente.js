const Conta = require("./conta");

class ContaCorrente extends Conta{
    juros = 0.1;

    constructor(titular, saldo){
        super(titular, saldo);
        this.titular = titular;
        this.saldo = saldo;
    }

    aplicarJuros(){
        this.saldo = this.pegarSaldo() * (1 + (this.juros));;
        console.log("Saldo incrementado.")
        console.log(`Ǹovo saldo: R$${this.pegarSaldo()}`);
    }
}

module.exports = ContaCorrente;