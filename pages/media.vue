<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.gallery']" />
    <section class="doughnut">
      <div class="box">
        <div class="tabs">
          <button
            v-for="button in media"
            :key="button.id"
            :class="{ active: activeTab === button.id }"
            @click="activeTab = button.id"
          >
            <span v-if="button.id == 0">
              {{ $store.state.translations['about.all-gallery'] }}
            </span>
            <span v-else>
              {{ button.title }}
            </span>
          </button>
        </div>
        <div
          v-for="element in media"
          :key="element.id"
          :class="{ active: activeTab === element.id }"
          class="items"
        >
          <div
            @click="getId(item.id)"
            v-for="item in element.media"
            :key="item.id"
            class="item"
          >
            <img v-show="item.image != null" :src="item.image" alt="" />

            <svg
              v-show="item.video != null"
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
            >
              <g filter="url(#filter0_b_1887_32626)">
                <circle
                  cx="38"
                  cy="38"
                  r="38"
                  fill="white"
                  fill-opacity="0.19"
                />
                <circle cx="38" cy="38" r="37.5" stroke="white" />
              </g>
              <path d="M46 38.5L34 45L34 32L46 38.5Z" fill="white" />
              <defs>
                <filter
                  id="filter0_b_1887_32626"
                  x="-16"
                  y="-16"
                  width="108"
                  height="108"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1887_32626"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1887_32626"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <video v-show="item.video != null" :src="item.video"></video>

            <iframe
              v-show="item.video_url != null"
              :src="item.video_url"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <div :class="{ show: modalHandle }" class="modaller">
      <div @click="modalHandle = false" class="x">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M70.3848 33.6155L33.6152 70.385M70.3848 70.3848L33.6152 33.6152"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div @click="modalHandle = false" class="space"></div>
      <div class="body">
        <img v-show="mediaId.image != null" :src="mediaId.image" alt="" />

        <video
          muted
          controls
          v-show="mediaId.video != null"
          :src="mediaId.video"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import mediaApi from '@/api/media'
import SiteTop from '~/components/SiteTop.vue'
export default {
  data() {
    return {
      modalHandle: false,
      activeTab: 1,
      mediaId: {},
    }
  },
  components: { SiteTop },
  layout: 'inner',

  watch: {
    $route() {
      this.modalHandle = false
    },
  },

  async asyncData({ $axios }) {
    const media = await mediaApi.getMedia($axios)

    return {
      media,
    }
  },

  mounted() {
    this.activeTab = this.media[0].id
  },

  methods: {
    getId(id) {
      this.mediaId = this.media
        .find((item) => item.id === this.activeTab)
        .media.find((item) => item.id === id)

      this.modalHandle = true
    },
  },
}
</script>

<style scoped>
.box {
  max-width: 1112px;
  margin: 0 auto;
  padding: 80px 0 120px 0;
}
.tabs {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 56px;
}
.tabs button {
  color: var(--grey-64, #5d5d5f);
  font-family: var(--decor);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 10px 32px;
}
.tabs button.active {
  color: var(--golden);
  border-radius: 110px;
  border: 1px solid var(--gold-yellow-hello, #c29133);
  padding: 10px 32px;
}
.items {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.items.active {
  display: grid;
}
.item {
  position: relative;
}
.item svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.item img,
.item video,
.item iframe {
  width: 100%;
  height: 248px;
  border-radius: 24px;
  object-fit: cover;
}
.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  /* transition: 0.4s; */
}
.modaller.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.body {
  max-width: 1396px;
  height: 80%;
  border-radius: 48px;
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.space {
  z-index: 1;
  background: rgba(10, 27, 51, 0.4);
  backdrop-filter: blur(12px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.body img,
.body video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.x {
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 115px;
  z-index: 2;
}
@media screen and (max-width: 1024px) {
  .box {
    padding: 40px 16px;
  }
  .tabs {
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .tabs button,
  .tabs button.active {
    padding: 12px 20px;
    border: none;
  }
  .tabs button.active {
    background: var(--golden);
    color: white;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .item img,
  .item video {
    border-radius: 18px;
    height: 220px;
  }
  .body {
    border-radius: 18px;
    height: 280px;
    max-width: 90%;
  }
  .x {
    top: 16px;
    right: 16px;
  }
  .x svg {
    width: 54px;
    height: 54px;
  }
}
</style>
