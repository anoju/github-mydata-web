<template>
  <kb-page page-title="안면인증 등록">
    <kb-page-body>
      <div class="util_wrap face_reg ty2">
        <div class="top_box">
          <p class="top_tit big">안면인증 로그인</p>
        </div>
        <div class="text_box">
          <i class="ico_face" />
        </div>
        <div class="footer_box">
          <p class="info_text small">스마트폰에 얼굴을 사용하여<br>인증합니다.</p>
          <p class="info_text tip">본인의 얼굴정보만 등록되어 있는지 꼭 확인하세요.</p>
        </div>
      </div>
      <div class="login_btm_btn">
        <kb-button
          to="#"
          link
        >
          재등록
        </kb-button>
        <kb-button
          to="#"
          link
        >
          다른 방법으로 로그인
        </kb-button>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT01B002',
  data() {
    return {
      agree: false,
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
