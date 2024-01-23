// Variáveis
a = true;
// JavaScript, para imprimir mensagens ou valores no console do ambiente de execução. Especificamente em JavaScript, console.log() é uma função fornecida pelo objeto console que faz parte do ambiente de execução do navegador ou de ambientes Node.js.
console.log("Lógico: " + a);

// Declara a variável 'a' e atribui a string "Hello World!" a ela
var a = "Hello World!";
// Imprime a concatenação da string "Texto: " com o valor de 'a' no console
console.log("Texto: " + a);

// Reatribui o valor 35 à variável 'a'
a = 35;
// Imprime a concatenação da string "Número inteiro: " com o valor de 'a' no console
console.log("Número inteiro: " + a);

// Reatribui o valor 8.5 à variável 'a'
a = 8.5;
// Imprime a concatenação da string "Número decimal: " com o valor de 'a' no console
console.log("Número decimal: " + a);

// Reatribui o valor booleano true à variável 'a'
a = true;
// Imprime a concatenação da string "Lógico: " com o valor de 'a' no console
console.log("Lógico: " + a);

// Usando 'let'
let contadorLet = 0;

if (true) {
  let contadorLet = 1;
  console.log("Dentro do bloco 'if' (let):", contadorLet); // 1
}

console.log("Fora do bloco 'if' (let):", contadorLet); // 0

// Usando 'var'
var contadorVar = 0;

if (true) {
  var contadorVar = 1;
  console.log("Dentro do bloco 'if' (var):", contadorVar); // 1
}

console.log("Fora do bloco 'if' (var):", contadorVar); // 1

// Usando 'const'
const contadorConst = 0;

if (true) {
  const contadorConst = 1;
  console.log("Dentro do bloco 'if' (const):", contadorConst); // 1
}

console.log("Fora do bloco 'if' (const):", contadorConst); // 0

// A variável contadorLet e a variável contadorVar são globais para todo o escopo.
// A variável contadorConst tem escopo de bloco, então a variável definida dentro do bloco if não afeta a variável fora dele.
