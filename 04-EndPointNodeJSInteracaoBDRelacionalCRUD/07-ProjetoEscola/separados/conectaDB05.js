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

// Exporta a função 'excluirAluno' para que ela possa ser importada e usada em outros módulos
module.exports = { excluirAluno };
