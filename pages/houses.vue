<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.houses']" />
    <HomeComplex :complexes="complexes" :houses="houses" class="marginer" />
  </div>
</template>

<script>
import housesApi from '@/api/houses'
import complexesApi from '@/api/complexes'

import SiteTop from '@/components/SiteTop.vue'
import HomeComplex from '~/components/HomePage/HomeComplex.vue'
export default {
  layout: 'inner',
  components: {
    SiteTop,
    HomeComplex,
  },

  async asyncData({ $axios, query }) {
    const houses = await housesApi.getHouses($axios, { ...query })
    const complexes = await complexesApi.getComplexes($axios)

    return {
      houses,
      complexes,
    }
  },
}
</script>

<style scoped>
.marginer {
  margin-bottom: -130px;
  padding-bottom: 220px;
}
</style>
