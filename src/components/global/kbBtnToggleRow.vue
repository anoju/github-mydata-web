<template>
  <div
    class="btn_toggle_row"
    :class="colClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'kbBtnToggleRow',
  data() {
    return {
      length: 0,
    };
  },
  computed: {
    colClass() {
      const rtnClass = [];
      if (this.length > 1)rtnClass.push(`col_${this.length}`);
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
