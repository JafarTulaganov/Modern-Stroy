<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="row">
          <div class="left col-lg-6 col-xs-12">
            <img src="@/assets/img/footer.png" alt="" class="pic" />
          </div>
          <div class="right col-lg-6 col-xs-12">
            <h4 class="title">
              {{ $store.state.translations['main.go-excursion'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.excursion-sub'] }}
            </p>
            <div class="bottom">
              <p class="sup">
                {{ $store.state.translations['main.admin-phone'] }}
              </p>
              <a :href="`tel:${$store.state.translations['main.numero']}`"
                >{{ $store.state.translations['main.num'] }}
                <span> {{ $store.state.translations['main.ero'] }}</span></a
              >
              <div class="buttons">
                <button class="go">
                  {{ $store.state.translations['main.go-project-1'] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom cardo">
        <div class="links">
          <ul>
            <li>
              <NuxtLink to="/">{{
                $store.state.translations['main.main']
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{
                $store.state.translations['main.about']
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{
                $store.state.translations['main.gallery']
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{
                $store.state.translations['main.contacts']
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="contacts">
          <a
            class="numero"
            :href="`tel:${$store.state.translations['main.numero']}`"
          >
            {{ $store.state.translations['main.numero'] }}
          </a>
          <div class="socs">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clip-path="url(#clip0_1720_33290)">
                  <path
                    d="M25.1346 7.58035C25.6678 9.65935 25.6678 13.9993 25.6678 13.9993C25.6678 13.9993 25.6678 18.3394 25.1346 20.4184C24.8383 21.5675 23.9715 22.4717 22.8736 22.7773C20.8798 23.3327 14.0011 23.3327 14.0011 23.3327C14.0011 23.3327 7.12597 23.3327 5.12864 22.7773C4.02614 22.467 3.16047 21.564 2.86764 20.4184C2.33447 18.3394 2.33447 13.9993 2.33447 13.9993C2.33447 13.9993 2.33447 9.65935 2.86764 7.58035C3.16397 6.43118 4.03081 5.52702 5.12864 5.22135C7.12597 4.66602 14.0011 4.66602 14.0011 4.66602C14.0011 4.66602 20.8798 4.66602 22.8736 5.22135C23.9761 5.53168 24.8418 6.43468 25.1346 7.58035ZM11.6678 18.0827L18.6678 13.9993L11.6678 9.91602V18.0827Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1720_33290">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg> </a
            ><a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clip-path="url(#clip0_1720_33293)">
                  <path
                    d="M14.0011 2.33398C7.55764 2.33398 2.33447 7.55715 2.33447 14.0007C2.33447 19.8235 6.60097 24.65 12.1788 25.5261V17.3723H9.21547V14.0007H12.1788V11.4305C12.1788 8.50682 13.9195 6.89215 16.5853 6.89215C17.8616 6.89215 19.1963 7.11965 19.1963 7.11965V9.98965H17.7263C16.2761 9.98965 15.8246 10.8892 15.8246 11.812V14.0007H19.0598L18.543 17.3723H15.8246V25.5261C21.4013 24.6511 25.6678 19.8223 25.6678 14.0007C25.6678 7.55715 20.4446 2.33398 14.0011 2.33398Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1720_33293">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg> </a
            ><a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clip-path="url(#clip0_1720_33296)">
                  <path
                    d="M14.0011 2.33398C17.171 2.33398 17.5665 2.34565 18.8101 2.40398C20.0526 2.46232 20.8985 2.65715 21.6428 2.94648C22.4128 3.24282 23.0615 3.64415 23.7101 4.29165C24.3034 4.87486 24.7624 5.58034 25.0553 6.35898C25.3435 7.10215 25.5395 7.94915 25.5978 9.19165C25.6526 10.4353 25.6678 10.8308 25.6678 14.0007C25.6678 17.1705 25.6561 17.566 25.5978 18.8097C25.5395 20.0522 25.3435 20.898 25.0553 21.6423C24.7633 22.4214 24.3041 23.127 23.7101 23.7097C23.1268 24.3027 22.4213 24.7617 21.6428 25.0548C20.8996 25.343 20.0526 25.539 18.8101 25.5973C17.5665 25.6522 17.171 25.6673 14.0011 25.6673C10.8313 25.6673 10.4358 25.6557 9.19214 25.5973C7.94964 25.539 7.10381 25.343 6.35947 25.0548C5.58052 24.7625 4.87492 24.3034 4.29214 23.7097C3.69878 23.1265 3.23973 22.421 2.94697 21.6423C2.65764 20.8991 2.46281 20.0522 2.40447 18.8097C2.34964 17.566 2.33447 17.1705 2.33447 14.0007C2.33447 10.8308 2.34614 10.4353 2.40447 9.19165C2.46281 7.94798 2.65764 7.10332 2.94697 6.35898C3.23891 5.57986 3.69808 4.87419 4.29214 4.29165C4.87509 3.69809 5.58064 3.239 6.35947 2.94648C7.10381 2.65715 7.94847 2.46232 9.19214 2.40398C10.4358 2.34915 10.8313 2.33398 14.0011 2.33398ZM14.0011 8.16732C12.454 8.16732 10.9703 8.7819 9.87635 9.87586C8.78239 10.9698 8.16781 12.4536 8.16781 14.0007C8.16781 15.5477 8.78239 17.0315 9.87635 18.1254C10.9703 19.2194 12.454 19.834 14.0011 19.834C15.5482 19.834 17.032 19.2194 18.1259 18.1254C19.2199 17.0315 19.8345 15.5477 19.8345 14.0007C19.8345 12.4536 19.2199 10.9698 18.1259 9.87586C17.032 8.7819 15.5482 8.16732 14.0011 8.16732ZM21.5845 7.87565C21.5845 7.48888 21.4308 7.11794 21.1573 6.84445C20.8838 6.57096 20.5129 6.41732 20.1261 6.41732C19.7394 6.41732 19.3684 6.57096 19.0949 6.84445C18.8214 7.11794 18.6678 7.48888 18.6678 7.87565C18.6678 8.26242 18.8214 8.63336 19.0949 8.90685C19.3684 9.18034 19.7394 9.33398 20.1261 9.33398C20.5129 9.33398 20.8838 9.18034 21.1573 8.90685C21.4308 8.63336 21.5845 8.26242 21.5845 7.87565ZM14.0011 10.5007C14.9294 10.5007 15.8196 10.8694 16.476 11.5258C17.1324 12.1822 17.5011 13.0724 17.5011 14.0007C17.5011 14.9289 17.1324 15.8191 16.476 16.4755C15.8196 17.1319 14.9294 17.5007 14.0011 17.5007C13.0729 17.5007 12.1826 17.1319 11.5263 16.4755C10.8699 15.8191 10.5011 14.9289 10.5011 14.0007C10.5011 13.0724 10.8699 12.1822 11.5263 11.5258C12.1826 10.8694 13.0729 10.5007 14.0011 10.5007Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1720_33296">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div class="by">
          <p>
            {{ $store.state.translations['main.by'] }}
            <span>{{ $store.state.translations['main.author'] }}</span>
          </p>
        </div>
        <img src="@/assets/img/name.svg" alt="" class="name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  background: var(--blue, #04084f);
  padding: 68px 0;
  margin-top: 120px;
}
.title {
  margin-bottom: 24px;
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
}
.sub {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 48px;
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
.sup {
  color: var(--grey-8, #ebebeb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  margin-bottom: 12px;
}
.right a {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 8px;
  line-height: 150%; /* 27px */
}
.right a span {
  color: var(--white, #fff);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
}
.right a:hover {
  text-decoration: none;
}
.right {
  display: flex;
  flex-direction: column;
}
.pic {
  width: 100%;
  object-fit: contain;
}
.left {
  margin-top: -200px;
  position: relative;
}
.left::after {
  content: '';
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(4, 8, 79, 0) 0%, #04084f 100%);
}
.cardo {
  border-radius: 48px;
  background: linear-gradient(146deg, #151a70 0%, #292d77 100%);
  position: relative;
  padding: 56px 80px 160px 64px;
  display: flex;
  justify-content: space-between;
  margin-top: -54px;
}
.name {
  position: absolute;
  bottom: 0px;
  right: 0;
}
.links ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.links a {
  color: var(--white, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
}
.numero {
  color: var(--white, #fff);
  font-family: var(--decor);
  margin-bottom: 32px;
  display: block;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 43.2px */
}
.socs {
  display: flex;
  align-items: center;
  gap: 24px;
}
.by {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.by span {
  color: var(--golden);
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 16px;
  }
  .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }
  .sub {
    font-size: 14px;
    text-align: center;
  }
  .bottom {
    text-align: center;
  }
  .right a {
    justify-content: center;
  }
  .cardo {
    margin: 0;
    padding: 24px 24px 100px 24px;
    border-radius: 18px;
    flex-direction: column;
    gap: 40px;
  }
  .buttons {
    margin: 32px 0;
  }
  .buttons button {
    font-size: 20px;
    width: 100%;
    padding: 12px 0;
  }
  .socs {
    justify-content: center;
  }
  .numero {
    font-size: 28px;
  }
  .links ul {
    gap: 16px;
  }
  .links a {
    font-size: 16px;
  }
}
</style>
