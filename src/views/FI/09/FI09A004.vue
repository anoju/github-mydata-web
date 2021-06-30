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

        <kb-btn-toggle small inline class="mg_t10">
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
              티머니
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="3"
            >
              뱅크샐러드
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="4"
            >
              카카오뱅크
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <div class="pd_x8 mg_t22">
          <div class="fz_18"><strong>최근 3개월</strong></div>
          <div class="fz_12 fc_666 mg_t12">총 승인 금액</div>
          <div class="fz_26 mg_t4"><strong>123,400,000원</strong></div>
        </div>
        <div class="t_right mg_t30">
          <kb-button link blue>
            충전내역 보러가기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t20">
        <div class="list_filter_wrap">
          <div class="list_filter_bar">
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
                    <div class="fz_14"><strong>결제</strong></div>
                  </div>
                  <div class="sub_info">
                    <ul>
                      <li>카카오뱅크</li>
                      <li>KB국민카드</li>
                      <li>할부(3)</li>
                    </ul>
                  </div>
                  <div class="flex_wrap space_between mg_t3">
                    <div>
                      <div class="breakall lh_15"><strong>(주)커피빈코리아여의도 (주)커피빈코리아여의도 (주)커피빈코리아여의도</strong></div>
                    </div>
                    <div class="nowrap t_right pd_l20">
                      <strong class="fz_18">12,400원</strong>
                    </div>
                  </div>
                  <div class="fz_12 fc_666 mg_t8">아메리카노샷추가</div>
                </kb-button>
                <div class="category_info">
                  <kb-button not class="btn_category">카테고리 선택</kb-button>
                </div>
              </div>
            </li>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong>결제</strong></div>
                  </div>
                  <div class="sub_info">
                    <ul>
                      <li>뱅크샐러드</li>
                      <li>KB국민카드</li>
                      <li>할부(3)</li>
                    </ul>
                  </div>
                  <div class="flex_wrap space_between mg_t3">
                    <div>
                      <div class="breakall lh_15"><strong>(주)커피빈코리아여의도</strong></div>
                    </div>
                    <div class="nowrap t_right pd_l20">
                      <strong class="fz_18">12,400원</strong>
                    </div>
                  </div>
                  <div class="fz_12 fc_666 mg_t8">아메리카노샷추가</div>
                </kb-button>
                <div class="category_info">
                  <ul>
                    <li class="tag">#식품</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 필터 조건결과이 있을때 -->

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
  name: 'FI09A004',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '3개월',
      searchTxt3: '',
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
          searchType: 3,
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
