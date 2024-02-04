<template>
  <div>
    <div class="grid justify-center xl:block">
      <ul class="flex justify-center mx-4 flex-wrap flex-col xl:flex-row">
        <template v-for="number in numbers"
                  :key="[number.number,number.description].join('')">
          <li class="list-none font-light flex flex-col border-[1rem] border-brand-gray rounded-md p-2 xl:basis-1 xl:grow">
            <span class="text-4xl text-brand-dark">{{ number.number }}</span>
            <span class="whitespace-nowrap">{{ number.description }}</span>
          </li>
          <li class="last:hidden">
            <div class="bg-brand-gray *:bg-white *:h-4 *:w-1/3 flex justify-between xl:hidden">
              <div class="rounded-r-full"></div>
              <div class="rounded-l-full"></div>
            </div>
            <div class="bg-brand-gray h-full w-4 *:bg-white *:h-1/3 *:w-4 justify-between flex-col hidden xl:flex">
              <div class="rounded-b-full"></div>
              <div class="rounded-t-full"></div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

interface TechFellowsNumber {
  number: String
  description: String
}

export interface TechFellowsNumbers {
  numbers?: TechFellowsNumber[]
}

// Define a default prop
const props = withDefaults(defineProps<TechFellowsNumbers>(), {
  numbers: () => [
    {
      number: '123',
      description: 'description 123'
    },
    {
      number: '456',
      description: 'description 456'
    },
    {
      number: '789',
      description: 'description 789'
    },
    {
      number: '789',
      description: 'description 789'
    }
  ]
})

</script>
