<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.about']" />
    <section class="chungha">
      <img src="@/assets/img/about-vector.svg" class="left" alt="" />
      <div class="box">
        <h4 class="title">{{ $store.state.translations['about.title'] }}</h4>
        <p class="txt">
          {{ $store.state.translations['about.txt-1'] }}
        </p>
        <p class="txt">
          {{ $store.state.translations['about.txt-2'] }}
        </p>
        <p class="txt">
          {{ $store.state.translations['about.txt-3'] }}
        </p>

        <div class="items">
          <img src="@/assets/img/naqsh.png" class="naqsh" alt="" />
          <div class="item">
            <p class="num">
              {{ $store.state.translations['about.num-1'] }}<span>+</span>
            </p>
            <p class="sub">{{ $store.state.translations['about.sub-1'] }}</p>
          </div>
          <div class="item">
            <p class="num">
              {{ $store.state.translations['about.num-2'] }} <span>+</span>
            </p>
            <p class="sub">{{ $store.state.translations['about.sub-2'] }}</p>
          </div>
          <div class="item">
            <p class="num">
              {{ $store.state.translations['about.num-3'] }} <span>+</span>
            </p>
            <p class="sub">{{ $store.state.translations['about.sub-3'] }}</p>
          </div>
          <div class="item">
            <p class="num">
              {{ $store.state.translations['about.num-4'] }} <span>+</span>
            </p>
            <p class="sub">{{ $store.state.translations['about.sub-4'] }}</p>
          </div>
        </div>
      </div>
      <img src="@/assets/img/about-vector.svg" class="right" alt="" />
    </section>
    <ComplexItems :complexes="complexes" />
    <section class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.527794656937!2d69.33694329515872!3d41.34661741181171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a7b3bdc4e3%3A0x47fc1b6d3c7aadb5!2z0KjQutC-0LvQsCDRg9C30LHQtdC60L7QsiDQoNCw0LnQvSDQk9C-0YHQu9C40L3Qsw!5e0!3m2!1sru!2s!4v1693378957877!5m2!1sru!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>

<script>
import SiteTop from '@/components/SiteTop.vue'
import ComplexItems from '~/components/ComplexItems.vue'

import complexesApi from '~/api/complexes'

export default {
  components: {
    SiteTop,
    ComplexItems,
  },

  layout: 'inner',

  async asyncData({ $axios }) {
    const complexes = await complexesApi.getComplexes($axios)

    return {
      complexes,
    }
  },
}
</script>

<style scoped>
.chungha {
  position: relative;
  padding: 80px 0 160px 0;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
}
.right {
  position: absolute;
  bottom: 0;
  right: 0;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  margin-bottom: 24px;
}
.txt {
  color: #7c6f62;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 24px;
}
.items {
  overflow: hidden;
  margin: 40px 0 160px 0;
  position: relative;
  border-radius: 24px;
  background: var(--apple-grey, #f5f5f7);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  min-height: 200px;
  padding: 0 56px;
}
.naqsh {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}
.num {
  color: var(--blue, #04084f);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.num span {
  color: var(--golden);
  transform: translateY(-10px);
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.box {
  max-width: 1112px;
  margin: 0 auto;
}
.map {
  margin-top: 160px;
  margin-bottom: -280px;
  position: relative;
}
.map::after {
  pointer-events: none;
  background: rgb(4, 8, 79);
  background: linear-gradient(
    0deg,
    rgba(4, 8, 79, 1) 0%,
    rgba(4, 8, 79, 1) 15%,
    rgba(0, 212, 255, 0) 100%
  );
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
}
.map iframe {
  filter: invert(90%);
  width: 100%;
  height: 774px;
}
@media screen and (max-width: 1024px) {
  .map {
    margin-top: 64px;
  }
  .box {
    padding: 0 16px;
  }
  .left,
  .right {
    display: none;
  }
  .items {
    gap: 24px;
    grid-template-columns: repeat(1, 1fr);
    margin: 32px 0 100px 0;
    padding: 24px;
  }
  .num {
    font-size: 32px;
  }
  .title {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .chungha {
    padding: 40px 0;
  }
}
</style>
