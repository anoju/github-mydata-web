<template>
  <div
    class="btn_toggle"
    :class="rowClass"
  >
    <slot />
    <kb-button v-if="folding" not class="btn_tgl_folding" @click="isFoldingOpen = !isFoldingOpen">확장</kb-button>
  </div>
</template>

<script>
export default {
  name: 'kbBtnToggle',
  props: {
    small: { type: Boolean, default: false },
    auto: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    folding: { type: Boolean, default: false },
    middle: { type: Boolean, default: false },
    dateType: { type: Boolean, default: false },
  },
  data() {
    return {
      length: 0,
      isFoldingOpen: false,
      // childs: []
    };
  },
  computed: {
    rowClass() {
      const rtnClass = [
        {
          small: this.small,
          inline: this.inline,
          middle: this.middle,
          auto: this.auto,
          folding: this.folding,
          dateType: this.dateType,
          folding_open: this.isFoldingOpen,
        },
      ];
      if (this.length > 1)rtnClass.push(`row_${this.length}`);
      return rtnClass;
    },
  },
  created() {
    this.$nextTick(() => {
      // this.childs = this.$children
      this.length = this.$el.childNodes.length;
    });
  },
};
</script>
