const Conta = require("./conta");
const ContaCorrente = require("./contaCorrente");
const ValidarValor = require("./validarValor");

validValue = new ValidarValor();

function main() {
    let valorUsuario = 0;
    let conta;
    console.log("Seja bem vindo caro cliente ao banco FoxBank! Vamos cadastrar seus dados ...");

    let nome = validValue.validarValorUsuario("Digite seu nome: ", "string");
    let saldo = validValue.validarValorUsuario("Digite seu saldo atual: ", "numero");

    console.log("\nCerto. Criando sua conta ...");
    conta = new Conta(nome, saldo);
    console.log("Conta criada com sucesso.\n");

    console.log(`É um prazer tê-lo conosco Sr.(a) ${conta.titular}.`);

    do{
        console.log(`\nEscolha uma das opções abaixo para o que deseja fazer: `);
        console.log("1 - Consultar saldo");
        console.log("2 - Depositar valor");
        console.log("3 - Sacar valor");
        console.log("4 - Alterar nome");
        console.log("0 - Sair do programa");

        console.log("");
        valorUsuario = validValue.validarValorUsuario("Digite sua escolha: ", "numero");
        console.log("");
        realizarOperacao(conta, valorUsuario);

    }while(valorUsuario != 0);

    console.log("Programa finalizado!");
}

function realizarOperacao(conta, operacao) {
    let valorUsuario;
    switch (operacao) {
        case 1:
            console.log(`Seu saldo é de: R$${conta.pegarSaldo()}`);
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
        
        case 0:
            console.log("Obrigado por escolher nossos serviços. Saindo do programa ...\n");
            break;

        default:
            console.log("Valor não reconhecido. Tente novamente.\n");
            break;
    }
}


main();
