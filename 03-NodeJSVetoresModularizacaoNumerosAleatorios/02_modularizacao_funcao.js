// A modularização é uma prática fundamental no desenvolvimento de software, que envolve a criação de módulos, ou seja, funções, para realizar tarefas específicas.
// Declaração de uma função chamada 'soma' que recebe dois parâmetros: 'num1' e 'num2'
// Uma função é um bloco de código projetado para realizar uma tarefa específica. Neste caso, a tarefa é somar dois números
function soma(num1, num2) {
  // A função retorna a soma de 'num1' e 'num2'
  // 'return' termina a execução da função e especifica um valor a ser retornado para quem chamou a função
  return num1 + num2;
}

// Declaração de duas variáveis 'a' e 'b' e atribuição dos valores 3 e 8 a elas, respectivamente
let a = 3,
  b = 8;

// Declaração de uma variável 'res' e atribuição do resultado da chamada da função 'soma' com os argumentos 'a' e 'b' a ela
// Aqui, a função 'soma' é chamada com 'a' e 'b' como argumentos, e o resultado é armazenado na variável 'res'
var res = soma(a, b);

// Impressão da concatenação da string "Resultado da soma : " com o valor de 'a', " com ", o valor de 'b', " é " e o valor de 'res' no console
// Aqui, o operador '+' é usado para concatenar strings e variáveis em uma única string
console.log("Resultado da soma : " + a + " com " + b + " é " + res);
