<template>
  <div class="tag-could flex flex-wrap" v-if="(tags || []).length">
    <BaseTagCloudDecoration />
    <BaseTagCloudTag v-for="tag in tags" :key="tag.name" :name="tag.name" />
    <BaseTagCloudDecoration />
  </div>
</template>
<script setup lang="ts">
import type { TagCloud } from "~/stores/manifestoTagsStore";
import BaseTagCloudDecoration from "~/components/base/BaseTagCloudDecoration.vue";
import BaseTagCloudTag from "~/components/base/BaseTagCloudTag.vue";

const props = withDefaults(defineProps<TagCloud>(), {});
</script>
