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
              <strong>IRP 퇴직연금</strong>
            </div>
            <div class="sub mg_b16">
              <p class="mg_t4">KB손해보험 12345678901234567890</p>
            </div>
            <div class="point">
              <span class="unit mg_r4">평가금액</span><strong class="strong">230,000원</strong>
            </div>
          </div>
          <kb-foldings
            not
            class="folding"
            first-open
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">적립금액</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">사용자부담금</div>
                    <div class="td fc_666"><strong>123,456,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">가입자부담금</div>
                    <div class="td fc_666"><strong>123,456,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">개설일</div>
                    <div class="td fc_666"><strong>2021/01/01</strong></div>
                  </li>
                  <li>
                    <div class="th">최초입금일</div>
                    <div class="td fc_666"><strong>2021/01/01</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //보험 -->

        <div class="t_right mg_t16 mg_b16">
          <kb-button link blue @click="showFullPopup($event.target)">다른보험 보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
        </div>

        <kb-foldings
          not
          class="accordion_bar_list"
          not-toggle
        >
          <kb-folding>
            <template slot="title">
              원리금비보장(펀드)
            </template>
            <template slot="title_next">
              <div class="inner">
                <div class="info_txt_list">
                  <div class="breakall"><strong>미래에셋 퇴직플랜 아시아그레이트컨슈머 증권자 투자신탁1호[주식-재간접형]종류C-E</strong></div>
                  <ul class="list mg_t16">
                    <li>
                      <div class="th">평가금액</div>
                      <div class="td fc_666"><strong>1,200,000원</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="info_txt_list mg_t8">
              <ul class="list">
                <li>
                  <div class="th">투자원금</div>
                  <div class="td fc_666"><strong>300,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">신규일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              원리금비보장(펀드)
            </template>
            <template slot="title_next">
              <div class="inner">
                <div class="info_txt_list">
                  <div class="breakall"><strong>미래에셋 퇴직플랜 아시아그레이트컨슈머 증권자 투자신탁1호[주식-재간접형]종류C-E</strong></div>
                  <ul class="list mg_t16">
                    <li>
                      <div class="th">평가금액</div>
                      <div class="td fc_666"><strong>1,200,000원</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="info_txt_list mg_t8">
              <ul class="list">
                <li>
                  <div class="th">투자원금</div>
                  <div class="td fc_666"><strong>300,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">신규일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>

        <hr aria-hidden="true" class="hr_line">

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

        <!-- 거래내역 조회 -->
        <div class="month_info_wrap">
          <div>
            <div>2021년 03월</div>
            <div class="line_list_ty2 mg_t8">
              <!-- 입출금 -->
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="nowrap pd_l10 mg_la">
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
                        <div class="fz_14"><strong class="fc_up">지급</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="nowrap pd_l10 mg_la">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
              <!-- //입출금 -->
            </div>
          </div>

          <div>
            <div>2021년 02월</div>
            <div class="line_list_ty2 mg_t8">
              <!-- 입출금 -->
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="nowrap pd_l10 mg_la">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
              <!-- //입출금 -->
            </div>
          </div>
        </div>
        <!-- //거래내역 조회 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI03A005',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '최근 3개월',
      searchTxt3: '',
    };
  },
  methods: {
    openFilter(el) {
      this.$modal({
        component: () => import('@/views/FI/03/FI03A009.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        this.searchTxt1 = `${result.payload[0]}`;
        this.searchTxt2 = `${result.payload[1]}`;
      });
    },
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
