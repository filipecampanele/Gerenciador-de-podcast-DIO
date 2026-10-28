import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { noContent, ok } from "../utils/http-helper";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast();

  return data.length !== 0 ? ok(data) : noContent();
};
