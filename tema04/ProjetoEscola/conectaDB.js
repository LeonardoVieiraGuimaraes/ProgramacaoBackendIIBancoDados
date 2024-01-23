// Declara uma função assíncrona chamada 'conecta'
// Uma função assíncrona em programação permite que o programa execute outras tarefas enquanto espera a conclusão de uma operação assíncrona. Em JavaScript, a palavra-chave async é usada para declarar uma função assíncrona.
const conecta = async () => {
  // Verifica se a conexão global já existe e se seu estado não é "disconnected" (desconectado)
  // Se essas condições forem verdadeiras, a função retorna a conexão existente
  if (global.conecao && global.conecao.state !== "disconnected") {
    return global.conecao;
  }

  // Importa o módulo 'mysql2/promise', que permite trabalhar com o MySQL de forma assíncrona
  const mysql = require("mysql2/promise");

  // Cria uma nova conexão com o banco de dados MySQL

  // A string de conexão é 'mysql://root:root@localhost:3306/escola', que conecta como o usuário 'root' com a senha 'root' ao banco de dados 'escola' no host 'localhost' na porta 3306
  // const con = await mysql.createConnection(
  //   "mysql://root:@localhost:3306/escola"

  // await é usada para pausar a execução até que uma operação assíncrona (geralmente uma Promise) seja concluída. Isso facilita a escrita de código mais eficiente, especialmente quando lidamos com operações que levam tempo, como leitura de arquivos, chamadas de API, ou espera por eventos.

  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "270414",
    database: "escola",
  });

  // Imprime uma mensagem no console indicando que a conexão com o MySQL foi estabelecida
  console.log("Conectou no MySQL!");

  // Armazena a conexão na variável global 'conecao'
  global.conecao = con;

  // Retorna a conexão
  return con;
};

// Chama a função 'conecta' para estabelecer a conexão com o banco de dados
// conecta();

// Exporta a função 'conecta' para que ela possa ser usada em outros módulos
// module.exports = { conecta };

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
// module.exports = { conecta, todosAlunos };

// Declara uma função assíncrona chamada 'inserirAluno'
// A função recebe um parâmetro 'aluno', que é um objeto que contém as informações do aluno que será inserido no banco de dados
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
const inserirAluno = async (aluno) => {
  // Chama a função 'conecta' e espera que ela seja concluída
  // 'conecta' retorna a conexão com o banco de dados, que é então armazenada na variável 'con'
  const con = await conecta();

  // Define a consulta SQL que será usada para inserir um novo registro na tabela 'alunos'
  // A consulta usa placeholders ('?') para os valores que serão inseridos, que serão substituídos pelos valores reais quando a consulta for executada
  const sqlInserir =
    "INSERT INTO alunos (nome, turma, telefone) VALUES (?, ?, ?)";

  // Cria um array com os dados do aluno que serão inseridos no banco de dados
  // A ordem dos dados no array deve corresponder à ordem dos placeholders na consulta SQL
  const dados = [aluno.nome, aluno.turma, aluno.telefone];

  // Executa a consulta SQL para inserir o novo aluno no banco de dados
  // A função 'query' retorna uma Promise que é resolvida quando a consulta é concluída
  // O segundo argumento para 'query' é o array de dados, que substituirá os placeholders na consulta SQL
  // O uso de 'await' aqui pausa a execução da função até que a consulta seja concluída e a Promise seja resolvida
  await con.query(sqlInserir, dados);
};

// Declara uma função assíncrona chamada 'alterarAluno'
// A função recebe um parâmetro 'aluno', que é um objeto que contém as informações do aluno que será atualizado no banco de dados
const alterarAluno = async (aluno) => {
  // Chama a função 'conecta' e espera que ela seja concluída
  // 'conecta' retorna a conexão com o banco de dados, que é então armazenada na variável 'con'
  const con = await conecta();

  // Define a consulta SQL que será usada para atualizar um registro existente na tabela 'alunos'
  // A consulta usa placeholders ('?') para os valores que serão atualizados, que serão substituídos pelos valores reais quando a consulta for executada
  const sqlAlterar =
    "UPDATE alunos SET nome = ?, turma = ?, telefone = ? WHERE id = ?;";

  // Cria um array com os dados do aluno que serão atualizados no banco de dados
  // A ordem dos dados no array deve corresponder à ordem dos placeholders na consulta SQL
  const dados = [aluno.nome, aluno.turma, aluno.telefone, aluno.id];

  // Executa a consulta SQL para atualizar o aluno no banco de dados
  // A função 'query' retorna uma Promise que é resolvida quando a consulta é concluída
  // O segundo argumento para 'query' é o array de dados, que substituirá os placeholders na consulta SQL
  // O uso de 'await' aqui pausa a execução da função até que a consulta seja concluída e a Promise seja resolvida
  await con.query(sqlAlterar, dados);
};

// Declara uma função assíncrona chamada 'excluirAluno'
// A função recebe um parâmetro 'id', que é o ID do aluno que será excluído do banco de dados
const excluirAluno = async (id) => {
  // Chama a função 'conecta' e espera que ela seja concluída
  // 'conecta' retorna a conexão com o banco de dados, que é então armazenada na variável 'con'
  const con = await conecta();

  // Define a consulta SQL que será usada para excluir um registro existente na tabela 'alunos'
  // A consulta usa um placeholder ('?') para o valor que será excluído, que será substituído pelo valor real quando a consulta for executada
  const sqlEscluir = "DELETE FROM alunos WHERE id = ?";

  // Cria um array com o ID do aluno que será excluído do banco de dados
  // A ordem dos dados no array deve corresponder à ordem dos placeholders na consulta SQL
  const dados = [id];

  // Executa a consulta SQL para excluir o aluno do banco de dados
  // A função 'query' retorna uma Promise que é resolvida quando a consulta é concluída
  // O segundo argumento para 'query' é o array de dados, que substituirá o placeholder na consulta SQL
  // O uso de 'await' aqui pausa a execução da função até que a consulta seja concluída e a Promise seja resolvida
  await con.query(sqlEscluir, dados);
};

const consultarAluno = async (id) => {
  const con = await conecta();
  const sqlConsulta = "SELECT * FROM alunos WHERE id = ?";
  const dados = [id];

  // Executa a consulta SQL para recuperar o aluno do banco de dados
  const [rows] = await con.query(sqlConsulta, dados);

  // Fechar a conexão com o banco de dados
  //   con.end();

  // Retorna o aluno recuperado
  return rows[0];
};
// Exporta a função 'excluirAluno' para que ela possa ser importada e usada em outros módulos
module.exports = {
  conecta,
  todosAlunos,
  inserirAluno,
  alterarAluno,
  excluirAluno,
  consultarAluno,
};

// criamos uma constante com o nome con. Usamos a palavra reservada await para informar que estaremos aguardando um retorno externo de uma função, uma promessa a ser cumprida. Os dados de retorno serão armazenados na constante con. Na linha 22, temos uma segunda constante criada. Chamamos ela de sqlInserir. Essa constante contém a instrução SQL responsável por inserir registros no banco de dados

// Aqui observamos o uso das palavras reservas async/await. Vale lembrar que elas são usadas como recursos do Node.JS. Esses recursos foram acrescentados e disponibilizados a versões recentes do Node.JS. Sua utilização é para simplificar a programação. No Javascript, existe um recurso chamado Promises, ou promessas. Ou seja, o código da aplicação é executado e, então, ele fica aguardando um possível retorno externo, que é uma promessa de resposta. A função await é responsável por dar prosseguimento à execução desse retorno de promessa.
