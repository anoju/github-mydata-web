<template>
  <kb-page page-title="구매하기">
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
        <kb-btn-toggle class="mg_t24">
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal1"
              button
              value="1"
            >
              실시간거래
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="2"
            >
              적립식거래
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>

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

            <template v-if="toggleVal1 === '1'">
              <kb-form-item
                type2
                label="주문수량"
                :labelWidth="100"
              >
                <kb-spinner
                  :min="1"
                  v-model="spinnerVal"
                  unit="주"
                  title="구매수량입력"
                  :disabled="true"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="1주 주문금액"
                :labelWidth="100"
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
            </template>

            <template v-if="toggleVal1 === '2'">
              <kb-form-item
                type2
                label="주문 가격 옵션"
                :labelWidth="100"
              >
                <kb-select
                  v-model="selectVal2"
                  :options="selectOpt2"
                  title="주문 가격 옵션 선택"
                  :disabled="true"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="총 주문금액"
                :labelWidth="100"
              >
                <kb-input
                  v-model="priceVal2"
                  type="tel"
                  input-class="t_right"
                  unit="원"
                  title="총 주문금액"
                  :disabled="true"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="주문 수량"
                :labelWidth="100"
              >
                <kb-input
                  v-model="orderNum"
                  type="tel"
                  input-class="t_right"
                  unit="주"
                  title="주문 수량"
                  readonly
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="자동구매일"
                :labelWidth="100"
              >
                <kb-select
                  v-model="selectVal3"
                  :options="selectOpt3"
                  title="자동구매일 선택"
                  :disabled="true"
                />
              </kb-form-item>
              <hr class="hr_line ty2 inset mg_t24" aria-hidden="true">
              <kb-form-item
                type2
                label="자동구매일"
                :labelWidth="100"
                class="mg_t16"
              >
                <kb-checkbox
                  v-model="chkVal"
                  class="mg_t12"
                  :disabled="true"
                >
                  설정하기
                </kb-checkbox>
              </kb-form-item>
              <template v-if="chkVal">
                <kb-form-item
                  type2
                  label="매입평균가 +"
                  :labelWidth="100"
                >
                  <kb-input
                    v-model="buyPrice1"
                    type="tel"
                    input-class="t_right"
                    unit="%"
                    title="매입평균가 플러스 비율"
                  />
                </kb-form-item>
                <kb-form-item
                  type2
                  label="매입평균가 -"
                  :labelWidth="100"
                >
                  <kb-input
                    v-model="buyPrice2"
                    type="tel"
                    input-class="t_right"
                    unit="%"
                    title="매입평균가 마이너스 비율"
                  />
                </kb-form-item>
              </template>
            </template>
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

            <template v-if="toggleVal1 === '1'">
              <kb-form-item
                type2
                label="주문수량"
                :labelWidth="100"
              >
                <kb-spinner
                  :min="1"
                  v-model="spinnerVal"
                  unit="주"
                  title="구매수량입력"
                  :disabled="false"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="1주 주문금액"
                :labelWidth="100"
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
            </template>

            <template v-if="toggleVal1 === '2'">
              <kb-form-item
                type2
                label="주문 가격 옵션"
                :labelWidth="100"
              >
                <kb-select
                  v-model="selectVal2"
                  :options="selectOpt2"
                  title="주문 가격 옵션 선택"
                  :disabled="false"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="총 주문금액"
                :labelWidth="100"
              >
                <kb-input
                  v-model="priceVal2"
                  type="tel"
                  input-class="t_right"
                  unit="원"
                  title="총 주문금액"
                  :disabled="false"
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="주문 수량"
                :labelWidth="100"
              >
                <kb-input
                  v-model="orderNum"
                  type="tel"
                  input-class="t_right"
                  unit="주"
                  title="주문 수량"
                  readonly
                />
              </kb-form-item>
              <kb-form-item
                type2
                label="자동구매일"
                :labelWidth="100"
              >
                <kb-select
                  v-model="selectVal3"
                  :options="selectOpt3"
                  title="자동구매일 선택"
                  :disabled="false"
                />
              </kb-form-item>
              <hr class="hr_line ty2 inset mg_t24" aria-hidden="true">
              <kb-form-item
                type2
                label="자동구매일"
                :labelWidth="100"
                class="mg_t16"
              >
                <kb-checkbox
                  v-model="chkVal"
                  class="mg_t12"
                  :disabled="false"
                >
                  설정하기
                </kb-checkbox>
              </kb-form-item>
              <template v-if="chkVal">
                <kb-form-item
                  type2
                  label="매입평균가 +"
                  :labelWidth="100"
                >
                  <kb-input
                    v-model="buyPrice1"
                    type="tel"
                    input-class="t_right"
                    unit="%"
                    title="매입평균가 플러스 비율"
                  />
                </kb-form-item>
                <kb-form-item
                  type2
                  label="매입평균가 -"
                  :labelWidth="100"
                >
                  <kb-input
                    v-model="buyPrice2"
                    type="tel"
                    input-class="t_right"
                    unit="%"
                    title="매입평균가 마이너스 비율"
                  />
                </kb-form-item>
              </template>
            </template>
          </li>
        </ul>

        <template v-if="toggleVal1 === '1'">
          <kb-foldings
            not
            class="accordion_dl mg_t28"
            first-open
          >
            <kb-folding title="유의사항">
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
        </template>

        <template v-if="toggleVal1 === '2'">
          <kb-foldings
            not
            class="accordion_dl mg_t28"
            first-open
          >
            <kb-folding title="적립식 거래">
              <div class="txt_list">
                <ul>
                  <li class="dot">적립식 거래는 최소 3개월 이상, 매 1개월 단위로 지정하신 일자에 은행의 적금처럼 매월 일정액의 상품을 매수하는 거래입니다.</li>
                  <li class="dot">시작년월이 당월인 경우 서비스 개시일은 다음 영업일이 되며, 당월이 아닌 경우에는 신청월 초일이 서비스 개시일이 됩니다.</li>
                  <li class="dot">지정한 매수일이 토/공휴일인 경우 한국거래소 기준 익영업일에 자동 매수처리 됩니다.</li>
                  <li class="dot">1주 가격은 상품을 조회한 시점으로 보여집니다.</li>
                  <li class="dot">거래 가능 시간은 평일 07:00 ~ 23:00 입니다. <br>
                    (토/공휴일 제외)</li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </template>
      </div>
      <kb-button-wrap bottom-fixed>
        <template slot="inner">
          <div>
            <div class="cont total">
              <div class="flex_wrap space_between" v-if="true">
                <div class="error_txt icon mg_t0"><strong>예수금이 부족합니다.</strong></div>
                <kb-button
                  link
                >
                  예수금 채우기<i class="bt_ic_arr" aria-hidden="true" />
                </kb-button>
              </div>
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
                up
                :disabled="true"
              >
                구매하기
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
  name: 'IN15D001',
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
      priceVal: 100000,
      priceVal2: 100000,
      orderNum: 3,
      chkVal: false,
      buyPrice1: 5,
      buyPrice2: 5,
    };
  },
  methods: {
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
