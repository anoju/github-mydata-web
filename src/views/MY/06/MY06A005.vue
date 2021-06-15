<template>
  <div>
    <!-- 자산정보가 없는 경우 -->
    <template v-if="noDate">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          등록 된 나의 자산 정보가 없습니다.<br />
          자산 정보를 등록해보세요.
          <kb-button line blue class="more fz_16">연동하기</kb-button>
        </div>
      </div>
    </template>
    <!-- //자산정보가 없는 경우 -->

    <template v-if="!noDate">
      <kb-foldings type1 not-toggle class="acc_info_list mg_t0 bd_top_none" first-open>
        <!-- 투자 -->
        <kb-folding>
          <template slot="title">
            <div class="acc_info_head">
              <strong>투자상품</strong>
              <strong class="cut">3</strong>
            </div>
          </template>
          <div class="section">
            <div class="mypage_bank_list">
              <kb-button to="" link class="mg_b10 fz_12 fc_666 fw_bold">주식 <i class="bt_ic_arr" aria-hidden="true" /></kb-button>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
            </div>
            <div class="mypage_bank_list">
              <kb-button to="" link class="mg_b10 fz_12 fc_666 fw_bold">펀드 <i class="bt_ic_arr" aria-hidden="true" /></kb-button>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
            </div>

          </div>
        </kb-folding>
        <!-- //투자 -->
        <!-- 은행 -->
        <kb-folding>
          <template slot="title">
            <div class="acc_info_head">
              <strong>은행</strong>
              <strong class="cut">3</strong>
            </div>
          </template>
          <div class="section">
            <div class="mypage_bank_list">
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
            </div>
            <kb-button
              class="more"
            >
              더보기
            </kb-button>

          </div>
        </kb-folding>
        <!-- //은행 -->
        <!-- 카드 -->
        <kb-folding>
          <template slot="title">
            <div class="acc_info_head">
              <strong>카드</strong>
              <strong class="cut">3</strong>
            </div>
          </template>
          <div class="section">
            <div class="mypage_bank_list">
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
              <div class="item">
                <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                <p class="text">KB able Plus 통장..</p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </div>
            </div>
            <kb-button
              class="more"
            >
              더보기
            </kb-button>

          </div>
        </kb-folding>
        <!-- //카드 -->

        <!-- 개별내역이 없을때 -->
        <div class="item">
          <div class="section">
            <div class="flex_wrap mg_y24">
              <span class="mg_ra fz_14 fc_666">나의 금융정보를 연동해보세요</span>
              <kb-button link aTag blue>연동하기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
            </div>
          </div>
        </div>
        <!-- //개별내역이 없을때 -->
      </kb-foldings>

      <!-- 자료가 없는 경우 -->
      <div class="flex_wrap mg_b24 pd_y16">
        <span class="mg_ra fz_14 fc_666">나의 금융정보를 연동해보세요</span>
        <kb-button link aTag blue>연동하기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
      </div>
      <!-- //자료가 없는 경우 -->
    </template>
  </div>
</template>
<script>
export default {
  name: 'MY06A005',
  data() {
    return {
      noDate: false,
      isStar1: true,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
