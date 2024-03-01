import { defineStore } from "pinia";
import notifications from "~/data/notifications.json";

interface Notification {
  title: string;
  text: string;
  url?: string;
}

export const useNotificationsStore = defineStore("notifications", {
  state: (): { notifications: Notification[] } => ({
    notifications,
  }),
  getters: {
    getNotification(state) {
      return state.notifications[0] ?? null;
    },
  },
});
