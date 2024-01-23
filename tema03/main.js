// A função 'require' é usada para importar módulos em Node.js.
// Aqui, estamos importando o módulo 'script_modularizacao_modulo' e atribuindo-o à constante 'somar'.

// Importa o módulo 'script_modularizacao_modulo' e atribui à constante 'somar'
// const somar = require("./script_modularizacao_modulo");

const somar = require("./modulo_soma");
// Chama a função 'soma' do módulo 'somar' com os argumentos 5 e 2, e imprime o resultado no console
console.log(somar.soma(5, 2));

// Chama a função 'soma' do módulo 'somar' com os argumentos 3 e 9, e imprime o resultado no console
console.log(somar.soma(3, 9));
