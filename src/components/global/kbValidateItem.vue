<template>
  <div
    class="validate_item"
    :class="{error:(error != ''),success:(success != '')}"
  >
    <slot />
    <div
      v-if="(error != '')"
      class="error_txt"
    >
      {{ error }}
    </div>
    <div
      v-if="(success != '')"
      class="success_txt"
    >
      {{ success }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbValidateItem',
  props: {
    error: { type: String, default: '' },
    success: { type: String, default: '' },
  },
  mounted() {

  },
};
</script>
