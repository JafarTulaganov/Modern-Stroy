<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <NuxtLink to="/">
          <img src="@/assets/img/logo/black.svg" alt="" />
        </NuxtLink>

        <div class="lang">
          <p>
            Рус
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
            >
              <path
                d="M10.6673 0.666992L6.00065 5.33366L1.33398 0.666992"
                stroke="#020105"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="search">
          <input type="text" placeholder="Поиск" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_868_17249)">
              <path
                d="M18.3327 18.3336L16.666 16.667M1.66602 9.58366C1.66602 5.2114 5.21043 1.66699 9.58268 1.66699C13.9549 1.66699 17.4993 5.2114 17.4993 9.58366C17.4993 13.9559 13.9549 17.5003 9.58268 17.5003C5.21043 17.5003 1.66602 13.9559 1.66602 9.58366Z"
                stroke="#15132E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_868_17249">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div @click="menuHandle = !menuHandle" class="burger">
          <button></button>
        </div>
      </div>
    </div>

    <div :class="{ show: menuHandle }" class="menu">
      <div class="container">
        <div class="header">
          <div @click="menuHandle = false" class="x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M13.2287 1.74609L0.769531 14.2053"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.2313 14.2134L0.761719 1.74121"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4>Меню</h4>
          <div></div>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <NuxtLink to="/">Главная</NuxtLink>
            </li>
            <li>
              <button>Комплексы</button>
              <ul class="complexes">
                <li v-for="item in complexes" :key="item.id">
                  <NuxtLink :to="`/complex/${item.slug}`">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/about">О компании</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/media">Галерея</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacts">Контакты</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import complexesApi from '@/api/complexes'

export default {
  data() {
    return {
      menuHandle: false,
      complexes: [],
    }
  },
  async fetch() {
    const complexes = await complexesApi.getComplexes(this.$axios)

    this.complexes = complexes
  },
  mounted() {},
  watch: {
    $route() {
      this.menuHandle = false
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 12px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: white;
  -webkit-box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
}
.top img {
  width: 60px;
  object-fit: contain;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.bottom {
  display: flex;
  align-items: center;
  gap: 12px;
}
.search {
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  width: 80%;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search input {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: var(--grey-40, #9a999b);
}
.burger {
  width: 20%;
  background: var(--blue);
  height: 46px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.burger button {
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: white;
  position: relative;
}
.burger button::after {
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: white;
  position: relative;
  position: absolute;
  top: 6px;
  left: 0;
  content: '';
}
.burger button::before {
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: white;
  position: relative;
  position: absolute;
  top: -6px;
  left: 0;
  content: '';
}
.lang p {
  color: var(--Qora, #020105);
  text-align: center;
  font-family: var(--medium);
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: 0.4s;
}
.menu.show {
  transform: translateX(0);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 56px 0;
}
.header h4 {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor-md);
  margin: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
}
.header div {
  width: 14px;
}
.menu ul {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.menu a,
.menu button {
  padding: 14px 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  width: 100%;
  color: #06182c;
  font-family: var(--decor);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
}
.menu a:hover {
  text-decoration: none;
}
.menu ul li:last-child a {
  border-bottom: none;
}
.complexes {
  padding-left: 16px;
}
.complexes a {
  border: none;
  font-size: 14px;
  padding: 8px 0;
}
</style>
