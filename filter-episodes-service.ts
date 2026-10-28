import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { noContent, ok } from "../utils/http-helper";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast(podcastName);

  return data.length !== 0 ? ok(data) : noContent();
};
