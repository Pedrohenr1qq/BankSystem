// Classe derivada da classe Conta, tendo suas variáveis e métodos herdados

import Conta from "./conta.js";

class ContaCorrente extends Conta{
    juros = 0.1;

    constructor(titular, dataNascimento, telefone, email, senha){
        super(titular, dataNascimento, telefone, email, senha);
        this.alterarTipoConta("Conta Corrente");
        this.alterarTaxa(this.juros);   // Alterando taxa para o calculo do novo saldo na Conta Corrente
    } 

}

export default ContaCorrente;