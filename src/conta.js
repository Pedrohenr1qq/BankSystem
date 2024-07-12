
class Conta{
    saldo = 0;

    constructor(titular){
        this.titular = titular;
    }

    pegarTipoConta(){
        return "";
    }

    pegarSaldo(){
        return this.saldo;
    }

    depositar(valor){
        this.saldo+= valor;
        console.log(`\nValor R$${valor} depositado com sucesso na ${this.pegarTipoConta()} do titular ${this.titular}!`);
        console.log(`Seu saldo atual é de R$${this.pegarSaldo()}`);
    }

    sacar(valor){
        let valorValido = (valor <= this.saldo);
        if(valorValido){
            this.saldo-= valor;
            console.log("\nValor sacado com sucesso.");
        }else{
            console.log("\nSeu saldo é insuficiente para sacar esse valor.");
        }
        console.log(`O saldo atual do titular ${this.titular}, na ${this.pegarTipoConta()}, é de R$${this.pegarSaldo()}`);
    }
};

module.exports = Conta;

