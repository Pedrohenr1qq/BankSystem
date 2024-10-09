# BankSystem
Um simples sistema de banco. Feito em JavaScript e Node.Js.

## Sobre o sistema
O sistema simula um banco, cujo o nome é FoxBank

Esse sistema possui duas modalidades de Conta: Corrente ou Poupança

Ao iniciar o sistema, será perguntado ao usuário se ele deseja criar uma conta. Em caso afirmativo, serão colhidos os dados do usuário e iniciará o processo de criação de conta.

## Operações Disponíveis
O usuário terá a escolha de fazer algumas operações dentro do sistema, sendo essas operações divididas em duas categorias: Operações Gerais e Operações de Conta. 

### Operações Gerais 
Referem-se ao conjunto de operações iniciais que o usuário poderá fazer. São elas: 
 - Entrar na Conta Corrente
 - Entrar na Conta Poupança
 - Alterar nome
 - Encerrar Atendimento

### Operações de Conta
Referem-se ao conjunto de operações que o usuário poderá fazer dentro de uma conta (seja ela Corrente ou Poupança). São elas: 
 - Consultar Saldo
 - Depositar Valor
 - Sacar Valor
 - Calcular Novo Saldo
 - Voltar

## Rendimento das contas
Cada conta (Corrente ou Poupança) possui um valor de rendimento em cima do saldo atual do usuário. Toda vez que o usuário opta por realizar a operação "Calcular Novo Saldo", o seu saldo é incrementado com uma pequena taxa em cima do saldo atual, simulando a ideia do rendimento de uma conta real (apesar da forma como isso é feito ser incoerente com a vida real). Os valores da taxa incrementada variam de tipo de conta para tipo de conta, sendo 0.1 para Conta corrente e 0.05 para Conta Poupança 
