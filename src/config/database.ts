import dotenv from "dotenv";
import pgPromise from "pg-promise";

dotenv.config();

const pgp = pgPromise();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida en el archivo .env");
}

export const db = pgp(process.env.DATABASE_URL);

db.connect()
  .then((obj) => {
    console.log("✅ Conectado a PostgreSQL");
    obj.done(); // Cierra la conexión
  })
  .catch((error) => {
    console.error("❌ Error al conectar a PostgreSQL:", error.message || error);
  });
