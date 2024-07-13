// Classe derivada da classe Conta, tendo suas variáveis e métodos herdados

const Conta = require("./conta");

class ContaPoupanca extends Conta{
    saldo = 0;
    rendimento = 0.05;

    constructor(titular){
        super(titular);
        this.titular = titular;
        this.alterarTipoConta("Conta Poupança");
        this.alterarTaxa(this.rendimento); // Alterando taxa para o calculo do novo saldo na Conta Poupança
    }
}

module.exports = ContaPoupanca;