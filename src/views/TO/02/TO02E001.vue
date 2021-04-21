<template>
  <div class="section mg_t0">
    <template v-if="dataOn">
      <div class="assets_change_info pd_b0">
        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
          class="type_line"
        />
        <p class="tit mg_b8">동안 투자 자산이 어떻게 변했지?</p>
        <div class="txt_list2">
          <div class="dot">조회기간은 KB 오늘 앱<strong>가입일</strong>부터 조회됩니다.</div>
        </div>
        <div class="t_center mg_t24">
          <kb-button line blue class="w_200">투자자산 조회</kb-button>
        </div>
      </div>
      <hr class="hr_line mg_t32" aria-hidden="true" />
      <p class="fz_14 fc_666 mg_t32">조회기간 : 2010/2/01(가입일) - 2021/12/23</p>

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
                class="small_text"
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
                @click="showGraphDetail(3,$event.target,1)"
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
                class="btn_arr"
                @click="showGraphDetail(3,$event.target,2)"
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
                <dl>
                  <dt>출금</dt>
                  <dd>
                    <template v-if="addMoney5 > 0">
                      +
                    </template>
                    {{this.$addComma(addMoney5)}}
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
        <!-- 임시입력영역 -->
        <div style="border:1px solid #ddd;padding:15px;">
          <kb-title-bar title="(임시) 시작자산, 손익 입력" />
          <kb-form-item label="시작금액">
            <kb-input v-model="startMoney" />
          </kb-form-item>
          <kb-form-item label="입금">
            <kb-input v-model="addMoney1" />
          </kb-form-item>
          <kb-form-item label="주식손익">
            <kb-input v-model="addMoney2" />
          </kb-form-item>
          <kb-form-item label="펀드손익">
            <kb-input v-model="addMoney3" />
          </kb-form-item>
          <kb-form-item label="wrap손익">
            <kb-input v-model="addMoney4" />
          </kb-form-item>
          <kb-form-item label="출금">
            <kb-input v-model="addMoney5" />
          </kb-form-item>
        </div>
        <!-- //임시영역 -->

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
      selectVal2: 1,
      selectOpt2: [
        { text: 'KOSPI 수익률', value: 1 },
        { text: 'KOSDAQ 수익률', value: 2 },
        { text: 'S&P500 수익률', value: 3 },
        { text: 'NASDAQ 수익률', value: 4 },
        { text: 'DOW 수익률', value: 5 },
      ],
      toggleVal2: '1',
      dataOn: true,
      startMoney: -50000, // 시작자산
      startMoneyWidth: 0,
      addMoney1: 500000000000, // 입금
      addMoney2: 12000, // 주식손익
      addMoney3: 5000, // 펀드손익
      addMoney4: -1000, // wrap 손익
      addMoney5: -500000000000, // 출금
      changeTotalMoney: 0,
      endMoney: 0,
      endMoneyWidth: 0,
      moneyArry: [],
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
      if (this.addMoney1 !== 0 || this.addMoney5 !== 0)viewsAray.push('입출금내역');
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
      this.moneyArry = [];
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
      this.startMoneyWidth = Math.round((this.startMoney / sizeMoney) * 100);
      if (lastWidthTop === 0 && lastWidthBottom < 0) {
        this.startMoneyWidth = Math.min(100, Math.abs(lastWidthBottom));
      } else if (this.startMoney > 0 && this.startMoneyWidth < 3) {
        this.startMoneyWidth = 3;
      }

      const gapWidth = moneyTotalWidthP + this.startMoneyWidth - 100;
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
        // console.log('last');
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
