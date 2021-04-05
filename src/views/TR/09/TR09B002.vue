<template>
  <kb-pop
    bottom
    title="인증번호"
  >
    <kb-pop-body>
      <div class="section">
        <div class="call_check_number mg_b29">
          <div class="number">
            <strong>64</strong>
          </div>
          <div class="call">
            <strong class="fc_666">발신번호</strong>
            <strong class="fc_blue">1588-6611</strong>
          </div>
          <div class="txt">
            선택하신 번호로 전화를 걸고 있습니다.<br>
            위 인증번호를 입력해 주세요.<br>
            인증 완료 후 자동으로 팝업이 닫힙니다.
          </div>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR09A002',
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
