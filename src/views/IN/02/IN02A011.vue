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
          <kb-radio
            v-model="sortVal"
            small
            value="1"
          >
            원화
          </kb-radio>
          <kb-radio
            v-model="sortVal"
            small
            value="2"
          >
            외화
          </kb-radio>
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
                <div class="inner_in">
                  <div class="ico_wrap">
                    <ico-txt blue>약정식</ico-txt>
                  </div>
                  <div class="text_line_2 mg_t4">1개월 약정개인 210422 1개월 약정개인 210422 1개월 약정개인 210422 1개월 약정개인 210422</div>
                  <div class="fz_12 fc_666 mg_t10">약정이율</div>
                  <div class="fz_20"><strong class="fc_up">0.45%</strong></div>
                </div>
              </kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in">
                  <div class="ico_wrap">
                    <ico-txt blue>약정식</ico-txt>
                  </div>
                  <div class="text_line_2 mg_t4">1개월 약정개인 210422</div>
                  <div class="fz_12 fc_666 mg_t10">약정이율</div>
                  <div class="fz_20"><strong class="fc_up">0.45%</strong></div>
                </div>
              </kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in">
                  <div class="ico_wrap">
                    <ico-txt blue>약정식</ico-txt>
                  </div>
                  <div class="text_line_2 mg_t4">가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</div>
                  <div class="fz_12 fc_666 mg_t10">약정이율</div>
                  <div class="fz_20"><strong class="fc_up">0.45%</strong></div>
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
  name: 'IN02A011',
  data() {
    return {
      isNolist: false,
      searchVal: '',
      sortVal: '1',
    };
  },
  methods: {
    searchBtn() {
      console.log('검색');
    },
    inputDelEvt() {
      console.log('검색 초기화');
    },
  },
};
</script>
