<template>
  <kb-page page-title="월 예상 잔고 체크">
    <kb-page-body>
      <div class="section">
        <div class="balance_check_wrap">
          <div class="top_info">
            <p class="info_text">가장 가까운 출금 정보</p>
            <p class="tit">1월 3일에 1,623,000원 <br />출금될 예정입니다. </p>
            <p class="text">12,000원 추가 입금이 필요해요.</p>
          </div>

          <hr aria-hidden="true" class="hr_line">
          <div class="chart_info_box">
            <h3>이번달 잔여 예상 지출</h3>
            <p class="text">출금일 : 2021/03/22 ~ 2021/04/21</p>

            <div class="line_box">
              <dl>
                <dt>이번달 총 예상 지출</dt>
                <dd>123,000,000원</dd>
              </dl>
              <dl>
                <dt>지출 완료</dt>
                <dd>- 1,000,000원</dd>
              </dl>
              <dl class="total">
                <dt>잔여 예상 지출</dt>
                <dd>8,000,000원</dd>
              </dl>
            </div>

            <!-- 차트 영역 -->
            <div class="chart_area">
              <img src="~@/assets/images/TO/02/chart_sample1.png" alt="" style="width:100%;" />
            </div>
            <!-- //차트 영역 -->
            <div class="chart_info">
              <dl>
                <dt><i class="ico1"></i>입금계좌 잔고</dt>
                <dd>300,000,000원</dd>
              </dl>
              <dl>
                <dt><i class="ico2"></i>필요금액</dt>
                <dd>12,000,000원</dd>
              </dl>
            </div>
            <div class="worning">입금계좌에 12,000,000원을 추가 입금해주세요.</div>

          </div>

          <hr aria-hidden="true" class="hr_line">
          <div class="expense_categories_box">
            <kb-title-bar
              h3
              title="지출 예정 내역"
            >
              <kb-button not class="all_open_close">
                전체펼치기<!-- 전체닫기 -->
              </kb-button>
            </kb-title-bar>

            <!-- 현재 잔고 -->
            <div class="date_bar">
              <p class="text">현재잔고</p>
              <p class="date">2021/02/19</p>
            </div>
            <kb-foldings type1 not-toggle>
              <!-- 현금 -->
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      <!--
                            ico1 : 현금, 입출금
                            ico2 : 투자
                            ico3 : 카드,대출
                            ico4 : 보험
                            ico5 : 연금
                            ico6 : 실물
                          -->
                      <i class="ico1"></i>입출금<span>총합계</span>
                    </p>
                    <!-- 미납금이 있을때 경고 ico_worning -->
                    <p class="money">300,000,000,000 원</p>
                  </div>
                </template>
                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    </li>
                  </ul>
                </div>

              </kb-folding>
              <!-- //현금 -->
            </kb-foldings>
            <!-- //현재 잔고 -->

            <!-- 예상 지출 -->
            <div class="date_bar">
              <p class="text">예상지출</p>
              <p class="date">2021/02/19 ~ 2021/02/20</p>
            </div>
            <kb-foldings type1 not-toggle>
              <!-- 보험 -->
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      <!--
                            ico1 : 현금, 입출금
                            ico2 : 투자
                            ico3 : 카드,대출
                            ico4 : 보험
                            ico5 : 연금
                            ico6 : 실물
                          -->
                      <i class="ico4"></i>보험<span>납입 예정 금액</span>
                    </p>
                    <!-- 미납금이 있을때 경고 ico_worning -->
                    <p class="money ico_worning">300,000,000,000 원</p>
                  </div>
                </template>
                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">990,000</p>
                      </div>
                      <!--
                        긍정 : plus
                        부정 : minus
                      -->
                      <p class="amount_money minus">2월 23일 출금미납</p>
                    </li>
                    <li>
                      <div class="info">
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <!--
                        긍정 : plus
                        부정 : minus
                      -->
                      <p class="amount_money plus">2월 23일 출금예정</p>
                    </li>
                  </ul>
                  <kb-button not aTag class="btn_more_list">이번달 납입 완료한 목록 보기</kb-button>
                </div>

              </kb-folding>
              <!-- //보험 -->

              <!-- 연금 -->
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      <!--
                            ico1 : 현금, 입출금
                            ico2 : 투자
                            ico3 : 카드,대출
                            ico4 : 보험
                            ico5 : 연금
                            ico6 : 실물
                          -->
                      <i class="ico5"></i>연금<span>납입 예정 금액</span>
                    </p>
                    <!-- 미납금이 있을때 경고 ico_worning -->
                    <p class="money">300,000,000,000 원</p>
                  </div>
                </template>
                <div class="accordion_box">
                  <!-- 상단 카테고리 명 -->
                  <div class="box_header">
                    <p class="sub_tit">
                      <span>연금저축</span>
                      <span>1,000,000,000원</span>
                    </p>
                  </div>
                  <!-- //상단 카테고리 명 -->
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <!--
                        긍정 : plus
                        부정 : minus
                      -->
                      <p class="amount_money plus">2월 23일 출금예정</p>
                    </li>
                    <li>
                      <div class="info">
                        <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <!--
                        긍정 : plus
                        부정 : minus
                      -->
                      <p class="amount_money plus">2월 23일 출금예정</p>
                    </li>
                  </ul>
                  <kb-button not aTag class="btn_more_list">이번달 납입 완료한 목록 보기</kb-button>
                </div>

              </kb-folding>
              <!-- //연금 -->
            </kb-foldings>
            <!-- //예상 지출 -->
          </div>

        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02C002',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
