<template>
  <kb-page page-title="KB증권 연동정보">
    <kb-page-body>
      <div class="section">
        <p class="mg_t12 fz_12 fc_666">정보연동 추가 및 삭제, 요청기간 변경 등을 하시려면 ‘전송요청변경’을 진행해 주세요.</p>

        <kb-title-bar title="전송요청상세" class="mg_t24" />
        <div class="info_txt_box type2 mg_t12">
          <ul class="list">
            <li>
              <div class="th">연동정보</div>
              <div class="td">
                <div><strong>계좌정보</strong></div>
                <div><strong>개인형 IRP정보</strong></div>
              </div>
            </li>
            <li>
              <div class="th">연동주기</div>
              <div class="td">
                <div><strong>정기적 전송</strong></div>
                <div><strong>매일 1회</strong></div>
              </div>
            </li>
            <li>
              <div class="th">정보연동 요청기간</div>
              <div class="td"><strong>2021/01/12 ~ 2022/01/11</strong></div>
            </li>
            <li>
              <div class="th">정보연동목적</div>
              <div class="td">
                <div><strong>통합자산조회</strong></div>
                <div><strong>금융상품추천</strong></div>
              </div>
            </li>
            <li>
              <div class="th">정보 보유기간</div>
              <div class="td"><strong>요청 시작일로부터 5년</strong></div>
            </li>
          </ul>
        </div>

        <kb-title-bar title="연동계좌/정보" class="mg_t32" />
        <ul class="transfer_acc_list box_type mg_t12">
          <li class="type2">
            <div class="status">
              <span class="fc_blue">활동</span>
              <span>종합계좌</span>
            </div>
            <div class="text">
              <span>종합위탁</span>
              <span>홍길동</span>
              <p class="acc_num">123-124234-12 02</p>
            </div>
          </li>
          <li class="type2">
            <div class="status">
              <span class="fc_blue">활동</span>
              <span>종합계좌</span>
            </div>
            <div class="text">
              <span>종합위탁</span>
              <span>홍길동</span>
              <p class="acc_num">123-124234-12 02</p>
            </div>
          </li>
        </ul>
        <kb-button-wrap class="mg_t16">
          <kb-button
            line
            blue
            h40
          >
            연동해지
          </kb-button>
          <kb-button
            line
            blue
            h40
          >
            전송요청변경
          </kb-button>
        </kb-button-wrap>

        <kb-button-wrap bottom-fixed>
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
