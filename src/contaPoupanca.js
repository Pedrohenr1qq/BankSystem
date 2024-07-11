const Conta = require("./conta");

class ContaPoupanca extends Conta{
    rendimento = 0.05;

    constructor(titular, saldo){
        super(titular, saldo);
        this.titular = titular;
        this.saldo = saldo;
    }

    aplicarRendimento(){
        this.saldo = this.pegarSaldo() * (1 + (this.rendimento));;
        console.log("Saldo incrementado.")
        console.log(`Ǹovo saldo: R$${this.pegarSaldo()}`);
    }
}

module.exports = ContaCorrente;