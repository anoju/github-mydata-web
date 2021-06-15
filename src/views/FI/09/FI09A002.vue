<template>
  <kb-page page-title="충전관리">
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
        <div class="pd_x8">
          <div class="fz_12 fc_666 mg_t12">보유금액</div>
          <div class="fz_26 mg_t4"><strong>123,400,000원</strong></div>
          <div class="info_txt_list mg_t28">
            <ul class="list">
              <li>
                <div class="th">충전</div>
                <div class="td fc_666"><strong>1,234,000원</strong></div>
              </li>
              <li>
                <div class="th">적립</div>
                <div class="td fc_666"><strong>1,234,000원</strong></div>
              </li>
              <li>
                <div class="th">적립예정</div>
                <div class="td fc_666"><strong>1,234,000원</strong></div>
              </li>
              <li>
                <div class="th">2개월 이내 소멸예정</div>
                <div class="td fc_666"><strong>1,234,000원</strong></div>
              </li>
            </ul>
          </div>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t24">
        <kb-btn-toggle small inline class="mg_t22">
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal"
              button
              value="1"
            >
              전체
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="2"
            >
              쿠페이
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="3"
            >
              네이버페이
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="4"
            >
              PAYCO
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <kb-tabs
          type2
          class="mg_t12"
          tabs-class="flex_ty"
          content-class="mg_t0"
          v-model="tabIdx"
        >
          <template slot="tabNext">
            <kb-button v-if="tabIdx == 1" link blue>
              월정액 자동충전중<i class="bt_ic_arr" aria-hidden="true" />
            </kb-button>
          </template>
          <kb-tab title="충전내역">
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
            <!-- 필터 조건결과이 있을때 -->
            <div v-else class="line_list_ty2 border_none">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong>충전</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t8 align_end">
                        <div>
                          <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          <div class="mg_t3"><strong>쿠페이</strong></div>
                        </div>
                        <div>
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8 fz_12 fc_666">잔액 1,432,000,000원</div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">충전취소</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t8 align_end">
                        <div>
                          <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          <div class="mg_t3"><strong>쿠페이</strong></div>
                        </div>
                        <div>
                          <strong class="fz_18">-12,400원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8 fz_12 fc_666">잔액 1,432,000,000원</div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 필터 조건결과이 있을때 -->
          </kb-tab>
          <kb-tab title="사용내역">
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
                    @click="openFilter2($event.target)"
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
            <!-- 필터 조건결과이 있을때 -->
            <div v-else class="line_list_ty2 border_none">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong>결제</strong></div>
                      </div>
                      <div class="sub_info">
                        <ul>
                          <li>네이버페이</li>
                          <li>포인트</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div>
                          <div class="breakall lh_15"><strong>(주)커피빈코리아여의도 34번지</strong></div>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#식품</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">결제취소</strong></div>
                      </div>
                      <div class="sub_info">
                        <ul>
                          <li>네이버페이</li>
                          <li>포인트</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div>
                          <div class="breakall lh_15"><strong>(주)커피빈코리아여의도 34번지 (주)커피빈코리아여의도 34번지</strong></div>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 필터 조건결과이 있을때 -->
          </kb-tab>
        </kb-tabs>

        <!-- 모든내역이 없을때 -->
        <div v-if="false" class="no_list_txt icon h_full">
          <strong class="tit">거래 내역이 없습니다.</strong>
        </div>
        <!-- //모든내역이 없을때 -->

        <!-- 미 연동 시 -->
        <div v-if="false" class="no_list_txt icon h_full">
          <strong class="tit">이런, 금융정보가 없네요! <br>
            금융정보를 연동해 주세요 :)</strong>
          <div class="mg_t32">
            <kb-button line blue class="w_200">+ 금융정보 연동</kb-button>
          </div>
        </div>
        <!-- //미 연동 시 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI09A002',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '최근 3개월',
      searchTxt3: '',
      tabIdx: 0,
    };
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    openFilter(el) {
      // if (this.$refs.filterPanel.$el.classList.contains('folding_ing')) return;
      this.$modal({
        component: () => import('@/views/FI/04/FI04A007.vue'),
        componentProps: {
          searchType: 2, // 선불O
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
          this.searchTxt3 = `${result.payload[2]}`;
        }
      });
    },
    openFilter2(el) {
      // if (this.$refs.filterPanel.$el.classList.contains('folding_ing')) return;
      this.$modal({
        component: () => import('@/views/FI/04/FI04A007.vue'),
        componentProps: {
          searchType: 3, // 선불X
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
          this.searchTxt3 = `${result.payload[2]}`;
        }
      });
    },
  },
};
</script>
