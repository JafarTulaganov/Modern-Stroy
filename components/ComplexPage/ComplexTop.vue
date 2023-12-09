<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="texas">
          <div>
            <p class="sup">
              {{ $store.state.translations['inner.living_complex'] }}
            </p>
            <h1 class="title">{{ complex.title }}</h1>
          </div>
          <div>
            <p class="chant">
              {{ $store.state.translations['inner.comfort'] }}
            </p>
          </div>
          <div>
            <div class="dumb">
              <p>
                {{ $store.state.translations['inner.commerce'] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M14.3981 12.155H27.8648V25.62M12.1748 27.845L27.8448 12.175"
                    stroke="#04084F"
                    stroke-width="2.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <span>
                {{ $store.state.translations['inner.house_music'] }}
              </span>
            </div>
            <div class="dumb">
              <p>
                {{ $store.state.translations['inner.living'] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M14.3981 12.155H27.8648V25.62M12.1748 27.845L27.8448 12.175"
                    stroke="#04084F"
                    stroke-width="2.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <span>
                {{ $store.state.translations['inner.house_music'] }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="complex.images[0].image" alt="" />
      <div class="container">
        <div class="left">
          <div class="location">
            <p>
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
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              {{ complex.area }}
            </p>
          </div>
          <div class="size">
            <p>{{ complex.size }}</p>
            <div class="stick"></div>
            <p>{{ complex.price }}</p>
          </div>
        </div>
        <NuxtLink to="/houses">
          {{ $store.state.translations['inner.choose_house'] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M8.63918 7.79297H16.7192V15.872M7.30518 17.207L16.7072 7.80497"
              stroke="#04084F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
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
.sup {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  letter-spacing: 2.88px;
  margin-bottom: 20px;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 88px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 105.6px */
  text-transform: uppercase;
  margin: 0;
}
.top .container .texas {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
}
.texas div:first-child {
  max-width: 60%;
}
.chant {
  color: var(--blue, #04084f);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
  max-width: 50%;
}
.dumb {
  display: flex;
  flex-direction: column;
}
.dumb:first-child {
  margin-bottom: 16px;
}
.dumb p {
  color: var(--blue, #04084f);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
  display: flex;
  align-items: center;
  gap: 12px;
}
.dumb span {
  color: #363972;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.image {
  position: relative;
  height: 748px;
  display: flex;
  align-items: flex-end;
}
.image .container {
  position: relative;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 48px;
}
.left {
  display: flex;
  align-items: center;
  gap: 40px;
}
.image img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.location {
  border-radius: 53px;
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px);
  padding: 12px 32px;
}
.location p {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.size {
  color: var(--white, #fff);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  display: flex;
  align-items: center;
  gap: 32px;
}
.size .stick {
  width: 1px;
  height: 27px;
  background: white;
}
.image a {
  border-radius: 4px;
  background: var(--white, #fff);
  padding: 14px 32px;
  color: var(--blue, #04084f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.image::after {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.56) 100%
  );
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1024px) {
  .dumb,
  .chant {
    display: none;
  }
  .texas div:first-child {
    max-width: 100%;
  }
  .sup {
    font-size: 14px;
    margin-bottom: 12px;
  }
  .title {
    font-size: 32px;
    max-width: 100%;
  }
  .image {
    height: unset;
    flex-direction: column;
  }
  .left {
    flex-direction: column;
    gap: 16px;
  }
  .image img {
    position: static;
    height: 320px;
  }
  .image .container {
    background: var(--blue);
    flex-direction: column;
    padding: 24px 0;
  }
  .image a {
    width: 85%;
    margin-top: 20px;
    justify-content: center;
  }
  .location {
    background: transparent;
    padding: 0;
  }
}
</style>
