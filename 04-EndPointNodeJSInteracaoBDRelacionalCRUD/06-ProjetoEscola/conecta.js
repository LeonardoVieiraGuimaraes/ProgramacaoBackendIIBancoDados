// Importando a função 'createConnection' do módulo 'mysql2/promise'.
// Essa função é usada para criar uma nova conexão com o banco de dados MySQL.
import { createConnection } from "mysql2/promise";

// Configurações do banco de dados.
// Essas são as informações necessárias para se conectar ao banco de dados.
const dbConfig = {
  host: "localhost", // O endereço do servidor do banco de dados.
  user: "root", // O nome de usuário para se conectar ao banco de dados.
  database: "escola", // O nome do banco de dados ao qual se conectar.
  port: 3307, // A porta na qual o servidor do banco de dados está escutando.
  password: "270414", // A senha do usuário para se conectar ao banco de dados.
};

// A função 'conecta' é usada para estabelecer uma conexão com o banco de dados.
const conecta = async () => {
  // Verifica se já existe uma conexão global e se ela não está desconectada.
  if (global.conexao && global.conexao.state !== "disconnected") {
    // Se a conexão já existir e estiver ativa, retorna a conexão existente.
    return global.conexao;
  }

  try {
    // Tenta criar uma nova conexão com o banco de dados usando as configurações definidas acima.
    const con = await createConnection(dbConfig);
    // Se a conexão for bem-sucedida, registra uma mensagem no console e armazena a conexão na variável global.
    console.log("Conectou no MySQL!");
    global.conexao = con;
    // Retorna a nova conexão.
    return con;
  } catch (err) {
    // Se ocorrer um erro ao tentar conectar, registra o erro no console e lança o erro para ser tratado pelo chamador da função.
    console.error("Falha ao conectar ao MySQL:", err);
    throw err;
  }
};

// Exporta a função 'conecta' para que possa ser usada em outros módulos.
export default conecta;
