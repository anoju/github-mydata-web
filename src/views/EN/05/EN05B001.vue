<template>
  <kb-page page-title="카카오페이 인증서 발급">
    <kb-page-body>
      <div class="section">
        <div class="kakaopay">
          복잡한 공동인증서 발급 대신,<br>
          <p>쉬운 <strong>카카오페이인증서</strong> 사용해보세요!</p>
        </div>
        <dl class="dl_list mg_t34">
          <dt>카카오페이 인증서란?</dt>
          <dd>기존 공동인증서를 대체함과 동시에 번거로움을 최소화한 인증서로서, 카카오톡 앱만 있다면 쉽고 빠르게 인증서를 발급 받으실수 있습니다.</dd>
          <dt>매우 간편한 발급절차</dt>
          <dd>
            인증서발급 &gt; 약관동의 및 휴대폰 본인인증 &gt; 비밀번호 등록<br>
            <kb-button
              h28
              line
              class="type2 mg_t12"
              @click="showFullPopup($event.target)">
              발급절차 자세히보기
            </kb-button>
          </dd>
          <dt>긴~~유효기간</dt>
          <dd>기존 공동인증서의 유효기간은 1년이지만 <span class="fc_red">카카오페이 인증서는 무려 2년</span></dd>
          <dt>발급즉시 사용 가능</dt>
          <dd>기존과 달리 인증서 발급 후 따로 옮겨 담는 번거로움 없이 카카오페이 인증서는 <span class="fc_red">발급즉시 사용 가능</span></dd>
        </dl>
        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            인증서 가져오기
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>

<script>
export default {
  name: 'EN05B001',
  data() {
    return {
    };
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/EN/05/EN05B002.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>
