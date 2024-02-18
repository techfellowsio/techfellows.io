import { defineStore } from "pinia";
import menus from "~/data/footer-links.json";

export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterMenu {
  name: string;
  links: FooterLink[];
}

export const useFooterLinksStore = defineStore({
  id: "footerLinks",
  state: (): { menus: FooterMenu[] } => ({
    menus,
  }),
});
