<template>
  <kb-page page-title="가상투자">
    <kb-page-body>
      <div class="section portfolio_wrap">
        <div class="gray_box2">
          <p class="sub_tit">첫 시작</p>
          <p class="tit">2020/12/29<br />
            천만원으로 투자를 처음 시작했어요!</p>
        </div>
        <div class="gray_box2">
          <p class="sub_tit">성향</p>
          <p class="tit">위험 자산과 안정 자산에 균형 투자를 추구하는 멜랑콜리와 유사한 성향을 가지고 있어요!</p>
        </div>

        <div class="gray_box2">
          <p class="sub_tit">수익</p>
          <p class="tit">53일동안 100% 수익률로 <br />총 20,000,000원이 늘었어요.</p>
        </div>

        <div class="gray_box2">
          <p class="sub_tit">투자</p>
          <p class="tit">마지막으로 운용한 포트폴리오는</p>
          <div class="in_chart_item mg_t20">
            <div class="chart_wrap ">
              <div class="character type1"></div>
              <div class="chart">
                <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
              </div>
            </div>
            <div class="chart_legend">
              <ul>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#3e61ba;"></i>
                    <strong>국내주식</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#3bae6c;"></i>
                    <strong>해외주식</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#91a5e9;"></i>
                    <strong>국내채권</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#b7ebcd;"></i>
                    <strong>해외채권</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#7040b1;"></i>
                    <strong>부동산</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#c79fe7;"></i>
                    <strong>ELS/DLS</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
                <li>
                  <div class="th">
                    <i class="dot" style="background-color:#c76ee6;"></i>
                    <strong>상품</strong>
                  </div>
                  <div class="td">67%</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr class="hr_line mg_t24" aria-hidden="true">
        <h3 class="mg_t32 fz_20 fw_bold">이 느낌 그대로<br />투자를 이어가보는건 어때요?<i class="ico_small"></i></h3>
        <ul class="product_list">
          <li>
            <div class="top">
              <kb-button not a-tag>
                <span class="stit">손해를 만회할 수 있는 극약처방!</span>
                <p class="tit">한국판 뉴딜 관련 수혜주를 중심으로 한 그린뉴딜 테마형</p>
              </kb-button>
            </div>
            <div class="return">
              <span>3개월 수익률</span>
              <strong class="fc_up">21.02%</strong>
            </div>
          </li>
          <li>
            <div class="top">
              <kb-button not a-tag>
                <span class="stit">손해를 만회할 수 있는 극약처방!</span>
                <p class="tit">한국판 뉴딜 관련 수혜주를 중심으로 한 그린뉴딜 테마형</p>
              </kb-button>
            </div>
            <div class="return">
              <span>3개월 수익률</span>
              <strong class="fc_up">21.02%</strong>
            </div>
          </li>
        </ul>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            투자생활 메인으로 가기
          </kb-button>
        </kb-button-wrap>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN07A001',
  data() {
    return {
      selectVal1: '1',
      selectOpt1: [
        { text: '수익금액', value: '1' },
        { text: '수익률', value: '2' },
      ],
      toggleVal1: '1',
    };
  },
  methods: {
  },
};
</script>
