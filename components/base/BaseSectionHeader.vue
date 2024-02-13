<template>
    <div class="md:grid gap-app grid-cols-2">
      <div>
        <BaseBadge v-bind="badge" v-if="badge"/>
        <h2 class="md:mb-0" :class="{'mt-4':badge}">{{ title }}</h2>
      </div>
      <div class="grid place-content-end md:pt-20">
        <slot>
          {{ description }}
        </slot>
      </div>
    </div>
</template>

<script setup lang="ts">
import type {BaseBadge} from "~/components/base/BaseBadge.vue";

export interface SectionHeader {
  badge?: BaseBadge,
  title: string,
  description?: string
}

const props = withDefaults(defineProps<SectionHeader>(), {})
</script>
