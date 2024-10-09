import validarValorUsuario from "../validarValor.js";                    // Necesário para fazer validação das entradas digitadas pelo usuário

// Função para pegar o nome do usuário, com verificações e padronização (Todo inicio de nome com letra maiuscula. Sem espaços no inicio e no fim).
// Retorna uma string contendo o nome padronizado.
export function pegarNome(){
  let nome = validarValorUsuario("Digite seu nome (Sem acentuação): ", "nome");

  return nome;
}

function validarData(valor){
  return (valor > 0 && validarNumero(valor));
}

export function pegarDataNascimento(){
  console.log("Vamos cadastrar sua data de nascimento.");
  return validarValorUsuario("", "data");
}

export function pegarTelefone(){
  console.log("Vamos cadastrar seu telefone.");
  return validarValorUsuario("Digite seu número de telefone (somente números): ", "telefone");
}


export function pegarEmail(){
  console.log("Vamos cadastrar seu email.");
  return validarValorUsuario("Digite seu email: ", "email");
}

export function pegarSenha(){
  console.log("Vamos cadastrar sua senha.");
  console.log("A senha deve ter no minimo 5 caracteres. \n");

  return validarValorUsuario("Digite sua senha: ", "senha");
}
