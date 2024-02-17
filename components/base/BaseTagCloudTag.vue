<template>
  <div
    class="tag hover:translate -mb-[1px] inline-flex min-h-10 transform cursor-default items-center justify-center gap-2 rounded-full border border-brand-dark bg-white px-6 text-sm font-normal text-brand-dark transition-all hover:z-10 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-2xl lg:min-h-14 lg:px-8"
  >
    <div class="h-3 w-3 shrink-0 rounded-full bg-brand-dark"></div>
    <span>{{ props.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { TagCloudTag } from "~/types/TagCloudTag";

const props = withDefaults(defineProps<TagCloudTag>(), {
  name: "",
});
</script>
