<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 left">
          <img src="@/assets/img/vector.svg" alt="" class="vector" />
          <div class="box">
            <h4 class="title">{{ $store.state.translations['main.video'] }}</h4>
            <div class="bottom">
              <p class="sup">
                {{ $store.state.translations['main.admin-phone'] }}
              </p>
              <a :href="`tel:${$store.state.translations['main.numero']}`"
                >{{ $store.state.translations['main.num'] }}
                <span>{{ $store.state.translations['main.ero'] }} </span></a
              >
              <div class="buttons">
                <button class="go">
                  {{ $store.state.translations['main.go-project'] }}
                </button>

                <!-- <div class="swipers">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M14.7572 23.6175L7.13989 16.0001L14.7572 8.38281M24.8919 16.0001H7.16256"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div class="stick"></div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M17.2746 8.38281L24.8919 16.0001L17.2746 23.6175M7.13989 16.0001H24.8692"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-xs-12">
          <div class="video">
            <video id="video" src="main.mp4"></video>
            <button id="play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="59.5"
                  fill="white"
                  fill-opacity="0.19"
                  stroke="white"
                />
                <path d="M73 60.5L51 73L51 48L73 60.5Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const playButton = document.getElementById('play')
    const video = document.getElementById('video')

    playButton.addEventListener('click', function () {
      if (video.paused === true) {
        video.play()
        playButton.style.opacity = '0'
      } else {
        video.pause()
        playButton.style.opacity = '1'
      }
    })
  },
}
</script>

<style scoped>
.wrap {
  padding: 88px 0;
  background: var(--blue, #04084f);
  position: relative;
  margin-bottom: 120px;
}

.title {
  margin-bottom: 8px;
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
}
.buttons {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 32px;
}
.go {
  border-radius: 8px;
  background: var(--golden);
  color: var(--white, #fff);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  padding: 17px 0;
  min-width: 296px;
}
.swipers {
  display: flex;
  align-items: center;
  /* gap: 20px; */
  border-radius: 8px;
  background: #2b2e65;
}
.swipers button {
  padding: 16px 20px 16px 24px;
}
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.video {
  position: relative;
}
.video video {
  width: 100%;
  height: 547px;
  object-fit: cover;
  border-radius: 24px;
}
.video button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}
.vector {
  position: absolute;
  top: 40%;
  pointer-events: none;
}
.sup {
  color: var(--grey-8, #ebebeb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  margin-bottom: 12px;
}
.box a {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 8px;
  line-height: 150%; /* 27px */
}
.box a span {
  color: var(--white, #fff);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
}
.box a:hover {
  text-decoration: none;
}
.stick {
  height: 32px;
  width: 1px;
  background: #4a4c83;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
    margin-bottom: 0;
  }
  .title {
    font-size: 28px;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .vector {
    display: none;
  }
  .sup {
    margin-bottom: 20px;
  }
  .box a span {
    font-size: 32px;
  }
  .buttons {
    margin: 24px 0;
  }
  .go {
    padding: 12px 0;
    width: 100%;
  }
  .video video {
    height: 280px;
    border-radius: 18px;
  }
  .video svg {
    width: 70px;
    height: 70px;
  }
}
</style>
