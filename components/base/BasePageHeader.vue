<script setup lang="ts">
import {onMounted, ref} from 'vue'
import Logo from "~/components/Logo.vue";
import AppButton from "~/components/base/BaseButton.vue";

const open = ref(false)
const routes = reactive([
  {
    name: 'Home',
    active: false
  },
  {
    name: 'About',
    active: false
  },
  {
    name: 'Community',
    active: false
  },
  {
    name: 'The List',
    active: false
  },
  {
    name: 'Blog',
    active: false
  },
]);

let elementsToObserve: NodeListOf<Element> = ref([]);

onMounted(() => {
  setTimeout(fetchAndObserveElements, 1000)
})

/**
 * Fetch elements with class "scrollspy" and watch their position relative to viewport
 */
function fetchAndObserveElements() {
  elementsToObserve = document.querySelectorAll('.scrollSpyHook')
  observeElementPosition();
}

/**
 * Set up IntersectionObserver to watch the objects and track their position
 */
function observeElementPosition() {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        routes.filter((activeRoute) => activeRoute.active = (activeRoute.name === entry.target.id))
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: '0%  0px -80% 0px'
  });

  elementsToObserve.forEach((element) => {
    observer.observe(element)
  })
}

</script>

<template>
  <div class="">
    <div class="fixed w-full z-50 top-0 min-h-16 py-4 flex items-center bg-white bg-opacity-90 backdrop-blur-sm ">
      <div class="container relative">
        <div class="flex justify-between items-center flex-wrap">
          <div class="flex items-center justify-between flex-grow lg:block">
            <logo></logo>
          </div>
          <Transition>
            <div :class="{'max-h-0 lg:max-h-[unset]':!open,'max-h-[1200px]':open}"
                 class="overflow-hidden transition-all duration-700 lg:duration-0 lg:flex-grow order-last w-full lg:order-none lg:w-auto">
              <ul class="flex flex-col items-end lg:justify-between lg:w-fit lg:flex-row space-y-1 lg:space-y-0 mx-auto lg:bg-brand-gray rounded-full p-4 lg:p-0">
                <li v-for="route in routes" :key="route.name">
                  <a :href="'#'+route.name"
                     class="px-4 py-2 lg:px-8 lg:py-4 block rounded-full transition-all text-brand-dark text-sm"
                     :class="{'bg-brand-dark hover:bg-brand-dark text-white':route.active, 'hover:bg-brand-gray-200':!route.active}"
                     @click="open=false;"
                  >
                    {{ route.name }}
                  </a>
                </li>
              </ul>
            </div>
          </Transition>
          <div class="flex-grow flex items-center justify-end relative">
            <NuxtLink to="/" class="button-primary button">Let's Join</NuxtLink>
            <button @click="open = !open"
                    class="inline-flex items-center justify-center p-2 rounded-md text-white lg:hidden">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"
                      v-if="!open"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" v-else/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
