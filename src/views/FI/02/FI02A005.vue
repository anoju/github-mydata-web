<template>
  <kb-page page-title="월별 승인 금액">
    <kb-page-body>
      <div class="section">
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
        <div>
          <kb-button
            not
            @click="selectMonth($event.target)"
            class="btn_month"
          >
            {{year}}년 {{Number(month)}}월
          </kb-button>
        </div>
        <div class="fz_12 fc_666 mg_t20">총 승인 금액</div>
        <div class="fz_20 mg_t4"><strong>123,400,000원</strong></div>
        <p class="t_right mg_t26">
          <kb-button link blue><i class="bt_ic_calendar" aria-hidden="true" />소비달력보기</kb-button>
        </p>
        <hr aria-hidden="true" class="hr_line mg_t22">
        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">고정 지출 금액</h3>
          </template>
          <p class="fz_16 fw_bold"><span class="mg_r2 fz_14 fc_666 fw_normal">총</span>1,123,400,000원</p>
        </kb-title-bar>
        <div class="list_bar_style">
          <ul>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">70%</span>
                <i style="width:70%;">
                  <span class="text">70%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">5%</span>
                <i style="width:5%;">
                  <span class="text">5%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">42%</span>
                <i style="width:42%;">
                  <span class="text">42%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">1%</span>
                <i style="width:1%;">
                  <span class="text">1%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
          </ul>
          <kb-foldings not class="reverse_accodion">
            <kb-folding close-title="펼치기" open-title="접기">
              <ul class="mg_t12">
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">70%</span>
                    <i style="width:70%;">
                      <span class="text">70%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">5%</span>
                    <i style="width:5%;">
                      <span class="text">5%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">42%</span>
                    <i style="width:42%;">
                      <span class="text">42%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">1%</span>
                    <i style="width:1%;">
                      <span class="text">1%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
              </ul>
            </kb-folding>
          </kb-foldings>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <ul class="ico_info_list type2">
          <li>
            <kb-button not a-tag class="ico_info_item ty2">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <div class="tit">
                    <strong>마일리지 가온플래티늄 카드 마일리지 가온플래티늄 카드</strong>
                    <ico-txt yellow class="mg_l4">가족</ico-txt>
                    <ico-txt blue class="mg_l4">체크</ico-txt>
                  </div>
                </div>
              </div>
              <div class="cont">
                <div class="fz_12 fc_666">1234567890123456789</div>
                <div class="fz_18 t_right mg_t8"><strong>123,000,000원</strong></div>
              </div>
            </kb-button>
            <kb-button
              star
              :class="{checked:isStar1}"
              role="checkbox"
              :aria-checked="isStar1?'true':'false'"
              @click="isStar1 = !isStar1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-button not a-tag class="ico_info_item ty2">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <div class="tit">
                    <strong>마일리지 가온플래티늄 카드</strong>
                    <ico-txt yellow class="mg_l4">가족</ico-txt>
                    <ico-txt blue class="mg_l4">체크</ico-txt>
                  </div>
                </div>
              </div>
              <div class="cont">
                <div class="fz_12 fc_666">1234567890123456789</div>
                <div class="fz_18 t_right mg_t8"><strong>123,000,000원</strong></div>
              </div>
            </kb-button>
            <kb-button
              star
              :class="{checked:isStar1}"
              role="checkbox"
              :aria-checked="isStar1?'true':'false'"
              @click="isStar1 = !isStar1"
            >관심등록</kb-button>
          </li>
        </ul>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A005',
  data() {
    return {
      yearMonth: '',
      year: '',
      month: '',
      isStar1: false,
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
