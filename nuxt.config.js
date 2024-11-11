export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'خرید مصالح ساختمانی',
    htmlAttrs: {
      lang: 'fa',
      dir:'rtl',

    },
    bodyAttrs: {
      class: 'overflow-x-html'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' سیمان شاپ تولید و توزیع کننده مصالح ساختمانی ' },
      { hid: 'og:description', name: 'og:description',property: 'og:description', content: 'یمان شاپ تولید و توزیع کننده مصالح ساختمانی ' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }, 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/bulma/css/bulma.min.css',
    '@/assets/css/style.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/animate.js', mode: 'client' },
    { src: '~/plugins/aos.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  
  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}