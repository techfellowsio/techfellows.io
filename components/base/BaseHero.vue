<template>
  <div>
    <div class="gap-app flex flex-col md:flex-row">
      <div class="space-y-12 md:w-1/2 md:max-w-[457px]">
        <h1 class="mb-4 text-4xl">
          <slot name="headerText" />
        </h1>
        <slot name="headerLeadText" />
        <div>
          <slot name="buttonArea" />
        </div>
        <BaseVideoHolder
          v-bind="videoHolder"
          @click="displayVideo = true"
          class="cursor-pointer transition-all hover:drop-shadow-xl"
        ></BaseVideoHolder>
        <TechFellowsInNumbers class="md:hidden" v-bind="techFellowNumbers" />
      </div>
      <div class="hidden flex-grow flex-col gap-16 md:flex">
        <div class="aspect-[63/50] overflow-hidden rounded-app">
          <NuxtPicture
            :src="imagePath"
            class=":*object-cover *:w-full *:object-center"
          />
        </div>
        <div>
          <TechFellowsInNumbers v-bind="techFellowNumbers" />
        </div>
      </div>
    </div>
    <Teleport to="#modal">
      <BaseHeroVideoPlayer
        @modal-hide="displayVideo = false"
        :is-visible="displayVideo"
        v-bind="videoHolder.videoLink"
      />
    </Teleport>
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
