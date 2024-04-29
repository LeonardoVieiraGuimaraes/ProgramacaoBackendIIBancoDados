# # Node.js: Interação com MongoDB

Este repositório é um guia para a interação entre Node.js e MongoDB. Aqui, abordaremos conceitos como JSON e operações CRUD (Create, Read, Update, Delete - Criação, Leitura, Atualização e Exclusão de dados).

## Objetivos de Aprendizado

Ao final deste guia, você será capaz de:

1. **Entender o conceito de JSON:** JSON (JavaScript Object Notation) é um formato de dados que usa texto legível ao humano para transmitir pares de chave-valor de dados. É usado principalmente para transmitir dados entre um servidor e um aplicativo web.

2. **Compreender como utilizar Node.JS com JSON:** Node.js pode manipular JSON de maneira eficiente, permitindo que você crie, leia, atualize e exclua dados em formato JSON.

3. **Aplicar o conceito de uso de Node.JS com JSON para resolução de problemas:** Você será capaz de usar Node.js e JSON para resolver problemas do mundo real, como manipulação de dados e comunicação entre servidor e cliente.

4. **Analisar o banco de dados MongoDB:** MongoDB é um banco de dados não relacional que armazena dados em documentos flexíveis semelhantes a JSON. Você aprenderá como analisar e entender a estrutura de um banco de dados MongoDB.

5. **Propor soluções tecnológicas com o uso do banco de dados MongoDB:** Com o conhecimento de MongoDB, você será capaz de propor soluções para problemas de armazenamento de dados que se beneficiam de um banco de dados não relacional.

6. **Conhecer como usar Node.JS com banco de dados não relacional MongoDB:** Você aprenderá como usar o driver MongoDB para Node.js para interagir com um banco de dados MongoDB.

7. **Estruturar um projeto com uso de banco de dados MongoDB:** Você aprenderá como estruturar um projeto Node.js que usa MongoDB para armazenamento de dados, incluindo a criação de modelos de dados e a execução de operações CRUD.

## Instalação

Para começar a usar o Node.js e MongoDB, você precisa instalá-los em seu computador. Você pode baixar o Node.js do [site oficial](https://nodejs.org/) e o MongoDB do [site oficial do MongoDB](https://www.mongodb.com/try/download/community).

Depois de instalado, você pode verificar a versão do Node.js e do npm (Node Package Manager) usando os seguintes comandos no terminal:

```bash
node -v # Verifica a versão do Node.js
npm -v  # Verifica a versão do npm
```

## Instalação do MongoDB no Windows

Siga os passos abaixo para instalar o MongoDB no Windows:

1. **Baixe o instalador do MongoDB:** Acesse o [site oficial do MongoDB](https://www.mongodb.com/try/download/community) e baixe o instalador do MongoDB Community Server para Windows.

2. **Execute o instalador:** Localize o arquivo .msi que você baixou e clique duas vezes nele para iniciar o processo de instalação.

3. **Siga as instruções do instalador:** O instalador irá guiá-lo através do processo de instalação. Você pode aceitar as configurações padrão, que irão instalar o MongoDB e as ferramentas associadas.

4. **Verifique a instalação:** Abra o Prompt de Comando e digite `mongo --version`. Se o MongoDB foi instalado corretamente, você verá a versão do MongoDB exibida.



## Usando Node.js e JSON com interação ao banco de dados não relacional MongoDB

Para iniciar e preparar nosso ambiente de desenvolvimento, será necessário instalar algumas dependências e módulos. Siga os passos abaixo:

1. **Inicialize o projeto Node.js:** No terminal do Visual Studio Code, digite o seguinte comando para criar um novo projeto Node.js:

```bash
npm init -y

```

## Usando Node.js e JSON com interação ao banco de dados não relacional MongoDB

Para começar a usar Node.js e MongoDB, você precisará instalar algumas dependências. No seu terminal, execute o seguinte comando:

```bash
npm i express mongoose nodemon

```


Após a instalação desses pacotes, você notará que um novo arquivo chamado package-lock.json e uma pasta chamada node_modules foram criados. Isso indica que o processo foi concluído com sucesso.

Crie o arquivo principal: Crie um arquivo chamado index.js na pasta do seu projeto. Este será o arquivo principal da nossa aplicação.

Atualize o arquivo package.json: Abra o arquivo package.json e adicione o seguinte código:

"main": "index.js",
"scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4123;
const sistema = express();

sistema.use(express.json());

sistema.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

