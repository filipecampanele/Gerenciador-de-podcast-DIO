import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { ContentType } from "../enums/content-type";

const defaultContent = { "Content-Type": ContentType.JSON };

const sendResponse = (res: ServerResponse, content: PodcastTransferModel) => {
  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getListEpisodes = async (_req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEpisodes();
  sendResponse(res, content);
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  // QueryString: /api/episode?p=flow
  const url = new URL(req.url ?? "", `http://${req.headers.host}`);
  const podcastName = url.searchParams.get("p") ?? undefined;

  const content = await serviceFilterEpisodes(podcastName);
  sendResponse(res, content);
};
