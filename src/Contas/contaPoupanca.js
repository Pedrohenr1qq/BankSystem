// Classe derivada da classe Conta, tendo suas variáveis e métodos herdados

import Conta from "./conta.js";

class ContaPoupanca extends Conta{
    saldo = 0;
    rendimento = 0.05;

    constructor(titular, dataNascimento, telefone, email, senha){
        super(titular, dataNascimento, telefone, email, senha);
        this.alterarTipoConta("Conta Poupança");
        this.alterarTaxa(this.rendimento); // Alterando taxa para o calculo do novo saldo na Conta Poupança
    }
}

export default ContaPoupanca;