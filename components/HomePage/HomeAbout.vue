<template>
  <div class="wrap">
    <div class="container">
      <div class="rower">
        <img class="vector" src="@/assets/img/subtract.svg" alt="" />

        <div class="left">
          <h4>{{ $store.state.translations['main.about-title'] }}</h4>
          <p>
            {{ $store.state.translations['main.about-txt-1'] }}
          </p>
          <p>
            {{ $store.state.translations['main.about-txt-2'] }}
          </p>
        </div>
        <div class="right">
          <div class="brand">
            <img src="@/assets/img/logo/black.svg" alt="" class="black" />
            <span> {{ $store.state.translations['main.title-short'] }} </span>
          </div>
        </div>
      </div>
      <div class="complex">
        <h4>{{ $store.state.translations['main.complex-title'] }}</h4>
        <div class="items">
          <div v-for="item in complexes" :key="item.id" class="item">
            <NuxtLink :to="`/complex/${item.slug}`">
              <img :src="item.image" alt="" class="pic" />
              <div class="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="11.5"
                    r="3"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M21 11.3889C21 16.2981 15.375 22.5 12 22.5C8.625 22.5 3 16.2981 3 11.3889C3 6.47969 7.02944 2.5 12 2.5C16.9706 2.5 21 6.47969 21 11.3889Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
                <p>{{ item.area }}</p>
              </div>
              <div class="size">
                <p>{{ item.size }}</p>
              </div>
              <div class="name">
                <p>{{ item.title }}</p>
              </div>
              <div class="name-2">
                <p>{{ item.title }}</p>
              </div>
              <div class="price">
                <p>{{ item.price }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['complexes'],
  mounted() {},
}
</script>

<style scoped>
.wrap {
  padding: 100px 0 120px 0;
}
.rower {
  display: grid;
  grid-template-columns: 6fr 4fr;
  position: relative;
  padding-bottom: 300px;
}
.left h4 {
  color: var(--golden);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 24px;
}
.left p {
  color: var(--grey);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
  max-width: 759px;
}
.right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.brand {
  position: relative;
  z-index: 2;
}
.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
.brand span {
  font-family: 'Interfaces-500';
  color: #2d3252;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 56.914px */
}
.black {
  height: 112px;
}
.vector {
  position: absolute;
  top: -32px;
  right: 0;
  width: 35%;
  transform: translateX(-64px);
  z-index: -2;
  pointer-events: none;
}
.complex {
  margin-top: -200px;
}
.complex h4 {
  color: #020105;
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
}
.items {
  display: flex;
  gap: 20px;
}
.item {
  height: 685px;
  width: 33%;
  transition: 1s;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.item a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.item a::after {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(4, 8, 79, 0.24) 0%,
    rgba(4, 8, 79, 0) 51.04%,
    rgba(4, 8, 79, 0.56) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 1;
}
.item:hover {
  width: 90%;
}
.pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.name {
  color: var(--white, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  z-index: 9;
  position: absolute;
  bottom: 40px;
  left: 40px;
  writing-mode: vertical-lr;
}
.name-2 {
  white-space: nowrap;
  color: var(--white, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  z-index: 9;
  position: absolute;
  bottom: 40px;
  left: 40px;
  transition: 1s;
  opacity: 0;
  visibility: hidden;
}
.item:hover .name {
  opacity: 0;
  visibility: hidden;
}
.item:hover .name-2 {
  opacity: 1;
  visibility: visible;
}
.location {
  border-radius: 62px;
  background: var(--blue, #04084f);
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  z-index: 2;
  top: 35px;
  left: 40px;
  padding: 12px 24px;
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
}
.size {
  position: absolute;
  bottom: 106px;
  left: 40px;
  z-index: 2;
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
}
.price {
  color: var(--white, #fff);
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  position: absolute;
  bottom: 45px;
  right: 40px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
}
.item:hover .price,
.item:hover .location,
.item:hover .size {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  .rower {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 250px;
  }
  .vector {
    display: none;
  }
  .left h4 {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 120%;
  }
  .left p {
    font-size: 14px;
    line-height: 140%;
    max-width: 90%;
    margin-bottom: 12px;
  }
  .black {
    height: 70px;
  }
  .brand span {
    font-size: 24px;
  }
  .right {
    margin-top: 32px;
    justify-content: flex-start;
  }
  .complex h4 {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 120%;
  }
  .items {
    flex-direction: column;
  }
  .item {
    height: 320px;
    width: 100%;
    border-radius: 14px;
  }
  .name {
    display: none;
  }
  .item:hover {
    width: 100%;
  }
  .location {
    opacity: 1;
    visibility: visible;
    left: 12px;
    top: 12px;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 12px;
  }
  .size {
    opacity: 1;
    visibility: visible;
    left: 12px;
    bottom: 70px;
  }
  .name-2 {
    opacity: 1;
    visibility: visible;
    left: 12px;
    font-size: 24px;
  }
  .price {
    opacity: 1;
    visibility: visible;
    left: 12px;
    right: auto;
    bottom: 12px;
  }
}
</style>
