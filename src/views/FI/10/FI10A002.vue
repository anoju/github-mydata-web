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
        <!-- 할부금융 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>신차일반할부</strong>
            </div>
            <div class="sub pd_y4">
              KB캐피탈 215099999111-1234567
            </div>
            <div class="mg_t12 t_right fz_12"><strong class="fc_down">적용금리 1.55%</strong></div>
            <div class="point mg_t8">
              <span class="fz_14 fc_666 mg_r4">대출잔액</span>
              <strong class="strong">254,000,500원</strong>
            </div>
            <div class="info_txt_list mg_t18">
              <ul class="list">
                <li>
                  <div class="th">다음 이자 상환일</div>
                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/02/12</strong></div>
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
                    <div class="th">대출일</div>
                    <div class="td fc_666"><strong>2021/02/12</strong></div>
                  </li>
                  <li>
                    <div class="th">상한방식</div>
                    <div class="td fc_666"><strong>거치식 만기지정상환/<br>원금균등분할상환</strong></div>
                  </li>
                  <li>
                    <div class="th">고객민</div>
                    <div class="td fc_666"><strong>김국민</strong></div>
                  </li>
                  <li>
                    <div class="th">월 상환일</div>
                    <div class="td fc_666"><strong>31일</strong></div>
                  </li>
                  <li>
                    <div class="th">상환계좌</div>
                    <div class="td fc_666"><strong>KB국민은행 239293599</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //할부금융 -->
        <!-- 운용리스 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>메르세데스벤츠 파이낸셜</strong>
            </div>
            <div class="sub pd_y4">
              KB캐피탈 215099999111-1234567
            </div>
            <div class="info_txt_list mg_t18">
              <ul class="list">
                <li>
                  <div class="th">다음 이자 상환일</div>
                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/02/12</strong></div>
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
                    <div class="th">대출일</div>
                    <div class="td fc_666"><strong>2021/02/12</strong></div>
                  </li>
                  <li>
                    <div class="th">상한방식</div>
                    <div class="td fc_666"><strong>거치식 만기지정상환/<br>원금균등분할상환</strong></div>
                  </li>
                  <li>
                    <div class="th">고객민</div>
                    <div class="td fc_666"><strong>김국민</strong></div>
                  </li>
                  <li>
                    <div class="th">월 상환일</div>
                    <div class="td fc_666"><strong>31일</strong></div>
                  </li>
                  <li>
                    <div class="th">상환계좌</div>
                    <div class="td fc_666"><strong>KB국민은행 239293599</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- 운용리스 -->

        <div class="t_right mg_y16">
          <kb-button link blue @click="showBank($event.target)">다른계좌보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
        </div>
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
                <!-- 할부금융 -->
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">상환</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>002</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <span class="fz_12 fc_666 mg_r6">거래금액</span>
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="info_txt_list mg_t16">
                        <ul class="list">
                          <li>
                            <div class="th">거래 후 대출 잔액</div>
                            <div class="td fc_666"><strong>123,000,000원</strong></div>
                          </li>
                          <li>
                            <div class="th">거래금액 중 원금</div>
                            <div class="td fc_666"><strong>123,000,000원</strong></div>
                          </li>
                        </ul>
                        <kb-foldings
                          not
                          not-toggle
                          class="info_txt_folding"
                        >
                          <kb-folding :active.sync="isFolding1" @click="isFolding2 = false">
                            <template slot="title">
                              <div class="th">거래금액 중 이자</div>
                              <div class="td fc_666"><strong>123,000,000원</strong></div>
                            </template>
                            <div class="info_txt_box">
                              <ul class="list">
                                <li>
                                  <div class="th">이자적용 시작일</div>
                                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                                </li>
                                <li>
                                  <div class="th">이자적용 종료일</div>
                                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                                </li>
                                <li>
                                  <div class="th">적용이율</div>
                                  <div class="td fc_666"><strong>12.345%</strong></div>
                                </li>
                                <li>
                                  <div class="th">이자종류</div>
                                  <div class="td fc_666"><strong>정상이자</strong></div>
                                </li>
                              </ul>
                            </div>
                          </kb-folding>
                        </kb-foldings>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">실행</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>002</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <span class="fz_12 fc_666 mg_r6">거래금액</span>
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="info_txt_list mg_t16">
                        <ul class="list">
                          <li>
                            <div class="th">거래 후 대출 잔액</div>
                            <div class="td fc_666"><strong>123,000,000원</strong></div>
                          </li>
                          <li>
                            <div class="th">거래금액 중 원금</div>
                            <div class="td fc_666"><strong>123,000,000원</strong></div>
                          </li>
                        </ul>
                        <kb-foldings
                          not
                          not-toggle
                          class="info_txt_folding"
                        >
                          <kb-folding :active.sync="isFolding2" @click="isFolding1 = false">
                            <template slot="title">
                              <div class="th">거래금액 중 이자</div>
                              <div class="td fc_666"><strong>123,000,000원</strong></div>
                            </template>
                            <div class="info_txt_box">
                              <ul class="list">
                                <li>
                                  <div class="th">이자적용 시작일</div>
                                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                                </li>
                                <li>
                                  <div class="th">이자적용 종료일</div>
                                  <div class="td fc_666"><strong>2021/02/12</strong></div>
                                </li>
                                <li>
                                  <div class="th">적용이율</div>
                                  <div class="td fc_666"><strong>12.345%</strong></div>
                                </li>
                                <li>
                                  <div class="th">이자종류</div>
                                  <div class="td fc_666"><strong>정상이자</strong></div>
                                </li>
                              </ul>
                            </div>
                          </kb-folding>
                        </kb-foldings>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- //할부금융 -->
              </ul>
            </div>
          </div>
          <div>
            <div>2021년 02월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <!-- 운용리스 -->
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">일부상환</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>002</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <span class="fz_12 fc_666 mg_r6">거래금액</span>
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">기타</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t3">
                        <div class="breakall lh_15">
                          <strong>002</strong>
                        </div>
                        <div class="nowrap t_right pd_l20">
                          <span class="fz_12 fc_666 mg_r6">거래금액</span>
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- //운용리스 -->
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
  name: 'FI10A002',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '1개월',
      searchTxt3: '',
      searchTxt4: '전체',
      filterOpen: false,
      isStar: false,
      isFolding1: false,
      isFolding2: false,
    };
  },
  mounted() {
  },
  methods: {
    openFilter(el) {
      // if (this.$refs.filterPanel.$el.classList.contains('folding_ing')) return;
      this.filterOpen = !this.filterOpen;
      this.$modal({
        component: () => import('@/views/FI/10/FI10A003.vue'),
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
        }
      });
    },
    showBank(el) {
      this.$modal({
        component: () => import('@/views/FI/04/FI04A005.vue'),
        componentProps: {
        },
        returnFocus: el,
      });
    },
  },
};
</script>
