// A palavra-chave 'exports' é usada para tornar partes do módulo disponíveis para outros módulos.
// Aqui, estamos exportando uma função chamada 'soma'.

// O módulo é como uma função, mas possui algumas diferenças. Ele é também um programa separado, usado para executar alguma tarefa específica, mas é preciso que ele seja salvo como um arquivo separado do programa principal. Esse arquivo deve ter um nome que corresponda à sua utilidade, e dentro desse arquivo deve conter as instruções que serão executadas quando ele for chamado.
// Declara uma função chamada 'soma' que recebe dois parâmetros: 'num1' e 'num2'
exports.soma = function (num1, num2) {
  // A função retorna a soma de 'num1' e 'num2'
  return num1 + num2;
};
