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
      script: [
        {
          children:
            '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "msaq1xstg4");',
        },
        {
          src: "/scm/scm.js",
          async: true,
        },
        {
          src: "/scm/scm-init.js",
          async: true,
        },
      ],
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
        {
          rel: "stylesheet",
          href: "/scm/scm.css",
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
