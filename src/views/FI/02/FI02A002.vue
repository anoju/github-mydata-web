<template>
  <kb-page page-title="신용카드 청구서 관리">
    <kb-page-body>
      <div class="section financial_bank_wrap">
        <!-- 금융정보가 없는 경우 -->
        <template v-if="noDate">
          <div class="assets_none_box">
            <div class="none_box">
              <i></i>
              이런, 금융 정보가 없네요!<br />
              금융정보를 연동해 주세요 :)
              <kb-button line blue class="more fz_16">금융정보 연동</kb-button>
            </div>
          </div>
        </template>
        <!-- //금융정보가 없는 경우 -->

        <div class="flex_wrap space_between align_center mg_b12">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh">09:00:03</kb-button>
          </div>
        </div>

        <div class="financial_bank_top">
          <kb-button
            not
            @click="selectMonth($event.target)"
            class="btn_month mg_l8"
          >
            {{year}}년 {{Number(month)}}월
          </kb-button>

          <kb-button not aTag class="money_box">
            <p class="text">청구금액</p>
            <p class="money">123,400,000원</p>
          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t24">
        <kb-foldings first-open class="line_none mg_t8">
          <kb-folding title="최근 3개월 청구 금액">
            <div class="chart_wrap">
              <img src="@/assets/images/temp/chart4.png" alt="">
            </div>
            <div class="comment">지난달 보다 999,000원 적게 소비했어요.</div>
          </kb-folding>
        </kb-foldings>

        <div class="financial_bank_list">
          <ul>
            <li class="block">
              <kb-button not a-tag class="bank_info wp_100">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB 국민카드</p>
                </div>
                <p class="money">123,000,000원
                  <span class="sub_text">3월 1일 결제예정</span>
                </p>
              </kb-button>
            </li>
            <li class="block">
              <kb-button not a-tag class="bank_info wp_100">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB 국민카드</p>
                </div>
                <p class="money">123,000,000원
                  <span class="sub_text">3월 1일 결제예정</span>
                </p>
              </kb-button>
            </li>
            <li class="block">
              <div class="bank_info">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB 국민카드</p>
                </div>
              </div>
              <div class="bank_info_list">
                <kb-button not a-tag class="item">
                  <div class="text">
                    <p>결제순번 <br />0001</p>
                  </div>
                  <p class="money">123,000,000원
                    <span class="sub_text">3월 1일 결제예정</span>
                  </p>
                </kb-button>
                <kb-button not a-tag class="item">
                  <div class="text">
                    <p>결제순번 <br />00021</p>
                  </div>
                  <p class="money">123,000,000원
                    <span class="sub_text">3월 1일 결제예정</span>
                  </p>
                </kb-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A002',
  data() {
    return {
      noDate: false,
      yearMonth: '',
      year: '',
      month: '',
      firstDate: '',
      selectDay: '',
      dayAry: [],
      weekDayAry: [],
    };
  },
  watch: {
    yearMonth() {
      this.year = this.yearMonth.substr(0, 4);
      this.month = this.yearMonth.substr(4, 2);
    },
  },
  beforeMount() {
    this.readyEvt();
  },
  mounted() {
  },
  methods: {
    readyEvt() {
      this.yearMonth = this.todayString().substr(0, 6);
    },
    todayString() {
      const date = new Date();
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      if ((`${$month}`).length === 1)$month = `0${$month}`;
      if ((`${$day}`).length === 1)$day = `0${$day}`;
      return (`${$year}${$month}${$day}`);
    },
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
    selectMonth(el) {
      this.$modal({
        component: () => import('@/components/modalContainer/modalCalendar.vue'),
        componentProps: {
          value: this.yearMonth,
          type: 'month',
          min: { y: 1 },
          max: 'today',
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.yearMonth = result.payload;
        }
      });
    },
  },
};
</script>
