<template>
  <router-link :to="to">
    <button :class="buttonClasses" class="text-sm px-6 py-3 lg:px-8 lg:py-4 transition-all">
      <slot></slot>
    </button>
  </router-link>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    width: {
      type: String,
      default: 'default'
    },
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const buttonClasses = computed(() => {
      let buttonClasses = [];
      switch (props.variant) {
        case 'primary':
          buttonClasses.push('bg-brand-blue text-white text-white rounded-full')
          break
        case 'secondary':
          buttonClasses.push('bg-gray-500 text-white py-2 px-4 rounded')
          break
        default:
          buttonClasses.push('py-2 px-4 rounded')
      }

      switch (props.width) {
        case 'primary':
          buttonClasses.push('bg-brand-blue text-white text-white rounded-full')
          break
        case 'secondary':
          buttonClasses.push('bg-gray-500 text-white py-2 px-4 rounded')
          break
        default:
          buttonClasses.push('min-w-44')
      }

      return buttonClasses.join(' ');
    })

    return {
      buttonClasses,
    }
  },
})
</script>
