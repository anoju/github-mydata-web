<template>
  <div
    class="ui-swiper-wrap"
    :class="{full:fullWidth, auto:autoWidth, only:isOnly}"
  >
    <div
      v-swiper:mySwiper="swiperOption"
      class="ui-swiper"
      :class="{loop:loop, 'auto-height':autoHeight}"
      @ready="swiperReady"
      @resize="swiperResize"
      @click-slide="swiperClickSlide"
      @touchEnd="swiperTouchEnd"
      @transitionStart="swiperSlideChange"
      @observerUpdate="swiperAppendSlide"
      :dir="dir"
    >
      <div class="swiper-wrapper">
        <slot />
      </div>
      <div
        ref="paginationWrap"
        class="swiper-pagination-wrap"
      >
        <button
          v-if="autoplay"
          type="button"
          class="swiper-auto-ctl"
          :class="{play:!isAutoplay}"
          :aria-label="autoplayText"
          @click="autoplaybutton"
        />
        <div
          slot="pagination"
          ref="pagination"
          class="swiper-pagination"
        />
      </div>
      <button
        v-if="navi"
        slot="button-prev"
        ref="buttonPrev"
        type="button"
        aria-label="이전 슬라이드"
        class="swiper-button-prev swiper-button"
        @click="swiperPrevEvt"
      >이전 슬라이드</button>
      <button
        v-if="navi"
        slot="button-next"
        ref="buttonNext"
        type="button"
        aria-label="다음 슬라이드"
        class="swiper-button-next swiper-button"
        @click="swiperNextEvt"
      >다음 슬라이드</button>
    </div>
  </div>
</template>
<script>
import uiEventBus from '../uiEventBus.vue';

// Import Swiper styles
export default {
  name: 'kbSwiper',
  props: {
    navi: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    autoWidth: { type: Boolean, default: false },
    autoHeight: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
    autoplay: { type: Boolean, default: false },
    index: { type: String, default: '0' },
    dir: { type: String, default: null },
  },
  data() {
    return {
      isAutoplay: false,
      isOnly: false,
      resizeUpadte: '',
    };
  },
  computed: {
    autoplayText() {
      let txt = '슬라이드 자동롤링 ';
      txt += (this.isAutoplay ? '중지' : '시작');
      return txt;
    },
    swiperOption() {
      let autoplayOpt = '';
      let autoHeightOpt = false;
      if (this.autoplay) {
        autoplayOpt = {
          delay: 2500,
          // disableOnInteraction: false
        };
      }
      if (this.autoHeight) autoHeightOpt = true;
      return {
        slidesPerView: 'auto',
        loop: !!this.loop,
        autoplay: autoplayOpt,
        autoHeight: autoHeightOpt,
        initialSlide: this.index,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<button type="button" class="${className}">${index + 1}번째 슬라이드</button>`;
          },
        },
      };
    },
  },
  mounted() {
    if (this.autoplay) {
      this.isAutoplay = true;
    }

    uiEventBus.$on('swiperAccodion', () => {
      setTimeout(() => {
        this.mySwiper.update();
      }, 20);
    });
    // if (this.index > 0) {
    //     this.mySwiper.slideTo(this.index, 0, false)
    // }
    // if (this.autoplay) {
    //     this.mySwiper.slideTo(this.index, 0, false)
    // }
  },
  methods: {
    swiperReady(swiper) {
      this.$nextTick(() => {
        this.swiperCheck(swiper);
        if (this.autoWidth) {
          setTimeout(() => {
            this.mySwiper.update();
          }, 500);
        }
      });
    },
    swiperResize() {
      clearTimeout(this.resizeUpadte);
      this.resizeUpadte = setTimeout(() => {
        this.mySwiper.update();
      }, 300);
    },
    swiperClickSlide(index, reallyIndex) {
      console.log('Click slide!', index, reallyIndex);
    },
    swiperTouchEnd(e) {
      const $target = e.target;
      if (!$target.classList.contains('swiper-pagination-wrap')
                && !$target.classList.contains('swiper-auto-ctl')
                && !$target.classList.contains('swiper-pagination')
                && !$target.classList.contains('swiper-pagination-bullet')) {
        if (this.autoplay) this.isAutoplay = false;
      }
    },
    swiperSlideChange() {
      if (!this.loop && this.navi) {
        this.swiperCheck(this.mySwiper);
      }
    },
    swiperCheck(tar) {
      // console.log(tar.activeIndex, tar.realIndex, tar.snapIndex)
      const $length = tar.pagination.bullets.length;
      // const $index = tar.realIndex
      const $index = tar.snapIndex;
      const btnPrev = this.$refs.buttonPrev;
      const btnNext = this.$refs.buttonNext;

      if (!this.loop && this.navi) {
        if ($index === 0) {
          btnPrev.classList.add('swiper-button-disabled');
          btnPrev.disabled = true;
        } else {
          btnPrev.classList.remove('swiper-button-disabled');
          btnPrev.disabled = false;
        }
        // console.log($index, ($length - 1))
        if ($index === ($length - 1)) {
          btnNext.classList.add('swiper-button-disabled');
          btnNext.disabled = true;
        } else {
          btnNext.classList.remove('swiper-button-disabled');
          btnNext.disabled = false;
        }
      }

      // const $paginationWrap = this.$refs.paginationWrap
      // if ($length <= 1) {
      //     this.isOnly = true
      //     $paginationWrap.classList.add('hide')
      // } else {
      //     this.isOnly = false
      //     $paginationWrap.classList.remove('hide')
      // }
    },
    swiperPrevEvt() {
      this.mySwiper.slidePrev();
    },
    swiperNextEvt() {
      this.mySwiper.slideNext();
    },
    autoplaybutton(e) {
      e.stopPropagation();
      this.isAutoplay = !this.isAutoplay;
      if (this.isAutoplay) {
        this.mySwiper.autoplay.start();
      } else {
        this.mySwiper.autoplay.stop();
      }
    },
    swiperAppendSlide() {
      console.log('aaa');
    },
  },
};
</script>
