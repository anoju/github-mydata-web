<template>
  <div
    v-if="bgClick"
    class="popup"
    :class="wrapClass"
    role="dialog"
    @click="bgClickClose($event.target)"
  >
    <slot />
  </div>
  <div
    v-else
    class="popup"
    role="dialog"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'kbPopWrap',
  props: {
    bgClick: { type: Boolean, default: true },
    wrapClass: { type: String, default: null },
  },
  mounted() {
    // console.log(this.bgClick)
  },
  methods: {
    bgClickClose(tar) {
      if (tar.classList.contains('popup') && tar.classList.contains('opend')) {
        this.$emit('close');
      }
    },
  },
};
</script>
