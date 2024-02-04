<template>
  <div class="rounded-t-app-section py-32 pb-48 -mt-16 relative " :class="elementClasses">
    <div class="scrollSpyHook bg-transparent text-transparent text-white -mt-[4em] absolute" :id="scrollSpyName"
         v-if="scrollSpyName"></div>
    <div class="container grid gap-content">
      <div v-if="$slots.header">
        <slot name="header">
          {{ $slots.header.title }}
        </slot>
      </div>
      <slot name="default" v-bind="$slots.default"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

export interface BaseSection {
  scrollSpyName?: string;
  variant?: 'dark' | 'gray' | 'white' | 'blue'
}

const props = withDefaults(defineProps<BaseSection>(), {
  variant: 'white'
})

const elementClasses = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'bg-brand-dark text-white'
    case 'blue':
      return 'bg-brand-blue text-white'
    case 'gray':
      return 'bg-brand-gray'
    default:
      return 'bg-white'
  }
})
</script>
