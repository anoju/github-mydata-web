<template>
  <kb-pop noHead>
    <kb-pop-body>
      <div class="mg_tm28">
        <img src="~@/assets/images/temp/sample_pop.png" alt="" style="width:100%;" />
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>다시보지 않기</kb-button>
      <kb-button yellow @click="btnClose">닫기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI02A006',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    btnClose() {
      this.$emit('close');
    },
  },
};
</script>
