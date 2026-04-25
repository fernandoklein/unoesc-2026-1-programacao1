import { DataTypes } from "sequelize";
import banco from "../db/banco.js";
import Aluno from "./Aluno.js";
import Plano from "./Plano.js";

const Matricula = banco.define("matricula", {
    idmatricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idaluno: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idplano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_vencimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

// RELACIONAMENTOS
Matricula.belongsTo(Aluno, { foreignKey: "idaluno" });
Matricula.belongsTo(Plano, { foreignKey: "idplano" });

// (opcional, mas recomendado)
Aluno.hasMany(Matricula, { foreignKey: "idaluno" });
Plano.hasMany(Matricula, { foreignKey: "idplano" });

export default Matricula;