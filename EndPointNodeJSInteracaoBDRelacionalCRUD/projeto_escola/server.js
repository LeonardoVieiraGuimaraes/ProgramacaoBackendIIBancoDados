// Importando o módulo 'app' do arquivo 'app.js' na pasta 'src'.
// 'app' é uma instância do aplicativo Express que é usada para configurar e controlar o servidor web.
import app from "./src/app.js";

// Importando a função 'conecta' do arquivo 'conecta.js'.
// 'conecta' é uma função que estabelece uma conexão com o banco de dados.
import conecta from "./conecta.js";

// Definindo a porta na qual o servidor web deve escutar.
// Neste caso, a porta é 3000.
const PORT = 3000;

// Chamando a função 'conecta' para estabelecer uma conexão com o banco de dados.
// 'conecta' retorna uma promessa, então usamos 'then' para esperar até que a conexão seja estabelecida.
conecta().then(() => {
  // Uma vez que a conexão com o banco de dados é estabelecida, começamos a escutar na porta especificada.
  // A função 'listen' inicia o servidor web.
  app.listen(PORT, () => {
    // Quando o servidor começa a escutar na porta especificada, logamos uma mensagem no console.
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
  });
});
