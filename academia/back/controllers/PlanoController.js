import Plano from "../models/Plano.js";

export const listar = async (req, res) => {
    try {
        const dados = await Plano.findAll();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const selecionar = async (req, res) => {
    try {
        const { idplano } = req.params;

        const dados = await Plano.findByPk(idplano);

        if (!dados) {
            return res.status(404).json({ erro: "Plano não encontrado" });
        }

        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const inserir = async (req, res) => {
    try {
        const dados = await Plano.create(req.body);
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const atualizar = async (req, res) => {
    try {
        const { idplano } = req.params;

        const [linhas] = await Plano.update(req.body, {
            where: { idplano }
        });

        if (!linhas) {
            return res.status(404).json({ erro: "Plano não encontrado" });
        }

        res.json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const excluir = async (req, res) => {
    try {
        const { idplano } = req.params;

        const linhas = await Plano.destroy({
            where: { idplano }
        });

        if (!linhas) {
            return res.status(404).json({ erro: "Plano não encontrado" });
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