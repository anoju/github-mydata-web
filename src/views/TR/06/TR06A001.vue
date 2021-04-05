<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="result_wrap">
        <h2><i class="ico_check"></i>이체가 완료되었습니다.</h2>
        <dl class="result_list type2">
          <dt>출금계좌</dt>
          <dd>KB증권 종합위탁 <br />110-123-123455 김국민</dd>
          <dt>입금계좌</dt>
          <dd>우리은행 <br />1002644334633 김국민</dd>
          <dt>수수료</dt>
          <dd>0원</dd>
        </dl>
        <dl class="result_list total">
          <dt>이체금액</dt>
          <dd>300,000,000원</dd>
        </dl>

        <kb-button aTag not class="btn_kakao"><i class="ico_kakao"></i>카카오톡으로 전송</kb-button>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          내역확인
        </kb-button>
        <kb-button
          yellow
        >
          추가이체
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'TR06A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
