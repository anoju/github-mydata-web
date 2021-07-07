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
          to="/IN/05/IN05A002"
        >
          <IN05A003 />
        </kb-tab>
        <kb-tab
          title="투자 성적표"
          to="/IN/05/IN05A005"
          :disabled="false"
        >
          <IN05A005 />
        </kb-tab>
        <kb-tab
          title="투자패턴 카드"
          to="/IN/05/IN05A006"
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
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.path.indexOf('IN05A002') > 0) this.tabIdx = 0;
        else if (to.path.indexOf('IN05A005') > 0) this.tabIdx = 1;
        else if (to.path.indexOf('IN05A006') > 0) this.tabIdx = 2;
      },
    },
  },
  mounted() {
  },
  methods: {

  },
};
</script>
