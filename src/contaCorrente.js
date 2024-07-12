const Conta = require("./conta");

class ContaCorrente extends Conta{
    saldo = 0;
    juros = 0.1;

    constructor(titular){
        super(titular);
        this.titular = titular;
    }

    pegarTipoConta(){
        return "Conta Corrente";
    }

    aplicarJuros(){
        this.saldo = this.pegarSaldo() * (1 + (this.juros));;
        console.log("Saldo incrementado.")
        console.log(`Ǹovo saldo: R$${this.pegarSaldo()}`);
    }
}

module.exports = ContaCorrente;