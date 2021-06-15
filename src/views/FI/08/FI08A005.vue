<template>
  <kb-page page-title="상세 조회">
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

        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div class="tit">
              <strong>0104***2356</strong>
            </div>
            <div class="sub pd_y4">
              SKT 휴대폰
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt>고객정지</ico-txt>
              </div>
            </div>

            <div class="point">
              <span class="fz_14 fc_666 mg_r4">납부 예정 금액</span>
              <strong class="strong">254,000,500원</strong>
            </div>
            <p class="fz_12 t_right mg_t4 fc_666">3월1일 자동납부</p>
          </div>
        </div>

        <div class="flex_wrap mg_y15">
          <p class=""><kb-button link blue><i class="bt_ic_phone" aria-hidden="true" />납부내역보기</kb-button></p>
          <p class="mg_la"><kb-button link blue @click="showPay($event.target)">다른 계약 보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button></p>
        </div>

        <hr aria-hidden="true" class="hr_line">
        <div class="list_filter_bar">
          <div class="left"></div>
          <div class="right">
            <div class="item_warp">
              <span class="item">
                {{this.searchTxt2}}
              </span>
            </div>
            <kb-button
              filter
              @click="openFilter($event.target)"
            >
              검색필터
            </kb-button>
          </div>
        </div>

        <div class="month_info_wrap">
          <div>
            <div>2021년 03월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>우리은행(2222)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>월정액 자동충전</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>우리은행(2222)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>월정액 자동충전</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>2021년 03월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>우리은행(2222)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>월정액 자동충전</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>우리은행(2222)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>월정액 자동충전</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI08A005',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '1개월',
      searchTxt3: '',
      searchTxt4: '전체',
      filterOpen: false,
      isStar: false,
    };
  },
  mounted() {
  },
  methods: {
    openFilter(el) {
      this.filterOpen = !this.filterOpen;
      this.$modal({
        component: () => import('@/views/FI/08/FI08A007.vue'),
        componentProps: {
          searchType: 2,
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
        }
      });
    },
    showPay(el) {
      this.$modal({
        component: () => import('@/views/FI/09/FI09A007.vue'),
        componentProps: {
        },
        returnFocus: el,
      });
    },
  },
};
</script>
