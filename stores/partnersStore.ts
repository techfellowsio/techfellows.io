import { defineStore, type StoreDefinition } from "pinia";
import partners from "~/data/partners.json";

export interface Partner {
  id: string;
  name: string;
  url: string;
  logo: string;
}

export interface Partners {
  partners: Partner[];
}

export const usePartnersStore: StoreDefinition = defineStore({
  id: "partners",
  state: (): Partners => ({
    partners,
  }),
});
