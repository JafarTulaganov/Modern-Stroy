<template>
  <div id="navbar" class="wrap">
    <div class="container">
      <div class="left">
        <div class="brand">
          <NuxtLink to="/">
            <img class="white" src="@/assets/img/logo/brand.svg" alt="" />
            <img src="@/assets/img/logo/black.svg" alt="" class="black" />
            <span> {{ $store.state.translations['main.title-short'] }} </span>
          </NuxtLink>
        </div>
        <div class="links">
          <ul>
            <li>
              <NuxtLink to="/" class="link">
                {{ $store.state.translations['main.main'] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="link">
                {{ $store.state.translations['main.about'] }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/media" class="link">
                {{ $store.state.translations['main.gallery'] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacts" class="link">
                {{ $store.state.translations['main.contacts'] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="lang">
          <button class="current">
            {{ $i18n.locale }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M17.4166 7.79199L11 14.2087L4.58331 7.79199"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="drop">
            <nuxt-link :to="switchLocalePath('ru')">{{
              $store.state.translations['main.russian']
            }}</nuxt-link>
            <nuxt-link :to="switchLocalePath('uz')">{{
              $store.state.translations['main.uzbek']
            }}</nuxt-link>
            <!-- <nuxt-link :to="switchLocalePath('en')">English</nuxt-link> -->
          </div>
        </div>
        <div class="num">
          <a :href="`tel:${$store.state.translations['main.numero']}`">{{
            $store.state.translations['main.numero']
          }}</a>
        </div>
        <div class="button">
          <NuxtLink to="/contacts">{{
            $store.state.translations['main.order-call']
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll', 'drop')
      } else {
        navbar.classList.remove('scroll', 'drop')
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },
}
</script>

<style scoped>
.wrap {
  padding: 24px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 99;
  transition: 0.4s;
}
.wrap.scroll {
  padding: 16px;
  background: white;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
}

.wrap.scrolled {
  background: white;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  gap: 70px;
}
.links ul {
  display: flex;
  align-items: center;
  gap: 48px;
}
.brand img {
  width: 100%;
  max-width: 80px;
  height: 60px;
  object-fit: contain;
}
.link {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.link:hover {
  text-decoration: none;
}
.right {
  display: flex;
  align-items: center;
  gap: 32px;
}
.lang {
  display: flex;
  align-items: center;
  gap: 48px;
  padding-right: 24px;
  position: relative;
}
.lang button {
  display: flex;
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  align-items: center;
  gap: 12px;
  text-transform: capitalize;
}

.lang .drop {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 100px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.lang:hover .drop {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.lang a {
  display: flex;
  color: var(--blue);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  font-family: var(--blue);
  line-height: 150%;
  align-items: center;
  gap: 12px;
  text-transform: capitalize;
}
.lang svg path {
  stroke: white;
}
.scroll .lang svg path,
.scrolled .lang svg path {
  stroke: var(--black);
}
.scroll .num a,
.scrolled .num a {
  color: var(--golden) !important;
}
.num a {
  color: var(--golden);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.num a:hover {
  text-decoration: none;
}
.stick {
  height: 38px;
  width: 1px;
  background: white;
}
.black {
  display: none;
}
.scroll .white,
.scrolled .white {
  display: none;
}
.scroll .black,
.scrolled .black {
  display: flex;
}
.scroll .link,
.scroll .lang button,
.scroll .num a,
.scrolled .link,
.scrolled .lang button,
.scrolled .num a {
  color: var(--black);
}
.scroll .stick,
.scrolled .stick {
  background: var(--black);
}
.button a {
  border-radius: 4px;
  background: var(--blue, #04084f);
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding: 10px 26px;
}
.brand a {
  display: flex;
  align-items: center;
  gap: 14px;
}
.brand a:hover {
  text-decoration: none;
}
.brand span {
  white-space: nowrap;
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.scroll .brand span,
.scrolled .brand span {
  color: var(--black);
}
</style>
