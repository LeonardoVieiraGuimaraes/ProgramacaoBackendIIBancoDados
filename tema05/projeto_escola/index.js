// Importando o módulo de rotas de livros.
// O método 'require' é usado para importar módulos em Node.js.
// Neste caso, estamos importando o módulo de rotas de livros, que define as rotas HTTP para operações relacionadas aos livros.
// O caminho para o módulo é relativo ao arquivo atual, então './router/livroRotas' se refere ao arquivo 'livroRotas.js' na pasta 'router' no mesmo diretório que o arquivo atual.
// O módulo importado é então atribuído à constante 'livroRotas', que pode ser usada para acessar as rotas definidas no módulo.
const livroRotas = require("./router/livroRotas");

// Importa o módulo 'express'. Express é um framework para Node.js que simplifica o desenvolvimento de aplicações web.
const express = require("express");

// Importa o módulo 'mongoose'. Mongoose é uma biblioteca do Node.js que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação. Ele inclui métodos para promessas e callbacks para a manipulação de dados do MongoDB.
const mongoose = require("mongoose");

// Define a porta na qual o servidor vai rodar. Se a variável de ambiente 'Port' estiver definida, ela será usada. Caso contrário, a porta 4123 será usada.
const PORT = process.env.Port || 4123;

// Cria uma nova aplicação Express e armazena-a na variável 'sistema'.
const app = express();

// Chama a função 'connect' do módulo 'mongoose' para estabelecer uma conexão com o banco de dados MongoDB
// O primeiro argumento para 'connect' é a URL do banco de dados MongoDB
// Se a variável de ambiente 'MOMGO_URL' estiver definida, ela será usada como a URL do banco de dados
// Caso contrário, a URL 'mongodb://localhost:27017/Biblioteca' será usada
// O segundo argumento para 'connect' é um objeto de opções
// 'useNewUrlParser: true' diz ao Mongoose para usar o novo analisador de URL do MongoDB, que é mais atualizado e tem melhor desempenho
// 'useUnifiedTopology: true' diz ao Mongoose para usar o novo mecanismo de gerenciamento de conexão do MongoDB, que é mais atualizado e tem melhor desempenho

mongoose
  .connect(process.env.MOMGO_URL || "mongodb://localhost:27017/Biblioteca")
  // A função 'connect' retorna uma Promise
  // O método 'then' é chamado quando a Promise é resolvida, o que significa que a conexão com o banco de dados foi estabelecida com sucesso
  // A função de callback para 'then' imprime uma mensagem no console para indicar que a conexão foi estabelecida com sucesso
  .then(() => console.log("Conexão efetuada com sucesso"))
  // O método 'catch' é chamado quando a Promise é rejeitada, o que significa que ocorreu um erro ao tentar estabelecer a conexão com o banco de dados
  // A função de callback para 'catch' recebe o erro como argumento e imprime uma mensagem no console para indicar que ocorreu um erro
  // A mensagem inclui a string de erro que foi retornada pelo MongoDB
  .catch((err) => console.log(`Erro ao conectar no banco de dados: ${err}`));

// Adiciona o middleware de análise de JSON ao pipeline de processamento de solicitações da aplicação Express. Isso permite que a aplicação Express processe corpos de solicitações JSON.
app.use(express.json());

// O método 'use' do objeto 'app' do Express é usado para adicionar middleware ao pipeline de processamento de requisições.
// Neste caso, estamos adicionando as rotas de livros como middleware.
// O primeiro argumento para 'use' é o caminho base para as rotas. Todas as rotas definidas no módulo 'livroRotas' serão prefixadas com '/index/livros'.
// Por exemplo, se 'livroRotas' define uma rota para '/:id', a rota completa será '/index/livros/:id'.
// O segundo argumento para 'use' é o middleware a ser adicionado. Neste caso, estamos adicionando 'livroRotas', que é o módulo de rotas de livros que importamos anteriormente.

app.use("/", livroRotas);

// Inicia o servidor para escutar as solicitações na porta especificada. Quando o servidor começa a escutar solicitações, a função de callback é chamada.
app.listen(PORT, () => {
  // Imprime uma mensagem no console para indicar que o servidor está rodando e em qual porta ele está escutando.
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Vamos a alguns pontos importantes das linhas de código da página index.js que constam na figura anterior.
// Linha 1: criamos uma constante com o nome express. Depois, fazemos uma requisição importando-o. Repetimos esse processo na linha 2.
// Linha 3: após criar a constante PORT, definimos a porta a ser usada. Neste exemplo, a porta 4123.
// Linha 8: exibiremos uma mensagem que mostrará o nome da porta que está sendo utilizada.
const Livro = require("./models/dados");
const Servico = require("./services/dadosServicos");

const novoLivro = new Livro({
  id: 2,
  nomeLivro: "O Senhor dos Anéis",
  autores: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  editora: "Editora X",
  estadoPublicacao: "Publicado",
  numeroPaginas: 1200,
});

Servico.inserirLivros(novoLivro);
