import { defineStore, type StoreDefinition } from "pinia";
import manifesto from "~/data/manifesto-tags.json";

export interface TagCloudTag {
  name: string | undefined;
}

export interface TagCloud {
  tags: TagCloudTag[];
}
export interface Manifesto {
  tags: TagCloud;
  button: Object;
}
export const useManifestoTagsStore: StoreDefinition = defineStore(
  "manifestoTagsStore",
  {
    state: (): { manifesto: Manifesto[] } => ({
      manifesto,
    }),
  },
);
