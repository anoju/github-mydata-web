<template>
  <div class="section mg_t0">
    <template v-if="dataOn">
      <div class="assets_change_info pd_b0">
        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
          class="type_line"
          inline
        />
        <p class="tit mg_b8">동안 투자 자산이 어떻게 변했지?</p>
        <div class="txt_list2">
          <div class="dot">조회기간은 KB 오늘 앱 <strong>연동일</strong>부터 조회됩니다.</div>
        </div>
        <div class="t_center mg_t24">
          <kb-button line blue class="w_200">투자자산 조회</kb-button>
        </div>
      </div>
      <hr class="hr_line mg_t32" aria-hidden="true" />
      <p class="fz_14 fc_666 mg_t32">조회기간 : 2010/2/01(연동일) - 2021/12/23</p>

      <kb-btn-toggle small inline class="mg_t10">
        <kb-btn-toggle-row>
          <kb-radio
            v-model="toggleVal2"
            button
            value="1"
          >
            전체업권
          </kb-radio>
          <kb-radio
            v-model="toggleVal2"
            button
            value="2"
          >
            KB증권
          </kb-radio>
          <kb-radio
            v-model="toggleVal2"
            button
            value="3"
          >
            키움증권
          </kb-radio>
          <kb-radio
            v-model="toggleVal2"
            button
            value="4"
          >
            mini스탁
          </kb-radio>
          <kb-radio
            v-model="toggleVal2"
            button
            value="5"
          >
            한국투자
          </kb-radio>
        </kb-btn-toggle-row>
      </kb-btn-toggle>

      <div class="today_invest_wrap">
        <!--
          상승 : fc_up
          하락 : fc_down
        -->
        <p class="tit">
          <span class="sub_text">입출금 제외</span>
          <span class="fc_up">2,000,160</span>원이 늘었어요!
        </p>
        <div class="info">
          <!--
            상승 : fc_up
            하락 : fc_down
          -->
          <dl>
            <dt>기간내 단순 수익률</dt>
            <dd class="fc_up">+2.01%</dd>
          </dl>
          <dl>
            <dt>
              <kb-select
                v-model="selectVal2"
                :options="selectOpt2"
                inline
              /></dt>
            <dd>+2.01%</dd>
          </dl>

          <!--
            아이콘 정의
            ico_up : 상승
            ico_down : 하락
            ico_none : 정보없음
            ico_same : 변동없음
          -->
          <i class="icon_status ico_up"></i>
        </div>

        <div class="bar_graph">
          <i class="criteria_line"
             :class="{first:startMoneyWidth === 0}"
             :style="{left: `${startMoneyWidth}%`}"
          ></i>
          <div class="assets_bar">
            <div
              class="percent_bar_wrap"
              :style="{width: `${startMoneyWidth}%`}"
            >
              <i
                class="percent_bar start"
                :class="{minus: startMoney < 0}"
              >
                <span aria-hidden="true">시작자산</span>
                <span aria-hidden="true">{{this.$addComma(startMoney)}} 원</span>
              </i>
            </div>
            <dl>
              <dt>시작자산</dt>
              <dd>{{this.$addComma(startMoney)}} 원</dd>
            </dl>
          </div>

          <kb-foldings not>
            <kb-folding>
              <template slot="title">
                <dl class="total">
                  <dt>변동금액</dt>
                  <!--
                    상승 : fc_up
                    하락 : fc_down
                  -->
                  <dd
                    :class="{fc_up : changeTotalMoney > 0, fc_down: changeTotalMoney < 0}"
                  >
                    <template v-if="changeTotalMoney > 0">
                      +
                    </template>
                    {{this.$addComma(changeTotalMoney)}}
                  </dd>
                </dl>
              </template>
              <kb-button
                v-if="addMoney1 !== ''"
                line
                class="btn_arr"
                @click="showGraphDetail(10,$event.target,'1')"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney1 > 0, down:addMoney1 < 0}"
                  :style="{left:`${moneyLeftArry[0]}%`, width:`${Math.abs(moneyWidthArry[0])}%`}"
                ></i>

                <dl>
                  <dt>입금</dt>
                  <dd>
                    <template v-if="addMoney1 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney1)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney2 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(0,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney2 > 0, down:addMoney2 < 0}"
                  :style="{left:`${moneyLeftArry[1]}%`, width:`${Math.abs(moneyWidthArry[1])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>주식손익</dt>
                  <dd>
                    <template v-if="addMoney2 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney2)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney3 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(1,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney3 > 0, down:addMoney3 < 0}"
                  :style="{left:`${moneyLeftArry[2]}%`, width:`${Math.abs(moneyWidthArry[2])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>펀드손익</dt>
                  <dd>
                    <template v-if="addMoney3 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney3)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney4 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(2,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney4 > 0, down:addMoney4 < 0}"
                  :style="{left:`${moneyLeftArry[3]}%`, width:`${Math.abs(moneyWidthArry[3])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>wrap손익</dt>
                  <dd>
                    <template v-if="addMoney4 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney4)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney5 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(3,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney5 > 0, down:addMoney5 < 0}"
                  :style="{left:`${moneyLeftArry[4]}%`, width:`${Math.abs(moneyWidthArry[4])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>채권손익</dt>
                  <dd>
                    <template v-if="addMoney5 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney5)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney6 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(4,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney6 > 0, down:addMoney6 < 0}"
                  :style="{left:`${moneyLeftArry[5]}%`, width:`${Math.abs(moneyWidthArry[5])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>파생손익</dt>
                  <dd>
                    <template v-if="addMoney6 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney6)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney7 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(5,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney7 > 0, down:addMoney7 < 0}"
                  :style="{left:`${moneyLeftArry[6]}%`, width:`${Math.abs(moneyWidthArry[6])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>신탁손익</dt>
                  <dd>
                    <template v-if="addMoney7 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney7)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney8 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(6,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney8 > 0, down:addMoney8 < 0}"
                  :style="{left:`${moneyLeftArry[7]}%`, width:`${Math.abs(moneyWidthArry[7])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>현금손익</dt>
                  <dd>
                    <template v-if="addMoney8 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney8)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney9 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(7,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney9 > 0, down:addMoney9 < 0}"
                  :style="{left:`${moneyLeftArry[8]}%`, width:`${Math.abs(moneyWidthArry[8])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>IRP손익</dt>
                  <dd>
                    <template v-if="addMoney9 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney9)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney10 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(8,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney10 > 0, down:addMoney10 < 0}"
                  :style="{left:`${moneyLeftArry[9]}%`, width:`${Math.abs(moneyWidthArry[9])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>단기손익</dt>
                  <dd>
                    <template v-if="addMoney10 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney10)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
              <kb-button
                v-if="addMoney11 !== ''"
                line
                class="btn_arr bg_gray"
                @click="showGraphDetail(9,$event.target)"
              >
                <!-- 그래프
                  상승 : up
                  하락 : down
                  style의 값 :
                  width : 사이즈
                  left : 이전 수치의 종료값
                -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney11 > 0, down:addMoney11 < 0}"
                  :style="{left:`${moneyLeftArry[10]}%`, width:`${Math.abs(moneyWidthArry[10])}%`}"
                ></i>
                <!-- //그래프 -->
                <dl>
                  <dt>기타손익</dt>
                  <dd>
                    <template v-if="addMoney11 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney11)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>

              <kb-button
                v-if="addMoney12 !== ''"
                line
                class="btn_arr"
                @click="showGraphDetail(10,$event.target,'2')"
              >
                <!-- 그래프
                상승 : up
                하락 : down
                style의 값 :
                width : 사이즈
                left : 이전 수치의 종료값
              -->
                <i
                  class="percent_bar"
                  :class="{up:addMoney12 > 0, down:addMoney12 < 0}"
                  :style="{left:`${moneyLeftArry[11]}%`, width:`${Math.abs(moneyWidthArry[11])}%`}"
                ></i>
                <dl>
                  <dt>출금</dt>
                  <dd>
                    <template v-if="addMoney12 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney12)}}
                  </dd>
                </dl>
                <i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>

            </kb-folding>
          </kb-foldings>

          <div class="assets_bar">
            <div
              class="percent_bar_wrap"
              :style="{width: `${endMoneyWidth}%`}"
            >
              <i
                class="percent_bar end"
                :class="{minus: endMoney < 0}"
              >
                <span aria-hidden="true">오늘자산</span>
                <span aria-hidden="true">{{this.$addComma(endMoney)}} 원</span>
              </i>
            </div>
            <dl>
              <dt>오늘자산</dt>
              <dd>{{this.$addComma(endMoney)}}원</dd>
            </dl>
          </div>
        </div>
        <hr class="hr_line" aria-hidden="true">

        <div class="text_box">
          <h3>투자자산 변동금</h3>
          <dl>
            <dt>손익금(주식+펀드+Wrap+채권+파생+신탁+현금+IRP+단기+기탕)</dt>
            <dd>-4,000,000원</dd>
          </dl>
          <dl>
            <dt>입금-출금</dt>
            <dd>0원</dd>
          </dl>
          <dl class="total">
            <dt>기간내 단순 손익금</dt>
            <dd>-4,000,000원</dd>
          </dl>
        </div>
      </div>

      <div class="btm_btn_util type2">
        <p class="text">오늘 정보는 마이데이터 제공 데이터를 기반으로 작성되어 실제 정보와 다를 수 있습니다.</p>
        <kb-button aTag not class="btn_refresh">새로고침</kb-button>
        <kb-button aTag not class="btn_linkage">추가연동</kb-button>
      </div>
    </template>

    <!-- 데이터 값이 없는 경우 -->
    <template v-if="!dataOn">
      <div class="assets_none_box" if>
        <div class="none_box">
          <i></i>
          투자자산 정보가 없습니다.<br />
          자산을 연동해주세요.
          <kb-button line blue class="more">추가연동</kb-button>
        </div>
        <kb-button aTag not class="banner_box type1">
          가상 투자를 <br />
          체험해 보시겠어요?
        </kb-button>
        <kb-button aTag not class="banner_box type2">
          KB증권 계좌를 <br />
          개설하시겠어요?
        </kb-button>
      </div>
    </template>
    <!-- //데이터 값이 없는 경우 -->

    <!-- 2021-04-28 자산정보가 없는 경우 -->
    <template v-if="false">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          이런, 자산 정보가 없네요!<br />
          자산을 연동해주세요 :)
          <kb-button line blue class="more">추가연동</kb-button>
        </div>
        <kb-button aTag not class="banner_box type3">
          오늘 서비스를 <br />
          체험해 보시겠어요?
        </kb-button>
      </div>
    </template>
    <!-- //2021-04-28 자산정보가 없는 경우 -->
  </div>
