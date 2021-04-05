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
          <template v-if="isSelectBank">
            <kb-form-item
              label="이체금액"
            >
              <template slot="labelRight">
                <span class="fz_12">출금가능금액 {{ this.$addComma(amountVal) }}원</span>
              </template>
              <kb-input
                v-model="inpVal1"
                type="tel"
                input-class="t_right"
                unit="원"
                placeholder="이체금액 입력"
                title="이체금액 입력"
                ref="inpPrice"
              />
            </kb-form-item>
            <template v-if="step === 0">
              <kb-button-wrap class="small_line">
                <kb-button h28 line @click="addPrice(1000000, true)">100만</kb-button>
                <kb-button h28 line @click="addPrice(500000, true)">50만</kb-button>
                <kb-button h28 line @click="addPrice(100000, true)">10만</kb-button>
                <kb-button h28 line @click="addPrice(50000, true)">5만</kb-button>
                <kb-button h28 line @click="addPrice(10000, true)">1만</kb-button>
                <kb-button h28 line @click="addPrice(amountVal, false)">전액</kb-button>
              </kb-button-wrap>
            </template>
          </template>
          <!-- //이체금액 -->

          <template v-if="step !== 0">
            <!-- 입금계좌 -->
            <kb-form-item
              label="입금계좌"
            >
              <template slot="labelRight">
                <kb-button line h28 small @click="depositPopup($event.target, '1')">
                  최근계좌
                </kb-button>
                <kb-button line h28 small class="mg_l6" @click="depositPopup($event.target, '2')">
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
                <kb-input v-model="inpVal2" type="tel" title="입금계좌번호 입력" />
              </div>
            </kb-form-item>
            <!-- //입금계좌 -->

            <!-- 이체메모 -->
            <kb-form-item label="이체메모" class="tbl_type" v-if="step === 2">
              <div>
                <label for="inpVal3">내통장 표시</label>
                <div><kb-input input-id="inpVal3" v-model="inpVal3" placeholder="한글 7자 이내" title="내통장 표시 입력" /></div>
              </div>
              <div>
                <label for="inpVal4">받는통장 표시</label>
                <div><kb-input input-id="inpVal4" v-model="inpVal4" placeholder="미입력시 출금계좌명 표시" title="받는통장 표시 입력" /></div>
              </div>
            </kb-form-item>
          <!-- //이체메모 -->
          </template>
        </div>

        <!-- 다른 금융기관 출금계좌 선택시 노출 -->
        <ul class="txt_list" v-if="isAnother">
          <li class="dot">다른 금융기관의 출금계좌(오픈뱅킹 등록계좌)의 출금한도는 전 금융기관 합산 1일 1천만원<br>(KB증권 이체한도와 별도로 운영)</li>
        </ul>
        <!-- //다른 금융기관 출금계좌 선택시 노출 -->

        <kb-button-wrap bottom-fixed>
          <kb-button
            v-if="step === 0"
            yellow
            :disabled="!isSelectBank || inpVal1 === ''"
            @click="nextClick"
          >
            확인
          </kb-button>
          <kb-button
            v-if="step === 1"
            yellow
            :disabled="inpVal2 === ''"
            @click="accountHolderPopup($event.target)"
          >
            확인
          </kb-button>
          <kb-button
            v-if="step === 2"
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
  name: 'TR03A001',
  data() {
    return {
      step: 0,
      isSelectBank: false,
      isAnother: false,
      amountVal: '100000',
      inpVal1: '',
      inpVal2: '',
      inpVal3: '',
      inpVal4: '',
    };
  },
  mounted() {
    this.withdrawPopup();
  },
  methods: {
    addPrice(val, isAdd) {
      if (isAdd) {
        let oldVal = this.inpVal1;
        if (oldVal === '')oldVal = '0';
        if (oldVal.indexOf(',') > 0)oldVal = this.$removeComma(oldVal);
        oldVal = parseInt(oldVal, 10);
        this.inpVal1 = this.$addComma(oldVal + val);
      } else {
        this.inpVal1 = this.$addComma(val);
      }
    },
    nextClick() {
      const amountVal = Number(this.amountVal);
      const transferVal = Number(this.$removeComma(this.inpVal1));
      if (transferVal > amountVal) {
        this.checkAmountPopup();
      } else {
        this.step += 1;
      }
    },
    resetamountVal() { // 이체금액 초기화
      this.inpVal1 = '';
      setTimeout(() => {
        this.$refs.inpPrice.focus();
      }, 700);
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
      }).then((result) => {
        if (result.payload[1]) this.isAnother = true; // 다른 금융기관 일때
        if (result.payload[0]) {
          this.isSelectBank = true;
          setTimeout(() => {
            this.$refs.inpPrice.focus();
          }, 700);
        }
      });
    },
    depositPopup(el, tab) { // 입금계좌선택
      this.$modal({
        component: () => import('@/views/TR/04/TR04A002.vue'),
        componentProps: {
          tab,
        },
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
        this.resetamountVal();
      });
    },
    accountHolderPopup(el) { // 예금주확인
      this.$modal({
        component: () => import('@/views/TR/05/TR05A001.vue'),
        returnFocus: el,
      }).then((result) => {
        if (result.payload) {
          console.log('확인완료');
          this.step += 1;
        }
      });
    },
  },
};
</script>
