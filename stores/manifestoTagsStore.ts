import { defineStore, type StoreDefinition } from "pinia";
import type { TagCloudTag } from "~/types/TagCloudTag";

export const useManifestoTagsStore: StoreDefinition = defineStore(
  "manifestoTagsStore",
  {
    state: (): { tags: TagCloudTag[] } => ({
      tags: [
        { name: "Having a Safe Place" },
        { name: "Helping each other" },
        { name: "And more" },
        { name: "Keeping things confidential" },
        { name: "Role" },
        { name: "Role" },
      ],
    }),
  },
);
