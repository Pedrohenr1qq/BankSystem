// Classe derivada da classe Conta, tendo suas variáveis e métodos herdados

const Conta = require("./conta");

class ContaCorrente extends Conta{
    juros = 0.1;

    constructor(titular){
        super(titular);
        this.titular = titular;
        this.alterarTipoConta("Conta Corrente");
        this.alterarTaxa(this.juros);   // Alterando taxa para o calculo do novo saldo na Conta Corrente
    } 

}

module.exports = ContaCorrente;