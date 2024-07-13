const Conta = require("./conta");

class ContaCorrente extends Conta{
    juros = 0.1;

    constructor(titular){
        super(titular);
        this.titular = titular;
        this.alterarTipoConta("Conta Corrente");
        this.alterarTaxa(this.juros);
        this.alterarTempoTaxa(5000);
    } 

}

module.exports = ContaCorrente;