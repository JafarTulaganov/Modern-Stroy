<template>
  <div class="wrap" v-show="complex.places.length > 0">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations['inner.near_places'] }}
      </h4>
      <div class="items">
        <div v-for="item in complex.places" :key="item.id" class="item">
          <img :src="item.image" alt="" class="pic" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['complex'],
}
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  margin-bottom: 40px;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.pic {
  width: 100%;
  height: 233px;
  border-radius: 24px;
  object-fit: cover;
  margin-bottom: 24px;
}
.item p {
  color: var(--black, #020105);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  .title {
    font-size: 32px;
    margin-bottom: 20px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .pic {
    height: 200px;
    border-radius: 18px;
    margin-bottom: 12px;
  }
}
</style>
