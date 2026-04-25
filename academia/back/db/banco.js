import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const banco = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true,
            schema: "academia" // 🔥 IMPORTANTE (se estiver usando schema)
        }
    }
);

// função de conexão (melhor prática)
export async function conectarBanco() {
    try {
        await banco.authenticate();
        console.log("✅ Banco conectado");
    } catch (error) {
        console.error("❌ Erro ao conectar:", error);
    }
}

export default banco;