import { defineStore, type StoreDefinition } from "pinia";
import tags from "~/data/manifesto-tags.json";

export interface TagCloudTag {
  name: string | undefined;
}

export interface TagCloud {
  tags: TagCloudTag[];
}
export const useManifestoTagsStore: StoreDefinition = defineStore(
  "manifestoTagsStore",
  {
    state: (): { tags: TagCloudTag[] } => ({
      tags,
    }),
  },
);
