// Importando o módulo mongoose, que é usado para interagir com o MongoDB
import mongoose from "mongoose";

// Definindo uma função assíncrona para conectar ao MongoDB
const conecta = async () => {
  try {
    // Definindo a URL de conexão ao MongoDB
    // Se a variável de ambiente MONGO_URL estiver definida, ela será usada
    // Caso contrário, será usada a URL "mongodb://localhost:27017/Biblioteca"
    const url = process.env.MONGO_URL || "mongodb://localhost:27017/Biblioteca";

    // Tentando conectar ao MongoDB usando a URL definida
    await mongoose.connect(url);

    // Se a conexão for bem-sucedida, uma mensagem será exibida no console
    console.log("Conexão efetuada com sucesso");
  } catch (error) {
    // Se ocorrer um erro durante a tentativa de conexão, o erro será exibido no console
    console.error(`Erro ao conectar no banco de dados: ${error}`);

    // O processo será encerrado com um código de saída 1, que indica que ocorreu um erro
    process.exit(1);
  }
};

// Exportando a função conecta para que ela possa ser usada em outros módulos
export default conecta;
