import { IncomingMessage, ServerResponse } from "http";
import { router } from "./routes/routes";
import { StatusCode } from "./enums/status-code";
import { ContentType } from "./enums/content-type";

export const app = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    await router(req, res);
  } catch (error) {
    console.error(error);
    res.writeHead(StatusCode.INTERNAL_SERVER_ERROR, { "Content-Type": ContentType.JSON });
    res.end(JSON.stringify({ error: "Erro interno do servidor" }));
  }
};
