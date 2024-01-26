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
conecta();

// Exporta a função 'conecta' para que ela possa ser usada em outros módulos
module.exports = conecta;
