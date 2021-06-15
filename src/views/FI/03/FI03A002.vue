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
              <strong>(무)닥터 플러스 건강보험</strong>
            </div>
            <div class="sub mg_b16">
              <p class="mg_t4">KB손해보험 12345678901234567890</p>
            </div>
            <div class="ico_wrap">
              <div>
                <!--
                  종신 : pink ??
                  변액 :pink ??
                  유니버셜 : blue
                -->
                <ico-txt pink>종신보험</ico-txt>
                <ico-txt blue>유니버셜</ico-txt>
              </div>
            </div>
            <div class="point">
              <span class="unit mg_r4">월</span><strong class="strong">230,000원</strong>
            </div>
            <div class="sub t_right">만기일 2020/12/31 <strong class="mg_l4 fc_blue">20년납</strong></div>
          </div>
        </div>
        <!-- //보험 -->

        <kb-tabs type2 tabs-class="flex_ty" class="mg_t8" contentClass="mg_t0">
          <template slot="tabNext">
            <kb-button link blue @click="showFullPopup($event.target)">다른보험 보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
          </template>
          <kb-tab
            title="계약정보"
            active
          >
            <kb-foldings
              not
              not-toggle
              class="accordion_bar_list"
            >
              <kb-folding title="계약정보" active>
                <div class="info_txt_list">
                  <ul class="list">
                    <li>
                      <div class="th">계약상태</div>
                      <div class="td fc_666"><strong>정상</strong></div>
                    </li>
                    <li>
                      <div class="th">납입기간</div>
                      <div class="td fc_blue"><strong>60세납</strong></div>
                    </li>
                    <li>
                      <div class="th">보험기간</div>
                      <div class="td fc_666"><strong>2009/01/01 ~ 2078/01/01</strong></div>
                    </li>
                    <li>
                      <div class="th">총 납입횟수</div>
                      <div class="td fc_666"><strong>900회 납입</strong></div>
                    </li>
                    <li>
                      <div class="th">보험가입금액</div>
                      <div class="td fc_666"><strong>123,000,000원</strong></div>
                    </li>
                    <li>
                      <div class="th">납입주기/일자</div>
                      <div class="td fc_666"><strong>매월 / 25일</strong></div>
                    </li>
                    <li>
                      <div class="th">납입방법</div>
                      <div class="td fc_666"><strong>자동이체</strong></div>
                    </li>
                    <li>
                      <div class="th">납입기관</div>
                      <div class="td fc_666"><strong>KB국민은행</strong></div>
                    </li>
                    <li>
                      <div class="th">계약체결일</div>
                      <div class="td fc_666"><strong>2009/01/01</strong></div>
                    </li>
                    <li>
                      <div class="th">납입종료일자</div>
                      <div class="td fc_666"><strong>2029/01/01</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding title="특약정보" active>
                <div class="info_txt_list">
                  <p class="mg_b12 fz_16 fw_bold">(무)의료보장특약</p>
                  <ul class="list pd_b20">
                    <li>
                      <div class="th">특약 상태</div>
                      <div class="td fc_666"><strong>정상</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 만기일자</div>
                      <div class="td fc_666"><strong>2078/01/01</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 가입금액</div>
                      <div class="td fc_666"><strong>123,000,000원</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 유형</div>
                      <div class="td fc_666"><strong>필수</strong></div>
                    </li>
                  </ul>
                  <p class="mg_b12 fz_16 fw_bold">(무)의료보장특약</p>
                  <ul class="list pd_b20">
                    <li>
                      <div class="th">특약 상태</div>
                      <div class="td fc_666"><strong>정상</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 만기일자</div>
                      <div class="td fc_666"><strong>2078/01/01</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 가입금액</div>
                      <div class="td fc_666"><strong>123,000,000원</strong></div>
                    </li>
                    <li>
                      <div class="th">특약 유형</div>
                      <div class="td fc_666"><strong>필수</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding title="상세정보" active>
                <div class="info_txt_list">
                  <ul class="list pd_b20">
                    <li>
                      <div class="th">갱신여부</div>
                      <div class="td fc_666"><strong>갱신형</strong></div>
                    </li>
                    <!-- case발생 시 노출 -->
                    <li>
                      <div class="th">연금개시일</div>
                      <div class="td fc_666"><strong>2078/01/01</strong></div>
                    </li>
                    <li>
                      <div class="th">연금수령주기</div>
                      <div class="td fc_666"><strong>매월</strong></div>
                    </li>
                    <!-- //case발생 시 노출 -->
                    <li>
                      <div class="th">대출실행 가능 상품 여부</div>
                      <div class="td fc_666"><strong>실행가능</strong></div>
                    </li>
                    <li>
                      <div class="th">피보험자 1</div>
                      <div class="td fc_666"><strong>김보험</strong></div>
                    </li>
                    <li>
                      <div class="th">피보험자 2</div>
                      <div class="td fc_666"><strong>김순번</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </kb-tab>
          <kb-tab
            title="납입내역"
          >
            <div class="list_filter_wrap">
              <div class="list_filter_bar bd_line">
                <div class="left"></div>
                <div class="right">
                  <div class="item_warp">
                    <span class="item">
                      {{this.searchTxt1}}
                    </span>
                    <span class="item">
                      {{this.searchTxt2}}
                    </span>
                    <span
                      v-if="searchTxt3 != ''"
                      class="item tag"
                    >#{{this.searchTxt3}}</span>
                  </div>
                  <kb-button
                    filter
                    @click="openFilter($event.target)"
                  >
                    검색필터
                  </kb-button>
                </div>
              </div>
            </div>
            <!-- 필터 조건결과 내역이 없을때 -->
            <div v-if="false" class="no_list_txt icon">
              <strong class="tit">내역이 없습니다.</strong>
            </div>
            <!-- //필터 조건결과이 없을때 -->

            <kb-foldings
              not
              class="accordion_bar_list"
              first-open
              not-toggle
            >
              <kb-folding>
                <template slot="title">
                  999회 차
                </template>
                <div class="info_txt_list mg_t20">
                  <ul class="list pd_b20">
                    <li>
                      <div class="th">납입년월</div>
                      <div class="td fc_666"><strong>2021년 3월</strong></div>
                    </li>
                    <li>
                      <div class="th">납입보험료</div>
                      <div class="td fc_666"><strong>123,000,000원</strong></div>
                    </li>
                    <li>
                      <div class="th">납입방법</div>
                      <div class="td fc_666"><strong>자동이체</strong></div>
                    </li>
                    <li>
                      <div class="th">납입일자</div>
                      <div class="td fc_666"><strong>2021/03/01</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding class="pd_b0">
                <template slot="title">
                  998회 차
                </template>
                <div class="info_txt_list mg_t20">
                  <ul class="list pd_b20">
                    <li>
                      <div class="th">납입년월</div>
                      <div class="td fc_666"><strong>2021년 3월</strong></div>
                    </li>
                    <li>
                      <div class="th">납입보험료</div>
                      <div class="td fc_666"><strong>123,000,000원</strong></div>
                    </li>
                    <li>
                      <div class="th">납입방법</div>
                      <div class="td fc_666"><strong>자동이체</strong></div>
                    </li>
                    <li>
                      <div class="th">납입일자</div>
                      <div class="td fc_666"><strong>2021/03/01</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </kb-tab>
        </kb-tabs>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI03A002',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '최근 3개월',
      searchTxt3: '',
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
    openFilter(el) {
      this.$modal({
        component: () => import('@/views/FI/03/FI03A008.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        this.searchTxt1 = `${result.payload[0]}`;
        this.searchTxt2 = `${result.payload[1]}`;
      });
    },
  },
};
</script>
