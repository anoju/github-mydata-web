<template>
  <kb-page page-title="투자상상 퀴즈" >
    <kb-page-body>
      <div class="section pd_t24">
        <IN10A002 />
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
import IN10A002 from './IN10A002.vue';

export default {
  name: 'IN10A000',
  components: {
    IN10A002,
  },
  data() {
    return {
      isAPI: false,
      isMain: false,
      result: null,
    };
  },
  created() {
    if (this.$route.path.indexOf('/VAPI/') >= 0) this.isAPI = true;
  },
  mounted() {
    if (this.$el.closest('.page_wrap.main') !== null) this.isMain = true;
  },
  methods: {
    quizResult(result) {
      this.result = result;
    },

  },
};
</script>
