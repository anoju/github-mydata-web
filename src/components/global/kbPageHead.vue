<template>
  <header
    class="page_head scl__head"
    :class="{fixed:isFixed}"
  >
    <div>
      <button
        v-if="headerType != 'close' && !noBack"
        type="button"
        class="btn_back"
        @click="backClick"
      >
        <span class="blind">이전화면</span>
      </button>
      <div class="page_head_in">
        <template
          v-if="title !== null"
        >
          <!-- <h1
            v-if="headerType == 'logo'"
            class="logo"
          >
            <router-link
              to="/"
              role="button"
            >
              KB증권 마이데이터 모바일
            </router-link>
          </h1> -->
          <h1>
            {{ title }}
          </h1>
        </template>
        <slot />
      </div>
      <kb-button
        v-if="!noHome"
        not
        ref="home"
        to="/TO/00"
        class="btn_gnb_home"
        aria-label="메인화면으로 이동"
      >메인으로</kb-button>
      <button
        v-if="headerType == 'close'"
        type="button"
        class="btn_close"
        aira-label="전체메뉴 열기"
        @click="closeClick"
      >
        <i />
        <span class="blind">닫기</span>
      </button>
      <button
        v-else-if="!noGnb"
        type="button"
        class="btn_gnb"
        ref="btnGnb"
        @click="btnGnbOpen($event, $event.target)"
        aira-label="전체메뉴 열기"
      >
        <i />
        <span class="blind">전체메뉴 열기</span>
      </button>
    </div>
  </header>
</template>
<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbPageHead',
  props: {
    title: { type: [String, Number], default: null },
    noBack: { type: Boolean, default: false },
    noGnb: { type: Boolean, default: false },
    noHome: { type: Boolean, default: false },
    isLock: { type: Boolean, default: false },
    headerType: { type: String, default: null },
    back: { type: [String, Function], default: null },
    close: { type: [String, Function], default: null },
  },
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    this.headerFixed();
    let sclBody = this.$parent.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.addEventListener('scroll', this.headerFixed);
  },
  beforeDestroy() {
    let sclBody = this.$parent.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.removeEventListener('scroll', this.headerFixed);
  },
  methods: {
    btnGnbOpen(e) {
      const target = this.$refs.btnGnb;
      e.preventDefault();
      uiEventBus.$emit('open-gnb', target);
    },
    backClick() {
      if (this.back === null) {
        window.history.back();
      } else if (typeof this.back === 'function') {
        this.back();
      } else if (typeof this.back === 'string') {
        this.$router.replace(this.back);
      }
    },
    closeClick() {
      if (this.close === null) {
        window.history.back();
      } else if (typeof this.close === 'function') {
        this.close();
      } else if (typeof this.close === 'string') {
        this.$router.replace(this.close);
      }
    },
    headerFixed() {
      if (!this.isLock) {
        let sclBody = this.$parent.$el;
        if (!sclBody.classList.contains('scl__body'))sclBody = window;
        const sclTop = sclBody === window ? sclBody.scrollY : sclBody.scrollTop;
        const elTop = this.$el.offsetTop;
        if (elTop < sclTop) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
  },
};
</script>
