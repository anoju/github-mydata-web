<template>
  <kb-page page-title="이체정보확인">
    <kb-page-body>
      <div class="section">
        <div class="result_info_check">
          <dl>
            <dt>출금계좌</dt>
            <dd>
              KB증권 종합위탁<br />
              275-123456-21 김국민
            </dd>
          </dl>
          <dl>
            <dt>입금계좌</dt>
            <dd>
              우리은행<br />
              275-123456-21 김국민
            </dd>
          </dl>
          <dl>
            <dt>내통장표시</dt>
            <dd>종합위탁 275-123456-21</dd>
          </dl>
          <dl>
            <dt>받는통장표시</dt>
            <dd>홍길동</dd>
          </dl>
          <dl>
            <dt>수수료</dt>
            <dd>0원</dd>
          </dl>
          <dl class="total">
            <dt>이체금액</dt>
            <dd>300,000,000원</dd>
          </dl>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          취소하기
        </kb-button>
        <kb-button
          yellow
          @click="showRule('views/TR/05/TR05B001',$event.target)"
        >
          이체하기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TR05A003',
  data() {
    return {
      inpVal1: '',
      radioVal1: '',
    };
  },
  methods: {
    showRule(src, el) {
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
  },
};
</script>
