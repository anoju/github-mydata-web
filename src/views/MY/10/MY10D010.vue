<template>
  <kb-page page-title="KB증권 연동해지">
    <kb-page-body>
      <kb-step :total="3" :now="step">
        <template v-if="step === 1">
          정보 및 기간확인
        </template>
        <template v-if="step === 2">
          정보 보유기간
        </template>
        <template v-if="step === 3">
          주의사항안내
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
  name: 'MY10D010',
  data() {
    return {
      step: 1,
    };
  },
  watch: {
    $route(from) {
      this.step = from.meta.page;
      let wrap = this.$el.closest('.scl__body');
      if (wrap === null) wrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
      this.$scrollTo(wrap, { top: 0 }, 100);
    },
  },
  created() {
    this.step = this.$route.meta.page;
  },
};
</script>
