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
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>청춘대로 톡톡카드</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>KB국민카드 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt green>가족</ico-txt>
                <ico-txt blue>체크</ico-txt>
              </div>
              <div>
                <span class="fz_12">3월 25일 결제예정</span>
              </div>
            </div>
            <div class="point">
              <strong class="strong">254,000,500 원</strong>
            </div>
            <div class="sub t_right">보유 포인트 23,000P</div>
            <div class="sub t_right">소멸예정 2,000P</div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">결제일</div>
                    <div class="td fc_666"><strong>01일</strong></div>
                  </li>
                  <li>
                    <div class="th">결제은행</div>
                    <div class="td fc_666"><strong>KB국민은행</strong></div>
                  </li>
                  <li>
                    <div class="th">카드구분</div>
                    <div class="td fc_666"><strong>신용</strong></div>
                  </li>
                  <li>
                    <div class="th">해외결제기능</div>
                    <div class="td fc_666"><strong>VISA</strong></div>
                  </li>
                  <li>
                    <div class="th">개설일</div>
                    <div class="td fc_666"><strong>2019/01/01</strong></div>
                  </li>
                  <li>
                    <div class="th">연회비</div>
                    <div class="td fc_666"><strong>10,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">교통기능</div>
                    <div class="td fc_666"><strong>O</strong></div>
                  </li>
                  <li>
                    <div class="th">현금카드 여부</div>
                    <div class="td fc_666"><strong>X</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>

        <div class="flex_wrap space_between mg_t15">
          <div>
            <kb-button link blue><i class="bt_ic_calendar" aria-hidden="true" />소비달력보기</kb-button>
          </div>
          <div>
            <kb-button link blue @click="showCard($event.target)">다른카드보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
          </div>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t14">
        <kb-foldings first-open class="line_none mg_t8">
          <kb-folding title="최근 3개월 청구 금액">
            <div class="chart_wrap">
              <img src="@/assets/images/temp/chart4.png" alt="">
            </div>
          </kb-folding>
        </kb-foldings>
        <hr aria-hidden="true" class="hr_line mg_t24">
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
                        <div class="fz_14"><strong>승인</strong></div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>본인 1234</li>
                          <li>할부(3)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between align_end mg_t3">
                        <div class="breakall">
                          <strong>여의도식당</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
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
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">승인취소</strong></div>
                      </div>
                      <div class="sub_info mg_t8">
                        <ul>
                          <li>본인 1234</li>
                          <li>일시불</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between align_end mg_t3">
                        <div class="breakall">
                          <strong>여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">-12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#주거/공과금</li>
                        <li>여의도 맛집</li>
                      </ul>
                    </div>
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
  name: 'FI02A009',
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
    showCard(el) {
      this.$modal({
        component: () => import('@/views/FI/02/FI02A012.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>
