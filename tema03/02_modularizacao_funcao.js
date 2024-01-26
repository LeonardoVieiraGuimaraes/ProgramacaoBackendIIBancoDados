// Ela consiste em criar módulos, ou seja, funções, para executar diferentes tarefas, as quais podem ser reutilizadas posteriormente em outros códigos, bastando chamá-las.

// Declara uma função chamada 'soma' que recebe dois parâmetros: 'num1' e 'num2'

// Uma função é como um programa separado do programa principal, mas que é feito dentro do próprio código e pode ser chamada nele mesmo.

// As funções também podem ser reutilizadas, ou seja, chamadas várias vezes no mesmo projeto. Se você quiser usar uma função em outro projeto, precisará entrar no código onde ela foi feita para copiá-la.

function soma(num1, num2) {
  // A função retorna a soma de 'num1' e 'num2'
  return num1 + num2;
}

// Declara a variável 'res' e atribui a ela o resultado da chamada da função 'soma' com os argumentos 3 e 8

let a = 3,
  b = 8;
var res = soma(a, b);

// Imprime a concatenação da string "Resultado: " com o valor de 'res' no console
console.log("Resultado da soma : " + a + " com " + b + " é " + res);
