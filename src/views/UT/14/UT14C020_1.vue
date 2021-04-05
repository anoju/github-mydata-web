<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="result_wrap">
        <h2><i class="ico_check"></i>KB증권 계좌 및 <br />정보연동 결과입니다.</h2>
        <p class="sub_text">완료 3건 / 실패 1건</p>
        <dl class="result_list">
          <dt>계좌번호</dt>
          <dd>KB증권 13923483948</dd>
          <dt>처리결과</dt>
          <dd>
            <span class="fc_blue">등록완료</span>
          </dd>
        </dl>
        <dl class="result_list">
          <dt>계좌번호</dt>
          <dd>KB증권 13923483948</dd>
          <dt>처리결과</dt>
          <dd>
            <span class="fc_red">등록실패</span>
            <kb-button h28 line @click="showPop($event.target)">자세히</kb-button>
          </dd>
        </dl>
        <dl class="result_list">
          <dt>계좌번호</dt>
          <dd>KB증권 13923483948</dd>
          <dt>처리결과</dt>
          <dd>
            <span class="fc_blue">등록완료</span>
          </dd>
        </dl>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          계속 추가
        </kb-button>
        <kb-button
          yellow
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14C020_1',
  data() {
    return {
    };
  },
  methods: {
    showPop(el) {
      this.$modal({
        component: () => import('@/views/UT/14/UT14C021.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>
