const prompt = require("prompt-sync")();

class ValidarValor{
    constructor(){}

    validarNumero(valor){
        let valorNumerico = !(isNaN(valor));
        let valorPositivo = (valor >= 0);

        let valorValido = ((valorNumerico) && (valorPositivo));
        return valorValido;
    }

    validarString(valor){
        let valorNaoNumerico = !(this.validarNumero(valor));
        let valorNaoVazio = (valor != "");
        let valorValido = ((valorNaoNumerico) && (valorNaoVazio));
        return valorValido;
    }

    validarValorUsuario(mensagem, tipoValor){
        let valorUsuario;
        let valorValido;
        
        do{
            if(tipoValor == "numero"){
                valorUsuario = +(prompt(mensagem));
                valorValido = this.validarNumero(valorUsuario);
            }
            else{
                valorUsuario = (prompt(mensagem))
                valorUsuario = valorUsuario.replace(/[^a-zA-Z\s]/g,'');
                valorValido = this.validarString(valorUsuario);
            }

            if(!valorValido){
                console.log("Esse valor não é válido. Tente novamente.");
            }

        }while(!valorValido);

        console.log("");

        return valorUsuario;
    }

    validarNome(nome, tamanhoNome){                                 //Função para padronizar o nome
        let nomePadronizado = "";
        let casoMaiusculo = false;
        
        for(let i = 0; i < tamanhoNome; i++){        
            if((i == 0) && (nome[0] != " ")){                                   // Se o primeiro caracter do nome não for um espaço em branco,
                casoMaiusculo = true;                                                   // coloca ele em maiúsculo
            }
    
            if(casoMaiusculo){
                nomePadronizado += nome[i].toUpperCase();
                casoMaiusculo = false;
            }
            else{
                nomePadronizado += nome[i];
            }
            
            if((nome[i] == " ") && ((i+1) < tamanhoNome) ){             // se houver um espaço e ele não estiver na ultima posição do nome,
                casoMaiusculo = true;                                   // o proximo caracter deve ser maiusculo
            }
        }
            
        nomePadronizado = nomePadronizado.trim();                       // Removendo espaçoes desnecessários
                
        return nomePadronizado;
    }


    // ========================== TEST FUNCTIONS ==============================
    debug(msg){
        console.log(msg);
        let continueProgram = false;
        while(!continueProgram){
            if(prompt("Continue (type anything)?  ") != ""){
                break;
            }
        }
    }
}



module.exports = ValidarValor;