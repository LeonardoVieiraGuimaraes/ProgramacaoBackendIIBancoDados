// A palavra-chave 'exports' é usada para tornar partes do módulo disponíveis para outros módulos.
// Aqui, estamos exportando uma função chamada 'soma'.

// Declara uma função chamada 'soma' que recebe dois parâmetros: 'num1' e 'num2'
exports.soma = function (num1, num2) {
  // A função retorna a soma de 'num1' e 'num2'
  return num1 + num2;
};
