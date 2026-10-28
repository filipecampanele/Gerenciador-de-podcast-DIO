import * as http from "http";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT ?? 3333;

server.listen(port, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${port}`);
});
