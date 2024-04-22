// https://nuxt.com/docs/api/configuration/nuxt-config
import seo from "./data/seo.json";

export default defineNuxtConfig({
  site: seo,
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;600&display=swap",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
    },
  },
  css: ["~/assets/css/app.scss"],
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
  image: {
    cloudflare: {
      baseURL: "https://techfellows.io/",
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nitro-cloudflare-dev",
    "@nuxtjs/seo",
  ],
});
