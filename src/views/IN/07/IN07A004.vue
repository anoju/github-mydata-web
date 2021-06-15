<template>
  <kb-pop full title="유형별 포트폴리오">
    <kb-pop-body>
      <div class="section">
        <div class="outer_bg_box">
          <div class="inner t_center">
            <div class="tit">
              <strong>
                김스타님은
                <template v-if="userType === 0">공격투자형</template>
                <template v-if="userType === 1">적극투자형</template>
                <template v-if="userType === 2">위험중립형</template>
                <template v-if="userType === 3">안정추구형</template>
                <template v-if="userType === 4">안정형</template>
                입니다.
              </strong>
            </div>
          </div>
        </div>
        <!--
          포스아거(공격투자형) : type1
          루나키키(적극투자형) : type2
          멜랑콜리(위험중립형) : type3
          심쿵비비(안정추구형) : type4
          롤로라무(안정형) : type5
        -->
        <kb-tabs
          type3
          v-model="tabIdx"
          class="mg_t24"
        >
          <kb-tab
            v-if="userType !== 0"
            title="공격투자형"
          >
            <div class="in_chart_item">
              <div class="summary t_center">망설임없이 적극적으로 <br>투자에 집중하는 타입입니다.</div>
              <div class="chart_wrap ">
                <div class="character type1"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="">
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
          </kb-tab>
          <kb-tab
            v-if="userType !== 1"
            title="적극투자형"
          >
            <div class="in_chart_item">
              <div class="summary t_center">자산관리와 투자관리에 <br>모두에 관심이 많은 타입입니다.</div>
              <div class="chart_wrap ">
                <div class="character type2"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="">
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
          </kb-tab>
          <kb-tab
            v-if="userType !== 2"
            title="위험중립형"
          >
            <div class="in_chart_item">
              <div class="summary t_center">안정한 수익추구와 <br>절약소비에 관심이 많은 타입입니다.</div>
              <div class="chart_wrap ">
                <div class="character type3"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="">
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
          </kb-tab>
          <kb-tab
            v-if="userType !== 3"
            title="안정추구형"
          >
            <div class="in_chart_item">
              <div class="summary t_center">미래 대비를 위한 연금, 보험, 세금 등에 <br>관심이 많은 타입입니다.</div>
              <div class="chart_wrap ">
                <div class="character type4"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="">
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
          </kb-tab>
          <kb-tab
            v-if="userType !== 4"
            title="안정형"
          >
            <div class="in_chart_item">
              <div class="summary t_center">관심 분야에 투자하여 <br>자산을 키우는 타입입니다.</div>
              <div class="chart_wrap ">
                <div class="character type5"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="">
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
          </kb-tab>
        </kb-tabs>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow>자산비중 적용하기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'IN07A004',
  data() {
    return {
      userType: 0,
      tabIdx: 0,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
