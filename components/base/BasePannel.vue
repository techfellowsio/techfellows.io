<template>
  <div
    class="panel relative break-inside-avoid-column rounded-app-sm p-12"
    :class="paneVariant"
  >
    <div
      class="absolute right-0 top-0 aspect-square w-[75px] rounded-app-sm bg-brand-gray md:w-[110px]"
      v-if="hasDecoration"
    >
      <BoxWithArrow class="absolute right-0 top-0 w-[76.364%]" />
    </div>
    <div class="mb-12 h-12 text-brand-dark" v-if="icon">
      <img :src="icon" class="h-full w-auto" :alt="title" />
    </div>
    <slot>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import BoxWithArrow from "~/components/icon/IconBoxWithArrow.vue";

interface BasePanel {
  icon?: string;
  title?: string;
  description?: string;
  variant?: "white" | "transparent" | "dark" | "blue" | "gray";
  hasDecoration?: boolean;
}

const props = withDefaults(defineProps<BasePanel>(), {
  icon: "",
  title: "Techfellow Community",
  description: "Discover the essence of our community and its purpose.",
  hasDecoration: false,
});

const paneVariant = computed(() => {
  switch (props.variant) {
    case "dark":
      return "bg-brand-dark text-white";
    case "blue":
      return "bg-brand-blue text-white";
    case "gray":
      return "bg-brand-gray";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-white";
  }
});
</script>

<style lang="scss"></style>
