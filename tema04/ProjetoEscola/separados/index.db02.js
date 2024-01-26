// Declara uma função anônima assíncrona autoinvocada
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
// Funções autoinvocadas são funções que se chamam automaticamente assim que são definidas
(async () => {
  // Importa o módulo 'conectaBD02'
  // O './' no início do caminho do módulo indica que o módulo está no mesmo diretório que o arquivo atual
  // O Node.js segue o caminho do módulo para encontrar o arquivo 'conectaBD02.js' e importa o que foi exportado nesse módulo
  const db = require("./conectaDB02");
  // A função assíncrona termina aqui
  // Como não há nenhuma operação assíncrona na função, ela retorna imediatamente
  // Se houvesse uma operação assíncrona, como uma chamada de API ou uma leitura de arquivo, a função esperaria a operação ser concluída antes de retornar

  console.log("Alunos Cadastrados no Banco de Dados");
  const alunos = await db.todosAlunos();
  console.log(alunos);

  console.log("Realizando Cadastro de Alunos");
  await db.inserirAluno({
    nome: "Leonardo Vieira Guimarães",
    turma: "BD",
    telefone: "99999999",
  });
})();
