import { defineStore } from "pinia";
import organization from "~/data/organization.json";

export interface OrganizationAddress {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Organization {
  name: string;
  legalForm: string;
  registrationNumber: string;
  address: OrganizationAddress;
}

export const useOrganizationStore = defineStore({
  id: "organization",
  state: (): { organization: Organization } => ({
    organization,
  }),
  getters: {
    formattedAddress: (state: { organization: Organization }): string => {
      const { street, postalCode, city, country } = state.organization.address;
      return `${street}, ${postalCode} ${city}, ${country}`;
    },
  },
});
