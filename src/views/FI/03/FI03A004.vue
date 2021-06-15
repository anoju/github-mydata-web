<template>
  <kb-page page-title="입출금 내역">
    <kb-page-body>
      <div class="section">
        <div class="flex_wrap space_between align_center mg_b12">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh">09:00:03</kb-button>
          </div>
        </div>

        <!-- 보험 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
            >
              <strong>(무)KB다이렉트 자동차 보험</strong>
            </div>
            <div class="sub mg_b16">
              <p class="mg_t4">KB손해보험 12345678901234567890</p>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt pink>자동차보험</ico-txt>
              </div>
            </div>
            <div class="info_txt_list mg_t16">
              <ul class="list">
                <li>
                  <div class="th fc_222">피보험자</div>
                  <div class="td"><strong>김국민</strong></div>
                </li>
                <li>
                  <div class="th fc_222">보험기간</div>
                  <div class="td"><strong>2009/01/01 ~ 2078/01/01</strong></div>
                </li>
                <li>
                  <div class="th fc_222">동일증권</div>
                  <div class="td fc_blue2"><strong>총 3건</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //보험 -->

        <div class="t_right mg_t16 mg_b16">
          <kb-button link blue @click="showFullPopup($event.target)">다른보험 보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
        </div>

        <!-- <kb-tabs
          type3
          class="tab_car"
        >
          <kb-tab
            title="011가1234"
          />
          <kb-tab
            title="11나5678"
          />
          <kb-tab
            title="11나5679"
          />
        </kb-tabs>
        -->
        <!-- radio타입 추가: 기존 탭형태로 써도 무방 -->
        <kb-btn-toggle class="tab_car mg_b16">
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal"
              button
              value="011가1234"
            >
              011가1234
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="11나5678"
            >
              11나5678
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="11나5679"
            >
              11나5679
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>

        <!-- 상단 탭에 따라 내용 변경 -->
        <kb-foldings
          not
          class="accordion_bar_list"
          first-open
          not-toggle
        >
          <kb-folding class="pd_b0">
            <template slot="title">
              계약정보
            </template>
            <div class="info_txt_list mg_t20">
              <ul class="list pd_b20">
                <li>
                  <div class="th">자동차보험 구분</div>
                  <div class="td fc_666"><strong>자동차손해배상책임보험</strong></div>
                </li>
                <li>
                  <div class="th">계약자 차량명</div>
                  <div class="td fc_666"><strong>그랜져IG</strong></div>
                </li>
                <li>
                  <div class="th">차량번호</div>
                  <div class="td fc_222"><strong>01가1234</strong></div>
                </li>
                <li>
                  <div class="th">연령특약</div>
                  <div class="td fc_666"><strong>전 연령</strong></div>
                </li>
                <li>
                  <div class="th">운전자한정특약</div>
                  <div class="td fc_666"><strong>가족 및 지정 1인 한정</strong></div>
                </li>
                <li>
                  <div class="th">자기차량손해</div>
                  <div class="td fc_666"><strong>가입</strong></div>
                </li>
                <li>
                  <div class="th">자기부담금 구분</div>
                  <div class="td fc_666"><strong>20%</strong></div>
                </li>
                <li>
                  <div class="th">자기부담금 금액</div>
                  <div class="td fc_666"><strong>123,000,000원</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <kb-folding class="pd_b0">
            <template slot="title">
              납입내역
            </template>
            <div class="info_txt_list mg_t20">
              <ul class="list pd_b20">
                <li>
                  <div class="th">자동차보험 보험료</div>
                  <div class="td fc_666"><strong>123,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">납입회차</div>
                  <div class="td fc_666"><strong>1</strong></div>
                </li>
                <li>
                  <div class="th">실납입 보험료</div>
                  <div class="td fc_666"><strong>123,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">납입방법</div>
                  <div class="td fc_666"><strong>간편결제</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>
        <!-- //상단 탭에 따라 내용 변경 -->

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI03A004',
  data() {
    return {
      toggleVal: '011가1234',
    };
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/FI/03/FI03A007.vue'),
        returnFocus: el,
      }).then((result) => {
        if (result.payload === 'change') this.showModalPopup(el);
      });
    },
  },
};
</script>
