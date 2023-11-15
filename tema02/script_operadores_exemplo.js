// Imprime "Atribuição" no console
console.log("Atribuição");

// Declara a variável 'a' e atribui o valor 5 a ela
var a = 5;

// Subtrai 1 do valor de 'a'
a -= 1;

// Imprime o valor de 'a' no console
console.log("a= " + a);

// Imprime "Aritmético" no console
console.log("Aritmético");

// Eleva 'a' ao quadrado e atribui o resultado à variável 'b'
var b = a ** 2;

// Soma 'a' e 'b' e atribui o resultado à variável 'c'
var c = a + b;

// Imprime o valor de 'b' no console
console.log("b= " + b);

// Imprime o valor de 'c' no console
console.log("c= " + c);

// Imprime "Relacional" no console
console.log("Relacional");

// Verifica se 'a' é maior ou igual a 'b'
if (a >= b) {
  // Se a condição for verdadeira, imprime "a é maior ou igual a b" no console
  console.log("a é maior ou igual a b");
} else {
  // Se a condição for falsa, imprime "a é menor que b" no console
  console.log("a é menor que b");
}

// Imprime "Lógico" no console
console.log("Lógico");

// Verifica se 'a' é maior que 'b' e 'a' é maior que 'c'
if (a > b && a > c) {
  // Se a condição for verdadeira, imprime "a é o maior número" no console
  console.log("a é o maior número");
} else {
  // Se a condição for falsa, imprime "a não é o maior número" no console
  console.log("a não é o maior número");
}
