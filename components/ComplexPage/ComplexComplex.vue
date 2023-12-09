<template>
  <div class="wrap">
    <div class="container">
      <div class="filter">
        <!-- <div class="wrapper complex">
          <select v-model="values.complex">
            <option value="0" selected>
              {{ $store.state.translations['main.choose-complex'] }}
            </option>
            <option
              v-for="complex in complexes"
              :key="complex.id"
              :value="complex.id"
            >
              {{ complex.title }}
            </option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M18.433 9.94995L12.004 16.38L5.57397 9.94995"
              stroke="#020105"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> -->
        <div class="wrapper rooms">
          <span> {{ $store.state.translations['main.rooms'] }}: </span>
          <div class="flexer">
            <div
              @click="values.rooms = 1"
              :class="{ active: values.rooms == 1 }"
              class="room"
            >
              1
            </div>
            <div
              @click="values.rooms = 2"
              :class="{ active: values.rooms == 2 }"
              class="room"
            >
              2
            </div>
            <div
              @click="values.rooms = 3"
              :class="{ active: values.rooms == 3 }"
              class="room"
            >
              3
            </div>
            <div
              @click="values.rooms = 4"
              :class="{ active: values.rooms == 4 }"
              class="room"
            >
              4
            </div>
            <div
              @click="values.rooms = 5"
              :class="{ active: values.rooms == 5 }"
              class="room"
            >
              5
            </div>
          </div>
        </div>
        <div class="wrapper area">
          <span> {{ $store.state.translations['main.area'] }}: </span>
          <form action="">
            <input
              v-model="values.square__gt"
              :placeholder="$store.state.translations['main.from']"
              type="text"
            />
            <input
              v-model="values.square__lt"
              :placeholder="$store.state.translations['main.to']"
              type="text"
            />
          </form>
        </div>
        <div class="wrapper area">
          <span> {{ $store.state.translations['main.price'] }} </span>
          <form action="">
            <input
              v-model="values.price__gte"
              :placeholder="$store.state.translations['main.from']"
              type="text"
            />
            <input
              v-model="values.price__lte"
              :placeholder="$store.state.translations['main.to']"
              type="text"
            />
          </form>
        </div>
        <button @click="onChange()">
          {{ $store.state.translations['main.show'] }}
        </button>
      </div>
      <div class="items">
        <div v-for="item in complex.rooms" :key="item.id" class="item">
          <div class="complect">
            <p>{{ item.complex.title }}</p>
          </div>
          <div class="img">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div class="info">
            <p class="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="11"
                  r="3"
                  stroke="#C29133"
                  stroke-width="1.5"
                />
                <path
                  d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                  stroke="#C29133"
                  stroke-width="1.5"
                />
              </svg>
              {{ item.complex.area }}
            </p>
            <p class="price">
              {{ item.price }} {{ $store.state.translations['main.sum'] }}
            </p>
          </div>
          <div class="specs">
            <div class="spec">
              <p class="question">
                {{ $store.state.translations['main.floor'] }}
              </p>
              <p class="answer">{{ item.floor }}</p>
            </div>
            <div class="spec">
              <p class="question">
                {{ $store.state.translations['main.room'] }}
              </p>
              <p class="answer">{{ item.rooms }}</p>
            </div>
            <div class="spec">
              <p class="question">
                {{ $store.state.translations['main.area'] }}
              </p>
              <p class="answer">{{ item.square }}</p>
            </div>
            <div class="spec">
              <p class="question">
                {{ $store.state.translations['main.date'] }}
              </p>
              <p class="answer">{{ item.start_year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import housesApi from '@/api/houses'

export default {
  props: ['houses', 'complexes', 'complex'],

  data() {
    return {
      values: {
        complex: this.complex.id,
        rooms: '',
        square__lt: '',
        square__gt: '',
        price__lte: '',
        price__gte: '',
      },
    }
  },

  mounted() {},

  methods: {
    async onChange(name, value) {
      let query = { ...this.$route.query }
      query = { ...query, ...this.values }
      if (!Object.keys(this.$route.query).includes(`${name}_${value}`)) {
        await this.$router.replace({
          path: `/houses`,
          query: query,
        })
      }

      this.changeProducts()
    },
    async changeProducts() {
      const homes = await housesApi.getHouses(this.$axios, {
        ...this.$route.query,
      })

      this.houses = homes
    },
    async reset() {
      await this.$router.replace({
        path: `/houses`,
      })
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 80px 0 120px 0;
  margin-bottom: 120px;
  background: var(--apple-grey, #f5f5f7);
}
.filter {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 20px;
}
.room.active {
  border-color: var(--golden);
}
.wrapper {
  border-radius: 8px;
  border: 1.5px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  padding: 20px 32px;
  display: flex;
  align-items: center;
  min-width: 400px;
  justify-content: space-between;
}
.wrapper span,
.wrapper select {
  color: var(--black, #020105);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.flexer {
  display: flex;
  align-items: center;
  gap: 12px;
}
.rooms {
  padding: 12px 24px;
  gap: 56px;
}
.room {
  cursor: pointer;
  color: var(--black, #020105);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  width: 44px;
  height: 44px;
}
.area,
.price {
  gap: 56px;
}
input {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  border-left: 1px solid #ebebeb;
  padding-left: 12px;
  max-width: 160px;
}
input::placeholder {
  color: var(--grey-40, #9a999b);
}
button {
  border-radius: 8px;
  background: var(--blue, #04084f);
  padding: 20px 40px;
  color: var(--white, #fff);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  max-width: 156px;
}
.items {
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.item {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  position: relative;
  overflow: hidden;
}
.complect {
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 8px;
  background: rgba(4, 8, 79, 0.04);
  padding: 10px 24px;
  color: var(--blue, #04084f);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  z-index: 9;
}
.img {
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
.info {
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.price {
  color: var(--golden);
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
}
.specs {
  border-top: 1px solid #ebebeb;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  row-gap: 24px;
}
.spec {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.question {
  color: var(--grey-64, #5d5d5f);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.answer {
  color: var(--black, #020105);
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.item img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  z-index: 1;
  position: relative;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  .flexer {
    flex-wrap: wrap;
  }
  .wrapper {
    min-width: unset;
    width: 100%;
    padding: 16px;
  }
  .rooms,
  .area {
    gap: 24px;
  }
  .wrapper span {
    font-size: 14px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  input {
    border-left: 0;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    padding-bottom: 8px;
    max-width: unset;
    font-size: 14px;
  }
  button {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    text-align: center;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .specs {
    gap: 16px;
  }
  .item img {
    height: 280px;
  }
  .complect {
    position: static;
    border-radius: 0;
  }
  .location {
    max-width: 70%;
  }
}
</style>
