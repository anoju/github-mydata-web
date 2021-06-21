<template>
  <div
    class="page_wrap scl__body"
    :class="{lock : isLock, fixed_hide: !layoutFixedShow, gray: grayBg, apiPage:isAPI, scl__body:isMainLayer}"
    :aria-hidden="isLock"
    v-on="listeners"
    v-touch:start="represhPullStart"
    v-touch:moving="represhPullMoving"
    v-touch:end="represhPullEnd"
  >
    <div
      v-if="isPullShow"
      ref="refreshWrap"
      class="page_refresh"
      aria-hidden="true"
      :style="{top:(pullDistance/2)+'px'}"
    >
      <div class="ico"><div class="ico_in"></div></div>
      <div class="blind">새로고침</div>
    </div>
    <div class="page_inner">
      <template v-if="!!$slots.header">
        <kb-page-head
          v-if="!noHeader && !isMainLayer && !isAPI"
          ref="header"
          :title="pageTitle"
          :no-back="noHeaderBack"
          :is-lock="isLock"
          :header-type="headerType"
          :back="back"
        >
          <slot name="header" />
        </kb-page-head>
      </template>
      <template v-else>
        <kb-page-head
          v-if="!noHeader && !isMainLayer && !isAPI"
          ref="header"
          :title="pageTitle"
          :no-back="noHeaderBack"
          :is-lock="isLock"
          :header-type="headerType"
          :back="back"
        />
      </template>
      <div
        class="page_container"
        :class="containerClass"
      >
        <slot />
      </div>
      <kb-page-foot ref="footer" v-if="!isMainLayer && !noFooter && !isAPI && !isAPP" />
      <div
        v-if="!isAPI"
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
    containerClass: { type: [String, Object], default: null },
    noHeader: { type: Boolean, default: false },
    noFooter: { type: Boolean, default: false },
    noBtntop: { type: Boolean, default: false },
    noHeaderBack: { type: Boolean, default: false },
    grayBg: { type: Boolean, default: false },
    back: { type: [String, Function], default: null },
  },
  data() {
    return {
      isAPI: false,
      isAPP: false,
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
      isPullTouch: false,
      isPullShow: false,
      isPageRefresh: false,
      touchStartX: 0,
      touchStartY: 0,
      touchDistance: 0,
      pullDistance: 0,
      pullRefreshTop: 150,
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
  created() {
    if (this.$route.path.indexOf('/API/') >= 0) this.isAPI = true;
    const $agent = navigator.userAgent;
    this.isAPP = ($agent.match(/KBSecMyDataApp/i) != null);
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

    let sclBody = this.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.addEventListener('scroll', this.wrapScrollEvt);
  },
  beforeDestroy() {
    let sclBody = this.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.removeEventListener('scroll', this.wrapScrollEvt);
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
      const sclWrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
      const sclTop = $target === document ? window.scrollY : $target.scrollTop;
      const sclHeight = $target === document ? sclWrap.scrollHeight : $target.scrollHeight;
      const elHeight = $target === document ? window.innerHeight : $target.offsetHeight;
      // console.log(sclTop, sclHeight, elHeight);
      const bottomFixed = this.$el.querySelector('.bottom_fixed');
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

      const $footer = this.$refs.footer;
      if ($footer !== undefined && !this.isMainLayer) {
        const footTop = this.$getOffset($footer.$el).top;
        const floatinMargin = (sclTop + elHeight) - footTop;
        if (floatinMargin > 0) {
          this.isFloaingMargin = floatinMargin;
          this.isFloaingBottom = 0;
        } else {
          this.isFloaingMargin = 0;
          this.isFloaingBottom = this.spaceHeight;
        }
      } else {
        this.isFloaingMargin = 0;
        this.isFloaingBottom = this.spaceHeight;
      }

      // for pageScroll event
      if (Math.abs((sclHeight - elHeight) - sclTop) < 1) {
        uiEventBus.$emit('pageScroll');
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
      const wrap = this.$el;
      let sclTop = wrap.scrollTop;
      if (!wrap.classList.contains('scl__body')) sclTop = window.scrollY;
      if (sclTop > 100) this.isBtnTopOn = true;
      else this.isBtnTopOn = false;
    },
    btnTopClick() {
      let wrap = this.$el;
      if (!wrap.classList.contains('scl__body'))wrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
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
    represhPullStart(e) {
      if (e.type !== 'touchstart' || this.isPageRefresh || this.isMainLayer || this.noHeader || this.isAPI || document.querySelector('.lock') !== null) return;
      if (this.$el.scrollTop === 0) {
        this.touchStartY = e.touches[0].clientY;
        const $header = this.$refs.header;
        const $headerH = $header.$el.offsetHeight;
        if (this.touchStartY > $headerH) return;
        this.isPullTouch = true;
        this.isPullShow = true;
        this.pullDistance = 0;
      }
    },
    represhPullMoving(e) {
      if (e.type !== 'touchmove' || this.isMainLayer || this.noHeader || this.isAPI || document.querySelector('.lock') !== null) return;
      if (this.isPullShow && !this.isPageRefresh) {
        const move = e.touches[0].clientY - this.touchStartY;
        this.pullDistance = Math.max(0, move);

        const $wrap = this.$refs.refreshWrap;
        const $ratio = this.pullDistance / this.pullRefreshTop;
        // if ($wrap.querySelector('.ico') !== null) {
        this.$anime({
          targets: $wrap.querySelector('.ico'),
          opacity: Math.min(1, $ratio),
          scale: Math.min(1, $ratio),
          rotate: -($ratio * 360),
          easing: 'linear',
          duration: 10,
        });
        // }
      }
    },
    represhPullEnd() {
      const $wrap = this.$refs.refreshWrap;
      this.isPullTouch = false;
      if (!this.isPullShow || this.isPageRefresh || this.isMainLayer || this.noHeader || this.isAPI || document.querySelector('.lock') !== null) return;
      if (this.pullDistance > this.pullRefreshTop) {
        // console.log('새로고침!!');
        this.$anime({
          targets: $wrap.querySelector('.ico_in'),
          rotate: -360,
          easing: 'linear',
          loop: true,
        });
        this.$anime({
          targets: $wrap,
          top: (this.pullRefreshTop / 2),
        });
        this.pageRefresh();
      } else {
        // console.log('새로고침 안함~');
        this.represhReset();
      }
    },
    represhReset() {
      if (!this.isPullShow) return;
      const $wrap = this.$refs.refreshWrap;
      this.$anime({
        targets: $wrap.querySelector('.ico'),
        opacity: 0,
        scale: 0,
        rotate: 0,
        easing: 'linear',
      });
      this.$anime({
        targets: $wrap.querySelector('.ico_in'),
        rotate: 0,
        easing: 'linear',
      });
      this.$anime({
        targets: $wrap,
        top: 0,
        complete: (() => {
          this.isPullShow = false;
          this.isPageRefresh = false;
        }),
      });
    },
    pageRefresh() {
      this.isPageRefresh = true;
      // window.location.reload();
      this.represhReset();
      this.$loading(true, '업데이트 중이에요', 'C');

      // 데이터 불러오는곳 삽입: 임시로 setTimeout 설정
      setTimeout(() => {
        console.log('데이타 불러오기 완료');
        this.$loading(false);
      }, 5000);
    },
  },
};

</script>
