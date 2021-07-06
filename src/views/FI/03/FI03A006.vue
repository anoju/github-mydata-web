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
              <strong>보험계약대출</strong>
            </div>
            <div class="sub mg_b16">
              <p class="mg_t4">삼성생명 12345678901234567890</p>
              <p class="mg_t4">거치식 만기지정상환·원금균등분할상환</p>
            </div>
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th fc_222">다음 이자 상환일</div>
                  <div class="td"><strong>2021/03/31</strong></div>
                </li>
                <li>
                  <div class="th fc_222">대출잔액</div>
                  <div class="td"><strong>300,000,000원</strong></div>
                </li>
                <li>
                  <div class="th fc_222">만기일</div>
                  <div class="td"><strong>2021/03/31</strong></div>
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
                    <div class="th">대출원금</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">대출일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">상환방식</div>
                    <div class="td fc_666"><strong>거치식 만기지정상환·원금균등분할상환</strong></div>
                  </li>
                  <li>
                    <div class="th">증권번호</div>
                    <div class="td fc_666"><strong>1234567890123456789</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //보험 -->

        <hr aria-hidden="true" class="hr_line mg_t24">

        <div class="list_filter_wrap">
          <div class="list_filter_bar">
            <div class="left"></div>
            <div class="right">
              <div class="item_warp">
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
                @click="openFilter"
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
                        <div class="fz_14"><strong class="fc_gray">002</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">대출원금 상환</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">이자납입 23,000원</div>
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
                          <div class="fz_14 fc_666">대출원금 상환</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">이자납입 23,000원</div>
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
                          <div class="fz_14 fc_666">대출원금 상환</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">이자납입 23,000원</div>
                      </div>
                    </kb-button>
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
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <div class="fz_14 fc_666">대출원금 상환</div>
                        </div>
                        <div>
                          <strong class="fz_18">300,000,000원</strong>
                        </div>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">이자납입 23,000원</div>
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
  name: 'FI03A006',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '1개월',
      searchTxt3: '',
      isStar: false,
    };
  },
  methods: {
    openFilter(el) {
      this.$modal({
        component: () => import('@/views/FI/03/FI03A008.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
        }
      });
    },
  },
};
</script>
