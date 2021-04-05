<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="result_wrap">
        <h2><i class="ico_big_warning"></i>이체가 실패하였습니다.</h2>
        <div class="mg_t30">
          <dl class="result_list">
            <dt>출금계좌</dt>
            <dd>KB증권 종합위탁 <br />110-123-123455 김국민</dd>
            <dt>입금계좌</dt>
            <dd>우리은행 <br />1002644334633 김국민</dd>
            <dt>수수료</dt>
            <dd>0원</dd>
            <dt>처리결과</dt>
            <dd>
              <span class="fc_red">등록실패</span>
            </dd>
            <dt>계좌번호</dt>
            <dd>오류원인은 무었일까 오류원인은 무었일까 오류원인은 무었일까 오류원인은 무었일까 </dd>
          </dl>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          확인
        </kb-button>
        <kb-button
          yellow
        >
          재시도
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'TR06A002',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
