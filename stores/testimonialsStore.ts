// /stores/testimonialsStore.ts
import { defineStore } from "pinia";
import testimonials from "~/data/testimonials.json";

export interface Testimonial {
  name: string;
  jobTitle: string;
  photo: string;
  headline?: string;
  testimonial: string;
}

export const useTestimonialsStore = defineStore({
  id: "testimonial",
  state: (): { testimonials: Testimonial[] } => ({
    testimonials,
  }),
});
