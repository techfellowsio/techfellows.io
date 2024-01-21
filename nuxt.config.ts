// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'cloudflare-pages'
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: ""
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;600&display=swap",

                }
            ]
        }
    },
    css: [
        '~/assets/app.scss'
    ],
    devtools: {enabled: true},
    modules: ['@nuxt/image', '@nuxtjs/tailwindcss']
})
