// Funções para verificação e validação de valores, segundo o tipo de valor requisitado

import Prompt from 'prompt-sync';

var prompt = Prompt();


// Função principal para validar os valores digitados pelo usuário, segundo o tipo requisitado
// Retorna um valor (número ou string) válido
export default function validarValorUsuario(mensagem, tipoValor){
    let valorUsuario = "";
    let valorValido = false;
    
    do{
        //validar numeros
        if(tipoValor == "numero"){
            valorUsuario = +(prompt(mensagem));
            valorValido = validarNumero(valorUsuario);
            if(!valorValido) console.log("O valor digitado não é um número válido. Tente novamente.\n");
        }
        
        //validar nomes
        else if(tipoValor == "nome"){
            valorUsuario = (prompt(mensagem))
            valorUsuario = valorUsuario.replace(/[^a-zA-Z\s]/g,'');         
            valorValido = validarNome(valorUsuario);
            if(!valorValido) console.log("O valor digitado não é um nome válido. Tente novamente.\n");
            else valorUsuario = padronizarNome(valorUsuario);
        }

        //validar datas
        else if(tipoValor == "data"){
            let ano, anoValido, mes, mesValido, dia, diaValido;

            ano = +(prompt("Digite o ano em que nasceu: "));
            anoValido = validarAno(ano);
            
            if(anoValido) {
                mes = +(prompt("Digite o mes em que nasceu: "));
                mesValido = validarMes(mes);

                if(mesValido) {
                    dia = +(prompt("Digite o dia em que nasceu: "));
                    diaValido = validarDia(dia);

                    valorValido = diaValido;
                    valorUsuario = (dia+"/"+mes+"/"+ano);

                    if(!valorValido) console.log("O dia digitado é invalido. Tente novamente. \n");
                }
                else console.log("O mês digitado é invalido. Tente novamente. \n");
            }
            else console.log("O ano digitado é invalido. Tente novamente. \n");
        }
        
        //validar telefone
        else if(tipoValor == "telefone"){
            valorUsuario = prompt(mensagem);
            valorValido = validarTelefone(valorUsuario);
            if(!valorValido) console.log("O telefone digitado não é válido. Tente novamente");
        }

        //validar email
        else if(tipoValor ==  "email"){
            valorUsuario = (prompt(mensagem));
            valorValido = validarEmail(valorUsuario);
            if(!valorValido) console.log("Email incorreto. Tente novamente");
        }

        //validar senha
        else if(tipoValor == "senha"){
            valorUsuario = (prompt(mensagem));
            let confirmarSenha = (prompt("Digite sua senha novamente: "));
            let senhaMin = 5;
            valorValido = validarSenha(valorUsuario, confirmarSenha, senhaMin);
            if(!valorValido) console.log("A senha digitada é invalida. Por favor, tente novamente.\n");
        }
        
        //validar senha
        else{
            valorUsuario = (prompt(mensagem))
            valorValido = validarString(valorUsuario);
            if(!valorValido) console.log("O valor digitado não é válido. Tente novamente.\n");
        }
        console.log();

    }while(!valorValido);                                       // Só continua o programa se o usuário fornecer um valor válido

    return valorUsuario;
}


// Função para verificar se um valor é um numero inteiro positivo (Não faz sentido se ter números negativos nesse contexto)
// Retorna um número valido
function validarNumero(valor){
    let valorNumerico = !(isNaN(valor));   // Se não (não é um número), é um número
    let valorPositivo = (valor >= 0);

    let valorValido = ((valorNumerico) && (valorPositivo));

    return valorValido;
}

