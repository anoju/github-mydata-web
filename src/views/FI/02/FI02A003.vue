<template>
  <kb-page page-title="신용카드 청구서 관리">
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
        <div class="ico_info_list box">
          <div class="ico_info_item">
            <div class="info">
              <div class="left">
                <i class="ico" style="background: skyblue;"></i>
                <p class="tit">KB국민 청춘대로 톡톡카드</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mg_t24">
          <kb-button
            not
            @click="selectMonth($event.target)"
            class="btn_month"
          >
            {{year}}년 {{Number(month)}}월
          </kb-button>
        </div>
        <div class="t_right fz_12 fc_gray">결제순번 0001</div>
        <div class="flex_wrap space_between align_end">
          <div class="fz_14 fc_666">청구금액</div>
          <div class="fz_20"><strong>254,000,500원</strong></div>
        </div>
        <hr aria-hidden="true" class="hr_line mg_t24">
        <kb-foldings first-open class="line_none">
          <kb-folding title="이용내역">
            <div class="line_list_ty2 border_none">
              <ul>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="sub_info">
                        <ul>
                          <li>2021/01/01</li>
                          <li>일시불</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between align_end mg_t3">
                        <div class="breakall">
                          <strong>여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                    </div>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#식비</li>
                        <li>여의도 맛집</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="sub_info">
                        <ul>
                          <li>2021/01/01</li>
                          <li>할부(3/6)</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between align_end mg_t3">
                        <div class="breakall">
                          <strong>여의도식당</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">0원</strong>
                        </div>
                      </div>
                    </div>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="sub_info">
                        <ul>
                          <li>2021/01/01</li>
                          <li>일시불</li>
                        </ul>
                      </div>
                      <div class="flex_wrap space_between align_end mg_t3">
                        <div class="breakall">
                          <strong>여의도식당</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">0원</strong>
                        </div>
                      </div>
                    </div>
                    <div class="t_right fz_12 fc_666 mg_t4">이용금액 -12,4000원</div>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#식비</li>
                        <li>여의도 맛집</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="inner">
                      <div class="sub_info">
                        <ul>
                          <li>2021/01/01</li>
                          <li>일시불</li>
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
                    </div>
                    <div class="t_right fz_12 fc_666 mg_t4">신용판매 수수료 1,240원</div>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#식비</li>
                        <li>여의도 맛집</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="gray_box_item outer">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th fz_16 fc_222">총 90건</div>
                    <div class="td fz_16"><strong>123,000,000원</strong></div>
                  </li>
                  <li class="mg_t12">
                    <div class="th">결제 후 잔액</div>
                    <div class="td fc_666"><strong>123,000,000원</strong></div>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
        <hr aria-hidden="true" class="hr_line">
        <kb-foldings first-open class="line_none">
          <kb-folding title="결제정보">
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">결제일</div>
                  <div class="td fc_666"><strong>2021/03/01</strong></div>
                </li>
                <li class="mg_t12">
                  <div class="th">결제은행</div>
                  <div class="td fc_666"><strong>국민은행</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A003',
  data() {
    return {
      yearMonth: '',
      year: '',
      month: '',
    };
  },
  watch: {
    yearMonth() {
      this.year = this.yearMonth.substr(0, 4);
      this.month = this.yearMonth.substr(4, 2);
    },
  },
  beforeMount() {
    this.readyEvt();
  },
  mounted() {
  },
  methods: {
    readyEvt() {
      this.yearMonth = this.todayString().substr(0, 6);
    },
    todayString() {
      const date = new Date();
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      if ((`${$month}`).length === 1)$month = `0${$month}`;
      if ((`${$day}`).length === 1)$day = `0${$day}`;
      return (`${$year}${$month}${$day}`);
    },
    selectMonth(el) {
      this.$modal({
        component: () => import('@/components/modalContainer/modalCalendar.vue'),
        componentProps: {
          value: this.yearMonth,
          type: 'month',
          min: { y: 1 },
          max: 'today',
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.yearMonth = result.payload;
        }
      });
    },
  },
};
</script>
