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
  const con = await mysql.createConnection(
    "mysql://root:@localhost:3306/escola"
  );

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

// criamos uma constante com o nome con. Usamos a palavra reservada await para informar que estaremos aguardando um retorno externo de uma função, uma promessa a ser cumprida. Os dados de retorno serão armazenados na constante con. Na linha 22, temos uma segunda constante criada. Chamamos ela de sqlInserir. Essa constante contém a instrução SQL responsável por inserir registros no banco de dados

module.exports = { inserirAluno };
