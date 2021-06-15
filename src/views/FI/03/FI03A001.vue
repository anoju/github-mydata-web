<template>
  <kb-page page-title="보험">
    <kb-page-body>
      <div class="section financial_bank_wrap">
        <!-- 보험정보가 없는 경우 -->
        <template v-if="noDate">
          <div class="assets_none_box">
            <div class="none_box">
              <i></i>
              이런, 보험 정보가 없네요!<br />
              보험정보를 연동해 주세요 :)
              <kb-button line blue class="more fz_16">보험정보 연동</kb-button>
            </div>
          </div>
        </template>
        <!-- //보험정보가 없는 경우 -->

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

        <div class="financial_bank_top">

          <h2>보험 가입 현황</h2>

          <kb-button not aTag class="money_box">
            <p class="text">월 납입액</p>
            <p class="money">123,400,000원</p>

            <ul class="info_text">
              <li><span>보험사</span>4개</li>
              <li><span>내 보험</span>32개</li>
            </ul>
          </kb-button>

          <div class="comment">자동차 보험이 30일 이내 만기 예정입니다.</div>

          <div class="chart_area mg_t24 t_center">
            <img src="~@/assets/images/temp/sample_insurance.png" alt="" />
          </div>

        </div>

        <hr aria-hidden="true" class="hr_line mg_t20">

        <div class="insurance_list">
          <kb-button aTag not>
            <div class="cont">
              <!-- 이슈 발생시 issue 클래스 적용  -->
              <i class="ico issue"><span style="background: skyblue;"></span></i>
              <div class="name">
                <p>KB Star 정기예금</p>
                <span>12345678901234</span>
              </div>
              <p class="tag">여행자 보험</p>
            </div>
          </kb-button>
          <kb-button aTag not>
            <div class="cont">
              <!-- 이슈 발생시 issue 클래스 적용  -->
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name">
                <p>KB Star 정기예금</p>
                <span>12345678901234</span>
              </div>
              <p class="tag">자동차보험 보험</p>
            </div>

            <div class="flex_wrap mg_l40 mg_t15">
              <p class="fz_14 fw_bold flex11">01가1234</p>
              <p class="fz_14 fw_bold">D-360</p>
            </div>
          </kb-button>
          <kb-button aTag not>
            <div class="cont">
              <!-- 이슈 발생시 issue 클래스 적용  -->
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name">
                <p>KB Star 정기예금</p>
                <span>12345678901234</span>
              </div>
              <p class="tag">자동차보험 보험</p>
            </div>

            <div class="money_info mg_l40">
              <p class="progress">10% 납입</p>
              <p class="money">
                <span>월</span>
                123,456,000원
              </p>
            </div>
            <div class="progress_bar mg_l40">
              <span style="width:10%"></span>
            </div>
          </kb-button>
          <kb-button aTag not>
            <div class="cont">
              <!-- 이슈 발생시 issue 클래스 적용  -->
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name">
                <p>KB Star 정기예금</p>
                <span>12345678901234</span>
              </div>
              <p class="tag">자동차보험 보험</p>
            </div>

            <div class="money_info mg_l40">
              <p class="money">
                <span>월</span>
                123,456,000원
              </p>
            </div>
          </kb-button>
          <kb-button aTag not>
            <div class="cont">
              <!-- 이슈 발생시 issue 클래스 적용  -->
              <i class="ico"><span style="background: skyblue;"></span></i>
              <div class="name">
                <p>KB Star 정기예금</p>
                <span>12345678901234</span>
              </div>
              <p class="tag">자동차보험 보험</p>
            </div>

            <div class="money_info mg_l40">
              <p class="money">
                <span>계좌평가금액</span>
                123,456,000원
              </p>
              <p class="money small">
                <span>적립금액</span>
                123,456,000원
              </p>
            </div>
          </kb-button>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="financial_bank_box mg_b0">
          <kb-button not aTag>
            <p class="tit">보험계약대출</p>
            <ul class="info_text">
              <li><span>보험사</span>2개</li>
            </ul>

            <dl class="money_box">
              <dt>총 대출잔액</dt>
              <dd class="money">1,123,400,000원</dd>
            </dl>
          </kb-button>

          <!-- 대출내역 리스트 -->
          <div class="list_box">
            <div class="info">
              <p class="bank">
                <strong>국민은행</strong>
                12345678900000
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
        </div>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI03A001',
  data() {
    return {
      noDate: false,
      tabIdx: 0,
      isStar1: true,
      isStar2: false,
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
