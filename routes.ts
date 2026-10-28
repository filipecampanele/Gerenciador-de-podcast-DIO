import { IncomingMessage, ServerResponse } from "http";
import { getFilterEpisodes, getListEpisodes } from "../controllers/podcasts-controller";
import { HttpMethod } from "../enums/http-methods";
import { Routes } from "../enums/routes-enum";
import { StatusCode } from "../enums/status-code";
import { ContentType } from "../enums/content-type";

export const router = async (req: IncomingMessage, res: ServerResponse) => {
  // Separa a rota base da querystring
  const [baseUrl] = (req.url ?? "").split("?");

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    return getListEpisodes(req, res);
  }

  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    return getFilterEpisodes(req, res);
  }

  // Tratamento de erro: rota não encontrada
  res.writeHead(StatusCode.NOT_FOUND, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify({ error: "Rota não encontrada" }));
};
