<template>
  <kb-page page-title="투자습관진단">
    <kb-page-body class="pd_b0">
      <kb-tabs
        fixed
        v-model="tabIdx"
        content-class="mg_t0"
      >
        <kb-tab
          title="나의 투자습관"
        >
          <IN05A003 />
        </kb-tab>
        <kb-tab
          title="투자 성적표"
          :disabled="false"
        >
          <IN05A005 />
        </kb-tab>
        <kb-tab
          title="투자패턴 카드"
          :disabled="false"
        >
          <IN05A006 />
        </kb-tab>
      </kb-tabs>
    </kb-page-body>
  </kb-page>
</template>
<script>
import IN05A003 from './IN05A003.vue';
import IN05A005 from './IN05A005.vue';
import IN05A006 from './IN05A006.vue';

export default {
  name: 'IN05A002',
  data() {
    return {
      tabIdx: 0,
    };
  },
  components: {
    IN05A003,
    IN05A005,
    IN05A006,
  },
  methods: {
  },
};
</script>
