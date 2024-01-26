// Criando um vetor
let frutas = ["maçã", "banana", "mamão", "melancia", "abacate", "abacaxi"];

console.log(`O tamanho do vetor frutas é ${frutas.length}`); // Saída: 3

// Adiciona o elemento "laranja" ao final do vetor 'frutas'
frutas.push("laranja");
// Imprime o vetor 'frutas' no console após a adição do elemento "laranja"
console.log(`O vetor frutas agora é ${frutas}`); // Saída: ["maçã", "banana", "laranja"]

// Remove o último elemento de um array e retorna esse elemento.
let frutaRemovida = frutas.pop();
console.log("Fruta removida é " + frutaRemovida); // Saída: "laranja"
console.log(`O vetor frutas agora é ${frutas}`); // Saída: ["maçã", "banana"]

// Este método retorna uma cópia superficial de uma porção de um array em um novo array.
let algumasFrutas = frutas.slice(1, 4);
console.log(algumasFrutas); // Saída: ["banana", "laranja"]

// Este método ordena os elementos de um array no local e retorna o array

frutas.sort();
console.log("O vetor ordenado é " + frutas);

// Imprime o terceiro elemento do vetor 'frutas' no console
console.log(`O terceiro elemento do vetor frutas é ${frutas[2]}`);

// Percorre o vetor 'frutas' e imprime cada índice e seu respectivo valor no console
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i} = ${frutas[i]}`);
}

// Remove o primeiro elemento do vetor 'frutas'
indice = 2;
delete frutas[2];

// Imprime o vetor 'frutas' no console após a remoção do primeiro elemento
console.log(
  `O vetor frutas após a remoção do elemento com indice ${indice} é ${frutas}`
);

frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice} = ${fruta}`);
});

frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice} = ${fruta}`);
});

let numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, indice) => {
  console.log(`Número ${indice + 1}: ${numero}`); // Saída: Número 1: 1, Número 2: 2, etc.
});

let quadrados = numeros.map((numero) => numero * numero);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]
