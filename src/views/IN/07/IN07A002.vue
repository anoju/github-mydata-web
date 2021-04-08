<template>
  <kb-page page-title="가상투자">
    <kb-page-body>
      <div class="section portfolio_wrap">
        <div class="user_info">
          <div class="fc_666 fz_12">20/10/19 기준</div>
          <kb-title-bar h2 class="mg_t8">
            <template slot="left">
              <h1 class="tit">
                김스타님 진단대상 자산은<br>
                <strong>523,456,000</strong>원 증가했어요.
              </h1>
            </template>
          </kb-title-bar>
          <div class="invest_dl mg_t24">
            <dl>
              <dt>평가금액</dt>
              <dd>
                <strong>1,230,000,000원</strong>
              </dd>
            </dl>
          </div>
        </div>
        <div class="flex space_between align_end mg_t24">
          <div>
            <kb-select
              v-model="selectVal1"
              :options="selectOpt1"
              inline
            />
          </div>
          <div>
            <kb-btn-toggle small auto>
              <kb-btn-toggle-row>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="1"
                >
                  6개월
                </kb-radio>
                <kb-radio
                  v-model="toggleVal1"
                  button
                  value="2"
                >
                  1년
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </div>
        </div>
        <div class="chart_area mg_t16">
          <img src="@/assets/images/temp/chart2.png" alt="" class="wp_100">
        </div>
        <hr class="hr_line mg_t32" aria-hidden="true">
        <!--
          포스아거(공격투자형) : type1
          루나키키(적극투자형) : type2
          멜랑콜리(위험중립형) : type3
          심쿵비비(안정추구형) : type4
          롤로라무(안정형) : type5
        -->
        <div class="in_chart_item mg_t40">
          <div class="tit">
            <div class="name">김스타님은</div>
            <div>수익보다는 위험요소가 가장 낮은 상품을 선호하는
              <strong class="line">롤로라무</strong>
              와 유사한 성향을 가지고 있어요!
            </div>
          </div>
          <div class="summary">관심 분야에 투자하여 자산을 키우는 안정형 상품을 준비해봤어요.</div>
          <div class="chart_wrap ">
            <div class="character type5"></div>
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
        <hr class="hr_line mg_t24" aria-hidden="true">
        <div class="t_center mg_t32">
          <div>원하는 구성이 아니라면<br>
            내 맘대로 다시 시작!</div>
          <div class="txt_list2 flex justify_center mg_t4">
            <div class="dot">포트폴리오 변경은 주 1회만 가능합니다.</div>
          </div>
          <div class="mg_t16">
            <kb-button yellow class="w_200">자산비중 바꾸기</kb-button>
          </div>
        </div>

        <div class="section_scroll mg_t48">
          <div class="list ty2">
            <div class="fz_14 t_center">원하는 구성이 아니라면<br>내 맘대로 다시 시작!</div>
            <div class="mg_t16">
              <kb-button line blue class="wp_100">가상투자 종료하기</kb-button>
            </div>
          </div>
          <div class="list ty2">
            <div class="fz_14 t_center">앗! 이느낌이 아닌데...<br>처음부터 다시 시작하고 싶으세요?</div>
            <div class="mg_t16">
              <kb-button line blue class="wp_100">가상투자 새로하기</kb-button>
            </div>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN07A002',
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
