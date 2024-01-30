const fs = require("fs");
function someAsyncOperation(callback) {
  // Previsão de 95 ms para leitura do arquivo
  fs.readFile("/path/to/file", callback);
}
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms passaram desde do meu agendamento.`);
}, 100);
// Com o someAsyncOperation que leva 95 ms para ser concluído
someAsyncOperation(() => {
  const startCallback = Date.now();
  // Simulando 10 ms
  while (Date.now() - startCallback < 10) {
    // Nada a fazer, é somente uma simulação
  }
});
