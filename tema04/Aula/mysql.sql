-- Cria o banco de dados "escola"
CREATE DATABASE escola;

-- Usa o banco de dados "escola"
USE escola;

-- Cria a tabela "alunos" com as colunas "nome", "turma" e "telefone"
CREATE TABLE alunos (
    nome VARCHAR(30),
    turma VARCHAR(30),
    telefone VARCHAR(30)
);

-- Seleciona todos os registros da tabela "alunos"
SELECT * FROM alunos;