CREATE SCHEMA IF NOT EXISTS academia;

CREATE TABLE academia.aluno (
    idaluno SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20)
);

CREATE TABLE academia.plano (
    idplano SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    duracao_meses INTEGER NOT NULL,
    valor NUMERIC(10,2) NOT NULL
);

CREATE TABLE academia.matricula (
    idmatricula SERIAL PRIMARY KEY,
    idaluno INTEGER NOT NULL,
    idplano INTEGER NOT NULL,
    data_inicio DATE NOT NULL,
    data_vencimento DATE NOT NULL,

    CONSTRAINT fk_aluno FOREIGN KEY (idaluno) REFERENCES academia.aluno(idaluno),
    CONSTRAINT fk_plano FOREIGN KEY (idplano) REFERENCES academia.plano(idplano)
);