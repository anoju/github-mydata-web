<template>
  <kb-pop
    bottom
    title="이체금액확인"
  >
    <kb-pop-body>
      <div class="section">
        <div class="info_txt_box">
          <ul class="list">
            <li>
              <div class="th">출금가능금액</div>
              <div class="td"><strong>1,200,000원</strong></div>
            </li>
            <li>
              <div class="th">이체금액</div>
              <div class="td"><strong>300,000,000원</strong></div>
            </li>
          </ul>
        </div>
        <div class="mg_t32 mg_b32 t_center">
          이체하실 금액이 출금금액보다 큽니다. <br>
          이체금액 확인 후 다시 시도해주세요.
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        yellow
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR03A002',
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
