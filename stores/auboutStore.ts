import { defineStore } from "pinia";
import items from "~/data/about.json";

export interface AboutItem {
  title: string;
  description: string;
  icon: string;
}

export const useAboutStore = defineStore("aboutStore", {
  state: (): { items: AboutItem[] } => ({
    items,
  }),
});
