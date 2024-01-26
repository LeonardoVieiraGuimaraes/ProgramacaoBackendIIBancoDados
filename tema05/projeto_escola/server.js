// Importando o módulo app do arquivo "./src/app.js"
import app from "./src/app.js";

// Importando a função conecta do arquivo "./conecta.js"
import conecta from "./conecta.js";

// Definindo a porta na qual o servidor irá rodar
// Se a variável de ambiente PORT estiver definida, ela será usada
// Caso contrário, será usada a porta 4000
const PORT = process.env.PORT || 4000;

// Chamando a função conecta para conectar ao MongoDB
conecta()
  .then(() => {
    // Se a conexão for bem-sucedida, o servidor começará a ouvir na porta definida
    app.listen(PORT, () => {
      // Quando o servidor começar a ouvir, uma mensagem será exibida no console
      console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // Se ocorrer um erro durante a tentativa de conexão, o erro será exibido no console
    console.error(`Erro ao conectar no banco de dados: ${error}`);

    // O processo será encerrado com um código de saída 1, que indica que ocorreu um erro
    process.exit(1);
  });
