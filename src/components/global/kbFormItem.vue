<template>
  <div
    class="form_item"
  >
    <div
      v-if="!!label || !!$slots.labelLeft || !!$slots.labelRight"
      class="fm_lb"
    >
      <div class="left">
        {{ label }}
        <ico-require v-if="!!label && required" />
        <slot name="labelLeft" />
      </div>
      <div
        v-if="!!$slots.labelRight"
        class="right"
      >
        <slot name="labelRight" />
      </div>
    </div>
    <div class="fm_cont">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbFormItem',
  props: {
    label: { type: String, default: null },
    required: { type: Boolean, default: false },
  },
  mounted() {

  },
};
</script>
