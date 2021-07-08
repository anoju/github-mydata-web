<template>
  <kb-page page-title="PAY(전자금융)">
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
          <h2>PAY 현황 <strong class="fc_blue">3</strong></h2>

          <div class="money_box">
            <p class="text">총 보유금액</p>
            <p class="money">123,400,000원</p>
          </div>
        </div>

        <hr aria-hidden="true" class="hr_line mg_t28">

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

        <!-- 관심 있는 경우 -->
        <div class="financial_bank_list">
          <ul>
            <li>
              <kb-button class="bank_info">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                  <span>우리카드 222222****222</span>
                </div>
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
                  <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                  <span>우리카드 222222****222</span>
                </div>
              </kb-button>
              <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
                  <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                  <span>우리카드 222222****222</span>
                </div>
              </kb-button>
              <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                      <span>우리카드 222222****222</span>
                    </div>
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
                      <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                      <span>우리카드 222222****222</span>
                    </div>
                  </kb-button>
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
                      <p>네이버페이 <strong class="fz_14 mg_l8">abc***eee </strong></p>
                      <span>우리카드 222222****222</span>
                    </div>
                  </kb-button>
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
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
            <h3 class="tit">최근 결제 내역</h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            전체보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>

        <!--2021-06-21  내역이 없을때 -->
        <div v-if="false" class="no_list_txt icon mg_y50">
          <strong class="tit">내역이 없습니다.</strong>
        </div>
        <!-- //2021-06-21 내역이 없을때 -->

        <div class="line_list_ty2 border_none">
          <ul>
            <li>
              <div class="item">
                <kb-button aTag not class="inner">
                  <div class="flex_wrap space_between align_center">
                    <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                    <div class="fz_14"><strong>결제</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div class="breakall">
                      <div class="fz_12 fc_666"><strong>네이버페이</strong></div>
                      <div class="mg_t3 lh_15"><strong>(주)커피빈코리아</strong></div>
                    </div>
                    <div class="nowrap pd_l20">
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
                    <div class="fz_14"><strong>결제</strong></div>
                  </div>
                  <div class="flex_wrap space_between mg_t4 align_end">
                    <div class="breakall">
                      <div class="fz_12 fc_666"><strong>네이버페이</strong></div>
                      <div class="mg_t3 lh_15"><strong>(주)커피빈코리아</strong></div>
                    </div>
                    <div class="nowrap pd_l20">
                      <strong class="fz_18">12,400원</strong>
                    </div>
                  </div>
                </kb-button>
                <div class="category_info">
                  <ul>
                    <li class="tag">#식품</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <hr aria-hidden="true" class="hr_line">
        <div class="big_line_list">
          <ul>
            <li>
              <div class="inner">
                <div>
                  <strong class="fz_18">네이버페이</strong>
                  <span class="fz_14 fc_666 mg_l8">abc***</span>
                </div>
                <div class="flex_wrap space_between align_center mg_t24">
                  <div class="fz_14">
                    보유금액
                  </div>
                  <div>
                    <strong class="fz_20">1,123,400,000원</strong>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="inner">
                <div>
                  <strong class="fz_18">카카오페이</strong>
                  <span class="fz_14 fc_666 mg_l8">abc***</span>
                </div>
                <div class="flex_wrap space_between align_center mg_t24">
                  <div class="fz_14">
                    보유금액
                  </div>
                  <div>
                    <strong class="fz_20">1,123,400,000원</strong>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="inner">
                <div>
                  <strong class="fz_18">쿠팡페이(주)</strong>
                  <ico-txt class="mg_l8">비활동</ico-txt>
                </div>
                <div class="fz_14 mg_t12">
                  <strong class="fc_666">쿠팡캐시</strong>
                  <strong class="mg_l8">김국민</strong>
                </div>
              </div>
            </li>
          </ul>
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
  name: 'FI09A001',
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
