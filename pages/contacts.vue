<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.contacts']" />
    <section>
      <div class="container">
        <div class="top">
          <div class="row">
            <div class="col-lg-4 col-xs-12">
              <h4 class="title">
                {{ $store.state.translations['inner.app_form'] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M21.5535 29.5217L31.0752 20.0001L21.5535 10.4784M8.88519 20.0001H31.0469"
                    stroke="#04084F"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h4>
              <p class="sub">
                {{ $store.state.translations['inner.form_txt'] }}
              </p>
              <img
                src="@/assets/img/contacts-vector.svg"
                alt=""
                class="vector-left"
              />
              <img
                src="@/assets/img/contacts-vector.svg"
                alt=""
                class="vector-right"
              />
            </div>
            <div class="col-lg-4 col-xs-12">
              <form @submit.prevent="onSubmit">
                <input
                  type="text"
                  :placeholder="$store.state.translations['inner.name']"
                  v-model="name"
                />
                <input
                  type="text"
                  :placeholder="$store.state.translations['inner.number']"
                  v-model="number"
                />
                <input
                  type="text"
                  :placeholder="$store.state.translations['inner.message']"
                  v-model="message"
                />
                <div class="buttons">
                  <button type="submit" name="submit" class="send">
                    {{ $store.state.translations['inner.send_app'] }}
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-4 col-xs-12 end">
              <div class="item">
                <h4 class="title">
                  {{ $store.state.translations['inner.phone_number'] }}
                </h4>
                <a href=""> {{ $store.state.translations['main.numero'] }}</a>
              </div>
              <div class="item">
                <h4 class="title">
                  {{ $store.state.translations['inner.social_media'] }}
                </h4>
                <div class="socs">
                  <a
                    :href="$store.state.translations['inner.telegram']"
                    class="soc"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                    >
                      <path
                        d="M9.4174 11.8632L9.0204 16.8888C9.58841 16.8888 9.83441 16.6692 10.1294 16.4055L12.7925 14.115L18.3106 17.7519C19.3226 18.2595 20.0357 17.9922 20.3087 16.914L23.9308 1.63926L23.9318 1.63836C24.2528 0.291963 23.3907 -0.234534 22.4047 0.0957645L1.1142 7.43163C-0.33883 7.93922 -0.31683 8.66822 0.867199 8.99852L6.31033 10.5222L18.9536 3.40235C19.5486 3.04775 20.0897 3.24395 19.6446 3.59855L9.4174 11.8632Z"
                        fill="#419FD9"
                      />
                    </svg>
                  </a>
                  <a
                    :href="$store.state.translations['inner.instagram']"
                    class="soc"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1887_32926)">
                        <path
                          d="M12.0037 5.83594C8.6007 5.83594 5.8457 8.59394 5.8457 11.9939C5.8457 15.3969 8.6037 18.1519 12.0037 18.1519C15.4067 18.1519 18.1617 15.3939 18.1617 11.9939C18.1617 8.59094 15.4037 5.83594 12.0037 5.83594ZM12.0037 15.9909C9.7947 15.9909 8.0067 14.2019 8.0067 11.9939C8.0067 9.78594 9.7957 7.99694 12.0037 7.99694C14.2117 7.99694 16.0007 9.78594 16.0007 11.9939C16.0017 14.2019 14.2127 15.9909 12.0037 15.9909Z"
                          fill="url(#paint0_linear_1887_32926)"
                        />
                        <path
                          d="M16.9482 0.0783164C14.7402 -0.0246837 9.27123 -0.0196837 7.06123 0.0783164C5.11923 0.169316 3.40623 0.638316 2.02523 2.01932C-0.282773 4.32732 0.0122273 7.43732 0.0122273 11.9983C0.0122273 16.6663 -0.247773 19.7043 2.02523 21.9773C4.34223 24.2933 7.49723 23.9903 12.0042 23.9903C16.6282 23.9903 18.2242 23.9933 19.8592 23.3603C22.0822 22.4973 23.7602 20.5103 23.9242 16.9413C24.0282 14.7323 24.0222 9.26432 23.9242 7.05432C23.7262 2.84132 21.4652 0.286316 16.9482 0.0783164ZM20.4432 20.4503C18.9302 21.9633 16.8312 21.8283 11.9752 21.8283C6.97523 21.8283 4.97023 21.9023 3.50723 20.4353C1.82223 18.7583 2.12723 16.0653 2.12723 11.9823C2.12723 6.45732 1.56023 2.47832 7.10523 2.19432C8.37923 2.14932 8.75423 2.13432 11.9612 2.13432L12.0062 2.16432C17.3352 2.16432 21.5162 1.60632 21.7672 7.15032C21.8242 8.41532 21.8372 8.79532 21.8372 11.9973C21.8362 16.9393 21.9302 18.9563 20.4432 20.4503Z"
                          fill="url(#paint1_linear_1887_32926)"
                        />
                        <path
                          d="M18.4009 7.02936C19.1957 7.02936 19.8399 6.3851 19.8399 5.59036C19.8399 4.79563 19.1957 4.15137 18.4009 4.15137C17.6062 4.15137 16.9619 4.79563 16.9619 5.59036C16.9619 6.3851 17.6062 7.02936 18.4009 7.02936Z"
                          fill="url(#paint2_linear_1887_32926)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1887_32926"
                          x1="8.46285"
                          y1="16.7664"
                          x2="16.6222"
                          y2="8.29914"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EEA054" />
                          <stop offset="0.502762" stop-color="#D64763" />
                          <stop offset="1" stop-color="#B62A99" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1887_32926"
                          x1="5.1"
                          y1="21.3033"
                          x2="21.0003"
                          y2="4.8033"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EEA054" />
                          <stop offset="0.502762" stop-color="#D64763" />
                          <stop offset="1" stop-color="#B62A99" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1887_32926"
                          x1="17.5735"
                          y1="6.70559"
                          x2="19.4802"
                          y2="4.72696"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EEA054" />
                          <stop offset="0.502762" stop-color="#D64763" />
                          <stop offset="1" stop-color="#B62A99" />
                        </linearGradient>
                        <clipPath id="clip0_1887_32926">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    :href="$store.state.translations['inner.facebook']"
                    class="soc"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="22"
                      viewBox="0 0 16 22"
                      fill="none"
                    >
                      <path
                        d="M15.0107 0.144046L11.3738 0.139526C7.28796 0.139526 4.64749 2.23766 4.64749 5.48507V7.94972H0.990805C0.674823 7.94972 0.418945 8.14813 0.418945 8.39285V11.9639C0.418945 12.2086 0.675115 12.4068 0.990805 12.4068H4.64749V21.4175C4.64749 21.6623 4.90337 21.8604 5.21935 21.8604H9.99029C10.3063 21.8604 10.5621 21.662 10.5621 21.4175V12.4068H14.8377C15.1537 12.4068 15.4095 12.2086 15.4095 11.9639L15.4113 8.39285C15.4113 8.27535 15.3509 8.16281 15.2438 8.07966C15.1367 7.9965 14.9908 7.94972 14.8391 7.94972H10.5621V5.86041C10.5621 4.8562 10.8711 4.34641 12.5602 4.34641L15.0101 4.34573C15.3258 4.34573 15.5817 4.14733 15.5817 3.90283V0.586947C15.5817 0.342673 15.3261 0.144498 15.0107 0.144046Z"
                        fill="#4267B2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-lg-4 col-xs-12">
              <h4 class="title">
                {{ $store.state.translations['inner.locations'] }}
              </h4>
              <div class="locs">
                <div class="loc" v-for="item in complexes" :key="item.id">
                  <p class="name">{{ item.title }}</p>
                  <p class="txt">
                    {{ item.area }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xs-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.527794656937!2d69.33694329515872!3d41.34661741181171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a7b3bdc4e3%3A0x47fc1b6d3c7aadb5!2z0KjQutC-0LvQsCDRg9C30LHQtdC60L7QsiDQoNCw0LnQvSDQk9C-0YHQu9C40L3Qsw!5e0!3m2!1sru!2s!4v1693378957877!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import formApi from '@/api/form.js'
import complexesApi from '@/api/complexes'

import SiteTop from '~/components/SiteTop.vue'

export default {
  components: { SiteTop },
  layout: 'inner',

  data() {
    return {
      name: '',
      number: '',
      message: '',
    }
  },

  async asyncData({ $axios }) {
    const complexes = await complexesApi.getComplexes($axios)

    return {
      complexes,
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        number: this.number,
        message: this.message,
      }

      if (this.number.length > 1) {
        const res = await formApi.sendApplication(formData)

        if (res && res.status === 201) {
          this.$toast.success('Successfully sent')
        } else {
          this.$toast.error('Error')
        }

        this.name = ''
        this.number = ''
        this.message = ''
      }
    },
  },
}
</script>

<style scoped>
section {
  padding: 120px 0;
}
.title {
  color: var(--blue, #04084f);
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sub {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
input {
  border-bottom: 1px solid var(--grey-24, #c2c2c3);
  padding: 16px;
  color: var(--black, #020105);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.send {
  color: var(--white, #fff);
  text-align: center;
  font-family: var(--decor);
  border-radius: 8px;
  background: var(--gold-yellow-hello, #c29133);
  padding: 14px 72px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}
.end {
  padding-left: 120px;
}
.item a {
  display: flex;
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 10px;
}
.item:first-child {
  margin-bottom: 72px;
}
.socs {
  display: flex;
  align-items: center;
  gap: 8px;
}
.soc {
  border-radius: 8px;
  background: #fff9f4;
  padding: 8px;
  margin: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vector-left {
  transform: translateY(20px);
}
.vector-right {
  transform: translate(30px, 60px);
}
.locs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 8px;
}
.name {
  color: var(--black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 150%; /* 30px */
}
.txt {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
iframe {
  width: 100%;
  filter: invert(90%);
  border-radius: 48px;
  height: 449px;
}
.bottom {
  margin-top: -80px;
}
@media screen and (max-width: 1024px) {
  section {
    padding: 40px 0;
  }
  .vector-left,
  .vector-right {
    display: none;
  }
  form {
    padding: 40px 0;
  }
  .send {
    width: 100%;
  }
  .end {
    padding: 0 16px;
  }
  .item:first-child {
    margin-bottom: 20px;
  }
  .bottom {
    margin: 40px 0;
  }
  .bottom .row {
    gap: 24px;
  }
  iframe {
    border-radius: 18px;
    height: 320px;
  }
}
</style>
