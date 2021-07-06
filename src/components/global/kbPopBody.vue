<template>
  <section
    class="pop_body scl__body"
    :class="{prev_head:isPrevHead,next_foot:isNextFoot}"
  >
    <slot />
  </section>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbPopBody',
  data() {
    return {
      isPrevHead: false,
      isNextFoot: false,
    };
  },
  props: {
    endScrollChk: { type: [String, Number], default: 1 },
  },
  updated() {
    // this.siblingsCheck()
  },
  mounted() {
    this.$el.addEventListener('scroll', this.scrollEvt);
    this.$nextTick(() => {
      this.siblingsCheck();
      setTimeout(() => {
        this.scrollEvt();
      }, 100);
    });
  },
  destroyed() {
    this.$el.removeEventListener('scroll', this.scrollEvt);
  },
  methods: {
    siblingsCheck() {
      const $prevEl = this.$el.previousElementSibling;
      if ($prevEl !== null) {
        const $prevClassList = $prevEl.classList;
        if ($prevClassList.contains('pop_head')) {
          this.isPrevHead = true;
          setTimeout(() => {
            const $bodyPdT = parseInt(this.$getStyle(this.$el, 'padding-top'), 10);
            const $headH = $prevEl.offsetHeight;
            if ($bodyPdT < $headH) {
              // this.$el.setAttribute('style', 'padding-top:' + $headH + 'px;');
              this.$el.style.paddingTop = `${$headH}px`;
            }
          }, 100);
        }
      }
      const $nextEl = this.$el.nextElementSibling;
      if ($nextEl !== null) {
        const $nextClassList = $nextEl.classList;
        if ($nextClassList.contains('pop_foot')) this.isNextFoot = true;
        setTimeout(() => {
          const $bodyPdB = parseInt(this.$getStyle(this.$el, 'padding-bottom'), 10);
          const $footH = $nextEl.offsetHeight;
          if ($bodyPdB < $footH) {
            // this.$el.setAttribute('style', 'padding-bottom:' + $footH + 'px;');
            this.$el.style.paddingBottom = `${$footH}px`;
          }
        }, 100);
      }
    },
    scrollEvt() {
      const sclTop = this.$el.scrollTop;
      const bodyH = this.$el.offsetHeight;
      const bodySclH = this.$el.scrollHeight;
      const $prevEl = this.$el.previousElementSibling;
      if ($prevEl !== null) {
        const $prevClassList = $prevEl.classList;
        if ($prevClassList.contains('pop_head')) {
          if (sclTop > 30) {
            $prevEl.classList.add('shadow');
          } else {
            $prevEl.classList.remove('shadow');
          }
        }
      }
      const $nextEl = this.$el.nextElementSibling;
      if ($nextEl !== null) {
        const $nextClassList = $nextEl.classList;
        if ($nextClassList.contains('pop_foot')) {
          if ((sclTop + bodyH) < (bodySclH - 30)) {
            $nextEl.classList.add('shadow');
          } else {
            $nextEl.classList.remove('shadow');
          }
        }
      }

      // for pageScroll event
      let $lastScroll = 1;
      if (typeof this.endScrollChk === 'number') $lastScroll = this.endScrollChk;
      if (typeof this.endScrollChk === 'string') {
        const $sclChkEl = this.$el.querySelector(this.endScrollChk);
        if ($sclChkEl !== null) $lastScroll = bodySclH - this.$getOffset($sclChkEl).top - $sclChkEl.offsetHeight;
      }
      if (Math.abs((bodySclH - bodyH) - sclTop) < $lastScroll) {
        uiEventBus.$emit('popScroll');
      }
    },
  },
};
</script>
