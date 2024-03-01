<template>
  <div
    class="transform overflow-hidden transition-all"
    :class="{ 'max-h-96': isVisible, 'max-h-0': !isVisible }"
    v-if="notification"
  >
    <div class="relative bg-brand-blue text-white transition-all">
      <a
        @click="isVisible = false"
        v-if="!notification.url"
        class="absolute right-2 top-2 z-10 block h-6 w-6 rounded-full bg-brand-dark p-0.5"
        title="close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
      <div class="container relative flex py-4">
        <div class="flex w-full items-center justify-center gap-2">
          <div>
            <h4
              class="mb-0 mr-2 inline-block text-base text-white"
              v-if="notification.title"
            >
              {{ notification.title }}
            </h4>
            <p
              class="my-0 inline-block text-balance text-sm"
              v-if="notification.text"
            >
              {{ notification.text }}
            </p>
          </div>
          <a
            v-if="notification.url"
            :href="notification.url"
            :title="'adasdasds'"
            class="button button-primary button-secondary button-sm shrink-0 px-2"
            @click="isVisible = false"
            >Explore more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const notification = useNotificationsStore().getNotification;
let isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 2000);
});
</script>
