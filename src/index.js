// ======================== DEPENDENCIES ============================
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca")
const ValidarValor = require("./validarValor");

// ========================= GLOBAL VARIABLES =========================
var validValue = new ValidarValor();
const BACK_OPTION = 5;

// ======================== FUNCTION MAIN ===========================
//Função principal do programa. Responsável pela parte sequencial do programa.

/*  OBS: Sobre a variável "valorUsuário":
 *  Essa variável pode parecer um pouco confusa, mas ela é algo essencial para o funcionamento do cógigo
 *  Ela recebe todo tipo de entrada do usuário, seja String ou número
 *  Ela é usada para:
 *      - Validação de condição
 *      - Receber valores do usuário
 * 
 * */
function main() {
    let valorUsuario = "";
    let contaCorrente, contaPoupanca;
    let contaEscolhida;

    console.log("Seja bem vindo caro cliente ao banco FoxBank! Vamos cadastrar seus dados ...\n");
    
    valorUsuario = validValue.validarValorUsuario("Você quer criar uma conta (digite y|s para SIM e qualquer outro valor para NÂO) ? ", "string");
    valorUsuario = valorUsuario.toUpperCase();

    if((valorUsuario == 'Y') || (valorUsuario == "S")) {
    console.log("Certo! Vamos criar sua conta. Por favor, preencha os campos abaixo:\n");   

    let nome = pegarNome();

    contaCorrente = new ContaCorrente(nome);
    contaPoupanca = new ContaPoupanca(nome);

    console.log(`É um prazer tê-lo conosco Sr.(a) ${nome}.\n`);

    valorUsuario = BACK_OPTION;

    do{
        if(valorUsuario == BACK_OPTION) {
            valorUsuario = escolherTipoConta();
        
            if(valorUsuario == 1) {
                contaEscolhida = contaCorrente;
            }else if(valorUsuario == 2){
                contaEscolhida = contaPoupanca;
            }else if(valorUsuario == 3){
                nome = pegarNome();
                console.log(`Novo nome: ${nome}\n`);
                valorUsuario = BACK_OPTION;
            }
            
        }

        if((valorUsuario == 1) || (valorUsuario == 2)) {
            console.log(`============================ ${contaEscolhida.pegarTipoConta()} ==============================`);
            valorUsuario = definirOperacao();

            valorUsuario = realizarOperacao(contaEscolhida, valorUsuario);
        }

    }while(valorUsuario != 0);

    }
    else{
        console.log("Certo!")
    }

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
        console.log("---------------------------------------------------------------------------------------------------")
        console.log("O que você deseja fazer agora? (Escolha uma das opções abaixo)\n");
        console.log("1 - Entrar na Conta Corrente.");
        console.log("2 - Entrar na Conta Poupança");
        console.log("3 - Alterar nome");
        console.log("0 - Encerrar Atendimento");

        console.log("");
        valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");

        if( !((valorUsuario == 0) || (valorUsuario == 1) || (valorUsuario == 2) || (valorUsuario == 3))) {
            valorUsuario = -1;
            console.log("Valor não reconhecido, tente novamente");
        }

    }while(valorUsuario < 0);

    console.log("--------------------------------------------------------------------------------------------------------\n");
    return valorUsuario;
}

function definirOperacao(){
    let valorUsuario;
    console.log("-----------------------------");
    console.log("Escolha uma das operações abaixo: ");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar valor");
    console.log("3 - Sacar valor");
    console.log("4 - Calcular novo saldo");
    console.log(`${BACK_OPTION} - VOLTAR`);
    
    console.log("");
    valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");

    console.log("-----------------------------");

    return valorUsuario;
}


// Função para pegar a escolha do usuario e transformar em alguma operação a ser executada pelo sistema do banco (depostiar, sacar, entre outros);
function realizarOperacao(conta, operacao) {
    let valorUsuario;

    switch (operacao) {
        case 1:
            console.log(`Seu saldo, na ${(conta.pegarTipoConta())} é de: R$${conta.pegarSaldo()}`);
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
            conta.calcularNovoSaldo();
            valorUsuario = 1;
            break;

        case BACK_OPTION:
            valorUsuario = BACK_OPTION;
            break;

        default:
            console.log("Valor não reconhecido. Tente novamente.");
            valorUsuario = 1;
            break;
    }
    console.log("");

    return valorUsuario;
}



// ========================================================================
main() // Chamando a função principal para execuçãp do código
