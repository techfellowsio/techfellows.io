import { defineStore } from "pinia";
import events from "~/data/events.json";

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export const useEventsStore = defineStore({
  id: "eventsStore",
  state: (): { events: Event[] } => ({
    events,
  }),
  actions: {
    addEvent(event: Event): void {
      this.events.push(event);
    },
    removeEvent(eventId: string): void {
      this.events = this.events.filter((e) => e.id !== eventId);
    },
  },
  getters: {
    sortedEvents(): Event[] {
      return this.events.sort((a: Event, b: Event) => {
        const dateA: Date = new Date(
          a.year,
          a.month - 1,
          a.day,
          a.hour,
          a.minute,
        );
        const dateB: Date = new Date(
          b.year,
          b.month - 1,
          b.day,
          b.hour,
          b.minute,
        );
        return dateB.getTime() - dateA.getTime();
      });
    },
    upcomingEvents(): Event[] {
      const now: Date = new Date();
      return this.sortedEvents.filter(
        (event: Event): boolean =>
          new Date(
            event.year,
            event.month - 1,
            event.day,
            event.hour,
            event.minute,
          ) > now,
      );
    },
    pastEvents(): Event[] {
      const now: Date = new Date();
      return this.sortedEvents.filter(
        (event: Event): boolean =>
          new Date(
            event.year,
            event.month - 1,
            event.day,
            event.hour,
            event.minute,
          ) < now,
      );
    },
  },
});
