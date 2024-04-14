<template>
  <div
    v-cloak
    class="fixed right-0 top-0 z-50 h-screen w-screen bg-brand-blue-900 bg-opacity-90 backdrop-blur"
    @click.prevent="closeModal"
    v-if="showModal"
  >
    <div class="container">
      <div class="grid h-screen max-h-screen content-center text-white">
        <div>
          <div
            @click="closeModal"
            class="grid content-center justify-items-end pb-2"
          >
            <button
              class="grid h-8 w-8 content-center justify-center rounded-full bg-brand-blue hover:bg-brand-blue-300 hover:text-brand-blue-800"
            >
              <svg
                width="24"
                height="24"
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
                ></path>
              </svg>
            </button>
          </div>
          <div id="heroVideoPlayer">
            <iframe
              v-if="type === 'youtube'"
              class="aspect-video h-auto w-full border-0"
              width="560"
              height="315"
              :src="url"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { VideoLink } from "~/components/base/BaseVideoHolder.vue";
import { defineProps } from "vue";

const emit = defineEmits(["modalHide"]);

const props = defineProps<{
  isVisible: boolean;
  url: string;
  type: string;
}>();

const showModal = computed(() => {
  return props.isVisible;
});

const closeModal = () => {
  emit("modalHide");
};
</script>
