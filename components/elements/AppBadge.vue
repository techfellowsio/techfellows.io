<template>

  <div :class="elementClasses" class="text-base px-6 py-3 lg:px-8 lg:py-4 transition-all rounded-full">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'

export default defineComponent({
  name: 'AppBadge',
  props: {
    variant: {
      type: String,
      default: 'white',
    },
  },
  setup(props) {
    const elementClasses = computed(() => {
      switch (props.variant) {
        case 'white':
          return 'bg-white text-brand-dark'
        case 'dark':
          return 'bg-brand-dark text-white'
        default:
          return 'py-2 px-4 rounded'
      }
    })

    return {
      elementClasses,
    }
  },
})
</script>
