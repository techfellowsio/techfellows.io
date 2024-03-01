<template>
  <a href="/#heroVideoPlayer" class="relative block max-w-[457px]">
    <svg
      width="457"
      height="280"
      viewBox="0 0 457 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="h-full w-full"
    >
      <mask
        id="mask0_9_586"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="457"
        height="281"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 16.0001C0 7.16356 7.16345 0.00012207 16 0.00012207H362C370.837 0.00012207 378 7.16356 378 16.0001V176.965C378 181.208 379.686 185.278 382.686 188.279L386.722 192.314C389.722 195.314 393.792 197 398.035 197H441C449.837 197 457 204.164 457 213V264C457 272.837 449.837 280 441 280H390C381.163 280 374 272.837 374 264V221.036C374 216.792 372.314 212.723 369.314 209.722L364.278 204.686C361.278 201.686 357.208 200 352.964 200H16C7.16345 200 0 192.837 0 184V16.0001Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_9_586)">
        <rect
          width="503"
          height="335"
          transform="matrix(-1 0 0 1 464 -32.9999)"
          fill="url(#pattern0)"
        />
        <image :href="imagePath" width="100%" height="100%" />
      </g>
      <rect x="385" y="208" width="61" height="61" rx="7" fill="white" />
      <path
        d="M410 246.391C410.005 246.68 410.087 246.962 410.236 247.206C410.386 247.451 410.598 247.648 410.849 247.778C411.1 247.923 411.383 248 411.671 248C411.96 248 412.243 247.923 412.494 247.778L424.153 240.359C424.407 240.233 424.621 240.036 424.771 239.791C424.921 239.546 425 239.262 425 238.972C425 238.683 424.921 238.399 424.771 238.154C424.621 237.908 424.407 237.711 424.153 237.586L412.494 230.223C412.243 230.077 411.96 230 411.671 230C411.383 230 411.1 230.077 410.849 230.223C410.598 230.352 410.386 230.549 410.236 230.794C410.087 231.038 410.005 231.32 410 231.609V246.391Z"
        fill="#1860FF"
        stroke="#1860FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            width="4096"
            height="2732"
            transform="matrix(0.00024414100334979594, 0, 0, 0.0003665749973151833, 0, -0.0007418960449285805)"
            xlink:href=""
          />
        </pattern>
      </defs>
    </svg>
    <div
      class="absolute bottom-0 flex h-[28%] w-[82%] items-end justify-start rounded-tr-app"
    >
      <div
        class="flex max-h-full w-full items-center justify-start gap-4 overflow-auto pb-1"
      >
        <div class="h-1 w-8 rounded-full bg-brand-blue"></div>
        <div>{{ description }}</div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
export interface VideoHolder {
  imagePath: string;
  description: string;
  videoLink: VideoLink;
}
export interface VideoLink {
  type: "youtube";
  url: string;
}
const props = withDefaults(defineProps<VideoHolder>(), {
  imagePath: "/video-image.png",
  description: "Short recap of our past meet-up",
});
</script>