</template>

<script>
export default {
  name: 'TO02E001',
  data() {
    return {
      selectVal1: '올해',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: '올해', value: '올해' },
        { text: '1년 간', value: '1년 간' },
        { text: '2년 간', value: '2년 간' },
        { text: '3년 간', value: '3년 간' },
        { text: '4년 간', value: '4년 간' },
        { text: '5년 간', value: '5년 간' },
      ],
      selectVal2: '1',
      selectOpt2: [
        { text: 'KOSPI 수익률', value: '1' },
        { text: 'KOSDAQ 수익률', value: '2' },
        { text: 'S&P500 수익률', value: '3' },
        { text: 'NASDAQ 수익률', value: '4' },
        { text: 'DOW 수익률', value: '5' },
      ],
      toggleVal2: '1',
      dataOn: true,
      /*
      startMoney: 106435437, // 시작자산
      startMoneyWidth: 0,
      addMoney1: 100, // 입금
      addMoney2: -89724696, // 주식손익
      addMoney3: -99979724696, // 펀드손익
      addMoney4: -99979724696, // wrap 손익
      addMoney5: 99979724696, // 채권 손익
      addMoney6: 99979724696, // 파생 손익
      addMoney7: 39979724696, // 신탁 손익
      addMoney8: 9979724696, // 현금 손익
      addMoney9: 199979724696, // IRP 손익
      addMoney10: 299979724696, // 단기 손익
      addMoney11: 999979724696, // 기타 손익
      addMoney12: 0, // 출금
      */

      startMoney: -106435437, // 시작자산
      startMoneyWidth: 0,
      addMoney1: 15000, // 입금
      addMoney2: -8972, // 주식손익
      addMoney3: -99979, // 펀드손익
      addMoney4: -724696, // wrap 손익
      addMoney5: 99979, // 채권 손익
      addMoney6: 724696, // 파생 손익
      addMoney7: 39979, // 신탁 손익
      addMoney8: 4696, // 현금 손익
      addMoney9: 1999797, // IRP 손익
      addMoney10: 2999797, // 단기 손익
      addMoney11: -99997, // 기타 손익
      addMoney12: 0, // 출금

      /*
      startMoney: -50000, // 시작자산
      startMoneyWidth: 0,
      addMoney1: 500000000000, // 입금
      addMoney2: 12000, // 주식손익
      addMoney3: 5000, // 펀드손익
      addMoney4: -1000, // wrap 손익
      addMoney5: 1005, // 채권 손익
      addMoney6: 1006, // 파생 손익
      addMoney7: 1007, // 신탁 손익
      addMoney8: 1008, // 현금 손익
      addMoney9: 1009, // IRP 손익
      addMoney10: 1010, // 단기 손익
      addMoney11: 1011, // 기타 손익
      addMoney12: -500000000000, // 출금
      */

      changeTotalMoney: 0,
      endMoney: 0,
      endMoneyWidth: 0,
      moneyWidthArry: [],
      moneyLeftArry: [],
    };
  },
  watch: {
    startMoney() {
      this.chartSet();
    },
    addMoney1() {
      this.chartSet();
    },
    addMoney2() {
      this.chartSet();
    },
    addMoney3() {
      this.chartSet();
    },
    addMoney4() {
      this.chartSet();
    },
    addMoney5() {
      this.chartSet();
    },
    addMoney6() {
      this.chartSet();
    },
    addMoney7() {
      this.chartSet();
    },
    addMoney8() {
      this.chartSet();
    },
    addMoney9() {
      this.chartSet();
    },
    addMoney10() {
      this.chartSet();
    },
    addMoney11() {
      this.chartSet();
    },
    addMoney12() {
      this.chartSet();
    },
  },
  beforeMount() {
    this.chartSet();
  },
  methods: {
    showGraphDetail(num, el, val = null) {
      const viewsAray = [];
      if (this.addMoney2 !== 0)viewsAray.push('주식손익');
      if (this.addMoney3 !== 0)viewsAray.push('펀드손익');
      if (this.addMoney4 !== 0)viewsAray.push('Wrap손익');
      if (this.addMoney5 !== 0)viewsAray.push('채권손익');
      if (this.addMoney6 !== 0)viewsAray.push('파생손익');
      if (this.addMoney7 !== 0)viewsAray.push('신탁손익');
      if (this.addMoney8 !== 0)viewsAray.push('현금손익');
      if (this.addMoney9 !== 0)viewsAray.push('IRP손익');
      if (this.addMoney10 !== 0)viewsAray.push('단기손익');
      if (this.addMoney11 !== 0)viewsAray.push('기타손익');
      if (this.addMoney1 !== 0 || this.addMoney12 !== 0)viewsAray.push('입출금내역');
      this.$modal({
        component: () => import('@/views/TO/02/TO02E_pop.vue'),
        componentProps: {
          index: num,
          selVal: val,
          views: viewsAray,
        },
        returnFocus: el,
      });
    },
    chartSet() {
      this.startMoneyWidth = 0;
      this.changeTotalMoney = 0;
      this.endMoney = 0;
      this.endMoneyWidth = 0;
      this.moneyWidthArry = [];
      let moneyWidth = this.startMoney;
      const changeMoney = [];
      const moneyArry = [];
      const startMoney = this.startMoney === '' ? 0 : parseInt(this.startMoney, 10);
      changeMoney.push(this.addMoney1 === '' ? 0 : parseInt(this.addMoney1, 10));
      changeMoney.push(this.addMoney2 === '' ? 0 : parseInt(this.addMoney2, 10));
      changeMoney.push(this.addMoney3 === '' ? 0 : parseInt(this.addMoney3, 10));
      changeMoney.push(this.addMoney4 === '' ? 0 : parseInt(this.addMoney4, 10));
      changeMoney.push(this.addMoney5 === '' ? 0 : parseInt(this.addMoney5, 10));
      changeMoney.push(this.addMoney6 === '' ? 0 : parseInt(this.addMoney6, 10));
      changeMoney.push(this.addMoney7 === '' ? 0 : parseInt(this.addMoney7, 10));
      changeMoney.push(this.addMoney8 === '' ? 0 : parseInt(this.addMoney8, 10));
      changeMoney.push(this.addMoney9 === '' ? 0 : parseInt(this.addMoney9, 10));
      changeMoney.push(this.addMoney10 === '' ? 0 : parseInt(this.addMoney10, 10));
      changeMoney.push(this.addMoney11 === '' ? 0 : parseInt(this.addMoney11, 10));
      changeMoney.push(this.addMoney12 === '' ? 0 : parseInt(this.addMoney12, 10));
      changeMoney.forEach((val) => {
        this.changeTotalMoney += val;
        moneyArry.push(startMoney + this.changeTotalMoney);
      });

      this.endMoney = startMoney + this.changeTotalMoney;
      moneyArry.push(startMoney);
      const maxMoney = Math.max.apply(null, moneyArry);
      const minMoney = Math.min.apply(null, moneyArry);
      moneyArry.pop();
      let isMinus = false;
      let sizeMoney = maxMoney;
      if (minMoney < 0 && maxMoney < 0) {
        isMinus = true;
        sizeMoney = minMoney;
      } else {
        sizeMoney = (maxMoney - minMoney);
      }
      let lastWidthTop = 0;
      let lastWidthBottom = 0;
      let moneyTotalWidth = 0;
      let moneyTotalWidthP = 0;
      let moneyTotalWidthM = 0;
      const newWidthAryP = [];
      const newWidthAryM = [];
      moneyArry.forEach((val) => {
        const ratio = (val - moneyWidth) / sizeMoney;
        let width = Math.round(ratio * 100);
        if ((ratio * 100) > 0 && width < 3) {
          width = 3;
        }
        if (width > -3 && (ratio * 100) < 0) {
          width = -3;
        }
        if (isMinus) width *= -1;
        if (width > 0) {
          moneyTotalWidthP += width;
          newWidthAryP.push(width);
        }
        if (width < 0) {
          moneyTotalWidthM -= width;
          newWidthAryM.push(width);
        }
        moneyTotalWidth += width;
        if (moneyTotalWidth > lastWidthTop) lastWidthTop = moneyTotalWidth;
        if (moneyTotalWidth < lastWidthBottom) lastWidthBottom = moneyTotalWidth;
        moneyWidth = val;
        this.moneyWidthArry.push(width);
      });

      const startM = this.startMoney > 0 && minMoney < 0 ? this.startMoney - minMoney : this.startMoney;
      this.startMoneyWidth = Math.round((startM / sizeMoney) * 100);
      if (lastWidthTop === 0 && lastWidthBottom < 0) {
        this.startMoneyWidth = Math.min(100, Math.abs(lastWidthBottom));
      } else if (this.startMoney > 0 && this.startMoneyWidth < 3) {
        this.startMoneyWidth = 3;
      } else if ((moneyTotalWidthP >= 100 && moneyTotalWidthM < 100) || (this.startMoney < 0 && this.endMoney < 0)) {
        this.startMoneyWidth = moneyTotalWidthM;
      }

      // const gapWidth = moneyTotalWidthP + this.startMoneyWidth - 100;
      const gapWidth = moneyTotalWidthP - 100;
      const gapWidth2 = moneyTotalWidthM - 100;

      if (gapWidth > 0 || gapWidth2 > 0) {
        // width값 조정 함수
        this.widthArryFn(gapWidth, gapWidth2);
        // 오늘자산 마이너스일때
        if (gapWidth < 0 && this.endMoney < 0) {
          this.startMoneyWidth = Math.abs(gapWidth);
        }
      }

      // left값 조정 함수
      this.leftArryFn();
      if (this.startMoneyWidth === this.endMoneyWidth) {
        this.widthArryFn(gapWidth, gapWidth2, true);
        this.leftArryFn();
      }
      if (startMoney === this.endMoney) this.endMoneyWidth = this.startMoneyWidth;
    },
    widthArryFn(val1, val2, chk = false) {
      // const maxWidthP = Math.max.apply(null, ary1);
      // const maxWidthM = Math.min.apply(null, ary2);
      const maxWidthP = Math.max.apply(null, this.moneyWidthArry);
      const maxWidthM = Math.min.apply(null, this.moneyWidthArry);
      let maxWidthPCut = 0;
      let maxWidthMCut = 0;
      this.moneyWidthArry.forEach((val) => {
        if (maxWidthP === val)maxWidthPCut += 1;
        if (maxWidthM === val)maxWidthMCut += 1;
      });
      let startMoneyUp = false;
      let endMoneyUp = false;
      if (chk && this.startMoneyWidth === this.endMoneyWidth) {
        if (this.startMoney > this.endMoney) startMoneyUp = true;
        if (this.startMoney < this.endMoney) endMoneyUp = true;
      }
      const newArray = this.moneyWidthArry.map((val) => {
        let rtnVal = val;
        let isPlusMax = false;
        let isMinusMax = false;
        if (this.startMoney > 0 && maxWidthP === 100) isPlusMax = true;
        if (this.endMoney > 0 && maxWidthM === -100) isMinusMax = true;
        if (maxWidthP === val) {
          if (startMoneyUp) {
            rtnVal -= 3;
          } else if (!chk) {
            if (val1 > 0 && val > 0)rtnVal = val - (val1 / maxWidthPCut);
            if (isPlusMax) {
              rtnVal -= 3;
              this.startMoneyWidth += 3;
            }
          }
        }
        if (maxWidthM === val) {
          if (endMoneyUp) {
            rtnVal += 3;
          } else if (!chk) {
            if (val2 > 0 && val < 0) rtnVal = val + (val2 / maxWidthMCut);
            if (isMinusMax) rtnVal += 3;
          }
        }
        return rtnVal;
      });
      this.moneyWidthArry = newArray;
    },
    leftArryFn() {
      this.moneyLeftArry = [];
      let moneyLeft = this.startMoneyWidth;
      this.moneyWidthArry.forEach((val) => {
        let left = moneyLeft;
        if (val < 0) {
          left += val;
          moneyLeft = left;
        } else {
          moneyLeft = left + val;
        }
        this.moneyLeftArry.push(left);
      });
      let totalWidth = 0;
      this.moneyWidthArry.forEach((val) => {
        totalWidth += val;
      });
      this.endMoneyWidth = this.startMoneyWidth + totalWidth;
      // this.endMoneyWidth = this.moneyLeftArry[this.moneyLeftArry.length - 1];
    },
  },
};
</script>
