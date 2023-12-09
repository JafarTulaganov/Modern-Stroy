<template>
  <div class="master">
    <ComplexTop :complex="complex" />
    <ComplexDesc :complex="complex" />
    <ComplexGallery :complex="complex" />
    <ComplexWhat />
    <ComplexComplex :complex="complex" />
    <ComplexPlan :complex="complex" />
    <ComplexRent />
    <ComplexNearby :complex="complex" />
  </div>
</template>

<script>
import complexesApi from '@/api/complexes'

import ComplexDesc from '~/components/ComplexPage/ComplexDesc.vue'
import ComplexNearby from '~/components/ComplexPage/ComplexNearby.vue'
import ComplexPlan from '~/components/ComplexPage/ComplexPlan.vue'
import ComplexRent from '~/components/ComplexPage/ComplexRent.vue'
import ComplexTop from '~/components/ComplexPage/ComplexTop.vue'
import ComplexWhat from '~/components/ComplexPage/ComplexWhat.vue'
import ComplexComplex from '@/components/ComplexPage/ComplexComplex.vue'
import ComplexGallery from '@/components/ComplexPage/ComplexGallery.vue'

export default {
  components: {
    ComplexTop,
    ComplexDesc,
    ComplexGallery,
    ComplexRent,
    ComplexWhat,
    ComplexNearby,
    ComplexPlan,
    ComplexComplex,
  },
  layout: 'inner',
  async asyncData({ $axios, params }) {
    const complexes = await complexesApi.getComplexes($axios)
    const complex = await complexesApi.getComplex(params.slug, $axios)

    return {
      complexes,
      complex,
    }
  },
}
</script>

<style scoped>
.master {
  padding: 130px 0 0 0;
}
@media screen and (max-width: 1024px) {
  .master {
    padding: 200px 0 0 0;
  }
}
</style>
