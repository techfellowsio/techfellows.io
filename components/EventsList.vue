<template>
  <div class="space-y-8">
    <div class="flex items-center justify-start gap-6 flex-wrap">
      <button class="tab rounded-full py-2 px-4 font-normal text-sm min-w-48" :class="{
        'bg-white text-brand-dark': eventFilter=='all',
        'border border-brand-text text': eventFilter!='all'
      }" @click="eventFilterChange('all')">All Events
      </button>

      <button class="tab rounded-full py-2 px-4 font-normal text-sm min-w-48" :class="{
        'bg-white text-brand-dark': eventFilter=='upcoming',
        'border border-brand-text text': eventFilter!='upcoming'
      }" @click="eventFilterChange('upcoming')">Upcoming Events
      </button>

      <button class="tab rounded-full py-2 px-4 font-normal text-sm min-w-48" :class="{
        'bg-white text-brand-dark': eventFilter=='past',
        'border border-brand-text text': eventFilter!='past'
      }" @click="eventFilterChange('past')">Past Events
      </button>
    </div>
    <div class="md:grid-cols-2 grid gap-content grid-cols-1">
      <EventCard v-bind="event" v-for="event in loadedEvents" :key="event.id"></EventCard>
    </div>
    <div class="flex items-center justify-center" v-if="hasMoreEvents">
      <BaseButton @click="loadMore" class="button-primary">Explore More</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useEventsStore} from '~/stores/eventsStore';
import {type Event} from '~/models/Event';

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
      return allEvents.value
  }
});
const itemsPerPage = ref(4);
const currentPage = ref(1);
const loadedEvents = computed(() =>
    displayedEvents.value.slice(
        0,
        currentPage.value * itemsPerPage.value
    )
);
const loadMore = () => {
  currentPage.value++;
};

const hasMoreEvents = computed(() => displayedEvents.value.length > loadedEvents.value.length)
const eventFilterChange = (newValue: string) => {
  eventFilter.value = newValue
  currentPage.value = 1;
}

onMounted(() => {
  allEvents.value = [...eventsStore.upcomingEvents, ...eventsStore.pastEvents];
  upcomingEvents.value = eventsStore.upcomingEvents;
  pastEvents.value = eventsStore.pastEvents;
});

</script>