// função para verficar se um valor é uma string valida (valor não numerico e com conteudo)
// Retorna uma string válida
function validarString(valor){
    let valorNaoNumerico = !(validarNumero(valor));            
    let valorNaoVazio = (valor != "");
    let valorValido = ((valorNaoNumerico) && (valorNaoVazio));

    return valorValido;
}

    // Função para validar o nome. 
    function validarNome(nome){                                 
        nome = nome.replace(/[^a-zA-Z\s]/g,'');             // Regex (expressão regular) para permitir somente valores do alfabeto (sem numeros ou caracteres especiais)
        let nomeValido = validarString(nome);
        return nomeValido;
    }

    // Retorna um nome valido, segundo o padrão: Iniciais maiúsculas, sem espaços no inicio e no fim e sem caracteres especiais. Não permite acentuação (Ponto a melhorar).
    function padronizarNome(nome){
        let nomePadronizado = "";
        let casoMaiusculo = false;

        for(let i = 0; i < nome.length; i++){        
            if((i == 0) && (nome[0] != " ")){                                   // Se o primeiro caractere do nome não for um espaço em branco,
                casoMaiusculo = true;                                           // coloca ele em maiúsculo
            }
    
            if(casoMaiusculo){
                nomePadronizado += nome[i].toUpperCase();
                casoMaiusculo = false;
            }
            else{   
                nomePadronizado += nome[i];                             // Colocar o resto do nome normalmente
            }
            
            if((nome[i] == " ") && ((i+1) < tamanhoNome) ){             // se houver um espaço e ele não estiver na ultima posição do nome,
                casoMaiusculo = true;                                   // o proximo caractere deve ser maiusculo
            }
        }
            
        nomePadronizado = nomePadronizado.trim();                       // Removendo espaçoes desnecessários
                
        return nomePadronizado;
    }

    // Função para validar o ano de nascimento. O ano deve ser um número válido e não pode ter uma diferença maior que 120 comparado ao ano atual
    function validarAno(ano){
        let anoAtual = new Date().getFullYear();
        let anoValido = (
            validarNumero(ano) &&
            ((anoAtual - ano) < 120)
        );
        return anoValido
    }

    //Função para validar o mes de nascimento. Deve ser um numero válido e limitado até 12
    function validarMes(mes){
        let mesValido = (
            validarNumero(mes) &&
            (mes <= 12)
        )

        return mesValido;
    }

    //Função para validar o dia de nascimento. Verifica se o ano é bissexto e quais meses são de 30 ou 31 dias.
    function validarDia(dia, mes, ano){
        // Um ano bissexto é aquele que é divisivel por 4 e por 100 ao mesmo tempo. Anos multiplos exatos de 100 (como 1900, 1800)e não de 400 não são válidos.
        let anoBissexto = ( (ano%4 == 0) && ( (ano%100 != 0) || ((ano%100 == 0) && (ano%400 == 0)) ));
        let dataMax = 31;

        if(mes == 2 )
            dataMax = (anoBissexto) ? 29 : 28;
        
        else if((mes <= 7) && (mes%2 != 0))
            dataMax = 31;
        
        else if((mes >= 8) & (mes%2 == 0))
            dataMax = 31;
    
        else dataMax = 30;
      
        let diaValido = ( 
            validarNumero(dia) && 
            (dia <= dataMax)
        );

        return diaValido;
    }

    //função para validar telefone de uma pessoa, com DDD 
    function validarTelefone(telefone){
        telefone = telefone.replace('/[^0-9]/', '');

        let telefoneValido = (
            (telefone.length == 11) &&
            (telefone[2] == 9) 
        )

        return telefoneValido;
    }

    //função para validar um email, com base nas regras abaixo
    function validarEmail(email){
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@")+1, email.length);

        let emailValido = (
        (validarString(email)) &&    // O email deve ser uma string e não um número
        (usuario.length >= 1) &&          // O nome de usuário deve ter ao menos um caractere
        (dominio.length >= 3) &&          // O dominio do email deve ter ao menos 3 caracteres
        (usuario.search("@") == -1) &&    // O nome de usuário não deve conter o caractere '@'
        (dominio.search("@") == -1) &&    // O domínio do email não deve conter o caractere '@'
        (usuario.search(" ") == -1) &&    // O nome de usuário não deve conter espaços
        (dominio.search(" ") == -1) &&    // O dominio do email não deve conter espaços
        (dominio.search(".") != -1) &&    // O dominio do email deve conter ao menos 1 ponto
        (dominio.indexOf(".") >= 1) &&    // O primeiro ponto do email não pode ser o primeiro caractere
        (dominio.lastIndexOf(".") < dominio.length -1)    // O ultimo ponto do dominio não pode ser o último caractere
        );

        return emailValido;      
    }

    //Função para validar a senha. Deve ser maior ou igual ao valor especificado (senhaMin) e deve coincidir com a verificação de senha
    function validarSenha(senha, confirmarSenha, senhaMin ){
        let senhaValida = (
            (senha.length >= senhaMin) &&
            (confirmarSenha == senha)
        );
        return senhaValida;
    }