<template>
  <kb-page page-title="현금잔고 지난달 비교">
    <kb-page-body>
      <div class="section">
        <div class="inner_box month_mgt">
          <kb-title-bar
            h2
            tit-tag="h1"
            title="오늘과 지난 달 2일의<br>잔고를 비교하면?"
          />

          <!-- chart -->
          <div class="chart_area"><img src="@/assets/images/TO/02/chart_month_mgt.png" style="width:100%;" alt="현금잔고전월비교 차트 이미지"></div>
          <!-- //chart -->

          <ul class="list_tot mg_t25 mg_b25">
            <li>
              <div>
                <span><i class="ico_1" aria-hidden="true"></i><b>이번달</b></span>
                <span>12,000,000원</span>
              </div>
            </li>
            <li>
              <div>
                <span><i class="ico_2" aria-hidden="true"></i><b>지난달</b></span>
                <span>300,000,000원</span>
              </div>
            </li>
            <li class="btm_tot">
              <div>
                <span>잔고</span>
                <span>▲ 122,000,000원</span>
              </div>
            </li>
          </ul>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="일자별 잔고 히스토리" />
          <ul class="list_tot history">
            <li>
              <p class="tit">2일</p>
              <div>
                <span>2021년 1월</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>2020년 12월</span>
                <span>30,000,000,000</span>
              </div>
            </li>
            <li>
              <p class="tit">1일</p>
              <div>
                <span>2021년 1월</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>2020년 12월</span>
                <span>30,000,000,000</span>
              </div>
            </li>
            <li>
              <p class="tit">31일</p>
              <div>
                <span>2021년 1월</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>2020년 12월</span>
                <span>30,000,000,000</span>
              </div>
            </li>
          </ul>
        </div>
        <ul class="txt_list mg_t20">
          <li class="dot">잔고기준: 입출금계좌, 예적금, CMA, 페이, 외화, 직접입력한 현금의 합계입니다.</li>
        </ul>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02C003',
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
