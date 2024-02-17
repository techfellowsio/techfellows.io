import { defineStore } from "pinia";
import eventData from "~/data/events";

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
    events: [
      ...eventData(),
      // Generate more events
      ...Array.from({ length: 6 }, (_, i: number) => ({
        id: (i + 5).toString(),
        title: `Event ${i + 5}`,
        description: `Description ${i + 5}`,
        year: (Math.floor(Math.random() * (2023 - 2020 + 1)) + 2020).toString(),
        month: (Math.floor(Math.random() * (12 - 1 + 1)) + 1).toString(),
        day: (Math.floor(Math.random() * (28 - 1 + 1)) + 1).toString(),
        hour: 12,
        minute: 0,
        image: `/events/${i + 5}.png`,
        url: `https://www.event${i + 2}.com`,
      })),
    ],
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
        return dateA.getTime() - dateB.getTime();
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
