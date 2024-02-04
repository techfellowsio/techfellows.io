<template>
  <BasePageHeader/>
  <NuxtPage/>
  <div>
    footer
    <DevOnly>
      <div
          class="bg-yellow-400 text-orange-600 flex aspect-square text-4xl p-2 items-center justify-around leading-none rounded-full drop-shadow fixed bottom-16 right-16 font-bold">
        <div class="md:hidden">sm</div>
        <div class="hidden md:max-lg:block">md</div>
        <div class="hidden lg:max-xl:block">lg</div>
        <div class="hidden xl:max-2xl:block">xl</div>
        <div class="hidden 2xl:block">2xl</div>
      </div>
    </DevOnly>
  </div>
</template>
<script setup lang="ts"></script>
