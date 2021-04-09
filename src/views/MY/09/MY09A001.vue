<template>
  <kb-page page-title="연동정보 보기 설정">
    <kb-page-body>
      <div class="section">
        <p class="mg_t12 fz_14 fc_666">개인신용정보 연동 자산의 금액 숨김 여부를 정하실 수 있습니다. <br />금액을 숨기시면 전체 서비스 화면에서 금액은 보이지 않고 자산연동/평가는 그대로 유지됩니다.</p>

        <div class="setting_info">
          <h2>계좌/정보</h2>
          <kb-button not aTag @click="slideBoxMotion"><i class="ico_setting"></i>숨김설정</kb-button>
        </div>

        <div class="setting_view_box" ref="slideBox">
          내용내용내용
        </div>

        <kb-foldings type1 not-toggle class="acc_info_list mg_t24" first-open>
          <kb-folding>
            <template slot="title">
              <div class="acc_info_head">
                <strong>은행</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type2">
                    <div class="status">
                      <span class="fc_blue">활동</span>
                      <span>비활동</span>
                      <span>유형</span>
                    </div>
                    <div class="text">
                      <span>우리은행</span> <!-- 기관명 -->
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <span class="hidden">숨김</span>
                  </li>
                  <li class="type2">
                    <div class="status">
                      <span class="fc_blue">활동</span>
                      <span>비활동</span>
                      <span>유형</span>
                    </div>
                    <div class="text">
                      <span>우리은행</span> <!-- 기관명 -->
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <!-- <span class="hidden">숨김</span> -->
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              <div class="acc_info_head">
                <strong>투자</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type2">
                    <div class="status">
                      <span class="fc_blue">활동</span>
                      <span>비활동</span>
                      <span>유형</span>
                    </div>
                    <div class="text">
                      <span>우리은행</span> <!-- 기관명 -->
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <span class="hidden">숨김</span>
                  </li>
                  <li class="type2">
                    <div class="status">
                      <span class="fc_blue">활동</span>
                      <span>비활동</span>
                      <span>유형</span>
                    </div>
                    <div class="text">
                      <span>우리은행</span> <!-- 기관명 -->
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <!-- <span class="hidden">숨김</span> -->
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>

        <kb-button-wrap bottom-fixed>
          <kb-button
            line
          >
            취소
          </kb-button>
          <kb-button
            yellow
          >
            확인
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY09A001',
  data() {
    return {
      slideCheck: false,
    };
  },
  methods: {
    slideBoxMotion() {
      if (this.slideCheck) {
        this.$slideDown(this.$refs.slideBox, 500, () => {
          this.slideCheck = false;
        });
      } else {
        this.$slideUp(this.$refs.slideBox, 500, () => {
          this.slideCheck = true;
        });
      }
    },
  },
};
</script>
