// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'VNPN Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern full-stack web application using Vue 3, Nuxt 3, Pinia, and Nitro.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
