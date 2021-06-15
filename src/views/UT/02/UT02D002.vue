<template>
  <kb-page page-title="지문인증 등록" >
    <kb-page-body>
      <div class="mg_bm35">
        <div class="util_wrap fingerprint_reg">
          <div class="top_box">
            <p class="top_tit big">지문인증 등록이<br>필요합니다.</p>
          </div>
          <div class="text_box">
            <i class="ico_fingerprint" aria-hidden="true" />
            <!-- 2021-05-24 -->
            <div class="flex_wrap justify_center">
              <div
                class="error_txt icon"
              >
                입력하신 비밀번호와 다릅니다. (n/5)
              </div>
            </div>
            <!-- //2021-05-24 -->
          </div>
          <div class="footer_box">
            <p class="info_text small">스마트폰에 등록된 지문정보를 사용하여<br>등록 후 지문인증을 이용하세요.</p>
            <p class="info_text tip">본인의 지문정보만 등록되어 있는지 꼭 확인하세요.</p>
          </div>
        </div>

        <kb-foldings
          not
          class="accordion_dl section"
        >
          <kb-folding class="pd_b25" title="이용안내">
            <ul class="txt_list">
              <!-- 2021-05-24-->
              <li class="dot">KB증권 '오늘'APP을 삭제하시거나 스마트폰을 변경하시면 지문을 재등록 해 주세요.</li>
              <li class="dot">연속으로 5회 생체인증 실패하시면 다른 방법으로 로그인을 하셔야 합니다.</li>
              <li class="dot">생체인증 등록 후 스마트폰에 등록된 생체인증 정보가 추가, 삭제 등 변경되면 생체인증을 재등록하셔야 합니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            등록
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02D002',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
