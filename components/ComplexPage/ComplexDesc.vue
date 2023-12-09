<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12 left">
          <h4>{{ $store.state.translations['inner.full_desc'] }}</h4>
          <div class="full__description" v-html="complex.desc"></div>
          <div class="items">
            <div class="item">
              <p class="name">{{ complex.area }}</p>
              <p class="sub">
                {{ $store.state.translations['inner.located_at'] }}
              </p>
            </div>
            <div class="item">
              <p class="name">{{ complex.size }}</p>
              <p class="sub">
                {{ $store.state.translations['inner.square_from'] }}
              </p>
            </div>
            <div class="item">
              <p class="name">{{ complex.price }}</p>
              <p class="sub">
                {{ $store.state.translations['inner.price_for'] }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12 right">
          <div class="small">
            <img src="@/assets/img/desc2.jpg" alt="" class="small" />
          </div>
          <div class="big">
            <img src="@/assets/img/desc1.jpg" alt="" class="big" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['complex'],
}
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.left h4 {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 24px;
}
.left .full__description {
  color: #7c6f62;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 24px;
}
.items {
  display: flex;
  align-items: center;
  padding-top: 32px;
  gap: 32px;
}
.name {
  color: var(--black, #020105) !important;
  flex-flow: var(--medium) !important;
  margin-bottom: 12px !important;
  font-size: 32px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 120% !important; /* 38.4px */
  white-space: nowrap;
}
.sub {
  color: var(--grey-64, #5d5d5f) !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 150% !important; /* 27px */
  margin: 0 !important;
  white-space: nowrap;
}
.right {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}
.small img {
  width: 250px;
  height: 282px;
  object-fit: cover;
  border-radius: 24px;
}
.big img {
  width: 478px;
  height: 596px;
  object-fit: cover;
  border-radius: 24px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  .left h4 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .items {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 40px;
  }
  .right {
    flex-direction: column;
    gap: 12px;
  }
  .small,
  .small img {
    width: 100%;
    border-radius: 18px;
  }
  .big img {
    height: 280px;
    border-radius: 18px;
  }
  .left p {
    font-size: 16px;
    margin-bottom: 12px;
  }
  .name {
    font-size: 24px !important;
    margin-bottom: 5px !important;
  }
  .sub {
    font-size: 14px !important;
  }
}
</style>
