<template>
  <div>
    <DesktopHeader class="scrolled desktop" />
    <MobileMenu class="mobile" />
    <nuxt />
    <DesktopFooter />
  </div>
</template>

<script>
import translationsApi from '@/api/lang'

import DesktopHeader from '@/components/DesktopHeader'
import DesktopFooter from '@/components/DesktopFooter'
import MobileMenu from '~/components/MobileMenu.vue'

export default {
  components: {
    DesktopHeader,
    DesktopFooter,
    MobileMenu,
  },

  data() {
    return {}
  },

  mounted() {
    this.$store.commit('reloadStore')
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    })

    await this.$store.commit('getTranslations', translations.data)
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      })

      await this.$store.commit('getTranslations', translations.data)
    },
  },

  computed: {
    currentLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style scoped>
.mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
  }
}
</style>
