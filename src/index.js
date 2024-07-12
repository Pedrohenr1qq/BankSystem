// ======================== DEPENDENCIES ============================
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca")
const ValidarValor = require("./validarValor");

// ========================= GLOBAL OBJECTS =========================
var validValue = new ValidarValor();

// ======================== FUNCTION MAIN ===========================
function main() {
    let valorUsuario = 5;
    let contaCorrente, contaPoupanca;
    let contaEscolhida;

    console.log("Seja bem vindo caro cliente ao banco FoxBank! Vamos cadastrar seus dados ...\n");

    let nome = validValue.validarValorUsuario("Digite seu nome: ", "string");

    console.log("\nCerto. Cadastrando seus dados ...");
    contaCorrente = new ContaCorrente(nome);
    contaPoupanca = new ContaPoupanca(nome);
    console.log("Dados cadastrados com sucesso.\n");

    console.log(`É um prazer tê-lo conosco Sr.(a) ${nome}.\n`);

    do{
        if(valorUsuario == 5) valorUsuario = escolherTipoConta();

        if(valorUsuario == 1) {
            contaEscolhida = contaCorrente;
        }else if(valorUsuario == 2 ){
            contaEscolhida = contaPoupanca;
        }else {
            // Apenas continue o programa;
        }

        if((valorUsuario == 1) || (valorUsuario == 2)) console.log(`Ok. Entrando na sua ${contaEscolhida.pegarTipoConta()}`);

        if(valorUsuario != 0) {
            valorUsuario = definirOperacao();
            console.log("");
    
            valorUsuario = realizarOperacao(contaEscolhida, valorUsuario);
        }

    }while(valorUsuario != 0);

    console.log("\nObrigado por escolher nossos serviços. Encerrando atendimento ...\n");

    console.log("Programa finalizado!");
}

// =============================== FUNCTIONS =======================================

function escolherTipoConta(){
    let valorUsuario;

    do{
        console.log("-------------------------------")
        console.log("Qual conta vocẽ deseja realizar operações? (Escolha uma das opções abaixo)");
        console.log("1 - Conta Corrente.");
        console.log("2 - Conta Poupança");
        console.log("0 - Encerrar Atendimento");

        console.log("");
        valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");
        console.log("");

        if( !((valorUsuario == 1) || (valorUsuario == 2) || (valorUsuario == 0))) {
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
    console.log(`Escolha uma das opções abaixo para o que deseja fazer: `);
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar valor");
    console.log("3 - Sacar valor");
    console.log("4 - Alterar nome");
    console.log("5 - Voltar");
    
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
            break;

        case 2:
            valorUsuario = validValue.validarValorUsuario("Digite o valor que você quer depositar: R$", "numero");
            conta.depositar(valorUsuario);
            break;

        case 3:
            valorUsuario = validValue.validarValorUsuario("Digite o valor que você quer sacar: R$", "numero");
            conta.sacar(valorUsuario);
            break;
            
        case 4:
            valorUsuario = validValue.validarValorUsuario("Digite seu novo nome: ", "string");
            conta.alterarNome(valorUsuario);
            break;
        
        case 5:
            valorUsuario = 5;
            break;

        default:
            console.log("Valor não reconhecido. Tente novamente.\n");
            break;
    }
    console.log("");

    return valorUsuario;
}



// ========================================================================
main() // Chamando a função principal para execuçãp do código
