<template>
  <div>
    <div
      class="fixed top-0 z-50 flex min-h-16 w-full items-center bg-white bg-opacity-90 py-4 backdrop-blur-sm"
    >
      <div class="container relative">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex flex-grow items-center justify-between lg:block">
            <logo></logo>
          </div>

          <div
            :class="{
              'max-h-0 lg:max-h-[unset]': !open,
              'max-h-[1200px]': open,
            }"
            class="order-last w-full overflow-hidden transition-all duration-700 lg:order-none lg:w-auto lg:flex-grow lg:duration-0"
          >
            <ul
              class="mx-auto flex flex-col items-end space-y-1 rounded-full p-4 lg:w-fit lg:flex-row lg:justify-between lg:space-y-0 lg:bg-brand-gray lg:p-0"
            >
              <li v-for="route in routes" :key="route.name">
                <nuxt-link
                  :to="route.to"
                  class="block rounded-full px-4 py-2 text-sm text-brand-dark transition-all lg:px-8 lg:py-4"
                  :class="{
                    'bg-brand-dark text-white hover:bg-brand-dark':
                      route.active,
                    'hover:bg-brand-gray-200': !route.active,
                  }"
                  @click="open = false"
                >
                  {{ route.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="relative flex flex-grow items-center justify-end">
            <NuxtLink to="/" class="button-primary button">Let's Join</NuxtLink>
            <button
              @click="open = !open"
              class="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6 text-brand-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  v-if="!open"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                  v-else
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Logo from "~/components/Logo.vue";
import AppButton from "~/components/base/BaseButton.vue";

const open = ref(false);
const routes = reactive([
  {
    name: "Home",
    to: "#Home",
    active: false,
  },
  {
    name: "About",
    to: "#About",
    active: false,
  },
  {
    name: "Community",
    to: "#Community",
    active: false,
  },
  {
    name: "Our Vision",
    to: "#OurVision",
    active: false,
  },
  {
    name: "Blog",
    active: false,
  },
]);

let elementsToObserve: NodeListOf<Element> = ref([]);

onMounted(() => {
  setTimeout(fetchAndObserveElements, 1000);
});

/**
 * Fetch elements with class "scrollspy" and watch their position relative to viewport
 */
function fetchAndObserveElements() {
  elementsToObserve = document.querySelectorAll(".scrollSpyHook");
  observeElementPosition();
}

/**
 * Set up IntersectionObserver to watch the objects and track their position
 */
function observeElementPosition() {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        routes.filter(
          (activeRoute) =>
            (activeRoute.active = activeRoute.to === `#${entry.target.id}`),
        );
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: "0%  0px -80% 0px",
  });

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}
</script>
