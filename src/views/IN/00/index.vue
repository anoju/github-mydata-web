<template>
  <div></div>
</template>
<script>
export default {
  name: 'INindex',
  beforeMount() {
    this.$router.replace({ path: '/TO/00', query: { tab: 2 } });
  },
};
</script>
