<template>
  <div
    class="btn_wrap"
    :class="{group:group, out:out, 'bottom_fixed': bottomFixed, vertical: vertical}"
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
  props: {
    group: { type: Boolean, default: false },
    out: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    bottomFixed: { type: Boolean, default: false },
  },
  computed: {
    // hasDefaultSlot() {
    //     return !!this.$slots.default
    // }
  },
};
</script>
