// Classe base para a criação de contas 

class Conta{
    tipoConta = "";
    saldo = 0;
    taxa = 0;           //Juros, para Conta Corrente e rendimento, para Conta Poupança

    constructor(titular){
        this.titular = titular;
    }

    // Funções para utilização interna do programa
    pegarTipoConta(){
        return this.tipoConta;
    }

    alterarTipoConta(novoTipoConta){
        this.tipoConta = novoTipoConta;
    }

    pegarTaxa(){
        return this.taxa;
    }

    alterarTaxa(novaTaxa){
        this.taxa = novaTaxa;
    }

    // Operações realizadas pelo usuário
    pegarSaldo(){
        return this.saldo;
    }

    depositar(valor){
        this.saldo+= valor;
        console.log(`Valor R$${valor} depositado com sucesso na ${this.pegarTipoConta()} do titular ${this.titular}!`);
        console.log(`Seu saldo atual é de R$${this.pegarSaldo()}\n`);
    }

    sacar(valor){
        let valorValido = (valor <= this.saldo);            // O valor que se deseja sacar não pode ser maior que o valor em conta
        if(valorValido){
            this.saldo-= valor;
            console.log("Valor sacado com sucesso.");
        }else{
            console.log("Seu saldo é insuficiente para sacar esse valor.");
        }
        console.log(`O saldo atual do titular ${this.titular}, na ${this.pegarTipoConta()}, é de R$${this.pegarSaldo()}\n`);
    }

    calcularNovoSaldo(){                                                // aplica os juros da Conta Corrente ou o rendimento da Conta Poupança
        this.saldo = this.pegarSaldo() * (1 + this.taxa);
        console.log(`Saldo incrementado na ${this.pegarTipoConta()}.`);
        console.log(`Novo saldo: R$${this.pegarSaldo()}\n`);
    }

};

module.exports = Conta;

