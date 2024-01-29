// Solução sem módulos interligados

// Importação do módulo externo minimist
// A instalação é necessária: npm install minimist
// O minimist é utilizado para tratamento de argumento.
// github.com/minimistjs/minimist
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
// Recebe argumento a passado na execução do aplicativo
const a = parseInt(args["a"]);
// Recebe argumento b passado na execução do aplicativo
const b = parseInt(args["b"]);
// Chama a função soma()
soma(2, 5);
// Chama a função multiplica()
multiplica(2, 5);
// Função soma() realiza e apresenta a soma de dois números inteiros

// Chama a função soma()
soma(a, b);
// Chama a função multiplica()
multiplica(a, b);
// Função soma() realiza e apresenta a soma de dois números inteiros

function soma(a, b) {
  console.log(a + b);
}
// Função multiplica() realiza e apresenta a multiplicação de dois números inteiros
function multiplica(a, b) {
  console.log(a * b);
}
