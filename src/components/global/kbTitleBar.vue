<template>
  <div
    :class="titleClass"
  >
    <div class="left">
      <component
        :is="titleTag"
        v-if="title != null"
        class="tit"
        :class="titClass"
        v-html="title"
      />
      <slot name="left" />
    </div>
    <div
      v-if="!!$slots.default"
      class="right"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbTitleBar',
  props: {
    title: { type: String, default: null },
    titTag: { type: String, default: null },
    titClass: { type: String, default: null },
    center: { type: Boolean, default: false },
    h1: { type: Boolean, default: false },
    h2: { type: Boolean, default: false },
    h3: { type: Boolean, default: false },
    h4: { type: Boolean, default: false },
    h5: { type: Boolean, default: false },
  },
  data() {
    return {
      default: {
        tag: 'h3',
      },
    };
  },
  computed: {
    titleTag() {
      if (this.titTag !== null) return this.titTag;
      if (this.h1) return 'h1';
      if (this.h2) return 'h2';
      if (this.h3) return 'h3';
      if (this.h4) return 'h4';
      if (this.h5) return 'h5';
      return this.default.tag;
    },
    titleClass() {
      const rtnClass = [];
      let $class = null;
      if (this.h1) {
        $class = 'h1';
      } else if (this.h2) {
        $class = 'h2';
      } else if (this.h3) {
        $class = 'h3';
      } else if (this.h4) {
        $class = 'h4';
      } else if (this.h5) {
        $class = 'h5';
      } else {
        $class = this.default.tag;
      }
      rtnClass.push('tit_' + $class);
      if (this.center)rtnClass.push('center');
      return rtnClass;
    },
  },
};
</script>
