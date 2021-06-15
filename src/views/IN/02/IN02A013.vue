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
      >
        <div class="left">
          <strong>전체</strong>
          <strong class="fc_blue mg_l4">0</strong>
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
            <div class="item pd_ty2">
              <div><strong>삼성전자</strong></div>
              <ul class="tbl_list box mg_t12">
                <li>
                  <div class="th">발행가</div>
                  <div class="td t_right">100%</div>
                </li>
                <li>
                  <div class="th">공모유형</div>
                  <div class="td t_right">리츠/실권주/주주우선공모</div>
                </li>
                <li>
                  <div class="th">증거금율</div>
                  <div class="td t_right">100%</div>
                </li>
                <li>
                  <div class="th">청약경쟁률</div>
                  <div class="td t_right">5.782:1</div>
                </li>
                <li>
                  <div class="th">청약기간</div>
                  <div class="td t_right">2021/04/21 ~ 2021/04/23</div>
                </li>
              </ul>
              <kb-button-wrap class="mg_t8">
                <kb-button line>청약신청</kb-button>
              </kb-button-wrap>
            </div>
          </li>
          <li>
            <div class="item pd_ty2">
              <div><strong>삼성전자</strong></div>
              <ul class="tbl_list box mg_t12">
                <li>
                  <div class="th">발행가</div>
                  <div class="td t_right">100%</div>
                </li>
                <li>
                  <div class="th">공모유형</div>
                  <div class="td t_right">리츠/실권주/주주우선공모</div>
                </li>
                <li>
                  <div class="th">증거금율</div>
                  <div class="td t_right">100%</div>
                </li>
                <li>
                  <div class="th">청약경쟁률</div>
                  <div class="td t_right">5.782:1</div>
                </li>
                <li>
                  <div class="th">청약기간</div>
                  <div class="td t_right">2021/04/21 ~ 2021/04/23</div>
                </li>
              </ul>
              <kb-button-wrap class="mg_t8">
                <kb-button line>청약신청</kb-button>
              </kb-button-wrap>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IN02A013',
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
