import Matricula from "../models/Matricula.js";
import Plano from "../models/Plano.js";
import Aluno from "../models/Aluno.js";
import moment from "moment";

export const listar = async (req, res) => {
    try {
        const dados = await Matricula.findAll({
            include: [Aluno, Plano]
        });
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const selecionar = async (req, res) => {
    try {
        const { idmatricula } = req.params;

        const dados = await Matricula.findByPk(idmatricula, {
            include: [Aluno, Plano]
        });

        if (!dados) {
            return res.status(404).json({ erro: "Matrícula não encontrada" });
        }

        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const inserir = async (req, res) => {
    try {
        const { idaluno, idplano, data_inicio } = req.body;

        // valida plano
        const plano = await Plano.findByPk(idplano);
        if (!plano) {
            return res.status(404).json({ erro: "Plano não encontrado" });
        }

        // valida aluno
        const aluno = await Aluno.findByPk(idaluno);
        if (!aluno) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        // 🔥 REGRA DE NEGÓCIO: calcular vencimento
        const data_vencimento = moment(data_inicio)
            .add(plano.duracao_meses, "months")
            .format("YYYY-MM-DD");

        const dados = await Matricula.create({
            idaluno,
            idplano,
            data_inicio,
            data_vencimento
        });

        res.json(dados);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const excluir = async (req, res) => {
    try {
        const { idmatricula } = req.params;

        const linhas = await Matricula.destroy({
            where: { idmatricula }
        });

        if (!linhas) {
            return res.status(404).json({ erro: "Matrícula não encontrada" });
        }

        res.json({ mensagem: "Excluída com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
export default {
    listar,
    selecionar,
    inserir,
    excluir
};