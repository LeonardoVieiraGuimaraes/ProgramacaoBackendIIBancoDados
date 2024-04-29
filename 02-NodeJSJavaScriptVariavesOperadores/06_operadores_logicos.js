let a = true,
  b = false;

// AND lógico
console.log(`AND lógico: a && b = ${a && b}`); // Saída: AND lógico: a && b = false

// OR lógico
console.log(`OR lógico: a || b = ${a || b}`); // Saída: OR lógico: a || b = true

// NOT lógico
console.log(`NOT lógico: !a = ${!a}`); // Saída: NOT lógico: !a = false
console.log(`NOT lógico: !b = ${!b}`); // Saída: NOT lógico: !b = true

a = true;

// Operador ternário: se 'a' for verdadeiro, retorna "a é verdadeiro", caso contrário retorna "a é falso"
let resultado = a ? "a é verdadeiro" : "a é falso";
console.log(`Operador ternário: ${resultado}`); // Saída: Operador ternário: a é verdadeiro

a = null;
b = "valor padrão";

// Operador nullish coalescing: retorna 'a' se 'a' não for null ou undefined, caso contrário retorna 'b'
resultado = a ?? b;
console.log(`Operador nullish coalescing: ${resultado}`); // Saída: Operador nullish coalescing: valor padrão
