<template>
  <div
    class="btn_toggle_row"
    :class="colClass"
    @scroll="scrollEvt"
  >
    <slot />
  </div>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbBtnToggleRow',
  data() {
    return {
      length: 0,
      isScroll: false,
    };
  },
  props: {
    col: { type: Number, default: null },
  },
  computed: {
    colClass() {
      const rtnClass = [];
      if (this.col > 1) {
        rtnClass.push(`col_${this.col}`);
      } else if (this.length > 1) {
        rtnClass.push(`col_${this.length}`);
      }
      return rtnClass;
    },
  },
  created() {
    this.$nextTick(() => {
      // this.childs = this.$children
      this.length = this.$el.childNodes.length;
    });
  },
  beforeMount() {
    if (this.$parent.inline) this.isScroll = true;
  },
  methods: {
    scrollEvt() {
      if (!this.isScroll) return;
      const { $el } = this;
      const sclWidth = $el.scrollWidth;
      const elWidth = $el.offsetWidth;
      const sclLeft = $el.scrollLeft;
      if (sclWidth !== elWidth && Math.abs((sclWidth - elWidth) - sclLeft) < 1) {
        uiEventBus.$emit('toggleScroll');
      }
    },
  },
};
</script>
