// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/style/main.css',
  ],
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        semi: true,
        arrowParens: true,
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
