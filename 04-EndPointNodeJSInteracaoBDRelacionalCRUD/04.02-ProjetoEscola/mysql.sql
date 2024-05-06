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



CREATE DATABASE escola;
USE escola;

-- CREATE TABLE alunos (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   nome VARCHAR(255),
--   turma VARCHAR(255),
--   telefone VARCHAR(255)
-- );

CREATE DATABASE escola;
USE escola;

INSERT INTO alunos (nome, turma, telefone) VALUES ('João', 'Turma A', '123456789');
INSERT INTO alunos (nome, turma, telefone) VALUES ('Maria', 'Turma B', '987654321');
INSERT INTO alunos (nome, turma, telefone) VALUES ('Carlos', 'Turma C', '456789123');


CREATE DATABASE escola;
USE escola;

CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  turma VARCHAR(255),
  telefone VARCHAR(255)
);

CREATE DATABASE escola;
USE escola;

INSERT INTO alunos (nome, turma, telefone) VALUES ('João', 'Turma A', '123456789');
INSERT INTO alunos (nome, turma, telefone) VALUES ('Maria', 'Turma B', '987654321');
INSERT INTO alunos (nome, turma, telefone) VALUES ('Carlos', 'Turma C', '456789123');