<template>
  <kb-page
    class="main"
    :class="{lock:isLayerFull}"
    no-header-back
    page-title="메인"
  >
    <template slot="header">
      <div class="header_flex">
        <div class="main_user_info">
          <kb-button not a-tag class="level">1</kb-button>
          <kb-button not a-tag>김스타님의 오늘</kb-button>
        </div>
        <kb-button not class="btn_drawer"><span class="blind">내서랍</span></kb-button>
      </div>
    </template>
    <kb-page-body>
      <div class="main_swiper_wrap">
        <kb-tabs class="main_tab" v-model="mainTabIdx">
          <kb-tab title="금융생활" @click="tabSlideTo(0)" />
          <kb-tab title="오늘" @click="tabSlideTo(1)" />
          <kb-tab title="투자생활" @click="tabSlideTo(2)" />
        </kb-tabs>
        <div class="main_pagination" />
        <div class="main_swiper">
          <div
            v-swiper:mainSwiper="swiperOption"
            @ready="swiperReady"
            @resize="swiperResize"
            @slideChange="swiperSlideChange"
          >
            <div class="swiper-wrapper">
              <swiper-slide>
                <!-- 금융생활 -->
                <main-financial />
              </swiper-slide>
              <swiper-slide>
                <!-- 오늘 -->
                <main-today />
              </swiper-slide>
              <swiper-slide>
                <!-- 투자생활 -->
                <main-invest />
              </swiper-slide>
            </div>
          </div>
        </div>

      </div>
      <div
        class="main_layer_view"
        ref="layerWrap"
        :class="{full:isLayerFull, off: !LayerShow, downsize: LayerDownsize && !isLayerFull && !isLayerTouch}"
      >
        <a
          role="button"
          class="bg"
          ref="layerBg"
          :style="LayerBgStyle"
          aria-label="닫기"
          @click="layerHide(300, $event)"
        >닫기</a>
        <div
          class="inner"
          ref="layerContainer"
          :style="LayerStyle"
        >
          <router-view />
          <div class="mask" v-if="!isLayerFull && !isLayerTouch && !isLayerFulling"></div>
          <div
            class="ui-touch"
            aria-hidden="true"
            v-touch:start.disablePassive="touchStart"
            v-touch:moving.disablePassive="touchMoving"
            v-touch:end="touchEnd"
            v-touch-class="'active'"
            :style="{top:`-${touchPadTop}px`}"
          />
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
import uiEventBus from '@/components/uiEventBus.vue';
import mainToday from '@/views/TO/00/TO00A001.vue';
import mainFinancial from '@/views/FI/00/FI00A001.vue';
import mainInvest from '@/views/IN/00/IN00A001.vue';

