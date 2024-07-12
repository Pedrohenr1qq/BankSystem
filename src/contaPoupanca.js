const Conta = require("./conta");

class ContaPoupanca extends Conta{
    saldo = 0;
    rendimento = 0.05;

    constructor(titular){
        super(titular);
        this.titular = titular;
    }

    pegarTipoConta(){
        return "Conta Poupança";
    }

    aplicarRendimento(){
        this.saldo = this.pegarSaldo() * (1 + (this.rendimento));;
        console.log("Saldo incrementado.")
        console.log(`Ǹovo saldo: R$${this.pegarSaldo()}`);
    }
}

module.exports = ContaPoupanca;