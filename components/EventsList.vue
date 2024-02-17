<template>
  <div class="space-y-8">
    <div class="flex flex-wrap items-center justify-start gap-6">
      <button
        class="tab min-w-48 rounded-full px-4 py-2 text-sm font-normal"
        :class="{
          'bg-white text-brand-dark': eventFilter == 'all',
          'text border border-brand-text': eventFilter != 'all',
        }"
        @click="eventFilterChange('all')"
      >
        All Events
      </button>

      <button
        class="tab min-w-48 rounded-full px-4 py-2 text-sm font-normal"
        :class="{
          'bg-white text-brand-dark': eventFilter == 'upcoming',
          'text border border-brand-text': eventFilter != 'upcoming',
        }"
        @click="eventFilterChange('upcoming')"
      >
        Upcoming Events
      </button>

      <button
        class="tab min-w-48 rounded-full px-4 py-2 text-sm font-normal"
        :class="{
          'bg-white text-brand-dark': eventFilter == 'past',
          'text border border-brand-text': eventFilter != 'past',
        }"
        @click="eventFilterChange('past')"
      >
        Past Events
      </button>
    </div>
    <div class="gap-content grid grid-cols-1 md:grid-cols-2">
      <EventCard
        v-bind="event"
        v-for="event in loadedEvents"
        :key="event.id"
      ></EventCard>
    </div>
    <div class="flex items-center justify-center" v-if="hasMoreEvents">
      <BaseButton @click="loadMore" class="button-primary"
        >Explore More
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useEventsStore } from "~/stores/eventsStore";
import { type Event } from "~/models/Event";

const eventsStore = useEventsStore();
const eventFilter = ref("all");
const allEvents = ref<Event[]>([]);
const upcomingEvents = ref<Event[]>([]);
const pastEvents = ref<Event[]>([]);
const displayedEvents = computed(() => {
  switch (eventFilter.value) {
    case "upcoming":
      return upcomingEvents.value;
    case "past":
      return pastEvents.value;
    default:
      return allEvents.value;
  }
});
const itemsPerPage = ref(4);
const currentPage = ref(1);
const loadedEvents = computed(() =>
  displayedEvents.value.slice(0, currentPage.value * itemsPerPage.value),
);
const loadMore = () => {
  currentPage.value++;
};

const hasMoreEvents = computed(
  () => displayedEvents.value.length > loadedEvents.value.length,
);
const eventFilterChange = (newValue: string) => {
  eventFilter.value = newValue;
  currentPage.value = 1;
};

onMounted(() => {
  allEvents.value = [...eventsStore.upcomingEvents, ...eventsStore.pastEvents];
  upcomingEvents.value = eventsStore.upcomingEvents;
  pastEvents.value = eventsStore.pastEvents;
});
</script>
