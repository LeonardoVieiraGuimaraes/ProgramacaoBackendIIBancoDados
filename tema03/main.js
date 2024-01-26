// A função 'require' é usada para importar módulos em Node.js.
// Aqui, estamos importando o módulo 'script_modularizacao_modulo' e atribuindo-o à constante 'somar'.

// Importa o módulo 'script_modularizacao_modulo' e atribui à constante 'somar'
// const somar = require("./script_modularizacao_modulo");

// Importa o módulo 'modulo_soma'
const somar = require("./modulo_soma");

// Chama a função 'soma' do módulo 'somar' com os argumentos 5 e 2
let resultado = somar.soma(5, 2);
console.log(`A soma de 5 e 2 é ${resultado}`);

// Chama a função 'soma' do módulo 'somar' com os argumentos 3 e 9
resultado = somar.soma(3, 9);
console.log(`A soma de 3 e 9 é ${resultado}`);
