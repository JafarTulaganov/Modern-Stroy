<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">{{ $store.state.translations['main.gallery'] }}</h4>
      <div ref="big" class="swiper big">
        <div class="swiper-wrapper">
          <div
            v-for="item in complex.images"
            :key="item.id"
            class="swiper-slide"
          >
            <img :src="item.image" alt="" class="pic" />
          </div>
        </div>
      </div>
      <div ref="small" class="swiper small">
        <div class="swiper-wrapper">
          <div
            v-for="image in complex.images"
            :key="image.id"
            thumbsSlider=""
            class="swiper-slide"
          >
            <img :src="image.image" alt="" class="pic" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['complex'],
  mounted() {
    console.log(this.complex)

    const swiper = new Swiper(this.$refs.small, {
      slidesPerView: 4,
      spaceBetween: 16,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1024: {
          slidesPerView: 8,
        },
      },
    })
    new Swiper(this.$refs.big, {
      slidesPerView: 1,
      spaceBetween: 24,
      thumbs: {
        swiper: swiper,
      },
      speed: 1000,
    })
  },
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
  padding: 0 0 120px 0;
}
.title {
  text-align: center;
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 40px;
}
.big {
  margin-bottom: 24px;
  overflow: visible !important;
}
.big .pic {
  width: 100%;
  height: 821px;
  object-fit: cover;
  border-radius: 48px;
}
.small .pic {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 16px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 0 0 48px 0;
  }
  .title {
    font-size: 28px;
    line-height: 140%;
    margin-bottom: 20px;
  }
  .big .pic {
    height: 320px;
    border-radius: 18px;
  }
  .small .pic {
    height: 70px;
    border-radius: 10px;
  }
  .big {
    margin-bottom: 16px;
  }
}
</style>
