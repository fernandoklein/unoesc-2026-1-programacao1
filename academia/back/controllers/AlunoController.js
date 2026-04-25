import Aluno from "../models/Aluno.js";

export const listar = async (req, res) => {
    try {
        const dados = await Aluno.findAll();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const selecionar = async (req, res) => {
    try {
        const { idaluno } = req.params;

        const dados = await Aluno.findByPk(idaluno);

        if (!dados) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const inserir = async (req, res) => {
    try {
        const dados = await Aluno.create(req.body);
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const atualizar = async (req, res) => {
    try {
        const { idaluno } = req.params;

        const [linhas] = await Aluno.update(req.body, {
            where: { idaluno }
        });

        if (!linhas) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        res.json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const excluir = async (req, res) => {
    try {
        const { idaluno } = req.params;

        const linhas = await Aluno.destroy({
            where: { idaluno }
        });

        if (!linhas) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        res.json({ mensagem: "Excluído com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export default {
    listar,
    selecionar,
    inserir,
    atualizar,
    excluir
};