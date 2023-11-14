// Operador de atribuição:

let x = 5; // Atribuição: x é agora 5
console.log(x); // Saída: 5

x += 3; // Atribuição de adição: x é agora 8
console.log(x); // Saída: 8

x -= 2; // Atribuição de subtração: x é agora 6
console.log(x); // Saída: 6

x *= 2; // Atribuição de multiplicação: x é agora 12
console.log(x); // Saída: 12

x /= 4; // Atribuição de divisão: x é agora 3
console.log(x); // Saída: 3

x %= 2; // Atribuição de módulo: x é agora 1
console.log(x); // Saída: 1

x **= 2; // Atribuição de exponenciação: x é agora 1
console.log(x); // Saída: 1

x <<= 2; // Atribuição de deslocamento à esquerda: x é agora 4
console.log(x); // Saída: 4

x >>= 1; // Atribuição de deslocamento à direita: x é agora 2
console.log(x); // Saída: 2

x >>>= 1; // Atribuição de deslocamento à direita sem sinal: x é agora 1
console.log(x); // Saída: 1

x &= 1; // Atribuição AND: x é agora 1
console.log(x); // Saída: 1

x ^= 1; // Atribuição XOR: x é agora 0
console.log(x); // Saída: 0

x |= 2; // Atribuição OR: x é agora 2
console.log(x); // Saída: 2

// Exemplo de operador de Relacional:

let a = 5,
  b = 10,
  c = "5";

// Igual a
console.log(a == c); // Saída: true

// Diferente de
console.log(a != b); // Saída: true

// Estritamente igual a
console.log(a === c); // Saída: false

// Estritamente diferente de
console.log(a !== c); // Saída: true

// Menor que
console.log(a < b); // Saída: true

// Maior que
console.log(b > a); // Saída: true

// Menor ou igual a
console.log(a <= b); // Saída: true

// Maior ou igual a
console.log(b >= a); // Saída: true

// Operador de Aritméticos:

let a = 5,
  b = 10;

// Adição
console.log(a + b); // Saída: 15

// Subtração
console.log(a - b); // Saída: -5

// Multiplicação
console.log(a * b); // Saída: 50

// Divisão
console.log(a / b); // Saída: 0.5

// Módulo (resto da divisão)
console.log(a % b); // Saída: 5

// Incremento
a++;
console.log(a); // Saída: 6

// Decremento
b--;
console.log(b); // Saída: 9

// Operador Lógicos

let a = true,
  b = false;

// AND lógico
console.log(a && b); // Saída: false

// OR lógico
console.log(a || b); // Saída: true

// NOT lógico
console.log(!a); // Saída: false
console.log(!b); // Saída: true
