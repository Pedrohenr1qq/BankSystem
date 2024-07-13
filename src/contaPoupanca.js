const Conta = require("./conta");

class ContaPoupanca extends Conta{
    saldo = 0;
    rendimento = 0.05;

    constructor(titular){
        super(titular);
        this.titular = titular;
        this.alterarTipoConta("Conta Poupança");
        this.alterarTaxa(this.rendimento);
    }
}

module.exports = ContaPoupanca;