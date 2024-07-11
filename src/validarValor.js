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
                valorUsuario = valorUsuario.replace(/[^a-zA-Z0-9\s]/g,'');
                valorValido = this.validarString(valorUsuario);
            }

            if(!valorValido){
                console.log("Esse valor não é válido. Tente novamente.");
            }

        }while(!valorValido);

        return valorUsuario;
    }
    
}

module.exports = ValidarValor;