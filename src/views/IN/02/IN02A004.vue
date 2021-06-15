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
      <div class="list_filter_bar ty2">
        <div class="left">
          <strong>전체</strong>
          <strong class="fc_blue mg_l4">0</strong>
        </div>
        <div class="right">
          <kb-select
            v-model="sortVal"
            :options="sortOpt"
            inline
            dir="rtl"
          />
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
      <div class="line_list_ty2 border_none">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IN02A004',
  data() {
    return {
      isNolist: false,
      isLike: false,
      searchVal: '',
      sortVal: '3',
      sortOpt: [
        { text: '1개월 수익률순', value: '1' },
        { text: '3개월 수익률순', value: '3' },
        { text: '6개월 수익률순', value: '6' },
        { text: '12개월 수익률순', value: '12' },
      ],
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
        component: () => import('@/views/IN/02/IN02A005.vue'),
        returnFocus: el,
      }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
