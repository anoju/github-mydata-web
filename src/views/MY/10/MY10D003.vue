<template>
  <kb-page page-title="KB증권 연동해지">
    <kb-page-body>
      <div class="section">
        <kb-step :total="3" :now="1">정보 및 기간확인</kb-step>

        <p class="mg_t8 fz_12 fc_666">정보 연동해지를 하시면 더 이상 전송요청을 하지 않고 연동해지 전까지 요청 받은 정보로만 서비스 이용이 가능합니다.</p>

        <kb-foldings type1 not-toggle class="acc_info_list mg_t0" first-open>
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
                  <li>
                    <p class="fz_16 mg_b12 fw_bold">국민은행</p>
                    <dl class="list">
                      <dt>연동정보</dt>
                      <dd>
                        <span>수신계좌정보</span><span>투자상품정보</span>
                      </dd>
                    </dl>
                    <dl class="list">
                      <dt>연동기간</dt>
                      <dd>2020/01/12 ~ 2021/01/11</dd>
                    </dl>
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
