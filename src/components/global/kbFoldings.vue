<template>
  <div :class="listClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'kbFoldings',
  provide() {
    return {
      items: this.items,
      notToggle: this.notToggle,
      notSlide: this.notSlide,
      firstOpen: this.firstOpen,
    };
  },
  props: {
    notToggle: { type: Boolean, default: false },
    notSlide: { type: Boolean, default: false },
    firstOpen: { type: Boolean, default: false },
    not: { type: Boolean, default: false },
    type1: { type: Boolean, default: false },
    type2: { type: Boolean, default: false },
  },
  data() {
    return {
      items: {
        count: 0,
        active: null,
      },
    };
  },
  computed: {
    listClass() {
      const rtnVal = [];
      if (!this.not) {
        if (this.type1) {
          rtnVal.push('accordion_list_1');
        } else if (this.type2) {
          rtnVal.push('accordion_list_2');
        } else {
          rtnVal.push('accordion_list');
        }
      }
      return rtnVal;
    },
  },
  created() {
    this.firstOpenchk();
  },
  methods: {
    firstOpenchk() {
      if (this.firstOpen) {
        this.items.active = 0;
      }
    },
  },
};
</script>
