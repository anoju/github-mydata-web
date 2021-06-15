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
        <!-- 선불O -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>네이버페이 <span class="fz_12 fc_666 fw_normal mg_l4">abc***eee</span></strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub pd_y4">
              KB국민카드 13493859239430
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt blue>월정액 자동충전중</ico-txt>
                <ico-txt>비활동</ico-txt>
              </div>
            </div>
            <div class="point">
              <span class="fz_14 fc_666 mg_r4">보유금액</span>
              <strong class="strong">254,000,500원</strong>
            </div>
            <div class="info_txt_list mg_t28">
              <ul class="list">
                <li>
                  <div class="th">충전</div>
                  <div class="td fc_666"><strong>1,234,000원</strong></div>
                </li>
                <li>
                  <div class="th">충전가능한도</div>
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
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th fc_222">KB국민은행 <span class="fc_gray fz_12 mg_l6">주 결제</span></div>
                    <div class="td"><strong>222222****222</strong></div>
                  </li>
                  <li>
                    <div class="th">kakaoBank</div>
                    <div class="td fc_666"><strong>222222****222</strong></div>
                  </li>
                  <li>
                    <div class="th">우리카드</div>
                    <div class="td fc_666"><strong>222222****222</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //선불O -->
        <!-- 선불X -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>네이버페이 <span class="fz_12 fc_666 fw_normal mg_l4">abc***eee</span></strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub pd_y4">
              KB국민카드 13493859239430
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt>비활동</ico-txt>
              </div>
            </div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th fc_222">KB국민은행 <span class="fc_gray fz_12 mg_l6">주 결제</span></div>
                    <div class="td"><strong>222222****222</strong></div>
                  </li>
                  <li>
                    <div class="th">kakaoBank</div>
                    <div class="td fc_666"><strong>222222****222</strong></div>
                  </li>
                  <li>
                    <div class="th">우리카드</div>
                    <div class="td fc_666"><strong>222222****222</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //선불X -->

        <div class="t_right mg_y16">
          <kb-button link blue @click="showPay($event.target)">다른PAY보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
        </div>
        <kb-foldings
          not
          not-toggle
          class="accordion_bar_list"
        >
          <kb-folding title="포인트조회">
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">충전포인트 잔액</div>
                  <div class="td fc_666"><strong>23,000원</strong></div>
                </li>
                <li>
                  <div class="th">적립포인트 잔액</div>
                  <div class="td fc_666"><strong>23,000원</strong></div>
                </li>
                <li>
                  <div class="th">적립예정</div>
                  <div class="td fc_666"><strong>23,000원</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <kb-folding title="자동충전정보">
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">충전계좌</div>
                  <div class="td fc_666"><strong>우리은행 222222****222</strong></div>
                </li>
                <li>
                  <div class="th">충전조건</div>
                  <div class="td fc_666"><strong>월정액 자동충전</strong></div>
                </li>
                <li>
                  <div class="th">기준날짜</div>
                  <div class="td fc_666"><strong>18</strong></div>
                </li>
                <li>
                  <div class="th">충전금액</div>
                  <div class="td fc_666"><strong>123,000,000원</strong></div>
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
                {{this.searchTxt1}}
              </span>
              <span class="item">
                {{this.searchTxt2}}
              </span>
              <span
                v-if="searchTxt4 != ''"
                class="item"
              >{{this.searchTxt4}}</span>
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

        <div class="month_info_wrap">
          <div>
            <div>2021년 03월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <!-- 선불O -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong>결제</strong></div>
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
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">충전취소</strong></div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>네이버페이</li>
                          <li>포인트</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>월정액 자동충전</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </div>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#식품</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- //선불O -->
              </ul>
            </div>
          </div>
          <div>
            <div>2021년 02월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <!-- 선불X -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong>결제</strong></div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>KB카드(1234)</li>
                          <li>할부(3)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>(주)커피빈코리아여의도</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#주거/공과금</li>
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
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>KB카드(1234)</li>
                          <li>할부(3)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>(주)커피빈코리아여의도</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <strong class="fz_18">12,400원</strong>
                          <div class="fz_12 fc_666 mg_t3">잔액 1,432,000,000원</div>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#주거/공과금</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- //선불X -->
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
  name: 'FI09A006',
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
      // if (this.$refs.filterPanel.$el.classList.contains('folding_ing')) return;
      this.filterOpen = !this.filterOpen;
      this.$modal({
        component: () => import('@/views/FI/04/FI04A007.vue'),
        componentProps: {
          searchType: 2, // 선불O
          // searchType: 3, // 선불X
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
          this.searchTxt4 = `${result.payload[3]}`;
          this.searchTxt3 = `${result.payload[2]}`;
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
