<template>
  <BasePageHeader />
  <NuxtPage id="main-content" />
  <BasePageFooter />
  <DevOnly>
    <div
      class="fixed bottom-16 right-16 flex aspect-square items-center justify-around rounded-full bg-yellow-400 p-2 text-4xl font-bold leading-none text-orange-600 drop-shadow"
    >
      <div class="md:hidden">sm</div>
      <div class="hidden md:max-lg:block">md</div>
      <div class="hidden lg:max-xl:block">lg</div>
      <div class="hidden xl:max-2xl:block">xl</div>
      <div class="hidden 2xl:block">2xl</div>
    </div>
  </DevOnly>
</template>
<script setup lang="ts"></script>
