<template>
  <kb-page page-title="카드">
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
          <h2>카드 보유 현황</h2>

          <kb-button not aTag class="money_box">
            <p class="text">3월 승인금액</p>
            <p class="money">123,400,000원</p>

            <ul class="info_text">
              <li><span>총 보유포인트</span>4개</li>
              <li><span>보유 카드</span>32개</li>
            </ul>
          </kb-button>

          <kb-button not aTag class="point_list">
            <ul>
              <li><span>카드사</span>120,000P</li>
              <li><span>소멸예정 포인트</span>1,000P</li>
            </ul>
          </kb-button>

          <div class="comment">2개월 이내 만료되는 포인트를 확인하세요</div>

          <p class="t_right mg_t22">
            <kb-button link blue><i class="bt_ic_calendar" aria-hidden="true" />소비달력보기</kb-button>
          </p>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t20">

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
                <p class="money">123,000,000원
                  <span class="sub_text">3월 승인금액</span>
                </p>
              </kb-button>
              <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
                <p class="money">123,000,000원
                  <span class="sub_text">3월 승인금액</span>
                </p>
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
                <p class="money">123,000,000원
                  <span class="sub_text">3월 승인금액</span>
                </p>
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
                    <p class="money">123,000,000원
                      <span class="sub_text">3월 승인금액</span>
                    </p>
                  </kb-button>
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
                    <p class="money">123,000,000원
                      <span class="sub_text">3월 승인금액</span>
                    </p>
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
                    <p class="money">123,000,000원
                      <span class="sub_text">3월 승인금액</span>
                    </p>
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

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">청구서 관리 <span class="fc_blue">3</span></h3>
          </template>
          <kb-button to="#" link blue>
            더보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>

        <p class="flex_wrap align_center mg_t24">
          <span class="mg_ra fz_14 fc_666">3월 총 청구금액</span>
          <span class="fz_20 fw_bold">123,000,000원</span>
        </p>

        <div class="comment">지난달 보다 999,000원 적게 소비했어요.</div>

        <div class="chart_area mg_t16 mg_b24 section">
          <img src="~@/assets/images/temp/chart4.png" alt="" />
        </div>

        <p class="mg_t24 mg_b10 fz_14 fc_666 ">결제 예정 금액</p>
        <ul class="list_style1">
          <li>
            <p class="number">10일</p>
            <p class="tit">삼성카드</p>
            <p class="money">1,200,000원
              <span class="info">오늘 결제할 결제정보</span>
            </p>
          </li>
          <li>
            <p class="number">10일</p>
            <p class="tit">삼성카드</p>
            <p class="money">1,200,000원
            </p>
          </li>
        </ul>

        <hr aria-hidden="true" class="hr_line">

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">최근 승인 내역</h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            더보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>
        <div class="line_list_ty2 border_none">
          <ul>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong class="">승인</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div>
                      <div class="fz_12 fc_666 line_type"><strong>KB국민은행</strong><strong>KB국민은행</strong></div>
                      <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                    </div>
                    <div>
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
                    <div class="fz_14"><strong class="fc_red">취소</strong></div>
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
                </kb-button>
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
            <h3 class="tit">고정 지출 금액</h3>
          </template>
          <p class="fz_16 fw_bold"><span class="mg_r2 fz_14 fc_666 fw_normal">총</span>1,123,400,000원</p>
        </kb-title-bar>
        <div class="list_bar_style">
          <ul>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">70%</span>
                <i style="width:70%;">
                  <span class="text">70%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">5%</span>
                <i style="width:5%;">
                  <span class="text">5%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">42%</span>
                <i style="width:42%;">
                  <span class="text">42%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
            <li>
              <p class="text">아파트관리비 결산금액</p>
              <div class="bar">
                <span class="text">1%</span>
                <i style="width:1%;">
                  <span class="text">1%</span>
                </i>
              </div>
              <p class="money">120,000원</p>
            </li>
          </ul>
          <kb-foldings not class="reverse_accodion">
            <kb-folding close-title="펼치기" open-title="접기">
              <ul class="mg_t12">
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">70%</span>
                    <i style="width:70%;">
                      <span class="text">70%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">5%</span>
                    <i style="width:5%;">
                      <span class="text">5%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">42%</span>
                    <i style="width:42%;">
                      <span class="text">42%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
                <li>
                  <p class="text">아파트관리비 결산금액</p>
                  <div class="bar">
                    <span class="text">1%</span>
                    <i style="width:1%;">
                      <span class="text">1%</span>
                    </i>
                  </div>
                  <p class="money">120,000원</p>
                </li>
              </ul>
            </kb-folding>
          </kb-foldings>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <kb-title-bar
          h3
          class="mg_t32"
        >
          <template slot="left">
            <h3 class="tit">할부관리</h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            더보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>
        <div class="financial_bank_box">
          <kb-button not aTag class="mg_t24">
            <dl class="money_box mg_t0">
              <dt>잔여 할부금액</dt>
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
              <li><span>대출건수</span>2개</li>
            </ul>

            <dl class="money_box">
              <dt>총 대출잔액</dt>
              <dd class="money">1,123,400,000원</dd>
            </dl>
          </kb-button>

          <div class="comment">KB신용대출 납입예정일은 3월10일(수) 입니다.</div>

          <!-- 대출내역 리스트 -->
          <div class="list_box">
            <div class="info">
              <p class="bank">
                <strong>KB카드 장기카드대출</strong>
                만기일 2021/01/01
              </p>
              <p class="loan"><span>대출 이율</span>3.12%</p>
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
          <!-- //대출내역 리스트 -->

          <kb-foldings not class="reverse_accodion">
            <kb-folding close-title="펼치기" open-title="접기">
              <!-- 대출내역 리스트 -->
              <div class="list_box">
                <div class="info">
                  <p class="bank">
                    <strong>KB카드 장기카드대출</strong>
                    만기일 2021/01/01
                  </p>
                  <p class="loan"><span>대출 이율</span>3.12%</p>
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

              <div class="list_box pd_b20">
                <div class="info">
                  <p class="bank">
                    <strong>KB카드 리볼빙</strong>
                  </p>
                </div>
                <ul class="info_list">
                  <li class="black">
                    <strong>신청일</strong>
                    2019/01/01
                  </li>
                  <li class="black">
                    <strong>리볼빙 이월잔액</strong>
                    30,000,000,000원
                  </li>
                  <li>
                    <strong>최소 결제비율</strong>
                    10%
                  </li>
                  <li>
                    <strong>최소 결제금액</strong>
                    123,000원
                  </li>
                  <li>
                    <strong>약정 결제비율</strong>
                    10%
                  </li>
                </ul>
              </div>

              <div class="list_box pd_b20">
                <div class="info">
                  <p class="bank">
                    <strong>KB카드 단기대출</strong>
                  </p>
                  <p class="loan"><span>대출 이율</span>3.12%</p>
                </div>
                <ul class="info_list">
                  <li class="black">
                    <strong>신청일</strong>
                    2019/01/01
                  </li>
                  <li class="black">
                    <strong>이용금액</strong>
                    30,000,000,000원
                  </li>
                  <li>
                    <strong>이용일시</strong>
                    2019/01/01
                  </li>
                </ul>
              </div>
              <!-- //대출내역 리스트 -->
            </kb-folding>
          </kb-foldings>
        </div>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A001',
  data() {
    return {
      noDate: false,
      tabIdx: 0,
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
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
  },
};
</script>
