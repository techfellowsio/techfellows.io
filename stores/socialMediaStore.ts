import { defineStore } from "pinia";
import profiles from "~/data/socialMedia.json";

export interface SocialMediaProfile {
  name: string;
  url: string;
  svg: string;
}

export const useSocialMediaStore = defineStore({
  id: "socialMedia",
  state: (): { profiles: SocialMediaProfile[] } => ({
    profiles,
  }),
  getters: {
    getProfileByName:
      (state: { profiles: SocialMediaProfile[] }) => (name: string) => {
        return state.profiles.find(
          (profile: SocialMediaProfile): boolean =>
            profile.name.toLowerCase() === name.toLowerCase(),
        );
      },
  },
});
