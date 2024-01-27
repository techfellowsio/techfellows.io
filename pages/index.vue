<script setup lang="ts">
import AppSection from "~/components/sections/AppSection.vue";
import AppButton from "~/components/elements/AppButton.vue";
import AppBadge from "~/components/elements/AppBadge.vue";

const route = useRoute()
</script>
<template>
  <div>
    <AppSection>
      <h1>Header 1 - Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ultrices mauris.</p>

      <h2>Header 2 - Lorem Ipsum</h2>
      <p>Ut et massa urna. Sed in iaculis ex, sed porttitor lacus.</p>

      <h3>Header 3 - Lorem Ipsum</h3>
      <p>Maecenas porta varius enim, quis gravida tortor sollicitudin nec.</p>

      <h4>Header 4 - Lorem Ipsum</h4>
      <p>Nulla facilisi. Mauris sed finibus sapien, vitae lacinia orci.</p>

      <h5>Header 5 - Lorem Ipsum</h5>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

      <h6>Header 6 - Lorem Ipsum</h6>
      <p>Aenean sagittis, elit vel condimentum dictum, libero justo eleifend mi, tincidunt tincidunt dui eros nec
        mi.</p>
    </AppSection>
    <AppSection class="bg-brand-gray-400">
      <h1>Buttons</h1>
      <app-button to="home" :variant="'primary'">Primary button</app-button>
      <h2>Badges</h2>
      <div class="flex flex-wrap items-center lg:-mx-4 gap-4">
        <app-badge variant="dark">Primary badge</app-badge>
        <app-badge>Primary badge</app-badge>
        <app-badge>Primary badge</app-badge>
        <app-badge>Primary badge</app-badge>
        <app-badge>Primary badge</app-badge>
      </div>
    </AppSection>
    <AppSection>
      <div class="text-3xl font-semibold underline text-blue-900">
        <h1>Nuxt Routing set up successfully!</h1>
        <p>Current route: {{ route.path }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
      </div>
    </AppSection>
  </div>
</template>
