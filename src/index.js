
// ======================== IMPORTS ========================== 
import ContaCorrente from './Contas/contaCorrente.js';
import ContaPoupanca from './Contas/contaPoupanca.js';
import validarValorUsuario from './validarValor.js';
import {pegarNome, pegarDataNascimento, pegarTelefone, pegarEmail, pegarSenha} from './Getters/Getters.js';

// ========================= GLOBAL VARIABLES =========================
const BACK_OPTION = 5;                                  // Valor para que o usuário retorne a "tela"/seção principal do programa. Melhor expliacado durante o código

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
    let valorUsuario = "";                          // Variável para pegar os valores que o usuário digitar
    let contaCorrente, contaPoupanca;               // Variável para criar as contas do usuário
    let contaEscolhida;                             // Variável para dar acesso a conta (corrente ou poupança) que o usuário desejar alterar

    console.log("\n==================== FOX BANK =======================\n");

    console.log("Seja bem vindo caro cliente ao banco FoxBank! Vamos cadastrar seus dados ...\n");
    
    valorUsuario = validarValorUsuario("Você quer criar uma conta (digite y|s para SIM e qualquer outro valor para NÂO) ? ", "string").toUpperCase();

    if((valorUsuario == 'Y') || (valorUsuario == "S")) {
        console.log("Certo! Vamos criar sua conta. Por favor, preencha os campos abaixo:\n");   

        //Pegando os dados de nome, data de nascimento, telefone, email e senha do usuário;

        let nome = pegarNome();
        console.log(`${nome}, seu foi cadastrado com sucesso!\n`);

        let dataNascimento = pegarDataNascimento();
        console.log(`${nome}, sua data de nascimento (${dataNascimento}) foi cadastrada com sucesso\n`);

        let telefone = pegarTelefone();
        console.log(`${nome}, seu telefone (${telefone}) foi cadastrado com sucesso\n`);

        let email = pegarEmail();
        console.log(`${nome}, seu e-mail (${email}) foi cadastrado com sucesso\n`);

        let senha = pegarSenha();
        let senhaOculta = senha.replace(/[0-9a-zA-Z]/g, '*');
        console.log(`${nome}, sua senha (${senhaOculta}) foi cadastrada com sucesso\n`);



        // Criando Conta Corrente do usuário
        contaCorrente = new ContaCorrente(nome, dataNascimento, telefone, email, senha);                
        // Criando Conta Poupança do usuário
        contaPoupanca = new ContaPoupanca(nome, dataNascimento, telefone, email, senha);
        
        
        //Mostrando dados cadastrados:
        console.log("Novo cliente cadastrado:");

        // A utilização da conta corrente é somente para pegar o método mostrarDadosUsuario. Poderia ser feita utilizando ContaPoupança;
        contaCorrente.mostrarDadosUsuario();       


        console.log(`É um prazer tê-lo conosco Sr.(a) ${nome}.\n`);

        valorUsuario = BACK_OPTION;                             // Para que o usuário tenha acesso a tela principal do programa, onde ele vai escolher o tipo de conta que ele deja movimentar
        
        do{                                                     // Loop principal do programa. O usuário poderá fazer as movimentações nas contas até que deseje parar
            if(valorUsuario == BACK_OPTION) {

                valorUsuario = escolherTipoConta();             // "Tela"/ Seção principal do programa
            
                if(valorUsuario == 1) {
                    contaEscolhida = contaCorrente;
                }else if(valorUsuario == 2){
                    contaEscolhida = contaPoupanca;
                }else if(valorUsuario == 3){
                    nome = pegarNome();
                    console.log(`Novo nome: ${nome}\n`);
                    valorUsuario = BACK_OPTION;                // "Após o usuário alterar seu nome, o programa volta à tela principal"
                }   
            }

            if((valorUsuario == 1) || (valorUsuario == 2)) {  // Tela secundária. Onde o usuário irá fazer as movimetações em cada conta, de fato.  
                console.log(`============================ ${contaEscolhida.pegarTipoConta()} ==============================`);
                valorUsuario = definirOperacao();             // Operações (Ver saldo, depositar valor, sacar valor, aplicar juros/rendimento, Voltar (para a tela principal));

                valorUsuario = realizarOperacao(contaEscolhida, valorUsuario); // Aplicar uma das operações citadas acima, na referida conta
            }

        }while(valorUsuario != 0);                            // 0 é a condição de término/parada do programa.

    }
    else{
        console.log("Certo!")
    }

    console.log("Obrigado por escolher nossos serviços. Encerrando atendimento ...\n");
    console.log("Programa finalizado!");
}

// =============================== FUNCTIONS =======================================
// Função para escolher o tipo de conta que o usuario deseja modificar, se desejar alterar seu nome ou se deseja encerrar o programa
// Retorna um número contendo o valor escolhido pelo usuário. Contem validação de dados
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
        valorUsuario = validarValorUsuario("Digite sua escolha: ", "numero");

        if( !((valorUsuario == 0) || (valorUsuario == 1) || (valorUsuario == 2) || (valorUsuario == 3))) {
            valorUsuario = -1;
            console.log("Valor não reconhecido, tente novamente");
        }

    }while(valorUsuario < 0);

    console.log("--------------------------------------------------------------------------------------------------------\n");
    return valorUsuario;
}

// Função para escolher o tipo de operação que o usuário deseja fazer na conta escolhida, seja poupança ou corrente
// Retorna o valor escolhido pelo usuário.  Possui validação de dados
function definirOperacao(){
    let valorUsuario;
    console.log("-----------------------------");
    console.log("Escolha uma das operações abaixo: ");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar valor");
    console.log("3 - Sacar valor");
    console.log("4 - Calcular novo saldo");
    console.log(`${BACK_OPTION} - VOLTAR`);         // Voltar para a tela principal do programa
    
    console.log("");
    valorUsuario = validarValorUsuario("Digite sua escolha: ", "numero");

    console.log("-----------------------------");

    return valorUsuario;
}


// Função para pegar a escolha do usuario e transformar em alguma operação a ser executada pelo sistema do banco (depostiar, sacar, entre outros);

/* OBS: Sobre o uso da variável "valorUsuario" na função abaixo:
 *      - Usada como valor nas operações depositar e sacar
 *      - Usada para validação de opção:
 *          -> valorUsuario = 1 (ou 2): permitir que o usuário continue na conta escolhida e faça outras operações, até que deseje voltar para a tela/seção principal
 *                  Aqui, não faz diferença se o valor é 1 ou 2, pois ambos caem no "if((valorUsuario == 1) || (valorUsuario == 2))", da linha 59.
 *          
 *          -> valorUsuario = BACK_OPTION: Caso o usuário deseje retornar para a tela/seção principal
 * 
*/
function realizarOperacao(conta, operacao) {
    let valorUsuario;

    switch (operacao) {
        case 1:
            console.log(`Seu saldo, na ${(conta.pegarTipoConta())} é de: R$${conta.pegarSaldo()}`);
            valorUsuario = 1;
            break;

        case 2:
            valorUsuario = validarValorUsuario("Digite o valor que você quer depositar: R$", "numero");
            conta.depositar(valorUsuario);
            valorUsuario = 1;
            break;

        case 3:
            valorUsuario = validarValorUsuario("Digite o valor que você quer sacar: R$", "numero");
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
