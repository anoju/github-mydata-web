<template>
  <div
    class="btn_toggle"
    :class="rowClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'kbBtnToggle',
  props: {
    small: { type: Boolean, default: false },
    auto: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    dateType: { type: Boolean, default: false },
  },
  data() {
    return {
      length: 0,
      // childs: []
    };
  },
  computed: {
    rowClass() {
      const rtnClass = [
        {
          small: this.small,
          inline: this.inline,
          auto: this.auto,
          dateType: this.dateType,
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
