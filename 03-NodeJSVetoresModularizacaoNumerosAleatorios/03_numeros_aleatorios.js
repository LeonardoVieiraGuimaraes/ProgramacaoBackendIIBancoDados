// A função Math.random() gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
// Multiplicar esse número por 10 altera o intervalo para 0 (inclusivo) e 10 (exclusivo).

let n = Math.random() * 10;

// Imprime o valor de 'n' no console. Este valor será um número aleatório entre 0 e 10.
console.log("O valor aleátorio entre 0 e 10 é: " + n);

// A função Math.random() gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo) e é usado para arredondar o resultado para baixo até o número inteiro mais próximo.
// Multiplicar esse número por 101 e aplicar Math.floor altera o intervalo para 0 (inclusivo) e 100 (inclusivo).
n = Math.floor(Math.random() * 101);

// Imprime o valor de 'n' no console. Este valor será um número aleatório entre 0 e 100.
console.log(`O valor aleátorio entre 0 e 10 é: ${n}`);
