<template>
  <div
    class="btn_wrap"
    :class="{group:group, out:out, 'bottom_fixed': bottomFixed, vertical: vertical, scl_hide: isSclHide}"
  >
    <slot name="inner" />
    <div
      v-if="!!$slots.default"
      class="flex"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbButtonWrap',
  data() {
    return {
      lastScrollY: 0,
      isSclHide: false,
    };
  },
  props: {
    group: { type: Boolean, default: false },
    out: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    bottomFixed: { type: Boolean, default: false },
    sclHide: { type: Boolean, default: false },
  },
  computed: {
    // hasDefaultSlot() {
    //     return !!this.$slots.default
    // }
  },
  mounted() {
    if (this.sclHide) this.sclHideInit();
  },
  methods: {
    sclHideInit() {
      const sclBody = this.$el.closest('.scl__body');
      if (sclBody !== null) {
        sclBody.addEventListener('scroll', this.sclHideEvt);
        this.$once('hook:beforeDestroy', () => {
          sclBody.removeEventListener('scroll', this.sclHideEvt);
        });
      }
    },
    sclHideEvt(e) {
      const $target = e.target;
      const sclTop = $target.scrollTop;
      if (this.lastScrollY < sclTop) {
        this.isSclHide = true;
      } else {
        this.isSclHide = false;
      }
      this.lastScrollY = sclTop;
    },
  },
};
</script>
