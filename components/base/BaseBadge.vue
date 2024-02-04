<template>

  <div :class="elementClasses"
       class="text-base px-6 inline-flex items-center h-12 lg:px-8 lg:h-16 transition-all rounded-full text-center">
    <slot>
      {{title}}
    </slot>
  </div>

</template>

<script setup lang="ts">

export interface BaseBadge {
  variant?: 'light' | 'dark',
  title: string
}

const props = withDefaults(defineProps<BaseBadge>(), {
  variant: 'light'
})

const elementClasses = computed(() => {
  switch (props.variant) {
    case 'light':
      return 'bg-white text-brand-dark'
    case 'dark':
      return 'bg-brand-dark text-white'
  }
})

</script>
