
class Conta{
    tipoConta = "";
    saldo = 0;
    taxa = 0;
    tempoTaxa = 3000;
    intervalo;

    constructor(titular){
        this.titular = titular;
    }

    pegarTipoConta(){
        return this.tipoConta;
    }

    alterarTipoConta(novoTipoConta){
        this.tipoConta = novoTipoConta;
    }

    pegarSaldo(){
        return this.saldo;
    }

    pegarTaxaRendimento(){
        return this.taxa;
    }

    alterarTaxa(novaTaxa){
        this.taxa = novaTaxa;
    }

    pegarTempoTaxa(){
        return this.tempoTaxa;
    }

    alterarTempoTaxa(novoTempoTaxa){
        this.tempoTaxa = novoTempoTaxa;
    }

    depositar(valor){
        this.saldo+= valor.toFixed(2);
        console.log(`Valor R$${valor} depositado com sucesso na ${this.pegarTipoConta()} do titular ${this.titular}!`);
        console.log(`Seu saldo atual é de R$${this.pegarSaldo()}\n`);
    }

    sacar(valor){
        let valorValido = (valor <= this.saldo);
        if(valorValido){
            this.saldo-= valor;
            console.log("Valor sacado com sucesso.");
        }else{
            console.log("Seu saldo é insuficiente para sacar esse valor.");
        }
        console.log(`O saldo atual do titular ${this.titular}, na ${this.pegarTipoConta()}, é de R$${this.pegarSaldo()}\n`);
    }

    calcularNovoSaldo(){
        this.saldo = this.pegarSaldo() * (1 + this.taxa);
        console.log(`Saldo incrementado na ${this.pegarTipoConta()}.`);
        console.log(`Novo saldo: R$${this.pegarSaldo()}\n`);
    }

};

module.exports = Conta;

