<template>
  <kb-page page-title="지문인증 로그인">
    <kb-page-body>
      <div class="util_wrap fingerprint_login">
        <div class="top_box">
          <!-- 2021-05-24 -->
          <p class="top_tit big">생체인증 로그인</p>
        </div>
        <div class="text_box">
          <i class="ico_fingerprint" />
        </div>
        <div class="footer_box">
          <p class="info_text small">스마트폰에 등록된 생체인증 정보를<br>사용하여 인증합니다.</p>
          <p class="info_text tip">본인의 생체인증 정보만 등록되어 있는지 꼭 확인하세요.<br />생체인증 정보가 추가, 삭제되면 재등록 후 이용해 주세요.</p>
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
      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          로그인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT01B001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
