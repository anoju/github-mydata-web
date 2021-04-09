<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="result_wrap">
        <h2><i class="ico_check"></i>요청하신 15개 기관/업체<br>연동해지 결과입니다.</h2>
        <p class="sub_text">완료 3건 / 실패 1건</p>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권</dd>
          <dt>처리결과</dt>
          <dd><strong class="fc_blue">연동해지완료</strong></dd>
        </dl>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권</dd>
          <dt>처리결과</dt>
          <dd>
            <span class="fc_red">등록실패</span>
            <kb-button h28 line @click="showPop($event.target)">자세히</kb-button>
          </dd>
        </dl>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권</dd>
          <dt>처리결과</dt>
          <dd><strong class="fc_blue">연동해지완료</strong></dd>
        </dl>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권</dd>
          <dt>처리결과</dt>
          <dd>
            <span class="fc_red">등록실패</span>
            <kb-button h28 line @click="showPop($event.target)">자세히</kb-button>
          </dd>
        </dl>
      </div>
      <kb-button-wrap bottom-fixed>
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
  name: 'MY10D007',
  data() {
    return {
    };
  },
  methods: {
    showPop(el) {
      this.$modal({
        component: () => import('@/views/MY/10/MY10D008.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>
