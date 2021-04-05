<template>
  <kb-page page-title="투자매입 전월 비교">
    <kb-page-body>
      <div class="section">
        <div class="inner_box month_mgt">
          <kb-title-bar h2>
            <template slot="left">
              <h1 class="tit">
                이번 달에 나는<br>얼마를 순매수 했을까?
                <kb-button
                  not
                  class="tooltip_btn"
                  v-tooltip="'views/TO/02/TO02C004_tip.vue'"
                >순 매입금 도움말 팝업보기</kb-button>
              </h1>
            </template>
          </kb-title-bar>

          <!-- chart -->
          <div class="chart_area"><img src="@/assets/images/TO/02/chart_month_mgt2.png" style="width:100%;" alt="투자매입전월비교 차트 이미지"></div>
          <!-- //chart -->

          <ul class="list_tot mg_t25 mg_b25">
            <li>
              <div>
                <span><i class="ico_1" aria-hidden="true"></i><b>이번달 순매수</b></span>
                <span>12,000,000원</span>
              </div>
            </li>
            <li>
              <div>
                <span><i class="ico_2" aria-hidden="true"></i><b>지난달 순매수</b></span>
                <span>300,000,000원</span>
              </div>
            </li>
            <li class="btm_tot">
              <div>
                <span>차액</span>
                <span>- 122,000,000원</span>
              </div>
            </li>
          </ul>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="순 매입금 비교" />
          <ul class="list_tot history">
            <li>
              <p class="tit">순 매입 총액</p>
              <div>
                <span>2021년 1월</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>2020년 12월</span>
                <span>30,000,000,000</span>
              </div>
            </li>
            <li class="btm_tot">
              <div>
                <span>차액</span>
                <span>- 122,000,000원</span>
              </div>
            </li>
          </ul>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="일자별 매입·매도 히스토리" />
          <kb-button to="#" link class="blue mg_t7">
            이번달 투자 종목 확인하기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <ul class="list_tot history mg_t15 mg_b0">
            <li class="top_tot">
              <p class="tit">합계</p>
              <div>
                <span>매입(+)·매도(-)</span>
                <span>-30,000,000,000</span>
              </div>
              <div>
                <span>순 매입금</span>
                <span>60,000,000,000</span>
              </div>
            </li>
            <li>
              <p class="tit">31일</p>
              <div>
                <span>매입</span>
                <span>+30,000,000,000</span>
              </div>
            </li>
            <li>
              <p class="tit">30일</p>
              <div>
                <span>매입</span>
                <span>+30,000,000,000</span>
              </div>
              <div>
                <span>순 매입금</span>
                <span>20,000,000</span>
              </div>
            </li>
            <li>
              <p class="tit">29일</p>
              <div>
                <span>매도</span>
                <span>+30,000,000,000</span>
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
  name: 'TO02C004',
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
