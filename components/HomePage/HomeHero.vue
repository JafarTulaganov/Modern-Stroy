<template>
  <div class="wrap">
    <img class="image" src="@/assets/img/hero.jpg" alt="" />
    <div class="container">
      <div class="box">
        <div class="title__wrap">
          <p class="sup">{{ $store.state.translations['main.title'] }}</p>
          <h1 class="title">
            {{ $store.state.translations['main.hero-sub'] }}
          </h1>
        </div>
        <div class="tags">
          <div class="tag">
            <p>{{ $store.state.translations['main.hero-tag-1'] }}</p>
          </div>
          <div class="tag">
            <p>{{ $store.state.translations['main.hero-tag-2'] }}</p>
          </div>
          <div class="tag">
            <p>{{ $store.state.translations['main.hero-tag-3'] }}</p>
          </div>
        </div>
        <!-- <div class="buttons">
          <button>Выбор квартиры</button>
          <button>Получить консультацию</button>
        </div> -->
      </div>
      <div id="cards" class="bottom">
        <div class="item">
          <div class="content">
            <p class="name">2-комнатный</p>
            <p class="txt">цена по запросу</p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <p class="name">3-комнатный</p>
            <p class="txt">цена по запросу</p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <p class="name">4-комнатный</p>
            <p class="txt">цена по запросу</p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <p class="name">5-комнатный</p>
            <p class="txt">цена по запросу</p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <p class="name">Пентхаусы</p>
            <p class="txt">цена по запросу</p>
          </div>
        </div>
      </div>
    </div>
    <div class="back">
      <img src="@/assets/img/subtract-hero.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('cards').onmousemove = (e) => {
      for (const card of document.getElementsByClassName('item')) {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }
  },
}
</script>

<style scoped>
.wrap {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.wrap::after {
  background: linear-gradient(
    180deg,
    rgba(2, 1, 5, 0) 0%,
    rgba(2, 1, 5, 0.8) 100%
  );
  transform: rotate(180deg);
  mix-blend-mode: hard-light;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  z-index: 1;
}
.back {
  position: absolute;
  right: 0;
  left: auto;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}
.image {
  width: 100%;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  transform: scale(1.5);
  z-index: -1;
  pointer-events: none;
}
.container {
  display: flex;
  align-items: center;
  height: 100%;
  color: white;
}
.box {
  /* max-width: 1064px; */
  position: relative;
  z-index: 2;
  /* padding-bottom: 100px; */
}
.title {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 72px */
  margin-bottom: 44px;
  max-width: 80%;
}
.sup {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: 0.8px;
  margin-bottom: 24px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;
  max-width: 70%;
}
.tag {
  color: var(--white, #fff);
  padding: 12px 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  border-radius: 600px;
  background: #04084f;
  backdrop-filter: blur(82.5px);
}
.tag p {
  margin: 0;
}
.sub {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 24px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.buttons button {
  width: 100%;
  max-width: 235px;
  border: 1px solid rgba(172, 131, 94, 0.61);
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  color: #fff;
  font-family: var(--decor);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  position: relative;
  transition: 0.4s;
  overflow: hidden;
}
.buttons button::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  width: 96%;
  height: 85%;
  content: '';
  border: 1px solid var(--white, #fff);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;
}
.buttons button:hover {
  background: var(--golden);
}
.buttons button:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}
.bottom {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: none;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(98, 98, 98, 0.24);
  backdrop-filter: blur(38px);
  overflow: hidden;
}
.container {
  position: relative;
}
.name {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 8px;
}
.txt {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #5d5d5f;
}
.item:last-child {
  padding-left: 50px;
  border-right: none;
}
.item:first-child .content::after {
  width: 110px;
  height: 1px;
  background: var(--golden);
  bottom: -24px;
  left: -48px;
  content: '';
  position: absolute;
}
.item:first-child .content::before {
  width: 1px;
  height: 40px;
  background: var(--golden);
  bottom: -24px;
  left: -48px;
  content: '';
  position: absolute;
}
.item:first-child {
  padding-right: 50px;
}
.item:last-child .content::after {
  width: 110px;
  height: 1px;
  background: var(--golden);
  top: -16px;
  right: -72px;
  content: '';
  position: absolute;
}
.item:last-child .content::before {
  width: 1px;
  height: 40px;
  background: var(--golden);
  top: -16px;
  right: -72px;
  content: '';
  position: absolute;
}

.item:hover::before {
  opacity: 1;
}
.item {
  position: relative;
  padding: 24px 40px 32px 40px;
}
.item::before,
.item::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}

.item::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(172, 131, 94, 1),
    transparent 40%
  );
  filter: blur(40px);
  z-index: 3;
}

.item::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(172, 131, 94, 1),
    transparent 40%
  );
  filter: blur(40px);
  z-index: 1;
}
.content {
  position: relative;
  z-index: 6;
}
@media screen and (max-width: 1024px) {
  .sup {
    font-size: 13px;
    line-height: 120%;
    margin-bottom: 12px;
  }
  .title {
    font-size: 30px;
    line-height: 130%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .tags {
    max-width: 100%;
  }
  .tag {
    font-size: 14px;
    line-height: 120%;
    padding: 8px 16px;
  }
}
</style>
