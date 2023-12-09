<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">{{ title }}</h4>
      <div class="crumbs">
        <NuxtLink to="/" class="last">
          {{ $store.state.translations['main.main'] }}
        </NuxtLink>
        <div class="stick">/</div>
        <p class="current">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style scoped>
.wrap {
  padding-top: 92px;
  min-height: 430px;
  background: url(@/assets/img/top.png) center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: var(--white, #fff);
  text-align: center;
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin: 0 auto 24px auto;
  max-width: 806px;
}
.crumbs {
  display: flex;
  align-items: center;
  gap: 12px;
}
.current,
.last {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.stick {
  color: white;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 142px;
    min-height: 302px;
  }
  .title {
    font-size: 32px;
    margin-bottom: 12px;
  }
}
</style>
