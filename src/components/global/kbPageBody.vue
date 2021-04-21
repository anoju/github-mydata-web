<template>
  <section
    class="page_body"
    v-on="listeners"
  >
    <slot />
  </section>
</template>
<script>
export default {
  name: 'kbPageBody',
  // props: {
  //   class: { type: String, default: null },
  // },
  computed: {
    listeners() {
      return this.$listeners;
    },
  },
};
</script>
