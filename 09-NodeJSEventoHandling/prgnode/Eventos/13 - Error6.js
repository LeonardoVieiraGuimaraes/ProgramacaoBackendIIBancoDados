// Importa o módulo 'fs' do Node.js.
const fs = require("node:fs");

// Usa a função 'readFile' do módulo 'fs' para ler o arquivo 'arquivo_que_não_existe.txt' de forma assíncrona.
// A função 'readFile' aceita um callback que é chamado quando a leitura do arquivo é concluída ou se ocorrer um erro.
fs.readFile("arquivo_que_não_existe.txt", (err, data) => {
  // Se ocorrer um erro (por exemplo, se o arquivo não existir), 'err' será um objeto Error.
  if (err) {
    // Imprime uma mensagem de erro e o erro no console.
    console.error("Arquivo não existe na pasta!", err);
    // Sai da função.
    return;
  }
  // Se não houver erro, 'data' será um Buffer contendo os dados lidos do arquivo.
  // O código para lidar com 'data' iria aqui.
});
