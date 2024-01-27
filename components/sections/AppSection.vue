<script setup lang="ts">
const props = defineProps(['scrollSpyName'])

</script>

<template>
  <div class="rounded-t-[2em] -mt-[2em] pt-[2em] pb-[4em] relative first:mt-0">
    <div class="scrollSpyHook" :id="scrollSpyName"></div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.app-section {

  .scrollSpyHook {
    @apply bg-transparent text-transparent text-white -mt-[4em] absolute;
  }
}
</style>
