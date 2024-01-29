// Importação do módulo Soma.js
const soma = require("./soma");
// Importação do módulo multiplica.js
const multiplica = require("./multiplica");

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
// Chama a função soma() que está no módulo soma.js
soma(2, 5);
// Chama a função multiplica() que está no módulo multiplica.js
multiplica(2, 5);

// Chama a função soma() que está no módulo soma.js
soma(a, b);
// Chama a função multiplica() que está no módulo multiplica.js
multiplica(a, b);
