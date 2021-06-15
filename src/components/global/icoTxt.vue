<template>
  <span
    class="ico_txt"
    :class="icoClass"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'icoTxt',
  data() {
    return {
      colorType: ['yellow', 'blue', 'blue', 'red', 'green', 'purple', 'dark', 'pink'],
      sizeType: ['large', 'small'],
    };
  },
  props: {
    // 색상
    color: { type: String, default: null },
    yellow: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
    red: { type: Boolean, default: false },
    green: { type: Boolean, default: false },
    purple: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    pink: { type: Boolean, default: false },

    // 크기
    size: { type: String, default: null },
    large: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
  computed: {
    $color() {
      if (this.color) {
        if (this.colorType.indexOf(this.color) > -1) {
          return this.color;
        }
        return 'default';
      }
      if (this.yellow) return 'yellow';
      if (this.blue) return 'blue';
      if (this.red) return 'red';
      if (this.green) return 'green';
      if (this.purple) return 'purple';
      if (this.dark) return 'dark';
      if (this.pink) return 'pink';
      return 'default';
    },
    $size() {
      if (this.size) {
        if (this.sizeType.indexOf(this.size) > -1) {
          return this.size;
        }
        return null;
      }
      if (this.large) return 'large';
      if (this.small) return 'small';
      return null;
    },
    icoClass() {
      return [
        this.$color,
        this.$size,
      ];
    },
  },
};
</script>
