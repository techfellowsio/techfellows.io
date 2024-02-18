<template>
  <div class="w-full overflow-hidden">
    <div class="-mx-8">
      <div
        class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-scroll"
      >
        <div
          class="relative grid w-full shrink-0 snap-center scroll-ml-0 content-center md:w-[calc(50%)] md:snap-start md:border-r-2 md:border-gray-200"
          v-for="testimonial in testimonialStore.testimonials"
          :key="testimonial.name"
        >
          <div class="px-8">
            <Testimonial v-bind="testimonial"></Testimonial>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="overflow-hidden md:-mx-16">-->
    <!--      <swiper-container-->
    <!--        claas="items-stretch"-->
    <!--        :pagination="false"-->
    <!--        :breakpoints="breakPoints"-->
    <!--      >-->
    <!--        <swiper-slide-->
    <!--          class="grid min-h-60 content-center border-brand-gray-200 md:border-r-2 md:px-16"-->
    <!--          v-for="testimonial in testimonialStore.testimonials"-->
    <!--          :key="testimonial.name"-->
    <!--        >-->
    <!--          <Testimonial v-bind="testimonial"></Testimonial>-->
    <!--        </swiper-slide>-->
    <!--      </swiper-container>-->
    <!--    </div>-->
  </div>
</template>

<script setup>
// import { register } from "swiper/element/bundle";
import { useTestimonialsStore } from "~/stores/testimonialsStore.ts";

// register();

const testimonialStore = useTestimonialsStore();

// const spaceBetween = 64;
// const breakPoints = {
//   0: {
//     slidesPerView: 1,
//     spaceBetween: 64,
//   },
//   768: {
//     slidesPerView: 2,
//     spaceBetween: 64,
//   },
// };
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar ::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
