import { DataTypes } from "sequelize";
import banco from "../db/banco.js";

const Plano = banco.define("plano", {
    idplano: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracao_meses: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

export default Plano;