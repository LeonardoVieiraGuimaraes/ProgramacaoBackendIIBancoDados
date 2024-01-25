let a = 5,
  b = 10,
  c = "5";

// Igual a
console.log(`a é igual a c: ${a == c}`); // Saída: a é igual a c: true

// Diferente de
console.log(`a é diferente de b: ${a != b}`); // Saída: a é diferente de b: true

// Estritamente igual a - ele retorna true se os valores forem iguais em termos de valor e tipo, e false caso contrário
console.log(`a é estritamente igual a c: ${a === c}`); // Saída: a é estritamente igual a c: false

// Estritamente diferente de
console.log(`a é estritamente diferente de c: ${a !== c}`); // Saída: a é estritamente diferente de c: true

// Menor que
console.log(`a é menor que b: ${a < b}`); // Saída: a é menor que b: true

// Maior que
console.log(`b é maior que a: ${b > a}`); // Saída: b é maior que a: true

// Menor ou igual a
console.log(`a é menor ou igual a b: ${a <= b}`); // Saída: a é menor ou igual a b: true

// Maior ou igual a
console.log(`b é maior ou igual a a: ${b >= a}`); // Saída: b é maior ou igual a a: true
