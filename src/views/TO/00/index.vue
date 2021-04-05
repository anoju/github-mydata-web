<template>
  <kb-page
    class="main"
    :class="{lock:isLayerFull}"
    no-header-back
    @scroll="onScroll"
  >
    <template slot="header">
      <div class="main_pagination" />
    </template>
    <kb-page-body>
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
      <div
        class="main_layer_view"
        :class="{full:isLayerFull, off: !LayerShow}"
      >
        <a
          role="button"
          class="bg"
          ref="layerBg"
          :style="LayerBgStyle"
          aria-label="닫기"
          @click="layerHide"
        >닫기</a>
        <div
          class="inner"
          ref="layerContainer"
          :style="LayerStyle"
        >
          <router-view />
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
  name: 'main',
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
      isSwiperTouch: false,
      LayerShow: true,
      isLayerFull: false,
      LayerHeight: 0,
      LayerStyle: null,
      LayerBgStyle: null,
      LayerMinHeight: 0,
      LayerMaxHeight: 0,
      LayerDuration: 300,
      LayerOffset: 50,
      lastScrollPosition: 0,
      isLayerTouch: false,
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
      console.log(to.path, from.path);
      if (this.isRoute) {
        if (to.path !== '/TO/00') {
          this.LayerStyle = this.layerSetStyle(true, 100);
          this.LayerBgStyle = this.layerBgSetStyle(true, 100);
        } else {
          this.LayerStyle = this.layerSetStyle(false, 100);
          this.LayerBgStyle = this.layerBgSetStyle(false, 100);
        }
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
        threshold: 10,
        pagination: {
          el: '.main_pagination',
          clickable: true,
          renderBullet(index, className) {
            let txt = `슬라이드${index}`;
            if (index === 0)txt = '금융생활';
            if (index === 1)txt = '오늘';
            if (index === 2)txt = '투자생활';
            return `<button type="button" class="${className}"><span>${txt}</span></button>`;
          },
        },
      };
    },
  },
  mounted() {
    this.LayerHeight = this.$refs.layerContainer.offsetHeight;
    this.LayerMinHeight = this.$refs.layerContainer.offsetHeight;
    this.LayerMaxHeight = window.innerHeight;
    window.addEventListener('resize', this.resizeChk);
    uiEventBus.$on('main-update', this.mainUpdate);

    if (this.$route.path !== '/TO/00') {
      // this.LayerStyle = this.layerSetStyle(true, 10);
      // this.LayerBgStyle = this.layerBgSetStyle(true, 10);
      this.isLayerFull = true;
    }

    this.$nextTick(() => {
      this.$refs.layerContainer.querySelector('.scl__body').addEventListener('scroll', this.scrollEvt);
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChk);
    this.$refs.layerContainer.querySelector('.scl__body').removeEventListener('scroll', this.scrollEvt);
  },
  methods: {
    resizeChk() {
      this.LayerMaxHeight = window.innerHeight;
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
      const elY = this.$el.offsetTop;
      const wrap = this.$el.closest('.scl__body');
      wrap.scrollTo(0, elY);
    },
    mainUpdate() {
      this.mainSwiper.update();
    },
    touchStart(e) {
      if (this.$route.path === '/TO/00') {
        this.isRoute = false;
        this.$router.push('/TO/00/TO02A002');
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
        if (isFull) {
          this.isLayerFull = true;
          this.$refs.layerBg.focus();
        } else {
          this.isLayerFull = false;
          this.isRoute = false;
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
    layerHide(e) {
      e.preventDefault();
      this.LayerStyle = this.layerSetStyle(false, this.LayerDuration);
      this.LayerBgStyle = this.layerBgSetStyle(false, this.LayerDuration);
      setTimeout(() => {
        this.isLayerFull = false;
        this.LayerStyle = null;
        this.LayerBgStyle = null;
        this.isRoute = false;
        this.$router.push('/TO/00');
        setTimeout(() => {
          this.isRoute = true;
        }, 10);
      }, this.LayerDuration);
    },
    onScroll(e) {
      const sclTop = e.target.scrollTop;
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
  },
};
</script>
