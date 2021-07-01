<template>
  <kb-page page-title="부채&기타 납입 지난달 비교">
    <kb-page-body>
      <div class="section">
        <div class="inner_box month_mgt">
          <kb-title-bar
            h2
            tit-tag="h1"
            title="이번 달에<br>얼마를 납입해야 할까?"
          />

          <!-- chart -->
          <div class="chart_area"><img src="@/assets/images/TO/02/chart_month_mgt3.png" style="width:100%;" alt="보험/연금납입 전월비교 차트 이미지"></div>
          <!-- //chart -->

          <ul class="list_tot mg_t25 mg_b25">
            <li>
              <div>
                <span><i class="ico_1" aria-hidden="true"></i><b>이번달 납입완료</b></span>
                <span>12,000,000원</span>
              </div>
            </li>
            <li>
              <div>
                <span><i class="ico_2" aria-hidden="true"></i><b>지난달 납입완료</b></span>
                <span>300,000,000원</span>
              </div>
            </li>
            <li class="btm_tot">
              <div>
                <span>납입예정</span>
                <span>122,000,000원</span>
              </div>
            </li>
          </ul>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="납입금액 비교" />
          <ul class="list_tot history">
            <li>
              <p class="tit">납입완료</p>
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
              <p class="tit">납입예정</p>
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
              <p class="tit">미납금액</p>
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
          <kb-button-wrap class="mg_t0">
            <kb-button
              class="more"
            >
              더보기
            </kb-button>
          </kb-button-wrap>
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="이번달 납입 내역" />
          <ul class="list_tot history">
            <li>
              <p class="tit">31일<span class="label_plan">납입 예정</span></p>
              <div>
                <span>납입금액</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>납입처</span>
                <span>카드사명</span>
              </div>
            </li>
            <li>
              <p class="tit">18일<span class="label_unpaid">미납</span></p>
              <div>
                <span>납입금액</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>납입처</span>
                <span>대출사명</span>
              </div>
            </li>
            <li>
              <p class="tit">18일<span class="label_finish">납입 완료</span></p>
              <div>
                <span>납입금액</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>납입처</span>
                <span>통신사명</span>
              </div>
            </li>
          </ul>
          <kb-button-wrap class="mg_t0">
            <kb-button
              class="more"
            >
              더보기
            </kb-button>
          </kb-button-wrap>

          <!-- 2021-06-16 추가 -->
          <ul class="list_tot history bottom_line mg_b0 mg_b16">
            <li class="nothing">납입 정보가 없어요.</li>
          </ul>
          <!-- //2021-06-16 추가 -->
        </div>
        <hr aria-hidden="true" class="hr_line">
        <div class="inner_section">
          <kb-title-bar h3 title="지난달 미납 내역" />
          <!-- <ul class="list_tot history bottom_line mg_b0">
            <li>
              <p class="tit">18일<span class="label_unpaid">미납</span></p>
              <div>
                <span>납입금액</span>
                <span>30,000,000,000</span>
              </div>
              <div>
                <span>납입금액</span>
                <span>통신사명</span>
              </div>
            </li>
          </ul> -->
          <ul class="list_tot history bottom_line mg_b0">
            <li class="nothing">모두 완납하셨어요.</li>
          </ul>
          <div class="mg_t15">
            <kb-button link class="blue">
              기타 카테고리 수정/삭제하기<i class="bt_ic_arr" aria-hidden="true" />
            </kb-button>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02C006',
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
