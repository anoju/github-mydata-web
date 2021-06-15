<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="result_wrap">
        <h2><i class="ico_check"></i>요청하신 15개 기관/업체 <br />겨좌 및 정보 연동 결과입니다.</h2>
        <p class="sub_text">완료 3건 / 실패 1건</p>
        <dl class="result_list">
          <dt>KB증권</dt>
          <dd>
            <span class="fc_blue">등록완료</span>
          </dd>
        </dl>
        <dl class="result_list">
          <dt>KB증권</dt>
          <dd>
            <span class="fc_red">등록실패</span>
            <!-- 2021-05-24 기획에서 얼럿 팝업으로 공통으로 변경한다는 이야기가 있었음
            <kb-button h28 line @click="showPop($event.target)">자세히</kb-button>
             -->
            <kb-button h28 line>자세히</kb-button>
          </dd>
        </dl>
        <dl class="result_list">
          <dt>KB증권</dt>
          <dd>
            <span class="fc_blue">등록완료</span>
          </dd>
        </dl>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          재요청
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
  name: 'UT14B030',
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
