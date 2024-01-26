import express from "express";

const app = express();

// indicar para o express ler body com json
app.use(express.json());

// Rota POST para criar um novo aluno
app.post("/alunos", async (req, res) => {
  // Extrai o corpo da requisição, que deve conter os dados do novo aluno
  const aluno = req.body;
  // Define a consulta SQL para inserir um novo aluno
  const sql = "INSERT INTO alunos SET ?";
  try {
    // Executa a consulta SQL, passando os dados do novo aluno como parâmetro
    const [resultado] = await conexao.query(sql, aluno);
    // Se a consulta for bem-sucedida, retorna o resultado da consulta com o status 201
    res.status(201).json(resultado);
  } catch (erro) {
    // Se ocorrer um erro ao executar a consulta, retorna o erro com o status 500
    res.status(500).json({ erro: erro });
  }
});

// Rota GET para ler todos os alunos
app.get("/alunos", async (req, res) => {
  // Define a consulta SQL para buscar todos os alunos
  const sql = "SELECT * FROM alunos";
  try {
    // Executa a consulta SQL
    const [resultado] = await conexao.query(sql);
    // Se a consulta for bem-sucedida, retorna o resultado da consulta com o status 200
    res.status(200).json(resultado);
  } catch (erro) {
    // Se ocorrer um erro ao executar a consulta, retorna o erro com o status 500
    res.status(500).json({ erro: erro });
  }
});

// Rota GET para ler um aluno específico pelo ID
app.get("/alunos/:id", async (req, res) => {
  // Extrai o ID do aluno da URL
  const id = req.params.id;
  // Define a consulta SQL para buscar um aluno específico pelo ID
  const sql = "SELECT * FROM alunos WHERE id=?";
  try {
    // Executa a consulta SQL, passando o ID do aluno como parâmetro
    const [resultado] = await conexao.query(sql, id);
    // Se o aluno não for encontrado, retorna um erro 404
    if (resultado.length === 0) {
      return res.status(404).json({ erro: "Aluno não encontrado." });
    }
    // Se o aluno for encontrado, retorna os dados do aluno com o status 200
    res.status(200).json(resultado[0]);
  } catch (erro) {
    // Se ocorrer um erro ao executar a consulta, retorna o erro com o status 500
    res.status(500).json({ erro: erro });
  }
});

// Rota PUT para atualizar um aluno existente
app.put("/alunos/:id", async (req, res) => {
  // Extrai o ID do aluno da URL
  const id = req.params.id;
  // Extrai o corpo da requisição, que deve conter os novos dados do aluno
  const aluno = req.body;
  // Define a consulta SQL para atualizar um aluno específico
  const sql = "UPDATE alunos SET ? WHERE id=?";
  try {
    // Executa a consulta SQL, passando os novos dados do aluno e o ID como parâmetros
    const [resultado] = await conexao.query(sql, [aluno, id]);
    // Se a consulta for bem-sucedida, retorna o resultado da consulta com o status 200
    res.status(200).json(resultado);
  } catch (erro) {
    // Se ocorrer um erro ao executar a consulta, retorna o erro com o status 500
    res.status(500).json({ erro: erro });
  }
});

// Rota DELETE para excluir um aluno existente
app.delete("/alunos/:id", async (req, res) => {
  // Extrai o ID do aluno da URL
  const id = req.params.id;
  // Define a consulta SQL para excluir um aluno específico
  const sql = "DELETE FROM alunos WHERE id=?";
  try {
    // Executa a consulta SQL, passando o ID do aluno como parâmetro
    const [resultado] = await conexao.query(sql, id);
    // Se a consulta for bem-sucedida, retorna o resultado da consulta com o status 200
    res.status(200).json(resultado);
  } catch (erro) {
    // Se ocorrer um erro ao executar a consulta, retorna o erro com o status 500
    res.status(500).json({ erro: erro });
  }
});

// Exporta o aplicativo Express para ser usado em outros módulos.
export default app;
