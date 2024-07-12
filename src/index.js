// ======================== DEPENDENCIES ============================
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca")
const ValidarValor = require("./validarValor");

// ========================= GLOBAL OBJECTS =========================
var validValue = new ValidarValor();

// ======================== FUNCTION MAIN ===========================
function main() {
    let valorUsuario = 4;
    let contaCorrente, contaPoupanca;
    let contaEscolhida;

    console.log("Seja bem vindo caro cliente ao banco FoxBank! Vamos cadastrar seus dados ...\n");

    let nome = pegarNome();

    contaCorrente = new ContaCorrente(nome);
    contaPoupanca = new ContaPoupanca(nome);

    console.log(`É um prazer tê-lo conosco Sr.(a) ${nome}.\n`);

    do{
        if(valorUsuario == 4) valorUsuario = escolherTipoConta();

        if(valorUsuario == 1) {
            contaEscolhida = contaCorrente;
        }else if(valorUsuario == 2){
            contaEscolhida = contaPoupanca;
        }else if(valorUsuario == 3){
            nome = pegarNome();
            valorUsuario = 4;
        }

        if((valorUsuario == 1) || (valorUsuario == 2)) {
            console.log(`============ ${contaEscolhida.pegarTipoConta()} ================`);
            valorUsuario = definirOperacao();
            console.log("");
            valorUsuario = realizarOperacao(contaEscolhida, valorUsuario);
        }

    }while(valorUsuario != 0);

    console.log("Obrigado por escolher nossos serviços. Encerrando atendimento ...\n");

    console.log("Programa finalizado!");
}

// =============================== FUNCTIONS =======================================
function pegarNome(){
    let valorUsuario = "", nomePadronizado = "", tamanhoNome= 0;
    let casoMaiusculo = false;
    valorUsuario = validValue.validarValorUsuario("Digite seu nome: ", "string");
    tamanhoNome = valorUsuario.length;

    nomePadronizado = validValue.validarNome(valorUsuario, tamanhoNome);

    console.log("Nome cadastrado com sucesso!\n");
    
    return nomePadronizado;
}


function escolherTipoConta(){
    let valorUsuario;

    do{
        console.log("-------------------------------")
        console.log("O que você deseja fazer agora? (Escolha uma das opções abaixo)\n");
        console.log("1 - Entrar na Conta Corrente.");
        console.log("2 - Entrar na Conta Poupança");
        console.log("3 - Alterar nome");
        console.log("0 - Encerrar Atendimento");

        console.log("");
        valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");
        console.log("");

        if( !((valorUsuario == 0) || (valorUsuario == 1) || (valorUsuario == 2) || (valorUsuario == 3))) {
            valorUsuario = -1;
            console.log("Valor não reconhecido, tente novamente");
        }

    }while(valorUsuario < 0);

    console.log("-----------------------------\n");
    return valorUsuario;
}



function definirOperacao(){
    let valorUsuario;
    console.log("-----------------------------");
    console.log("Escolha uma das operações abaixo: ");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar valor");
    console.log("3 - Sacar valor");
    //console.log("4 - Alterar nome");
    console.log("4 - Voltar");
    
    console.log("");
    valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");
    console.log("");

    console.log("-----------------------------");

    return valorUsuario;
}


// Função para pegar a escolha do usuario e transformar em alguma operação a ser executada pelo sistema do banco (depostiar, sacar, entre outros);
function realizarOperacao(conta, operacao) {
    let valorUsuario;

    switch (operacao) {
        case 1:
            console.log(`Seu saldo, na ${conta.pegarTipoConta()} é de: R$${conta.pegarSaldo()}`);
            valorUsuario = 1;
            break;

        case 2:
            valorUsuario = validValue.validarValorUsuario("Digite o valor que você quer depositar: R$", "numero");
            conta.depositar(valorUsuario);
            valorUsuario = 1;
            break;

        case 3:
            valorUsuario = validValue.validarValorUsuario("Digite o valor que você quer sacar: R$", "numero");
            conta.sacar(valorUsuario);
            valorUsuario = 1;
            break;
            
        case 4:
            valorUsuario = 4;
            break;

        default:
            console.log("Valor não reconhecido. Tente novamente.\n");
            valorUsuario = 1;
            break;
    }
    console.log("");

    return valorUsuario;
}



// ========================================================================
main() // Chamando a função principal para execuçãp do código
