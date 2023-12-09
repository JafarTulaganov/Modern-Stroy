<template>
  <div class="wrap" v-show="complex.layouts.length > 0">
    <div class="container">
      <div class="cardo">
        <div class="header">
          <h4 class="title">
            {{ $store.state.translations['inner.building_plan'] }}
          </h4>
          <div class="tabs">
            <!-- <button class="active">Общий вид здания</button> -->
            <button
              v-for="plan in complex.layouts"
              :key="plan.id"
              :class="{ active: activeTab === plan.id }"
              @click="activeTab = plan.id"
            >
              {{ plan.title }}
            </button>
          </div>
        </div>
        <div
          :class="{ active: activeTab === item.id }"
          v-for="item in complex.layouts"
          :key="item.id"
          class="body"
        >
          <div class="left">
            <img src="@/assets/img/planner.svg" class="planner" alt="" />

            <div class="top">
              <h4>{{ $store.state.translations['inner.full_info'] }}</h4>
              <p>
                {{ $store.state.translations['inner.plan_txt'] }}
              </p>
            </div>
            <div class="sizez">
              <div class="size">
                <h4>от {{ item.price }} cум</h4>
                <p>{{ $store.state.translations['main.price'] }}</p>
              </div>
              <div class="size">
                <h4>{{ item.hypothec }} cум/мес</h4>
                <p>{{ $store.state.translations['inner.ipoteka'] }}</p>
              </div>
              <div class="size">
                <h4>{{ item.size }} м2</h4>
                <p>{{ $store.state.translations['main.size'] }}</p>
              </div>
              <div class="size">
                <h4>{{ item.floor }}</h4>
                <p>{{ $store.state.translations['main.floor'] }}</p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    }
  },

  props: ['complex'],
}
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.cardo {
  border-radius: 48px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  padding: 40px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 40px;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  margin: 0;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
}
.tabs {
  display: flex;
  align-items: center;
  gap: 72px;
}
.tabs button {
  color: var(--grey-80, #9a999b);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.tabs button.active {
  color: #353437;
}
.body {
  display: none;
  grid-template-columns: 4fr 6fr;
}
.body.active {
  display: grid;
}
.left {
  padding-top: 24px;
  position: relative;
  border-right: 1px solid #ebebeb;
}
.planner {
  position: absolute;
  bottom: -40px;
  right: 0;
  padding-right: 40px;
}
.left h4 {
  color: var(--black, #020105);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  margin-bottom: 16px;
}
.left p {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 80%;
}
.top {
  padding-bottom: 14px;
  border-bottom: 1px solid #ebebeb;
}
.sizez {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.right {
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right img {
  width: 100%;
  max-width: 700px;
  height: auto;
  object-fit: contain;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 32px;
  }
  .cardo {
    padding: 0;
    border: none;
  }
  .title {
    font-size: 32px;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
    justify-content: initial;
    gap: 24px;
  }
  .tabs {
    gap: 12px;
  }
  .tabs button {
    background: var(--blue);
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 12px;
  }
  .tabs button.active {
    background: var(--golden);
    color: white;
  }
  .body.active {
    display: flex;
    flex-direction: column-reverse;
  }
  .right {
    padding: 0;
  }
  .right img {
    width: 100%;
    height: 320px;
    max-width: unset;
  }
  .left h4 {
    font-size: 24px;
    margin-bottom: 12px;
  }
  .left p {
    max-width: 100%;
    font-size: 16px;
  }
  .sizez {
    padding: 24px 0;
    gap: 16px;
  }
  .planner {
    padding: 0;
  }
}
</style>
