// Declara uma função anônima assíncrona autoinvocada
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
// Funções autoinvocadas são funções que se chamam automaticamente assim que são definidas
(async () => {
  // Importa o módulo 'conectaDB04'
  // O './' no início do caminho do módulo indica que o módulo está no mesmo diretório que o arquivo atual
  // O Node.js segue o caminho do módulo para encontrar o arquivo 'conectaDB04.js' e importa o que foi exportado nesse módulo
  const db = require("./conectaDB04");

  // Define o ID do aluno que será atualizado
  const id = 1;

  // Define os novos valores para o nome, turma e telefone do aluno
  const novoNome = "Fulado de Tal";
  const novaTurma = "SPI";
  const novoTelefone = "8888888888";

  // Chama a função 'alterarAluno' do módulo 'db' (que foi importado de 'conectaDB04')
  // A função 'alterarAluno' é uma função assíncrona que atualiza um aluno na tabela 'alunos'
  // A palavra-chave 'await' é usada para pausar a execução do código até que a função 'alterarAluno' seja concluída
  // O primeiro argumento para 'alterarAluno' é o ID do aluno que será atualizado
  // O segundo argumento para 'alterarAluno' é um objeto que contém os novos valores para o nome, turma e telefone do aluno
  await db.alterarAluno(id, {
    nome: novoNome,
    turma: novaTurma,
    telefone: novoTelefone,
  });

  // Imprime uma mensagem no console para indicar que o aluno foi atualizado com sucesso
  console.log("Aluno " + id + " alterado com sucesso!");
})();
