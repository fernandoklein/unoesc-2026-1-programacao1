import { DataTypes } from "sequelize";
import banco from "../db/banco.js";

const Aluno = banco.define("aluno", {
    idaluno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING
    }
});

export default Aluno;