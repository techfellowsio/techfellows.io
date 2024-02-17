import { defineStore } from "pinia";
import type { Partners, Partner } from "~/types/Tf";

export const usePartnersStore = defineStore({
  id: "partners",
  state: (): Partners => ({
    partners: [
      {
        id: "3b6e0c7d-9cfa-4b77-a3d7-f5f91414b4f6",
        name: "Surglogs",
        url: "https://surglogs.com/",
        logo: "/partners/Surglogs.svg",
      },
      {
        id: "6b5f6d3a-9cfa-4b77-a3d7-e9d2bb59f3a2",
        name: "Labyrinth Labs",
        url: "https://lablabs.io/",
        logo: "/partners/Labyrinth.svg",
      },
      {
        id: "0e37df28-9cfa-4b77-a3d7-8a19a3a1011d",
        name: "Slido",
        url: "https://www.slido.com/",
        logo: "/partners/Slido.svg",
      },
      {
        id: "4b7d2add-9cfa-4b77-a3d7-2557029b7765",
        name: "Labyrinth Labs",
        url: "https://lablabs.io/",
        logo: "/partners/Labyrinth.svg",
      },
      {
        id: "2dbd33f1-9cfa-4b77-a3d7-dd0b2a54c062",
        name: "Surglogs",
        url: "https://surglogs.com/",
        logo: "/partners/Surglogs.svg",
      },
    ] as Partner[],
  }),
  getters: {
    partnersCount(): number {
      return this.partners.length;
    },
  },
  actions: {
    addPartner(partner: Partner) {
      this.partners.push(partner);
    },
  },
});
