<template>
  <div
    class="btn_toggle_wrap"
  >
    <div
      v-if="!!$slots.default"
      class="inner"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbBtnToggleWrap',
  props: {
  },
  computed: {
  },
};
</script>
