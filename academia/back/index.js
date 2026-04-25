import express from "express";
import { conectarBanco } from "./db/banco.js";

import AlunoController from "./controllers/AlunoController.js";
import PlanoController from "./controllers/PlanoController.js";
import MatriculaController from "./controllers/MatriculaController.js";
import cors from "cors";

const api = express();
api.use(express.json());
api.use(cors());

// ALUNO
api.get('/aluno', AlunoController.listar);
api.get('/aluno/:idaluno', AlunoController.selecionar);
api.delete('/aluno/:idaluno', AlunoController.excluir);
api.post('/aluno', AlunoController.inserir);
api.put('/aluno/:idaluno', AlunoController.atualizar);

// PLANO
api.get('/plano', PlanoController.listar);
api.get('/plano/:idplano', PlanoController.selecionar);
api.delete('/plano/:idplano', PlanoController.excluir);
api.post('/plano', PlanoController.inserir);
api.put('/plano/:idplano', PlanoController.atualizar);

// MATRÍCULA
api.get('/matricula', MatriculaController.listar);
api.get('/matricula/:idmatricula', MatriculaController.selecionar);
api.delete('/matricula/:idmatricula', MatriculaController.excluir);
api.post('/matricula', MatriculaController.inserir);

async function iniciar() {
    await conectarBanco();

    api.listen(3000, () => {
        console.log("🚀 API de Academia rodando na porta 3000");
    });
}

iniciar();