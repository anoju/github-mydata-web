<template>
  <kb-page page-title="투자상상 퀴즈">
    <kb-page-body>
      <div class="section invest_quiz_wrap">
        <h2>10년 전 삼성전자에 투자했다면 현재수익률은 <span class="answer">1000 ~2000%</span></h2>

        <!-- 답안유형 샘플(text)
          1. 수익율
          2. 수익금액
          3. 수익금액/수익율
          4. 종목
          5. 기타

          답안은 3가지 템플릿 형태
          1. Text
          2. text + graph
          3. text + graph + table
        -->
        <!-- 수익율 -->
        <div class="invest_info_box">
          <div class="top">
            <p class="tit">수익율</p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <!--
            상승 : plus
            하락 : minus
          -->
          <div class="cont">
            <p class="text">+ 3,141%</p>
          </div>
        </div>
        <!-- //수익율 -->

        <!-- 수익금액 -->
        <div class="invest_info_box">
          <div class="top">
            <p class="tit">수익금액</p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <!--
            기본 : ''
            상승 : plus
            하락 : minus
          -->
          <div class="cont minus">
            <p class="text">40,000,000원</p>
          </div>
        </div>
        <!-- //수익금액 -->

        <!-- 수익금액/수익률 -->
        <div class="invest_info_box">
          <div class="top">
            <p class="tit">수익금액/수익률</p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <!--
            기본 : ''
            상승 : plus
            하락 : minus
          -->
          <div class="cont plus">
            <p class="text">-40,000,000원</p>
            <p class="text">-52%</p>
          </div>
        </div>
        <!-- //수익금액/수익률 -->

        <!-- 종목 -->
        <div class="invest_info_box">
          <div class="top">
            <p class="kind">
              <span>005930</span>
              <span>KOSPI</span>
              <span>전기, 전자</span>
            </p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <!--
            기본 : ''
            상승 : plus
            하락 : minus
          -->
          <div class="cont plus">
            <div class="text_box">
              <p class="tit">SK바이오팜</p>
              <p class="number">100,000원</p>
              <p class="status">▲ 23,900원(-21.02%)</p>
            </div>
            <kb-button not aTag class="chart_samll_area">
              <img src="~@/assets/images/IN/sample_quiz_chart_img.png" alt="" />
            </kb-button>

            <div class="chart_area">
              <img src="~@/assets/images/IN/sample_quiz_chart_img2.png" alt="" />
            </div>
          </div>
        </div>
        <!-- //종목 -->

        <!-- 기타 -->
        <div class="invest_info_box">
          <div class="top">
            <p class="tit">급등했던달</p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <div class="cont">
            <p class="text">2020년 1월</p>
          </div>
        </div>
        <!-- //기타 -->

        <!-- 테이블이 있는 경우 -->
        <kb-table-scroll class="mg_b20">
          <kb-table
            caption="테이블제목3"
            :col-width="['130px','130px','180px','180px','80px']"
            class="amount"
          >
            <thead>
              <tr>
                <th scope="col">종목명</th>
                <th scope="col">상장일</th>
                <th scope="col">공모가</th>
                <th scope="col">전일종가</th>
                <th scope="col">상승율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">SK바이오팜</th>
                <td>0000/00/00</td>
                <td>1,000,000,000</td>
                <td>1,000,000,000</td>
                <td>200%</td>
              </tr>
              <tr>
                <th scope="row">SK바이오팜</th>
                <td>0000/00/00</td>
                <td>1,000,000,000</td>
                <td>1,000,000,000</td>
                <td>200%</td>
              </tr>
              <tr>
                <th scope="row">SK바이오팜</th>
                <td>0000/00/00</td>
                <td>1,000,000,000</td>
                <td>1,000,000,000</td>
                <td>200%</td>
              </tr>
              <tr>
                <th scope="row">SK바이오팜</th>
                <td>0000/00/00</td>
                <td>1,000,000,000</td>
                <td>1,000,000,000</td>
                <td>200%</td>
              </tr>
            </tbody>
          </kb-table>
        </kb-table-scroll>
        <!-- // 테이블이 있는 경우 -->
        <!-- // 답안유형 -->

        <p class="footer_text">
          10년 전 오늘, 2010년 12월 19일! <br />
          1,000만원으로 삼성전자에 투자했다면, 삼성전자 200주(종가 5만원 기준)를 보유하게됩니다.<br /><br />

          해당 주식을 오늘까지 계속 보유했다면, 현재 수익률은 +3.141%이며 1,000만원의 투자금은 현재 3억 2,410만원이 됩니다.
        </p>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN10A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
