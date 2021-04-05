<template>
  <kb-pop
    bottom
    title="예금주확인"
  >
    <kb-pop-body>
      <div class="section">
        <div class="info_txt_box mg_b24">
          <div class="check_info">
            <div class="tit"><strong>김국민</strong></div>
            <div class="txt">받는분 성함이 맞나요?</div>
          </div>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        line
        @click="popClose"
      >
        아니오
      </kb-button>
      <kb-button
        yellow
        @click="popClose"
      >
        예
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR05A001',
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
