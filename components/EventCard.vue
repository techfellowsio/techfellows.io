<template>
  <NuxtLink
    :to="url"
    :title="title + ' ' + description"
    class="group relative max-h-96 overflow-hidden rounded-app-sm hover:z-10 hover:overflow-hidden"
    target="_blank"
  >
    <nuxt-img
      provider="cloudflare"
      :src="image"
      :alt="title"
      class="w-full rounded-app-sm object-contain object-center"
    />
    <div
      class="absolute top-0 flex h-full w-full flex-col justify-between p-5 transition-all hover:bg-brand-dark hover:bg-opacity-30"
    >
      <div
        class="-translate-y-48 transform transition-all group-hover:translate-y-0"
      >
        <div
          class="inline-flex items-center gap-3 rounded-app-sm bg-brand-dark p-2 px-4 font-normal text-white"
        >
          <span>📅</span> {{ dateFormattedShort }}
        </div>
      </div>
      <div
        class="flex translate-y-[8rem] transform items-center justify-between rounded-app-sm bg-white p-3 text-brand-dark opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div class="text-md">
          <p class="mb-0">{{ title }}</p>
          <p class="font-bold">{{ description }}</p>
        </div>
        <IconBoxWithArrow class="w-20" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import moment from "moment";
import type { Event } from "~/stores/eventsStore";

const props = withDefaults(defineProps<Event>(), {});

const date = computed(
  () =>
    new Date(props.year, props.month - 1, props.day, props.hour, props.minute),
);

const dateFormattedShort = computed(() => {
  return moment(date.value).format("dddd, MMMM D YYYY");
});

const dateFormattedLong = computed(() => {
  return moment(date.value).format("dddd, MMMM D HH:mm");
});
</script>
