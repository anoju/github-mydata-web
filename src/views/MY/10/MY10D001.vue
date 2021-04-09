<template>
  <kb-page page-title="KB증권 연동해지">
    <kb-page-body>
      <div class="section">
        <kb-step :total="3" :now="1">정보 및 기간확인</kb-step>

        <p class="mg_t8 fz_12 fc_666">정보 연동해지를 하시면 더 이상 전송요청을 하지 않고 연동해지 전까지 요청 받은 정보로만 서비스 이용이 가능합니다.</p>

        <kb-title-bar title="연동된 개인신용정보 및 기간" class="mg_t24" />
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
              <div class="th">정보연동 요청기간</div>
              <div class="td"><strong>2021/01/12 ~ 2022/01/11</strong></div>
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

        <kb-button-wrap bottom-fixed>
          <kb-button
            line
          >
            취소
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
  name: 'MY10D001',
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
