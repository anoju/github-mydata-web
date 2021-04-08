<template>
  <kb-pop full title="자산비중변경">
    <kb-pop-body>
      <div class="section">
        <!--
          포스아거(공격투자형) : type1
          루나키키(적극투자형) : type2
          멜랑콜리(위험중립형) : type3
          심쿵비비(안정추구형) : type4
          롤로라무(안정형) : type5
        -->
        <div class="in_chart_item mg_t16">
          <div class="tit">
            <div>어떤 자산 비중으로 바꿔볼까요?</div>
          </div>
          <div class="txt_list mg_t4">
            <div class="dot">슬라이더를 조정하여 직접 자산을 변경해보세요.</div>
          </div>
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
        <div class="section_scroll none mg_t28">
          <div class="list ty2">
            <div class="fz_14 t_center">다른사람들은 어떻게 투자하지?</div>
            <div class="mg_t16">
              <kb-button line blue class="wp_100">포트폴리오 참고하기</kb-button>
            </div>
          </div>
        </div>
        <hr class="hr_line mg_t24" aria-hidden="true">
        <kb-title-bar title="현재자산 구성 비율" class="mg_t32">
          <template slot="left">
            <strong class="fc_blue fz_18 mg_l8">{{sliderVal1+sliderVal2+sliderVal3+sliderVal4+sliderVal5+sliderVal6+sliderVal7}}%</strong>
          </template>
          <div
            v-if ="(sliderVal1+sliderVal2+sliderVal3+sliderVal4+sliderVal5+sliderVal6+sliderVal7) < 100"
            class="fz_14 fc_666">
            {{100 - (sliderVal1+sliderVal2+sliderVal3+sliderVal4+sliderVal5+sliderVal6+sliderVal7)}}% 부족해요!
          </div>
          <div
            v-else-if ="(sliderVal1+sliderVal2+sliderVal3+sliderVal4+sliderVal5+sliderVal6+sliderVal7) > 100"
            class="fz_14 fc_666">
            {{(sliderVal1+sliderVal2+sliderVal3+sliderVal4+sliderVal5+sliderVal6+sliderVal7)- 100}}% 초과해요!
          </div>
        </kb-title-bar>
        <div class="chart_legend_list mg_t25">
          <ul>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#3e61ba;"></i>
                  <strong>국내주식</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip1.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal1}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal1"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#3bae6c;"></i>
                  <strong>해외주식</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip2.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal2}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal2"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#91a5e9;"></i>
                  <strong>국내채권</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip3.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal3}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal3"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#b7ebcd;"></i>
                  <strong>해외채권</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip4.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal4}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal4"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#c76ee6;"></i>
                  <strong>상품</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip5.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal5}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal5"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#7040b1;"></i>
                  <strong>부동산</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip6.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal6}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal6"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
            <li>
              <div class="flex">
                <div class="th">
                  <i class="dot" style="background-color:#c79fe7;"></i>
                  <strong>ELS/DLS</strong>
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/07/IN07A003_tip7.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button>
                </div>
                <div class="td">67% > <strong>{{sliderVal7}}%</strong></div>
              </div>
              <kb-slider
                v-model="sliderVal7"
                :step="5"
                :marks="[0, 25, 50, 75, 100]"
              />
            </li>
          </ul>
        </div>
        <div class="t_center mg_t42">
          <kb-button yellow class="w_200">자산 비중 바꾸기</kb-button>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'IN07A003',
  data() {
    return {
      sliderVal1: 20,
      sliderVal2: 20,
      sliderVal3: 15,
      sliderVal4: 15,
      sliderVal5: 10,
      sliderVal6: 10,
      sliderVal7: 10,
    };
  },
  methods: {
  },
};
</script>
