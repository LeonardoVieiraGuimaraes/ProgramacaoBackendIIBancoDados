# Node.js: História e Conceitos Básicos

Este repositório tem como objetivo fornecer uma introdução ao Node.js, abordando sua história, conceitos básicos e características principais.

## Metas de Aprendizado

Ao final deste estudo, você será capaz de:

1. **Compreender a história do Node.js.** Node.js é uma plataforma de código aberto que permite a execução do JavaScript no servidor. Foi criado em 2009 por Ryan Dahl.

2. **Diferenciar arquiteturas bloqueantes e não bloqueantes.** Arquiteturas bloqueantes são aquelas em que uma operação (como uma leitura de arquivo) bloqueia a execução de outras operações até que ela seja concluída. Em contraste, arquiteturas não bloqueantes permitem que outras operações continuem sendo executadas enquanto uma operação está em andamento.

3. **Identificar a função do Node.js.** Node.js permite a execução de código JavaScript no lado do servidor, permitindo a criação de aplicações web rápidas e escaláveis.

4. **Reconhecer as principais características presentes no Node.js.** Algumas das principais características do Node.js incluem a execução de código JavaScript no servidor, arquitetura orientada a eventos e não bloqueante, e a capacidade de criar aplicações web em tempo real.

5. **Diferenciar FrontEnd e BackEnd.** FrontEnd refere-se à parte da aplicação web com a qual o usuário interage, enquanto o BackEnd é a parte que lida com a lógica de negócios, manipulação de dados e interação com o banco de dados.

6. **Compreender o conceito de API.** API (Application Programming Interface) é um conjunto de regras e protocolos para a construção e interação de aplicações de software.

7. **Aplicar os primeiros passos com o Node.js.** Isso inclui a instalação do Node.js, a criação de um servidor simples e a compreensão de como o Node.js lida com solicitações HTTP.

## Instalação

Para começar a usar o Node.js, você precisa instalá-lo em seu computador. Você pode baixar o Node.js do [site oficial](https://nodejs.org/).

Depois de instalado, você pode verificar a versão do Node.js e do npm (Node Package Manager) usando os seguintes comandos no terminal:

```bash
node -v # Verifica a versão do Node.js
npm -v  # Verifica a versão do npm
```
## Executando os Arquivos

Os arquivos JavaScript neste repositório podem ser executados usando o Node.js. Aqui estão as instruções para executar os arquivos na pasta NodeJSJavaScriptVariavesOperadores:

1. Abra um terminal.

2. Navegue até a pasta NodeJSJavaScriptVariavesOperadores usando o comando `cd`. Por exemplo:

   ```bash
   cd caminho/para/a/pasta/NodeJSJavaScriptVariavesOperadores


3. Execute o arquivo JavaScript desejado usando o comando node. Por exemplo, para executar o arquivo 08_operadores_exemplo.js, você usaria o seguinte comando:

    ```bash
    node 08_operadores_exemplo.js

Lembre-se de substituir caminho/para/a/pasta/NodeJSJavaScriptVariavesOperadores pelo caminho real para a pasta no seu sistema.


const somar = require(‘./modulo-somar.js’);

console.log(somar.soma(5, 2));

console.log(somar.soma(3, 9));
