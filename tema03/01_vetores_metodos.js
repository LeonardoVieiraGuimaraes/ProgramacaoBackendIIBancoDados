// Declara um vetor 'frutas' com três elementos: "banana", "abacaxi" e "maçã"
// Um vetor é uma posição na memória do computador que vai armazenar uma lista de dados para que seja acessada posteriormente pelo programa
let frutas = ["banana", "abacaxi", "maçã"];

// Conheça agora alguns dos métodos mais comuns que podem ser utilizados para manipular vetores.

// Declara a variável 'tamVetor' e atribui a ela o tamanho do vetor 'frutas'
let tamVetor = frutas.length;

// Imprime o valor de 'tamVetor' no console
console.log(tamVetor);

// Adiciona o elemento "laranja" ao final do vetor 'frutas'
frutas.push("laranja");

// Imprime o vetor 'frutas' no console
console.log(frutas);

console.log(frutas[2]);

// Percorre o vetor 'frutas' e imprime cada índice e seu respectivo valor no console
for (var i = 0; i < frutas.length; i++) {
  console.log("Índice " + i + " = " + frutas[i]);
}

// Remove o primeiro elemento do vetor 'frutas'
delete frutas[0];

// Percorre o vetor 'frutas' novamente e imprime cada índice e seu respectivo valor no console
for (var i = 0; i < frutas.length; i++) {
  console.log("Índice " + i + " = " + frutas[i]);
}