export default {
  name: 'mainPage',
  components: {
    mainToday,
    mainFinancial,
    mainInvest,
  },
  provide() {
    return { isSwiperTouch: this.isSwiperTouch };
  },
  data() {
    return {
      mainTabIdx: 1,
      isSwiperTouch: false,
      LayerShow: true,
      LayerDownsize: false,
      isLayerFull: false,
      isLayerFulling: false,
      LayerHeight: 0,
      LayerStyle: null,
      LayerBgStyle: null,
      LayerMinHeight: 0,
      LayerMaxHeight: 0,
      LayerDuration: 300,
      LayerOffset: 50,
      lastScrollPosition: 0,
      isLayerTouch: false,
      lastPath: '/TO/00/TO02A002',
      touchStartY: 0,
      touchDistance: 0,
      touchSpeed: 0,
      touchTime: 0,
      touchInterval: null,
      touchPoint: null,
      isRoute: true,
      touchPadTop: 0,
    };
  },
  watch: {
    $route(to, from) {
      if (this.isRoute) {
        if (from.path === '/TO/00' && to.path !== '/TO/00') {
          this.layerOpen(100);
        } else if (from.path !== '/TO/00' && to.path === '/TO/00') {
          this.lastPath = from.path;
          this.layerHide(100);
        }
      }
      if (to.path === '/TO/00') {
        const idx = to.query.tabIndex;
        this.swiperslideTo(idx);
      }
    },
  },
  computed: {
    swiperOption() {
      return {
        slidesPerView: 'auto',
        allowTouchMove: !this.isSwiperTouch,
        autoHeight: true,
        initialSlide: 1,
        threshold: 30,
        pagination: {
          el: '.main_pagination',
          clickable: true,
          // renderBullet(index, className) {
          //   let txt = `슬라이드${index}`;
          //   if (index === 0)txt = '금융생활';
          //   if (index === 1)txt = '오늘';
          //   if (index === 2)txt = '투자생활';
          //   return `<button type="button" class="${className}">${txt}</button>`;
          // },
        },
      };
    },
  },
  mounted() {
    this.LayerHeight = this.$refs.layerContainer.offsetHeight;
    this.LayerMinHeight = this.$refs.layerContainer.offsetHeight;
    this.LayerMaxHeight = this.$refs.layerWrap.offsetHeight - parseInt(this.$getStyle(this.$refs.layerWrap, 'padding-top'), 10);
    window.addEventListener('resize', this.resizeChk);
    uiEventBus.$on('main-update', this.mainUpdate);

    if (this.$route.path !== '/TO/00' && this.$route.path !== '/TO/00/') {
      // this.LayerStyle = this.layerSetStyle(true, 10);
      // this.LayerBgStyle = this.layerBgSetStyle(true, 10);
      this.isLayerFull = true;
    }

    this.$nextTick(() => {
      if (!!this.$refs.layerContainer && !!this.$refs.layerContainer.querySelector('.scl__body')) {
        this.$refs.layerContainer.querySelector('.scl__body').addEventListener('scroll', this.scrollEvt);
      }
    });

    let sclBody = this.$parent.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    let sclBody = this.$parent.$el;
    if (!sclBody.classList.contains('scl__body'))sclBody = window;
    sclBody.removeEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChk);
    // validation add
    if (!!this.$refs.layerContainer && !!this.$refs.layerContainer.querySelector('.scl__body')) {
      this.$refs.layerContainer.querySelector('.scl__body').removeEventListener('scroll', this.scrollEvt);
    }
  },
  methods: {
    resizeChk() {
      this.LayerMaxHeight = this.$refs.layerWrap.offsetHeight - parseInt(this.$getStyle(this.$refs.layerWrap, 'padding-top'), 10);
    },
    // swiperReady(swiper) {
    swiperReady() {
      this.$nextTick(() => {
        // console.log(swiper);
      });
    },
    swiperResize() {
      clearTimeout(this.resizeUpadte);
      this.resizeUpadte = setTimeout(() => {
        this.mainSwiper.update();
      }, 300);
    },
    swiperSlideChange() {
      const $realIndex = this.mainSwiper.realIndex;
      this.mainTabIdx = $realIndex;
      if ($realIndex !== 1) {
        this.LayerDownsize = true;
      } else {
        this.LayerDownsize = false;
      }
      const elY = this.$el.offsetTop;
      let wrap = this.$el.closest('.scl__body');
      if (wrap === null) wrap = window;
      wrap.scrollTo(0, elY);
    },
    mainUpdate() {
      this.mainSwiper.update();
    },
    touchStart(e) {
      if (this.$route.path === '/TO/00' || this.$route.path === '/TO/00/') {
        this.isRoute = false;
        this.$router.push(this.lastPath);
      }
      this.isLayerTouch = true;
      const intervalTime = 10;
      this.touchTime = 0;
      this.touchStartY = (e.type === 'touchstart') ? e.touches[0].clientY : e.clientY;
      this.LayerHeight = this.$refs.layerContainer.offsetHeight;
      this.touchInterval = setInterval(() => {
        this.touchTime += intervalTime;
      }, intervalTime);
    },
    touchMoving(e) {
      if (this.isLayerTouch === true) {
        this.touchDistance = this.touchStartY - ((e.type === 'touchmove') ? e.touches[0].clientY : e.clientY);
        const el = this.$refs.layerContainer;
        const elH = Math.min(this.LayerMaxHeight, Math.max(this.LayerMinHeight, (this.LayerHeight + this.touchDistance)));
        el.style.height = `${elH}px`;

        const bg = this.$refs.layerBg;
        const bgVal = ((elH - this.LayerMinHeight) / (this.LayerMaxHeight - this.LayerMinHeight)) * 0.6;
        bg.style.opacity = bgVal.toFixed(2);
      }
    },
    touchEnd() {
      this.isLayerFulling = true;
      this.isRoute = true;
      this.isLayerTouch = false;
      clearInterval(this.touchInterval);
      const el = this.$refs.layerContainer;
      const elH = el.offsetHeight;
      let isFull = false;

      if ((this.touchTime <= 100) && (Math.abs(this.touchDistance) < 20)) {
        // 탭
        if (this.isLayerFull) { isFull = false; } else { isFull = true; }
      } else if ((this.touchTime <= 200) && (Math.abs(this.touchDistance) >= 60)) {
        // 빠르고 짧은 swipe
        if (this.touchDistance > 0) isFull = true;
        if (this.touchDistance < 0) isFull = false;
      } else {
        // 느린 swipe
        let num = 1;
        if (this.touchDistance < 0)num = 2;
        const standard = (((this.LayerMaxHeight - this.LayerMinHeight) / 3) * num) + this.LayerMinHeight;
        if (elH >= standard)isFull = true;
      }

      this.LayerStyle = this.layerSetStyle(isFull, this.LayerDuration);
      this.LayerBgStyle = this.layerBgSetStyle(isFull, this.LayerDuration);
      setTimeout(() => {
        this.isLayerFulling = false;
        if (isFull) {
          this.isLayerFull = true;
          this.$refs.layerBg.focus();
        } else {
          this.isLayerFull = false;
          this.isRoute = false;
          if (this.$route.path !== '/TO/00') this.lastPath = this.$route.path;
          this.$router.push('/TO/00');
          setTimeout(() => {
            this.isRoute = true;
          }, 100);
        }
        this.LayerStyle = null;
        this.LayerBgStyle = null;
        this.touchTime = 0;
        this.touchDistance = 0;
      }, this.LayerDuration);

      // document.addEventListener('touchstart', this.touchStartHandler, {
      //   passive: true,
      // });
    },
    layerSetStyle(val, speed) {
      const height = val ? this.LayerMaxHeight : this.LayerMinHeight;
      return [
        {
          height: `${height}px`,
          '-webkit-transition-property': 'height',
          'transition-property': 'height',
          '-webkit-transition-duration': `${speed}ms`,
          'transition-duration': `${speed}ms`,
        },
      ];
    },
    layerBgSetStyle(val, speed) {
      const opVal = val ? 0.6 : 0;
      return [
        {
          opacity: opVal,
          '-webkit-transition-property': 'opacity',
          'transition-property': 'opacity',
          '-webkit-transition-duration': `${speed}ms`,
          'transition-duration': `${speed}ms`,
        },
      ];
    },
    layerOpen(speed = this.LayerDuration) {
      this.LayerStyle = this.layerSetStyle(true, 100);
      this.LayerBgStyle = this.layerBgSetStyle(true, 100);
      setTimeout(() => {
        this.isLayerFull = true;
        this.LayerStyle = null;
        this.LayerBgStyle = null;
        this.isRoute = false;
        setTimeout(() => {
          this.isRoute = true;
        }, 10);
      }, speed);
    },
    layerHide(speed = this.LayerDuration, e) {
      if (e !== undefined) e.preventDefault();
      this.LayerStyle = this.layerSetStyle(false, speed);
      this.LayerBgStyle = this.layerBgSetStyle(false, speed);
      setTimeout(() => {
        this.isLayerFull = false;
        this.LayerStyle = null;
        this.LayerBgStyle = null;
        if (e !== undefined) {
          if (this.$route.path !== '/TO/00') this.lastPath = this.$route.path;
          this.$router.push('/TO/00');
        }
        this.isRoute = false;
        setTimeout(() => {
          this.isRoute = true;
        }, 10);
      }, speed);
    },
    onScroll() {
      let sclBody = this.$parent.$el;
      let sclTop = 0;
      if (!sclBody.classList.contains('scl__body')) {
        sclBody = window;
        sclTop = window.scrollY;
      } else {
        sclTop = sclBody.scrollTop;
      }
      if (sclTop < 0) {
        return;
      }
      // console.log(sclTop, this.lastScrollPosition, this.LayerOffset);
      if (Math.abs(sclTop - this.lastScrollPosition) < this.LayerOffset) {
        return;
      }
      this.LayerShow = sclTop < this.lastScrollPosition;
      this.lastScrollPosition = sclTop;
    },
    scrollEvt(e) {
      this.touchPadTop = e.target.scrollTop;
    },
    tabSlideTo(idx) {
      this.mainSwiper.slideTo(idx, 300);
    },
  },
};
</script>
