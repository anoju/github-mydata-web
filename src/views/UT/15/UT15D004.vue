<template>
  <kb-page page-title="판매하기">
    <kb-page-body>
      <div class="section">
        <kb-form-item
          label="계좌번호"
        >
          <kb-select
            v-model="selectVal1"
            :options="selectOpt1"
            title="계좌번호 선택"
          />
          <kb-input
            ref="password"
            type="password"
            v-model="passwordVal"
            title="계좌번호 비밀번호"
            placeholder="비밀번호를 입력해주세요."
            @keyup.enter="pwdAlert($event.target)"
          />
          <div class="flex_wrap justify_end align_center mg_t8">
            <div class="fz_12 fc_gray mg_r8">
              예수금 : 10,000원
            </div>
            <kb-button
              yellow
              h28
            >
              채우기
            </kb-button>
          </div>
        </kb-form-item>

        <ul class="procduct_opt_list">
          <li>
            <div class="procduct_info_txt">
              <div class="left">
                <div class="th">005930</div>
                <div class="td"><strong>삼성전자 텍스트 길면 삼성전자 텍스트 길면</strong></div>
              </div>
              <div class="right">
                <div class="th">1주 가격</div>
                <div class="td"><strong>1,000,000원</strong></div>
              </div>
            </div>

            <kb-form-item
              type2
              label="주문수량"
              :labelWidth="100"
            >
              <kb-spinner
                :min="1"
                :max="userVal"
                v-model="spinnerVal"
                unit="주"
                title="구매수량입력"
                :disabled="true"
              />
              <kb-checkbox
                v-model="chkVal2"
                class="mg_t12"
                :disabled="true"
                @change="userValChk"
              >
                총 {{userVal}}주 판매하기
              </kb-checkbox>
            </kb-form-item>
            <kb-form-item
              type2
              label="1주 주문금액"
              :labelWidth="100"
              class="mg_t24"
            >
              <kb-input
                v-model="priceVal"
                type="tel"
                input-class="t_right"
                unit="원"
                title="1주 주문금액"
                :disabled="true"
              />
            </kb-form-item>
          </li>
          <li>
            <div class="procduct_info_txt">
              <div class="left">
                <div class="th">005930</div>
                <div class="td"><strong>삼성전자 텍스트 길면 삼성전자 텍스트 길면</strong></div>
              </div>
              <div class="right">
                <div class="th">1주 가격</div>
                <div class="td"><strong>1,000,000원</strong></div>
              </div>
            </div>

            <kb-form-item
              type2
              label="주문수량"
              :labelWidth="100"
            >
              <kb-spinner
                :min="1"
                :max="userVal"
                v-model="spinnerVal"
                unit="주"
                title="구매수량입력"
                :disabled="false"
              />
              <kb-checkbox
                v-model="chkVal2"
                class="mg_t12"
                :disabled="false"
                @change="userValChk"
              >
                총 {{userVal}}주 판매하기
              </kb-checkbox>
            </kb-form-item>
            <kb-form-item
              type2
              label="1주 주문금액"
              :labelWidth="100"
              class="mg_t24"
            >
              <kb-input
                v-model="priceVal"
                type="tel"
                input-class="t_right"
                unit="원"
                title="1주 주문금액"
                :disabled="false"
              />
            </kb-form-item>
          </li>
        </ul>

        <kb-foldings
          not
          class="accordion_dl mg_t28"
          first-open
        >
          <kb-folding active>
            <template slot="title">
              유의사항
            </template>
            <div class="txt_list">
              <ul>
                <li class="dot">
                  거래 신청 즉시 결과를 확인 할 수 있습니다.
                  <ul>
                    <li class="dash">
                      <div class="flex_wrap">
                        <span class="nowrap mg_r4">구매 :</span>
                        <span>입력한 가격 또는 입력한 가격 미만의 가격에 체결 가능한 수량만큼 즉시 체결</span>
                      </div>
                    </li>
                    <li class="dash">
                      <div class="flex_wrap">
                        <span class="nowrap mg_r4">판매 :</span>
                        <span>입력한 가격 또는 입력한 가격 초과의 가격에 체결 가능한 수량만큼 즉시 체결</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="dot">
                  체결되지 못한 나머지 수량은 즉시 취소됩니다.
                  <div class="fc_gray">예) 시장가 10,000원에 10주를 신청했을 때 체결 가능 수량이 5개라면 5주만 매수되고 나머지 수량은 취소됩니다.</div>
                </li>
                <li class="dot">1주 가격은 상품을 조회한 시점으로 보여집니다.</li>
                <li class="dot">거래 가능 시간은 평일 09:00 ~ 15:30 입니다. <br>
                  (토/공휴일 제외)</li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>
      </div>
      <kb-button-wrap bottom-fixed>
        <template slot="inner">
          <div>
            <div class="cont total">
              <div class="flex">
                <div class="th">
                  총 주문 금액
                </div>
                <div class="td">
                  <strong>100,000원</strong>
                </div>
              </div>
            </div>
            <div class="flex mg_t16">
              <kb-button
                down
                :disabled="true"
              >
                판매하기
              </kb-button>
            </div>
          </div>
        </template>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN15D004',
  data() {
    return {
      selectVal1: '1',
      selectOpt1: [
        { text: '110-123-132 45 김스타', value: '1' },
      ],
      selectVal2: '0',
      selectOpt2: [
        { text: '전일종가', value: '0' },
        { text: '전일종가 +1%', value: '1' },
        { text: '전일종가 +2%', value: '2' },
        { text: '전일종가 +3%', value: '3' },
        { text: '전일종가 +4%', value: '4' },
        { text: '전일종가 +5%', value: '5' },
        { text: '전일종가 +6%', value: '6' },
        { text: '전일종가 +7%', value: '7' },
        { text: '전일종가 +8%', value: '8' },
        { text: '전일종가 +9%', value: '9' },
        { text: '전일종가 +10%', value: '10' },
        { text: '전일종가 +11%', value: '11' },
        { text: '전일종가 +12%', value: '12' },
        { text: '전일종가 +13%', value: '13' },
        { text: '전일종가 +14%', value: '14' },
        { text: '시장가', value: '100' },
      ],
      selectVal3: '',
      selectOpt3: [
        { text: '선택', value: '' },
        { text: '6일', value: '6' },
      ],
      passwordVal: '',
      pwdFail: 0,
      toggleVal1: '1',
      spinnerVal: 1,
      userVal: 50,
      priceVal: 100000,
      priceVal2: 100000,
      orderNum: 3,
      chkVal: false,
      chkVal2: false,
      buyPrice1: 5,
      buyPrice2: 5,
    };
  },
  watch: {
    spinnerVal() {
      if ((this.spinnerVal !== this.userVal) && this.chkVal2) {
        this.chkVal2 = false;
      }
    },
  },
  methods: {
    userValChk() {
      if (this.chkVal2) this.spinnerVal = this.userVal;
    },
    pwdAlert(e) {
      this.pwdFail += 1;
      if (this.pwdFail < 5) {
        const msg = `<div>계좌비밀번호 <strong class="fc_blue">${this.pwdFail}</strong>회 오류 입니다.</div>
          <br>
          <div>앞으로 <strong class="fc_blue">${5 - this.pwdFail}</strong>회까지 입력가능합니다.</div>
          <div class="fz_12">(5회 연속 오류 시 차단해지 후 사용가능)</div>`;
        this.$alert(msg, e);
      } else {
        const msg2 = `<div><strong class="fc_red">비밀번호 5회 오류입니다.</strong></div>
          <br>
          <div class="fz_12">비밀번호 차단 해지 후 다시 시도해주세요.</div>`;
        this.$confirm(msg2, e, '', {
          confirmTxt: '차단해지',
        }).then((result) => {
          if (result) {
            console.log('차단해지');
          }
        });
      }
    },
  },
};
</script>
