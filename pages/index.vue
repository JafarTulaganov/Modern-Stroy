<template>
  <div>
    <HomeHero />
    <HomeAbout :complexes="complexes" />
    <HomeComplex :complexes="complexes" :houses="houses" />
    <HomeForm />
    <HomeGallery :gallery="gallery" />
  </div>
</template>

<script>
import complexesApi from '@/api/complexes'
import housesApi from '@/api/houses'
import mediaApi from '@/api/media'

import HomeHero from '@/components/HomePage/HomeHero.vue'
import HomeAbout from '@/components/HomePage/HomeAbout.vue'
import HomeComplex from '@/components/HomePage/HomeComplex.vue'
import HomeForm from '@/components/HomePage/HomeForm.vue'
import HomeGallery from '@/components/HomePage/HomeGallery.vue'

export default {
  name: 'IndexPage',

  components: {
    HomeHero,
    HomeAbout,
    HomeComplex,
    HomeForm,
    HomeGallery,
  },

  async asyncData({ $axios }) {
    const complexes = await complexesApi.getComplexes($axios)
    const houses = await housesApi.getHouses($axios)
    const gallery = await mediaApi.getGallery($axios)

    return {
      complexes,
      houses,
      gallery,
    }
  },
}
</script>
