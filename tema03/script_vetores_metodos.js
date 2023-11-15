// Declara um vetor 'frutas' com três elementos: "banana", "abacaxi" e "maçã"
let frutas = ["banana", "abacaxi", "maçã"];

// Declara a variável 'tamVetor' e atribui a ela o tamanho do vetor 'frutas'
let tamVetor = frutas.length;

// Imprime o valor de 'tamVetor' no console
console.log(tamVetor);

// Adiciona o elemento "laranja" ao final do vetor 'frutas'
frutas.push("laranja");

// Imprime o vetor 'frutas' no console
console.log(frutas);

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
