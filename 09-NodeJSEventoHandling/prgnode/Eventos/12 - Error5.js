// Importa a API de promessas do módulo 'fs' do Node.js.
const fs = require("fs/promises");

// Define uma função assíncrona auto-invocada.
(async () => {
  // Declara uma variável 'data' que será usada para armazenar os dados lidos do arquivo.
  let data;

  // Tenta ler o arquivo 'arquivo_que_não_existe.txt'.
  try {
    // Usa a função 'readFile' da API de promessas do 'fs' para ler o arquivo de forma assíncrona.
    // A palavra-chave 'await' é usada para esperar a promessa ser resolvida antes de atribuir o valor à 'data'.
    data = await fs.readFile("arquivo_que_não_existe.txt");
  } catch (err) {
    // Se um erro ocorrer (por exemplo, se o arquivo não existir), o erro é capturado aqui.
    // Imprime uma mensagem de erro e o erro no console.
    console.error("Arquivo não existe na pasta!", err);
    // Sai da função.
    return;
  }
  // Invoca a função assíncrona.
})();
