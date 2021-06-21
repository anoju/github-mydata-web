<template>
  <kb-page page-title="할부금융">
    <kb-page-body>
      <div class="section financial_bank_wrap">
        <!-- 보험정보가 없는 경우 -->
        <template v-if="noDate">
          <div class="assets_none_box">
            <div class="none_box">
              <i></i>
              이런, 보험 정보가 없네요!<br />
              보험정보를 연동해 주세요 :)
              <kb-button line blue class="more fz_16">보험정보 연동</kb-button>
            </div>
          </div>
        </template>
        <!-- //보험정보가 없는 경우 -->

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

          <h2>할부금융 이용 현황</h2>

          <kb-button not aTag class="money_box">
            <p class="text">총 대출잔액</p>
            <p class="money">123,400,000원</p>

            <ul class="info_text">
              <li><span>금융사</span>4개</li>
              <li><span>내 계좌</span>32개</li>
            </ul>
          </kb-button>

          <div class="comment">신차일반할부의 이자 상환일은 3월 31일 입니다.</div>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t24">

        <!--2021-06-21  내역이 없을때 -->
        <div v-if="false" class="no_list_txt icon mg_y50">
          <strong class="tit">내역이 없습니다.</strong>
        </div>
        <!-- //2021-06-21 내역이 없을때 -->

        <div class="insurance_list">
          <!-- 운용리스 외 -->
          <kb-button aTag not>
            <div class="cont">
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name breakall">
                <p>신차일반할부신차일반할부신차일반할부신차일반할부신차일반할부</p>
                <span>215099999111-1234567</span>
              </div>
              <p class="tag pd_t2">
                <span class="fz_12 fc_666">적용 이율</span>
                <span class="fz_14 fc_222 mg_l4">3.12%</span>
              </p>
            </div>
            <div class="money_info mg_l40">
              <p class="progress">10% 납입</p>
              <p class="money">
                <span>대출 잔액</span>
                123,456,000원
              </p>
            </div>
            <div class="progress_bar mg_l40">
              <span style="width:10%"></span>
            </div>
            <div class="mg_l40 t_right fz_12 fc_666 mg_t12">대출원금 123,456,000원</div>
          </kb-button>
          <!-- //운용리스 외 -->
          <!-- 운용리스 -->
          <kb-button aTag not>
            <div class="cont">
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name breakall">
                <p>메르세데스벤츠 파이낸셜</p>
                <span>215099999111-1234567</span>
              </div>
            </div>
            <div class="mg_l40 t_right mg_t24">
              <div><strong><span class="fc_blue">2025년 4월 25일</span> 만기 입니다.</strong></div>
              <div class="fz_12 fc_666 mg_t4">다음 납입 예정일 2021/04/25</div>
            </div>
          </kb-button>
          <!-- //운용리스 -->
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI10A001',
  data() {
    return {
      noDate: false,
      tabIdx: 0,
      isStar1: true,
      isStar2: false,
    };
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
  },
};
</script>
