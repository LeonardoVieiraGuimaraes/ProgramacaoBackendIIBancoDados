// Declara uma função assíncrona chamada 'conecta'
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
const conecta = async () => {
  // Verifica se a conexão global já existe e se seu estado não é "disconnected" (desconectado)
  // Se essas condições forem verdadeiras, a função retorna a conexão existente
  // Isso evita a criação de uma nova conexão se uma já existir, o que pode melhorar o desempenho e evitar problemas de conexão
  if (global.conecao && global.conecao.state !== "disconnected") {
    return global.conecao;
  }

  // Importa o módulo 'mysql2/promise', que permite trabalhar com o MySQL de forma assíncrona
  // O módulo 'mysql2/promise' fornece uma interface Promise para o MySQL, o que permite o uso de 'async/await' em vez de callbacks
  const mysql = require("mysql2/promise");

  // Cria uma nova conexão com o banco de dados MySQL
  // A string de conexão é 'mysql://root:@localhost:3306/escola', que conecta como o usuário 'root' sem senha ao banco de dados 'escola' no host 'localhost' na porta 3306
  // A função 'createConnection' retorna uma Promise que é resolvida quando a conexão é estabelecida
  // const con = await mysql.createConnection(
  //   "mysql://root:@localhost:3306/escola"
  // );

  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "270414",
    database: "escola",
  });
  // Imprime uma mensagem no console indicando que a conexão com o MySQL foi estabelecida
  // Isso é útil para fins de depuração e para confirmar que a conexão foi estabelecida com sucesso
  console.log("Conectou no MySQL!");

  // Armazena a conexão na variável global 'conecao'
  // Isso permite que a conexão seja reutilizada em outras partes do código sem a necessidade de criar uma nova conexão a cada vez
  // Variáveis globais são acessíveis de qualquer lugar no código, o que pode ser útil, mas também pode levar a problemas se não forem usadas com cuidado
  global.conecao = con;

  // Retorna a conexão
  // Isso permite que a função que chamou 'conecta' possa usar a conexão se necessário
  // Por exemplo, outra função pode precisar executar consultas no banco de dados, e pode usar esta conexão para fazer isso
  return con;
};

// Declara uma função assíncrona chamada 'todosAlunos'
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
// Isso é útil para operações que levam algum tempo para serem concluídas, como consultas a um banco de dados
const todosAlunos = async () => {
  // Chama a função 'conecta' e espera que ela seja concluída
  // 'conecta' retorna a conexão com o banco de dados, que é então armazenada na variável 'con'
  const con = await conecta();

  // Executa uma consulta SQL para selecionar todos os registros da tabela 'alunos'
  // A função 'query' retorna uma Promise que é resolvida com o resultado da consulta
  // O uso de 'await' aqui pausa a execução da função até que a consulta seja concluída e a Promise seja resolvida
  const [alunos] = await con.query("SELECT * FROM alunos");

  // Retorna a lista de alunos
  // O uso de 'await' aqui não é necessário, pois não há nenhuma operação assíncrona sendo realizada
  // No entanto, como a função é assíncrona, é permitido usar 'await'
  // Isso pode ser útil se a lista de alunos precisar ser processada ou modificada de alguma forma antes de ser retornada
  return await alunos;
};

// Exporta as funções 'conecta' e 'todosAlunos'
// Isso permite que essas funções sejam importadas e usadas em outros módulos
// Por exemplo, um módulo que precisa conectar ao banco de dados e obter a lista de alunos pode importar essas funções e usá-las
module.exports = { todosAlunos };

// Aqui observamos o uso das palavras reservas async/await. Vale lembrar que elas são usadas como recursos do Node.JS. Esses recursos foram acrescentados e disponibilizados a versões recentes do Node.JS. Sua utilização é para simplificar a programação. No Javascript, existe um recurso chamado Promises, ou promessas. Ou seja, o código da aplicação é executado e, então, ele fica aguardando um possível retorno externo, que é uma promessa de resposta. A função await é responsável por dar prosseguimento à execução desse retorno de promessa.
