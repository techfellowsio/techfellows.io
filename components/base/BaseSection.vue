<template>
  <div class="section">
    <div
      class="scrollSpyHook"
      :id="scrollSpyName"
      :class="scrollSpyClass"
      v-if="scrollSpyName"
    ></div>
    <div class="gap-content container grid">
      <div v-if="$slots.header">
        <slot name="header">
          {{ $slots.header }}
        </slot>
      </div>
      <slot name="default" v-bind="$slots.default" v-if="$slots.default">
        &nbsp;
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface BaseSection {
  scrollSpyName?: string;
  scrollSpyClass?: string;
}

const props = withDefaults(defineProps<BaseSection>(), {});
</script>
