<template>
  <kb-page page-title="은행">
    <kb-page-body>
      <div class="section financial_bank_wrap">
        <!-- 금융정보가 없는 경우 -->
        <template v-if="noDate">
          <div class="assets_none_box">
            <div class="none_box">
              <i></i>
              이런, 금융 정보가 없네요!<br />
              금융정보를 연동해 주세요 :)
              <kb-button line blue class="more fz_16">금융정보 연동</kb-button>
            </div>
          </div>
        </template>
        <!-- //금융정보가 없는 경우 -->

        <div class="flex_wrap space_between align_center mg_b12">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh" @click="btnRefresh">09:00:03</kb-button>
          </div>
        </div>

        <!--2021-06-21  전체 내역이 없을때 -->
        <div v-if="false" class="no_list_txt icon h_full">
          <strong class="tit">내역이 없습니다.</strong>
        </div>
        <!-- //2021-06-21 전체 내역이 없을때 -->

        <div class="financial_bank_top">
          <h2>예적금 현황</h2>

          <kb-button not aTag class="money_box">
            <p class="text">총 잔액</p>
            <p class="money">123,400,000원</p>

            <ul class="info_text">
              <li><span>금융기관</span>12개</li>
              <li><span>계좌</span>32개</li>
            </ul>
          </kb-button>

          <div class="comment">내일은 KB국민은행 힘내라 적금 납입일입니다.</div>

          <div class="chart_accordion">
            <kb-btn-toggle small inline>
              <kb-btn-toggle-row>
                <kb-radio
                  v-model="toggleVal"
                  button
                  value="1"
                  @click="accordionOpen"
                >
                  유형별
                </kb-radio>
                <kb-radio
                  v-model="toggleVal"
                  button
                  value="2"
                  @click="accordionOpen"
                >
                  금융사별
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
            <kb-button class="ico_arrow" :class="{active : this.accordionHide}" @click="chartAccordion">내용 열고 닫기</kb-button>
            <div class="chart_area" ref="chartBox">
              <img src="~@/assets/images/FI/sample_chart.png" alt="" />
            </div>
          </div>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">관심 <span class="fc_blue">3</span></h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            관심관리<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>

        <!-- 관심 없는 경우 -->
        <div class="financial_list_none">
          <p class="tit">자주 사용하는 계좌를 등록해볼까요?</p>
          <kb-button class="add" not aTag>관심등록</kb-button>
        </div>
        <!-- //관심 없는 경우 -->

        <!-- 관심 있는 경우 -->
        <div class="financial_bank_list">
          <ul>
            <li>
              <kb-button class="bank_info">
                <!-- 이슈 발생시 issue 클래스 적용  -->
                <i class="ico issue"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB Star 정기예금</p>
                  <span>12345678901234</span>
                </div>
                <p class="money">123,000,000원</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
              </kb-button>
              <kb-button
                star
                :class="{checked:isStar1}"
                role="checkbox"
                :aria-checked="isStar1?'true':'false'"
                @click="isStar1 = !isStar1"
              >관심등록</kb-button>
            </li>
            <li>
              <kb-button class="bank_info">
                <!-- 이슈 발생시 issue 클래스 적용  -->
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB Star 정기예금</p>
                  <span>12345678901234</span>
                </div>
                <p class="money">123,000,000원</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
              </kb-button>
              <kb-button
                star
                :class="{checked:isStar2}"
                role="checkbox"
                :aria-checked="isStar2?'true':'false'"
                @click="isStar2 = !isStar2"
              >관심등록</kb-button>
            </li>
            <li>
              <kb-button class="bank_info">
                <!-- 이슈 발생시 issue 클래스 적용  -->
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>KB Star 정기예금</p>
                  <span>12345678901234</span>
                </div>
                <p class="money">123,000,000원</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
              </kb-button>
              <kb-button
                star
                :class="{checked:isStar3}"
                role="checkbox"
                :aria-checked="isStar3?'true':'false'"
                @click="isStar3 = !isStar3"
              >관심등록</kb-button>
            </li>
          </ul>
          <kb-foldings not class="reverse_accodion">
            <kb-folding close-title="펼치기" open-title="접기">
              <ul class="border_top">
                <li>
                  <kb-button class="bank_info">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico issue"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB Star 정기예금</p>
                      <span>12345678901234</span>
                    </div>
                    <p class="money">123,000,000원</p>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  </kb-button>
                  <kb-button
                    star
                    :class="{checked:isStar1}"
                    role="checkbox"
                    :aria-checked="isStar1?'true':'false'"
                    @click="isStar1 = !isStar1"
                  >관심등록</kb-button>
                </li>
                <li>
                  <kb-button class="bank_info">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB Star 정기예금</p>
                      <span>12345678901234</span>
                    </div>
                    <p class="money">123,000,000원</p>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  </kb-button>
                  <kb-button
                    star
                    :class="{checked:isStar2}"
                    role="checkbox"
                    :aria-checked="isStar2?'true':'false'"
                    @click="isStar2 = !isStar2"
                  >관심등록</kb-button>
                </li>
                <li>
                  <kb-button class="bank_info">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB Star 정기예금</p>
                      <span>12345678901234</span>
                    </div>
                    <p class="money">123,000,000원</p>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  </kb-button>
                  <kb-button
                    star
                    :class="{checked:isStar3}"
                    role="checkbox"
                    :aria-checked="isStar3?'true':'false'"
                    @click="isStar3 = !isStar3"
                  >관심등록</kb-button>
                </li>
              </ul>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //관심 있는 경우 -->

        <hr aria-hidden="true" class="hr_line">

        <kb-foldings class="line_none pd_t8 pd_b8">
          <kb-folding
            title="입출금 현황"
            first-open
          >
            <div class="financial_bank_chart pd_b32">
              <div class="info">
                <p class="txt">전체・최근 3개월</p>
                <div class="category">
                  <span class="type1">입금</span>
                  <span class="type2">출금</span>
                </div>
              </div>
              <img src="~@/assets/images/FI/sample_chart2.png" alt="" />
            </div>
          </kb-folding>
        </kb-foldings>

        <hr aria-hidden="true" class="hr_line">

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">최근 입출금 내역</h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            전체보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>
        <div class="line_list_ty2 border_none">
          <ul>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong class="fc_red">출금</strong></div>
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
                    <div class="fz_14"><strong class="fc_red">출금</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div class="breakall">
                      <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                    </div>
                    <div class="nowrap pd_l10">
                      <strong class="fz_18">12,400원</strong>
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

        <hr aria-hidden="true" class="hr_line">

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">고정 거래 <span class="fc_blue">3</span></h3>
          </template>
        </kb-title-bar>

        <div class="line_list_ty2 border_none">
          <ul>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong class="fc_red">출금</strong></div>
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
                </kb-button>
              </div>
            </li>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong class="fc_red">출금</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div class="breakall">
                      <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                    </div>
                    <div class="nowrap pd_l10">
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
                    <div class="fz_14"><strong class="fc_red">출금</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div class="breakall">
                      <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                    </div>
                    <div class="nowrap pd_l10">
                      <strong class="fz_18">12,400원</strong>
                    </div>
                  </div>
                </kb-button>
              </div>
            </li>
          </ul>
        </div>
        <kb-foldings not class="reverse_accodion">
          <kb-folding close-title="펼치기" open-title="접기">
            <div class="line_list_ty2 border_ty2">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_red">출금</strong></div>
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
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_red">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                          <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                        </div>
                        <div class="nowrap pd_l10">
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
                        <div class="fz_14"><strong class="fc_red">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                          <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>

        <hr aria-hidden="true" class="hr_line">

        <div class="financial_bank_box">
          <kb-button not aTag>
            <p class="tit">투자상품 보유내역</p>
            <ul class="info_text">
              <li><span>금융기관</span>12개</li>
              <li><span>계좌</span>32개</li>
            </ul>

            <dl class="money_box">
              <dt>총 잔액</dt>
              <dd class="money">1,123,400,000원</dd>
            </dl>
          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="financial_bank_box">
          <kb-button not aTag>
            <p class="tit">퇴직연금 보유내역</p>
            <ul class="info_text">
              <li><span>금융기관</span>12개</li>
              <li><span>계좌</span>32개</li>
            </ul>

            <dl class="money_box">
              <dt>평가금액</dt>
              <dd class="money">1,123,400,000원</dd>
            </dl>
            <p class="total">총 잔액 1,432,000,000원</p>
          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="financial_bank_box mg_b0">
          <kb-button not aTag>
            <p class="tit">대출내역</p>
            <ul class="info_text">
              <li><span>금융기관</span>12개</li>
              <li><span>계좌</span>32개</li>
            </ul>

            <dl class="money_box">
              <dt>총 대출잔액</dt>
              <dd class="money">1,123,400,000원</dd>
            </dl>
          </kb-button>

          <div class="comment">KB신용대출 납입예정일은 3월10일(수) 입니다.</div>

          <div class="list_box">
            <div class="info">
              <p class="bank">
                <strong>국민은행</strong>
                12345678900000
              </p>
              <p class="loan"><span>대출 금리</span>3.12%</p>
            </div>
            <div class="money_info">
              <p class="progress">10% 상환</p>
              <p class="money">
                <span>남은 대출 원금</span>
                123,456,000원
              </p>
            </div>
            <div class="progress_bar">
              <span style="width:10%"></span>
            </div>
          </div>

          <div class="list_box">
            <div class="info">
              <p class="bank">
                <strong>국민은행</strong>
                12345678900000
              </p>
              <p class="loan"><span>대출 금리</span>3.12%</p>
            </div>
            <div class="money_info">
              <p class="progress">10% 상환</p>
              <p class="money">
                <span>남은 대출 원금</span>
                123,456,000원
              </p>
            </div>
            <div class="progress_bar">
              <span style="width:10%"></span>
            </div>
          </div>
        </div>

        <!-- 하단배너 -->
        <div class="img_banner_box mg_t32">
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
          <kb-button not>
            <img src="/images/banner/sample_banner_2.png" alt="">
          </kb-button>
        </div>
        <!-- //하단배너 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI04A001',
  data() {
    return {
      noDate: false,
      toggleVal: '1',
      accordionHide: false,
      isStar1: true,
      isStar2: false,
      isStar3: false,
    };
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    chartAccordion() {
      const target = this.$refs.chartBox;
      if (this.accordionHide) {
        this.accordionHide = false;
        this.$slideDown(target, 500, () => {
        });
      } else {
        this.accordionHide = true;
        this.$slideUp(target, 500, () => {
        });
      }
    },
    accordionOpen() {
      const target = this.$refs.chartBox;
      this.accordionHide = false;
      this.$slideDown(target, 500, () => {
      });
    },
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
  },
};
</script>
