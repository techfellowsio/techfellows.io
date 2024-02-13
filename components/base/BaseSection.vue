<template>
  <div class="section">
    <div class="scrollSpyHook bg-transparent text-transparent text-white -mt-[4em] absolute" :id="scrollSpyName"
         v-if="scrollSpyName"></div>
    <div class="container grid gap-content">
      <div v-if="$slots.header">
        <slot name="header">
          {{ $slots.header.title }}
        </slot>
      </div>
      <slot name="default" v-bind="$slots.default">asdsa</slot>
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
      return 'section-dark'
    case 'blue':
      return 'section-blur'
    case 'gray':
      return 'section-gray'
    default:
      return 'bg-white'
  }
})
</script>
