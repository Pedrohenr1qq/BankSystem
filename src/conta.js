
class Conta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    alterarNome(novoNome){
        this.titular = novoNome;
        console.log(`\nNome alterado com sucesso. Novo nome: ${this.titular}`);
    }

    pegarSaldo(){
        return this.saldo;
    }


    depositar(valor){
        this.saldo+= valor;
        console.log(`\nValor R$${valor} depositado com sucesso na conta do titular ${this.titular}!`);
        console.log(`O saldo atual do titular ${this.titular} é de R$${this.pegarSaldo()}`);
    }

    sacar(valor){
        let valorValido = (valor <= this.saldo);
        if(valorValido){
            this.saldo-= valor;
            console.log("\nValor sacado com sucesso.");
        }else{
            console.log("\nSeu saldo é insuficiente para sacar esse valor.");
        }
        console.log(`O saldo atual do titular ${this.titular} é de R$${this.pegarSaldo()}`);
    }
};

module.exports = Conta;

