// Criando um vetor
// Um vetor, em programação, é uma estrutura de dados que armazena uma coleção de elementos.
// Aqui, um vetor chamado 'frutas' é criado com seis elementos: "maçã", "banana", "mamão", "melancia", "abacate" e "abacaxi"
let frutas = ["maçã", "banana", "mamão", "melancia", "abacate", "abacaxi"];

// Imprime no console a string "O tamanho do vetor frutas é " seguida do tamanho do vetor 'frutas'
console.log(`O tamanho do vetor frutas é ${frutas.length}`); // Saída: 6

// Adiciona o elemento "laranja" ao final do vetor 'frutas' usando o método 'push'
frutas.push("laranja");

// Imprime no console a string "O vetor frutas agora é " seguida do conteúdo atualizado do vetor 'frutas'
console.log(`O vetor frutas agora é ${frutas}`); // Saída: ["maçã", "banana", "mamão", "melancia", "abacate", "abacaxi", "laranja"]

// Remove o último elemento do vetor 'frutas' usando o método 'pop' e armazena esse elemento na variável 'frutaRemovida'
let frutaRemovida = frutas.pop();

// Imprime no console a string "Fruta removida é " seguida do conteúdo da variável 'frutaRemovida'
console.log("Fruta removida é " + frutaRemovida); // Saída: "laranja"

// Imprime no console a string "O vetor frutas agora é " seguida do conteúdo atualizado do vetor 'frutas'
console.log(`O vetor frutas agora é ${frutas}`); // Saída: ["maçã", "banana", "mamão", "melancia", "abacate", "abacaxi"]

// Cria um novo vetor 'algumasFrutas' que é uma cópia superficial de uma porção do vetor 'frutas' usando o método 'slice'
let algumasFrutas = frutas.slice(1, 4);

// Imprime no console o conteúdo do vetor 'algumasFrutas'
console.log(algumasFrutas); // Saída: ["banana", "mamão", "melancia"]

// Ordena os elementos do vetor 'frutas' em ordem alfabética usando o método 'sort'
frutas.sort();

// Imprime no console a string "O vetor ordenado é " seguida do conteúdo atualizado do vetor 'frutas'
console.log(`O vetor ordenado é [${frutas}]`); // Saída: ["abacate", "abacaxi", "banana", "maçã", "mamão", "melancia"]

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

// Percorre o vetor 'frutas' e imprime cada índice e seu respectivo valor no console
frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice} = ${fruta}`);
});

// Cria um novo vetor 'numeros' com cinco elementos: 1, 2, 3, 4, 5
let numeros = [1, 2, 3, 4, 5];

// Percorre o vetor 'numeros' e imprime cada índice e seu respectivo valor no console
numeros.forEach((numero, indice) => {
  console.log(`Número ${indice + 1}: ${numero}`); // Saída: Número 1: 1, Número 2: 2, etc.
});

// Cria um novo vetor 'quadrados' que contém os quadrados de cada elemento do vetor 'numeros'
let quadrados = numeros.map((numero) => numero * numero);

// Imprime o vetor 'quadrados' no console
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]
