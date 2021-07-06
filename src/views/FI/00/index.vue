<template>
  <div></div>
</template>
<script>
export default {
  name: 'FIindex',
  beforeMount() {
    this.$router.replace({ path: '/TO/00', query: { tab: 0 } });
  },
};
</script>
