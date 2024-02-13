<template>
  <NuxtLink :to="url" :title="title +' '+ description" class="rounded-app-sm relative overflow-hidden group">
    <nuxt-picture :src="image" :alt="title" class="w-full *:w-full h-[68.462%]"/>
    <div
        class="absolute top-0 w-full bg-brand-dark bg-opacity-30 transition-all h-full p-5 flex flex-col justify-between">
      <div class="transform -translate-y-48 group-hover:translate-y-0 transition-all">
        <div class="bg-brand-dark text-white rounded-app-sm p-2 px-4 inline-flex items-center gap-3 font-normal">
          <span>📅</span> {{ dateFormattedShort }}
        </div>
      </div>
      <div
          class="rounded-app-sm bg-white text-brand-dark p-3 flex items-center justify-between transform translate-y-[8rem] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
        <div class="text-md">
          <p class="mb-0">{{ title }}</p>
          <p class="font-bold">{{ description }}</p>
        </div>
        <BoxWithArrow class="w-20"/>
      </div>
    </div>
  </NuxtLink>
</template>


<script setup lang="ts">

import {computed} from 'vue';
import moment from "moment";
import type {Event} from '~/stores/eventsStore'
import BoxWithArrow from "~/components/icon/BoxWithArrow.vue";

const props = withDefaults(defineProps<Event>(), {});

const date = computed(() => new Date(props.year, props.month - 1, props.day, props.hour, props.minute));

const dateFormattedShort = computed(() => {
  return moment(date.value).format('dddd, MMMM D YYYY')
});

const dateFormattedLong = computed(() => {
  return moment(date.value).format('dddd, MMMM D HH:mm')
});
</script>
