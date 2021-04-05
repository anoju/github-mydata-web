<template>
  <div
    class="page_wrap scl__body"
    :class="{lock : isLock, fixed_hide: !layoutFixedShow}"
    :aria-hidden="isLock"
    v-on="listeners"
    @scroll="wrapScrollEvt"
  >
    <div class="page_inner">
      <template v-if="!!$slots.header">
        <kb-page-head
          v-if="!noHeader && !isMainLayer"
          ref="header"
          :title="pageTitle"
          :no-back="noHeaderBack"
          :is-lock="isLock"
          :header-type="headerType"
        >
          <slot name="header" />
        </kb-page-head>
      </template>
      <template v-else>
        <kb-page-head
          v-if="!noHeader && !isMainLayer"
          ref="header"
          :title="pageTitle"
          :no-back="noHeaderBack"
          :is-lock="isLock"
          :header-type="headerType"
        />
      </template>
      <div class="page_container">
        <slot />
      </div>
      <kb-page-foot v-if="!isMainLayer && !noFooter" />
      <div
        class="floating_btn"
        :class="{top_on: isBtnTopOn}"
        :style="{bottom: `${isFloaingBottom+20}px`,marginBottom: `${isFloaingMargin}px`}"
      >
        <slot name="floating" />
        <kb-button
          v-if="!noBtntop"
          not
          class="btn btn_scltop"
          ref="btnSclTop"
          title="컨텐츠 상단으로 이동"
          aria-label="컨텐츠 상단으로 이동"
          @click="btnTopClick"
          v-touch:tap="btnTopClick"
          v-touch:start.disablePassive="topTouchStart"
          v-touch:moving.disablePassive="topTouchMoving"
          v-touch:end="topTouchEnd"
        >컨텐츠 상단으로 이동</kb-button>
      </div>
      <div
        v-if="!noFooter"
        class="fixed_space"
        aria-hidden="true"
        :style="{height: `${spaceHeight}px`}"
      />
    </div>
  </div>
</template>
<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbPage',
  props: {
    pageTitle: { type: [String, Number], default: null },
    headerType: { type: String, default: null },
    noHeader: { type: Boolean, default: false },
    noFooter: { type: Boolean, default: false },
    noBtntop: { type: Boolean, default: false },
    noHeaderBack: { type: Boolean, default: false },
  },
  data() {
    return {
      lockSclTop: 0,
      isLock: false,
      isMainLayer: false,
      spaceHeight: 0,
      isBtnTopOn: false,
      isFloaingMargin: null,
      isFloaingBottom: null,
      docTitle: '',
      layoutFixedShow: true,
      lastScrollY: 0,
      isTopTouch: false,
      touchStartX: 0,
      touchDistance: 0,
    };
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null;
      }
      return this.$listeners;
    },
  },
  mounted() {
    if (this.$el.closest('.main_layer_view') !== null) this.isMainLayer = true;
    if (this.pageTitle !== null && (this.$el.closest('.main_layer_view') === null)) {
      this.docTitle = document.title;
      if (this.docTitle === '') this.docTitle = 'KB증권 오늘';
      if (this.docTitle.indexOf(' | ') > -1) {
        const { 1: tit } = this.docTitle.split(' | ');
        this.docTitle = tit;
      }
      document.title = `${this.pageTitle} | ${this.docTitle}`;
    }
    uiEventBus.$on('lock-wrap', this.wrapLock);
    uiEventBus.$on('unlock-wrap', this.wrapUnlock);
  },
  destroyed() {
    document.title = this.docTitle;
    uiEventBus.$off('lock-wrap', this.wrapLock);
    uiEventBus.$off('unlock-wrap', this.wrapUnlock);
  },
  updated() {
    this.fixedSpace();
  },
  methods: {
    wrapLock() {
      this.isLock = true;
      document.querySelector('html').classList.add('lock');
    },
    wrapUnlock() {
      document.querySelector('html').classList.remove('lock');
      this.isLock = false;
      window.dispatchEvent(new Event('resize'));
    },
    lockStyle() {
      let inStyle = null;
      if (this.isLock) {
        inStyle = `top:${this.lockSclTop}px`;
      }
      return inStyle;
    },
    wrapScrollEvt(e) {
      this.fixedSpace();
      this.btnTopOn();

      const $target = e.target;
      const sclTop = $target.scrollTop;
      const sclHeight = $target.scrollHeight;
      const elHeight = $target.offsetHeight;
      const bottomFixed = $target.querySelector('.bottom_fixed');
      if (bottomFixed !== null) {
        if ((sclTop + elHeight) === sclHeight) {
          bottomFixed.classList.add('end');
        } else {
          bottomFixed.classList.remove('end');
        }
      }
      // if (sclTop < 0) {
      //   return;
      // }
      // if (Math.abs(sclTop - this.lastScrollY) < this.LayerOffset) {
      //   return;
      // }
      // this.layoutFixedShow = sclTop < this.lastScrollY;
      // this.lastScrollY = sclTop;

      const $footer = $target.querySelector('.page_foot');
      if ($footer !== null) {
        const footTop = this.$getOffset($footer).top;
        const floatinMargin = (sclTop + elHeight) - footTop;
        if (floatinMargin > 0) {
          this.isFloaingMargin = floatinMargin;
          this.isFloaingBottom = 0;
        } else {
          this.isFloaingMargin = 0;
          this.isFloaingBottom = this.spaceHeight;
        }
      }
    },
    fixedSpace() {
      const heightAry = [];
      const $bottomFixed = this.$el.querySelectorAll('.bottom_fixed>div');
      $bottomFixed.forEach((el) => {
        if (getComputedStyle(el).position === 'fixed') {
          heightAry.push(el.offsetHeight);
        }
      });
      const $maxHeight = (heightAry.length > 0) ? Math.max.apply(null, heightAry) : 0;
      this.spaceHeight = $maxHeight;
      // this.isFloaingBottom = $maxHeight;
    },
    btnTopOn() {
      const sclTop = this.$el.scrollTop;
      if (sclTop > 100) this.isBtnTopOn = true;
      else this.isBtnTopOn = false;
    },
    btnTopClick(e) {
      e.preventDefault();
      // try {
      //   this.$el.scrollTo({
      //     top: 0,
      //     behavior: 'smooth',
      //   });
      // } catch (error) {
      //   this.$el.scrollTo(0, 0);
      // }
      const wrap = this.$el.closest('.scl__body');
      this.$scrollTo(wrap, { top: 0 }, 300);
    },
    topTouchStart(e) {
      this.isTopTouch = true;
      this.touchStartX = (e.type === 'touchstart') ? e.touches[0].clientX : e.clientX;
    },
    topTouchMoving(e) {
      if (this.isTopTouch === true) {
        this.touchDistance = ((e.type === 'touchmove') ? e.touches[0].clientX : e.clientX) - this.touchStartX;
        const el = this.$refs.btnSclTop.$el;
        const elLeft = Math.max(0, this.touchDistance);
        el.style.right = `-${elLeft}px`;
      }
    },
    topTouchEnd() {
      this.isTopTouch = false;
      const el = this.$refs.btnSclTop.$el;
      if (this.touchDistance > 20) {
        this.isBtnTopOn = false;
      } else {
        this.isBtnTopOn = true;
      }
      el.removeAttribute('style');
    },
  },
};

</script>
