<template>
  <kb-page page-title="공동인증서 본인확인">
    <kb-page-body>
      <div class="section">
        <div class="section full_height_wrap add_dl2">
          <kb-title-bar h1 class="pd_t40" title="인증서를 <br>선택해 주세요." />
          <div class="certificate_wrap">
            <kb-button not class="box">
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
              </div>
            </kb-button>
            <kb-button not class="box">
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
              </div>
            </kb-button>
          </div>

          <!-- 2021-05-24 -->
          <kb-button-wrap>
            <kb-button line>공동인증서 가져오기</kb-button>
          </kb-button-wrap>

          <ul class="txt_list mg_t16">
            <li class="dot">이체, 매도/매수, 상품가입 등 일부 서비스를 이용하시려면 KB증권에 등록된 공동인증서를 선택하세요.<br />
              공동인증서 가져오기를 선택하시면 KB증권에 등록된 공동인증서를 가져올수 있습니다.</li>
          </ul>
          <!-- //2021-05-24 -->
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02A011',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
