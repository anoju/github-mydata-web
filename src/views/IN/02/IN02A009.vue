<template>
  <div class="section">
    <kb-input
      v-model="searchVal"
      class="search"
      type="search"
      placeholder="검색어를 입력하세요"
      title="검색어 입력"
      @keyup.enter="searchBtn"
      :delete="inputDelEvt"
    >
      <kb-button
        not
        class="btn_search"
        aria-label="검색하기"
        @click="searchBtn"
      >검색하기</kb-button>
    </kb-input>

    <div class="mg_t16">
      <div
        class="list_filter_bar ty2"
        :class="{no_line:!isNolist}"
      >
        <div class="left">
          <strong>전체</strong>
          <strong class="fc_blue mg_l4">0</strong>
        </div>
        <div class="right">
          <kb-button
            filter
            @click="openFilter($event.target)"
          >
            검색필터
          </kb-button>
        </div>
      </div>
      <!-- 검색 없음 -->
      <div v-if="isNolist" class="no_list_txt icon h_auto">
        <strong class="tit">입력하신 정보를 찾을수 없어요.</strong>
        <div class="txt">검색어를 올바르게 입력했는지 확인해주세요.<br>상세 검색 조건을 다시 설정해보세요..</div>
      </div>
      <!-- 검색 있음 -->
      <div class="box_list_ty1">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="ico_wrap">
                    <ico-txt red>초고위험</ico-txt>
                  </div>
                  <div class="text_line_2 mg_t4"><strong>한국 투자자문랩 - 불리오글로벌 ETF(두물머리) 한국 투자자문랩 - 불리오글로벌 ETF(두물머리)</strong></div>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th w_75">최소가입금액</div>
                      <div class="td">10,000,000원</div>
                    </li>
                    <li>
                      <div class="th w_75">보수</div>
                      <div class="td">
                        <ul class="opt">
                          <li><strong>선취</strong> 1.00%</li>
                          <li><strong>후취</strong> 1.60%</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="th w_75">운용/자문사</div>
                      <div class="td">두물머리투자자문</div>
                    </li>
                  </ul>
                </div>
              </kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="ico_wrap">
                    <ico-txt red>초고위험</ico-txt>
                  </div>
                  <div class="text_line_2 mg_t4"><strong>가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</strong></div>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th w_75">최소가입금액</div>
                      <div class="td">10,000,000원</div>
                    </li>
                    <li>
                      <div class="th w_75">보수</div>
                      <div class="td">
                        <ul class="opt">
                          <li><strong>선취</strong> 1.00%</li>
                          <li><strong>후취</strong> 1.60%</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="th w_75">운용/자문사</div>
                      <div class="td">두물머리투자자문</div>
                    </li>
                  </ul>
                </div>
              </kb-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IN02A009',
  data() {
    return {
      isNolist: false,
      searchVal: '',
    };
  },
  methods: {
    searchBtn() {
      console.log('검색');
    },
    inputDelEvt() {
      console.log('검색 초기화');
    },
    openFilter(el) {
      this.$modal({
        component: () => import('@/views/IN/02/IN02A0010.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
