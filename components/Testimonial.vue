<template>
  <div class="space-y-4">
    <div class="decoration">
      <nuxt-img
        src="/icons/quotation-marks.svg"
        alt="quotation marks icon"
        class="w-9"
      />
    </div>
    <div class="text-brand-dark">
      <h3 v-if="headline" class="text-balance text-base">{{ headline }}</h3>
      <p class="text-balance">“{{ testimonial }}”</p>
    </div>
    <div class="flex items-center justify-start gap-4 pt-8">
      <nuxt-img :src="photo" class="w-16 rounded-full" />
      <div>
        <p class="mb-0 font-bold text-brand-dark">{{ props.name }}</p>
        <p class="mb-0">{{ props.jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from "~/stores/testimonialsStore";

const props = defineProps<Testimonial>();
</script>
