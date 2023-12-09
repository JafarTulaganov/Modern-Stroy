<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">{{ $store.state.translations['inner.we_rent'] }}</h4>
      <p class="sub">
        {{ $store.state.translations['inner.rent_txt'] }}
      </p>
      <button>{{ $store.state.translations['inner.give_rent'] }}</button>
    </div>
    <!-- <img src="@/assets/img/big.png" alt="" class="big" /> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  position: relative;
  min-height: 1100px;
  background: url(@/assets/img/big.png) bottom no-repeat;
  background-size: contain;
  margin-bottom: 120px;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  margin-bottom: 24px;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 48px */
  text-transform: uppercase;
}
.sub {
  color: #7c6f62;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  max-width: 800px;
  margin-bottom: 40px;
}
button {
  color: var(--white, #fff);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  border-radius: 8px;
  background: var(--gold-yellow-hello, #c29133);
  padding: 18px 70px;
}
.big {
  width: 100%;
  max-height: none;
  bottom: 0;
  object-fit: contain;
  position: absolute;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
    margin-bottom: 0;
    min-height: 550px;
  }
  .title {
    font-size: 28px;
    margin-bottom: 12px;
  }
  .sub {
    font-size: 16px;
    margin-bottom: 20px;
  }
  button {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
