<template>
  <div :class="elementClasses" class="badge">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>

<script setup lang="ts">
export interface BaseBadge {
  variant?: "light" | "dark" | "gray";
  title: string;
}

const props = withDefaults(defineProps<BaseBadge>(), {});

const elementClasses = computed(() => {
  switch (props.variant) {
    case "light":
      return "badge-light";
    case "dark":
      return "badge-dark";
    case "gray":
      return "badge-gray";
  }
});
</script>
