// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP
const http = require("http");

// Cria um servidor HTTP
http
  .createServer((request, response) => {
    // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como 'text/plain'
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Escreve "Bem vindo! Teste executado com sucesso!" no corpo da resposta
    response.write("Bem vindo! Teste executado com sucesso!");

    // Sinaliza ao servidor que todos os cabeçalhos e corpo da resposta foram enviados
    response.end();
  })
  // Faz o servidor escutar na porta 1010
  .listen(1010);

console.log("Servidor rodando em http://localhost:1010/");

//   O status 200 é um código de status HTTP que indica que a requisição foi processada com sucesso. Especificamente, o código 200 significa "OK" e é a resposta padrão para requisições HTTP bem-sucedidas. Quando um servidor retorna esse código, geralmente também envia de volta os dados solicitados.

// Linha 1: criamos uma constante com o nome http e informamos que será feita uma requisição do tipo http.
// Linha 3: usamos uma das propriedades, createServer e aplicamos a constante http. Em seguida, usamos a palavra request e response, respectivamente requisição e resposta.
// Linha 5: aplicamos ao response a propriedade writeHead, tipo do cabeçalho. Informamos o número 200, tipo de status da página.
// Linha 10: usamos a propriedade .write para escrever uma mensagem em tela.
// Linha 12: finalizamos o response.
// Linha 14: usamos a propriedade .listen e informamos qual porta será usada para acesso e exibição dos dados no browser. Neste exemplo, 1010.
// Para testar a aplicação, abra o cmd do sistema operacional em execução, vá até a pasta ProjetoEscola e digite o código que aparece na figura a seguir. Assim, iniciamos a execução do servidor.

// O próximo passo é verificarmos no browser. Para isso, abra o navegador web de sua preferência e digite o seguinte endereço: http://localhost:1010/. Se tudo estiver certo, será exibido no navegador a seguinte frase: “Bem-vindo! Teste executado com sucesso!”.
