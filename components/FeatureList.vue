<template>
  <ul slot="default" class="lg:columns-2 gap-6 lg:gap-12">
    <template v-if="$slots.first">
      <slot name="first"></slot>
    </template>
    <li class="list-none" v-for="item in features.items" :key="item.title">
      <BasePannel :has-decoration="true" variant="white" v-bind="item"></BasePannel>
    </li>
    <template v-if="$slots.last">
      <slot name="last"></slot>
    </template>
  </ul>
</template>
<script setup lang="ts">
import {useAboutStore} from "~/stores/auboutStore";

const features = useAboutStore()
</script>
