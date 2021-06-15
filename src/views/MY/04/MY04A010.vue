<template>
  <kb-page
    page-title="개인정보 관리"
  >
    <kb-page-body>
      <div class="section">
        <kb-title-bar h3 class="mg_t16">
          <template slot="left">
            <h2 class="tit">기본정보</h2>
          </template>
          <kb-button aTag line blue link>내 정보보기</kb-button>
        </kb-title-bar>
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <div class="lbl">휴대전화</div>
              <div>
                <p class="fz_16 fw_bold">010-12**-12**</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="flex">
              <div class="lbl">이메일</div>
              <div>
                <p class="fz_16 fw_bold">ABCD****@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="flex">
              <div class="lbl">회원탈퇴</div>
              <div>
                <kb-button link><span class="fc_blue">탈퇴하기</span></kb-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button yellow>
          변경하기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A010',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
