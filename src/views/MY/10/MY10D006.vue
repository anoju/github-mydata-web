<template>
  <kb-page noHeader>
    <kb-page-body>
      <!-- 성공 -->
      <div class="result_wrap">
        <h2><i class="ico_check"></i>KB증권<br>연동해지가 완료되었습니다.</h2>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권</dd>
          <dt>처리결과</dt>
          <dd><strong class="fc_blue">연동해지완료</strong></dd>
        </dl>
      </div>
      <!-- //성공 -->

      <!-- 실패 -->
      <div class="result_wrap">
        <h2><i class="ico_big_warning"></i>KB증권<br>연동해지가 실패했습니다.</h2>
        <dl class="result_list">
          <dt>연동기관</dt>
          <dd>KB증권 870011111101</dd>
          <dt>처리결과</dt>
          <dd><strong class="fc_red">해지실패</strong></dd>
          <dt>실패사유</dt>
          <dd>오류 원인이 나옵니다. 오류 원인이 나옵니다. 오류 원인이 나옵니다. 오류 원인이 나옵니다.</dd>
        </dl>
      </div>
      <!-- //실패 -->
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
  name: 'MY10D006',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
