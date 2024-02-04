<template>
  <div class="flex flex-col md:flex-row gap-app">
    <div class="md:max-w-[457px] md:w-1/2 space-y-12">
      <h1 class="mb-4">
        <slot name="headerText"/>
      </h1>
      <slot name="headerLeadText"/>
      <div>
        <slot name="buttonArea"/>
      </div>
      <BaseVideoHolder v-bind="videoHolder"></BaseVideoHolder>
      <TechFellowsInNumbers class="md:hidden"/>
    </div>
    <div class="flex-grow hidden md:flex gap-16 flex-col">
      <div class="overflow-hidden aspect-[63/50] rounded-app">
        <NuxtPicture :src="imagePath" class="*:object-center :*object-cover *:w-full *:h-ful"/>
      </div>
      <div>
        <TechFellowsInNumbers v-bind="techFellowNumbers"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {BaseVideoHolder} from "~/components/base/BaseVideoHolder.vue";
import type {TechFellowsNumbers} from "~/components/TechFellowsInNumbers.vue";

export interface BannerHero {
  imagePath: string;
  videoHolder: BaseVideoHolder;
  techFellowNumbers: TechFellowsNumbers
}

const props = withDefaults(defineProps<BannerHero>(), {
  imagePath: undefined,
})
</script>
