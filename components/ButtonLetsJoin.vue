<template>
  <a v-bind="appConfig.letsJoinButton" class="button-primary button"
    >Let's Join</a
  >
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
// console.log(appConfig.letsJoinButton.href);
</script>
