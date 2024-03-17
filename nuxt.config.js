const siteUrl = "gaucoffee.com"
const baseUrl = "https://gaucoffee.com/"
const fullUrl = "https://admin.gaucoffee.com/"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'vi_VN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui, web9_user-scalable=0' },
      { name: 'Language', content: "vi" },
      { name: 'revisit-after', content: "1 days" },
      { property: 'og:locale', content: 'vi_VN' },
      { name: 'Copyright', content: 'copyright © 2024 by ' + siteUrl },
      { name: 'author', content: siteUrl },
      { name: 'Generator', content: siteUrl },
      //{ name: 'google-site-verification', content: 'QU07G4foyisFlGIcgB46lNbnzl06goC_Q6WkZBC79yY' },
    ],
    link: [
      { rel: 'alternate', media: 'handheld', href: baseUrl },
      { rel: 'shortcut icon', href: baseUrl + 'favicon.ico' }
    ],
    //__dangerouslyDisableSanitizers: ['script'],
    //script: [
    //  {
    //    src: "https://www.googletagmanager.com/gtag/js?id=G-3TRH3KSGZE",
    //    async: true
    //  },
    //  {
    //    innerHTML: `
    //       window.dataLayer = window.dataLayer || [];
    //        function gtag(){dataLayer.push(arguments);}
    //        gtag('js', new Date());

    //        gtag('config', 'G-3TRH3KSGZE');
    //    `,
    //    type: 'text/javascript',
    //    charset: 'utf-8'
    //  }
    //]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css", "@/assets/css/animate.css", "@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/main.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@kimyvgy/nuxt-page-cache',
  ],
  image: {
    quality: 50,
    format: ['webp']
  },
  cache: {
    enabled: process.env.NODE_ENV === 'production',
    cacheStatusHeader: 'x-cache-status',
    version: "1.0.0",
    useHostPrefix: false,
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  bridge: true,
  env: {
    baseUrl: baseUrl,
    graphUrl: fullUrl + 'graphql',
  }
}
