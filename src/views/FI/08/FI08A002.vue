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
            <div class="flex_wrap">
              <div class="tit flex11">
                <strong>전세금 반환보증금</strong>
              </div>
              <p class="fz_16 fc_blue2 fw_bold">D-30</p>
            </div>
            <div class="sub pd_y4">
              <p>주택도시보증공사</p>
              <p>12345678901234567890</p>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt blue>보증보험</ico-txt>
              </div>
            </div>

            <div class="point">
              <span class="fz_14 fc_666 mg_r4">월 납입액</span>
              <strong class="strong">254,000,500원</strong>
            </div>
            <p class="fz_12 t_right mg_t4 fc_666">종료일 2021/12/31</p>
          </div>
        </div>

        <div class="flex_wrap mg_y15">
          <p class="mg_la"><kb-button link blue @click="showPay($event.target)">다른 보험 보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button></p>
        </div>

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
                  <div class="th">납입기간 구분</div>
                  <div class="td fc_blue"><strong>분납</strong></div>
                </li>
                <li>
                  <div class="th">보험가입 금액</div>
                  <div class="td fc_666"><strong>123,400,000원</strong></div>
                </li>
                <li>
                  <div class="th">총 납입 금액</div>
                  <div class="td fc_666"><strong>123,400,000원</strong></div>
                </li>
                <li>
                  <div class="th">계약체결일</div>
                  <div class="td fc_666"><strong>2019/01/01</strong></div>
                </li>
                <li>
                  <div class="th">피보험자명 <strong class="fc_blue">2</strong></div>
                  <div class="td fc_666"><strong>김스타, 김보험</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>

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
                        <div class="fz_14"><strong class="fc_gray">002</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">납입보험료</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">납입방법 가상계좌</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_gray">002</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">납입보험료</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">납입방법 가상계좌</div>
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
                        <div class="fz_14"><strong class="fc_gray">002</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">납입보험료</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">납입방법 가상계좌</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_gray">002</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">납입보험료</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">납입방법 가상계좌</div>
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
        component: () => import('@/views/FI/03/FI03A007.vue'),
        componentProps: {
        },
        returnFocus: el,
      });
    },
  },
};
</script>
