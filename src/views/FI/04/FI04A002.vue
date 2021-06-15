<template>
  <kb-page page-title="입출금 내역">
    <kb-page-body>
      <div class="section">
        <div>
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

          <kb-btn-toggle small inline class="mg_t12">
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
                KB국민은행<strong class="point">3</strong>
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="3"
              >
                기업은행
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="4"
              >
                신한은행
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="5"
              >
                하나은행
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>

          <div class="chart_wrap mg_t15">
            <img src="@/assets/images/temp/chart3.png" alt="">
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
          <div v-else class="month_info_wrap">
            <div>
              <div>2021년 03월</div>
              <div class="line_list_ty2 mg_t8">
                <ul>
                  <li>
                    <div class="item">
                      <kb-button aTag not class="inner">
                        <div class="flex_wrap space_between align_center">
                          <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                          <div class="fz_14"><strong class="fc_up">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div>
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                            <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                          </div>
                          <div>
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
                          <div class="fz_14"><strong class="fc_down">예금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div>
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          </div>
                          <div>
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
            <div>
              <div>2021년 04월</div>
              <div class="line_list_ty2 mg_t8">
                <ul>
                  <li>
                    <div class="item">
                      <kb-button aTag not class="inner">
                        <div class="flex_wrap space_between align_center">
                          <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                          <div class="fz_14"><strong class="fc_up">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                            <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
                          <div class="fz_14"><strong class="fc_up">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
            <div>
              <div>2021년 04월</div>
              <div class="line_list_ty2 mg_t8">
                <ul>
                  <li>
                    <div class="item">
                      <kb-button aTag not class="inner">
                        <div class="flex_wrap space_between align_center">
                          <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                          <div class="fz_14"><strong class="fc_up">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                            <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
                          <div class="fz_14"><strong class="fc_up">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                        <div class="flex_wrap space_between align_center mg_t8">
                          <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                          <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
          <!-- 필터 조건결과이 있을때 -->
        </div>

        <!-- 모든내역이 없을때 -->
        <div class="no_list_txt icon h_full">
          <strong class="tit">거래 내역이 없습니다.</strong>
        </div>
        <!-- //모든내역이 없을때 -->

        <!-- 미 연동 시 -->
        <div class="no_list_txt icon h_full">
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
  name: 'FI04A002',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '1개월',
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
        component: () => import('@/views/FI/04/FI04A008.vue'),
        componentProps: {
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
