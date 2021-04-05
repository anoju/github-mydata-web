<template>
  <kb-page page-title="공동인증서 본인확인">
    <kb-page-body>
      <div class="section">
        <div class="section">
          <kb-title-bar h1 class="pd_t40" title="본인확인을 <br>완료해 주세요." />
          <div class="certificate_wrap">
            <div class="box">
              <div class="inner">
                <div class="ico"></div>
                <div class="cont">
                  <div class="tit"><strong>김국민-12214252</strong></div>
                  <div class="sub"><strong>증권/보험용</strong></div>
                  <div class="txt">
                    <div>만료일 2021/01/31</div>
                    <div>SlgaKorea</div>
                  </div>
                </div>
                <div class="btn">
                  <kb-button not aira-label="인증서 선택" />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="inner">
                <div class="ico"></div>
                <div class="cont">
                  <div class="tit"><strong>선택된 인증서가 없습니다.</strong></div>
                </div>
              </div>
            </div>
          </div>
          <kb-input
            type="password"
            v-model="inpVal1"
            title="인증서 비밀번호 입력"
            placeholder="인증서 비밀번호 입력"
          />
        </div>

        <kb-button-wrap bottom-fixed vertical>
          <kb-button class="fw_normal fz_14">
            다른 방법으로 본인확인
          </kb-button>
          <kb-button
            yellow
          >
            다음
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02A010',
  data() {
    return {
      inpVal1: '',
    };
  },
  methods: {
  },
};
</script>
