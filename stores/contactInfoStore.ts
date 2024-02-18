import { defineStore } from "pinia";
import contactInfo from "~/data/contactInfo.json";

export interface ContactInfo {
  type: string;
  value: string;
}

export const useContactInfoStore = defineStore({
  id: "contactInfo",
  state: (): { contactInfo: ContactInfo[] } => ({
    contactInfo,
  }),
  getters: {
    getInfoByType:
      (state: { contactInfo: ContactInfo[] }) => (type: string) => {
        return state.contactInfo.find(
          (info: ContactInfo): boolean =>
            info.type.toLowerCase() === type.toLowerCase(),
        );
      },
  },
});
