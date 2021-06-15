<template>
  <kb-page page-title="은퇴준비 진단하기">
    <kb-page-body class="pd_b0">
      <kb-step :total="6" :now="step">
        <template v-if="step === 1">
          은퇴계획
        </template>
        <template v-if="step === 2">
          은퇴 준비 자산
        </template>
        <template v-if="step === 3">
          월 수입
        </template>
        <template v-if="step === 4">
          월 지출
        </template>
        <template v-if="step === 5">
          투자수익률
        </template>
        <template v-if="step === 6">
          은퇴생활
        </template>
      </kb-step>
      <div class="relateive">
        <kb-transition-page name="page">
          <router-view />
        </kb-transition-page>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN09A010',
  data() {
    return {
      step: 1,
    };
  },
  watch: {
    $route(from) {
      this.step = from.meta.page;
      const wrap = (this.$el.closest('.scl__body') !== null) ? this.$el.closest('.scl__body') : window;
      this.$scrollTo(wrap, { top: 0 }, 100);
    },
  },
  created() {
    this.step = this.$route.meta.page;
  },
};
</script>
