"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
dotenv_1.default.config();
const pgp = (0, pg_promise_1.default)();
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está definida en el archivo .env");
}
exports.db = pgp(process.env.DATABASE_URL);
exports.db.connect()
    .then((obj) => {
    console.log("✅ Conectado a PostgreSQL");
    obj.done(); // Cierra la conexión
})
    .catch((error) => {
    console.error("❌ Error al conectar a PostgreSQL:", error.message || error);
});
