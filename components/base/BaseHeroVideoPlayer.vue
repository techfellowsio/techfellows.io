<template>
  <div id="heroVideoPlayer">
    <iframe
      v-if="type === 'youtube'"
      class="aspect-video h-auto w-full border-0"
      width="560"
      height="315"
      :src="url"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script setup lang="ts">
import type { VideoLink } from "~/components/base/BaseVideoHolder.vue";
defineProps<VideoLink>();
</script>
