<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <div class="section">
        <div class="section pd_t96 t_center">
          <kb-title-bar h2 center title="계좌 비밀번호를 입력해주세요" />
          <div class="fc_blue lh_15 mg_t32"><strong>종합위탁 275-666-111-01</strong></div>
          <kb-input class="mg_t16" type="password" title="비밀번호 입력" placeholder="비밀번호 입력" />
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR02A001',
  data() {
    return {
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>
