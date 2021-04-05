<template>
  <kb-page>
    <template slot="header">
      <div class="header_flex">
        <h1>즉시이체</h1>
        <kb-button not class="ico_tip" @click="showRule('views/TR/07/TR07A001',$event.target)">도움말</kb-button>
      </div>
    </template>
    <kb-page-body>
      <div class="section">
        <div class="transfer_imm_wrap">
          <kb-button aTag class="btn_select_type" @click="withdrawPopup($event.target)">
            <p class="tit">KB국민 종합위탁 김국민</p>
            <strong class="acc">275-666-22132-01</strong>
          </kb-button>
          <!-- 이체금액 -->
          <kb-form-item
            label="이체금액"
          >
            <template slot="labelRight">
              <span class="fz_12">출금가능금액 {{ amountVal }}원</span>
            </template>
            <kb-input
              v-model="inpVal1"
              type="tel"
              input-class="t_right"
              unit="원"
              placeholder="이체금액 입력"
              title="이체금액 입력"
              ref="reset"
            />
          </kb-form-item>
          <template v-if="!depositAcc">
            <kb-btn-toggle small class="amount_type mg_t10">
              <kb-btn-toggle-row>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="1"
                >
                  100만
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="2"
                >
                  50만
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="3"
                >
                  10만
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="4"
                >
                  5만
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="5"
                >
                  1만
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="6"
                >
                  전액
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </template>
          <!-- //이체금액 -->

          <!-- 입금계좌 -->
          <template v-if="depositAcc">
            <kb-form-item
              label="입금계좌"
            >
              <template slot="labelRight">
                <kb-button line h28 small @click="depositPopup($event.target)">
                  최근계좌
                </kb-button>
                <kb-button line h28 small class="mg_l6" @click="depositPopup($event.target)">
                  내계좌
                </kb-button>
              </template>
              <div class="select acc_type">
                <a href="#" class="btn_select" @click="financialPopup($event.target)">
                  <div class="cut">
                    <i class="logo"><img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" /></i>
                    <span class="name">뱅크오브아메리카</span>
                  </div>
                </a>
                <kb-input v-model="fmVal1" type="tel" title="입금계좌번호 입력" />
              </div>
            </kb-form-item>
          </template>
          <!-- //입금계좌 -->
        </div>

        <!-- 다른 금융기관 출금계좌 선택시 노출 -->
        <ul class="txt_list">
          <li class="dot">다른 금융기관의 출금계좌(오픈뱅킹 등록계좌)의 출금한도는 전 금융기관 합산 1일 1천만원<br>(KB증권 이체한도와 별도로 운영)</li>
        </ul>
        <!-- //다른 금융기관 출금계좌 선택시 노출 -->

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
            @click="nextClick"
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
  name: 'TR03A001',
  data() {
    return {
      amountVal: '10000',
      inpVal1: '',
      toggleVal1: '',
      fmVal1: '123456789012345',
      depositAcc: false,
    };
  },
  mounted() {
    this.withdrawPopup();
  },
  methods: {
    nextClick() {
      const amountVal = Number(this.amountVal);
      const transferVal = Number(this.inpVal1);
      if (transferVal > 0) {
        if (transferVal <= amountVal) {
          if (!this.depositAcc) {
            this.depositAcc = !this.depositAcc;
          }
        } else if (transferVal > amountVal) {
          this.checkAmountPopup();
        }
      }
    },
    resetamountVal(ref) { // 이체금액 초기화
      this.inpVal1 = '';
      this.$refs[ref].$refs.input.focus();
    },
    showRule(src, el) { // 즉시이체 이용안내 팝업
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
    withdrawPopup(el) { // 출금계좌선택
      this.$modal({
        component: () => import('@/views/TR/01/TR01A001.vue'),
        returnFocus: el,
      });
    },
    depositPopup(el) { // 입금계좌선택
      this.$modal({
        component: () => import('@/views/TR/04/TR04A002.vue'),
        returnFocus: el,
      });
    },
    financialPopup(el) { // 입금기관선택
      this.$modal({
        component: () => import('@/views/TR/04/TR04B001.vue'),
        returnFocus: el,
      });
    },
    checkAmountPopup(el) { // 이체금액확인
      this.$modal({
        component: () => import('@/views/TR/03/TR03A002.vue'),
        returnFocus: el,
      }).then(() => {
        this.resetamountVal('reset');
      });
    },
  },
};
</script>
