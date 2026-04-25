import express from "express";
import dotenv from "dotenv";
import banco, { conectarBanco } from "./banco.js";

// ROTAS (quando você criar)
// import alunoRoutes from "./routes/alunoRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/teste", (req, res) => {
    return res.json({ mensagem: "Bem vindo" });
});

// app.use("/aluno", alunoRoutes);

async function iniciarServidor() {
    await conectarBanco();

    app.listen(4000, () => {
        console.log("🚀 API rodando na porta 4000");
    });
}

iniciarServidor();