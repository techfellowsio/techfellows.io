<template>
  <div class="break-inside-avoid-column p-12 relative rounded-app-sm panel" :class="paneVariant">
    <div class="w-[75px] md:w-[110px] aspect-square bg-brand-gray right-0 top-0 absolute rounded-app-sm"
         v-if="hasDecoration">
      <BoxWithArrow class="w-[76.364%] right-0 top-0 absolute "/>
    </div>
    <div class="h-12 text-brand-dark mb-12" v-if="icon">
      <img :src="icon" class="h-full w-auto" :alt="title"/>
    </div>
    <slot>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {withDefaults} from "vue";
import BoxWithArrow from "~/components/icon/BoxWithArrow.vue";

interface BasePanel {
  icon?: string;
  title?: string;
  description?: string;
  variant?: 'white' | 'transparent' | 'dark' | 'blue' | 'gray';
  hasDecoration?: boolean
}

const props = withDefaults(defineProps<BasePanel>(), {
  icon: "",
  title: "Techfellow Community",
  description: "Discover the essence of our community and its purpose.",
  hasDecoration: false
});

const paneVariant = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'bg-brand-dark text-white'
    case 'blue':
      return 'bg-brand-blue text-white'
    case 'gray':
      return 'bg-brand-gray'
    case 'transparent':
      return 'bg-transparent'
    default:
      return 'bg-white'
  }
})

</script>

<style lang="scss">

</style>
