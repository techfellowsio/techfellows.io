<template>
  <div>
    <div class="grid justify-center xl:block">
      <ul class="mx-4 flex flex-col flex-wrap justify-center xl:flex-row">
        <template
          v-for="number in numbers"
          :key="[number.number, number.description].join('')"
        >
          <li
            class="flex list-none flex-col rounded-md border-[1rem] border-brand-gray p-2 font-light xl:grow xl:basis-1"
          >
            <span class="text-4xl text-brand-dark">{{ number.number }}</span>
            <span class="whitespace-nowrap">{{ number.description }}</span>
          </li>
          <li class="last:hidden">
            <div
              class="flex justify-between bg-brand-gray *:h-4 *:w-1/3 *:bg-white xl:hidden"
            >
              <div class="rounded-r-full"></div>
              <div class="rounded-l-full"></div>
            </div>
            <div
              class="hidden h-full w-4 flex-col justify-between bg-brand-gray *:h-1/3 *:w-4 *:bg-white xl:flex"
            >
              <div class="rounded-b-full"></div>
              <div class="rounded-t-full"></div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import heroBanner from "~/data/hero-banner.json";

interface TechFellowsNumber {
  number: String;
  description: String;
}

export interface TechFellowsNumbers {
  numbers?: TechFellowsNumber[];
}

// Define a default prop
const props = withDefaults(defineProps<TechFellowsNumbers>(), {
  numbers: () => heroBanner.techFellowNumbers,
});
</script>
