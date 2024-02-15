// Importa o módulo 'fs' (sistema de arquivos) do Node.js
const fs = require("fs");

// Define uma função 'someAsyncOperation' que realiza uma operação assíncrona (leitura de arquivo)
// e chama uma função de callback quando a operação é concluída.
function someAsyncOperation(callback) {
  // A operação assíncrona é a leitura de um arquivo.
  // A previsão é que essa operação leve 95 ms para ser concluída.
  fs.readFile("/path/to/file", callback);
}

// Registra o tempo atual em milissegundos desde a época Unix (1 de janeiro de 1970)
const timeoutScheduled = Date.now();

// Agenda uma função para ser executada após um atraso de 100 ms.
setTimeout(() => {
  // Calcula o atraso real entre o tempo agendado e o tempo atual.
  const delay = Date.now() - timeoutScheduled;

  // Imprime o atraso no console.
  console.log(`${delay}ms passaram desde do meu agendamento.`);
}, 100);

// Chama a função 'someAsyncOperation', passando uma função de callback.
// A função de callback será chamada quando a operação assíncrona de leitura do arquivo for concluída.
someAsyncOperation(() => {
  // Registra o tempo no início da execução do callback.
  const startCallback = Date.now();

  // Simula um atraso de 10 ms.
  // Durante esse tempo, o programa não faz nada além de verificar o tempo repetidamente.
  while (Date.now() - startCallback < 10) {
    // Nada a fazer, é somente uma simulação
  }
});
