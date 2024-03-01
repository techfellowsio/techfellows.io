<template>
  <div class="space-y-16 space-y-8">
    <div class="gap-app flex flex-col md:flex-row">
      <div class="space-y-12 md:w-1/2 md:max-w-[457px]">
        <h1 class="mb-4">
          <slot name="headerText" />
        </h1>
        <slot name="headerLeadText" />
        <div>
          <slot name="buttonArea" />
        </div>
        <BaseVideoHolder
          v-bind="videoHolder"
          @click="displayVideo = !displayVideo"
          class="cursor-pointer transition-all hover:drop-shadow-xl"
        ></BaseVideoHolder>
        <TechFellowsInNumbers class="md:hidden" />
      </div>
      <div class="hidden flex-grow flex-col gap-16 md:flex">
        <div class="aspect-[63/50] overflow-hidden rounded-app">
          <NuxtPicture
            :src="imagePath"
            class=":*object-cover *:h-ful *:w-full *:object-center"
          />
        </div>
        <div>
          <TechFellowsInNumbers v-bind="techFellowNumbers" />
        </div>
      </div>
    </div>
    <BaseHeroVideoPlayer v-if="displayVideo" v-bind="videoHolder.videoLink" />
  </div>
</template>

<script setup lang="ts">
import type { VideoHolder } from "~/components/base/BaseVideoHolder.vue";
import type { TechFellowsNumbers } from "~/components/TechFellowsInNumbers.vue";
import BaseHeroVideoPlayer from "~/components/base/BaseHeroVideoPlayer.vue";

export interface BaseHero {
  imagePath: string;
  videoHolder: VideoHolder;
  techFellowNumbers: TechFellowsNumbers;
}
const displayVideo = ref(false);

const props = withDefaults(defineProps<BaseHero>(), {
  imagePath: undefined,
});
</script>
