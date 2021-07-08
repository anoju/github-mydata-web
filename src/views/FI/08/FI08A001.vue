<template>
  <kb-page page-title="보증보험">
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
            <kb-button button class="refresh" @click="btnRefresh">09:00:03</kb-button>
          </div>
        </div>

        <!--2021-06-21  전체 내역이 없을때 -->
        <div v-if="false" class="no_list_txt icon h_full">
          <strong class="tit">내역이 없습니다.</strong>
        </div>
        <!-- //2021-06-21 전체 내역이 없을때 -->

        <div class="financial_bank_top">
          <kb-button
            not
            @click="selectMonth($event.target)"
            class="btn_month"
          >
            {{year}}년 {{Number(month)}}월
          </kb-button>

          <kb-button not aTag class="money_box">
            <p class="text">납입액</p>
            <p class="money">123,400,000원</p>

          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t24">

        <template v-if="true">
          <kb-title-bar
            h3
            class="mg_t32"
          >
            <template slot="left">
              <h3 class="tit">계약목록 <strong class="fc_blue">2</strong></h3>
            </template>
          </kb-title-bar>
          <div class="insurance_list">
            <kb-button aTag not>
              <div class="cont">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name breakall">
                  <p>전세금반환보증금</p>
                  <span>주택도시보증공사 12345678901234567890</span>
                </div>
                <p class="tag pd_t2">
                  <span class="fz_14 fc_blue">보증보험</span>
                </p>
              </div>
              <div class="money_info mg_l40 flex_wrap">
                <p class="fz_14 fw_bold">D-30</p>
                <p class="money">
                  <span>총 납입 보험료</span>
                  123,456,000원
                </p>
              </div>
            </kb-button>
            <kb-button aTag not>
              <div class="cont">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name breakall">
                  <p>전세금반환보증금</p>
                  <span>주택도시보증공사 12345678901234567890</span>
                </div>
                <p class="tag pd_t2">
                  <span class="fz_14 fc_blue">보증보험</span>
                </p>
              </div>
              <div class="money_info mg_l40 flex_wrap">
                <p class="fz_14 fw_bold">D-30</p>
                <p class="money">
                  <span>총 납입 보험료</span>
                  123,456,000원
                </p>
              </div>
            </kb-button>
          </div>
        </template>
        <template v-else>
          <div class="no_list_txt icon"><strong class="tit">내역이 없습니다.</strong></div>
        </template>

        <!-- 하단배너 -->
        <div class="img_banner_box mg_t32">
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
        </div>
        <!-- //하단배너 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI08A003',
  data() {
    return {
      noDate: false,
      yearMonth: '',
      year: '',
      month: '',
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
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
  },
};
</script>
