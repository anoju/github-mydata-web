<template>
  <kb-page page-title="할부 관리">
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
        <div class="fz_12 fc_666 mg_t12">잔여 할부 금액</div>
        <div class="fz_20 mg_t4"><strong>123,400,000원</strong></div>
        <hr aria-hidden="true" class="hr_line mg_t24">
        <kb-title-bar h2 title="상세내역" class="mg_t32 align_end">
          <kb-select
            v-model="sortVal"
            :options="sortOpt"
            inline
            dir="rtl"
          />
        </kb-title-bar>

        <div class="info_txt_box2_list mg_t10">
          <div class="info_txt_box2 add_folding fd_ty2">
            <div class="inner">
              <div class="tit ty2">
                <strong>청춘대로 톡톡카드 청춘대로 톡톡카드 청춘대로 톡톡카드</strong>
                <div class="circle_count"><strong>3</strong>회 남음</div>
              </div>
              <div class="info_txt_list mg_t16">
                <ul class="list">
                  <li>
                    <div class="th">결제 후 잔액</div>
                    <div class="td fc_666"><strong>123,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">할부정보</div>
                    <div class="td fc_666"><strong class="fc_blue">3</strong><strong>/6</strong></div>
                  </li>
                  <li>
                    <div class="th">거래수단</div>
                    <div class="td fc_666"><kb-button to="#" link line blue>KB국민 탄탄대로 톡톡카드</kb-button></div>
                  </li>
                </ul>
              </div>
            </div>
            <kb-foldings
              not
              class="folding ty2"
            >
              <kb-folding title="상세보기">
                <div class="info_txt_list">
                  <ul class="list">
                    <li>
                      <div class="th">이용금액</div>
                      <div class="td fc_666"><strong>999,999,999원</strong></div>
                    </li>
                    <li>
                      <div class="th">판매수수료</div>
                      <div class="td fc_666"><strong>999,999,999원</strong></div>
                    </li>
                    <li>
                      <div class="th">거래일자</div>
                      <div class="td fc_666"><strong>2020/12/20</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
          <div class="info_txt_box2 add_folding fd_ty2">
            <div class="inner">
              <div class="tit ty2">
                <strong>청춘대로 톡톡카드 청춘대로 톡톡카드 청춘대로 톡톡카드</strong>
                <div class="circle_count"><strong>3</strong>회 남음</div>
              </div>
              <div class="info_txt_list mg_t16">
                <ul class="list">
                  <li>
                    <div class="th">결제 후 잔액</div>
                    <div class="td fc_666"><strong>123,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">할부정보</div>
                    <div class="td fc_666"><strong class="fc_blue">3</strong><strong>/6</strong></div>
                  </li>
                  <li>
                    <div class="th">거래수단</div>
                    <div class="td fc_666"><kb-button to="#" link line blue>KB국민 탄탄대로 톡톡카드</kb-button></div>
                  </li>
                </ul>
              </div>
            </div>
            <kb-foldings
              not
              class="folding ty2"
            >
              <kb-folding title="상세보기">
                <div class="info_txt_list">
                  <ul class="list">
                    <li>
                      <div class="th">이용금액</div>
                      <div class="td fc_666"><strong>999,999,999원</strong></div>
                    </li>
                    <li>
                      <div class="th">판매수수료</div>
                      <div class="td fc_666"><strong>999,999,999원</strong></div>
                    </li>
                    <li>
                      <div class="th">거래일자</div>
                      <div class="td fc_666"><strong>2020/12/20</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A008',
  data() {
    return {
      sortVal: '1',
      sortOpt: [
        { text: '최신순', value: '1' },
        { text: '잔여 할부 내림차순', value: '2' },
        { text: '잔여 할부 오름차순', value: '3' },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
