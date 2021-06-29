<template>
  <div class="section">
    <kb-title-bar v-if="isAPI" class="mg_b12" h2 title="국내주식" />
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

    <!-- 검색 전 -->
    <IN02A001 v-if="!isSearch" />

    <!-- 검색 후 -->
    <div v-else class="mg_t16">
      <!-- 검색 없음 -->
      <div v-if="isNolist">
        <div class="list_filter_bar ty2">
          <div class="left">
            <strong>전체</strong>
            <strong class="fc_blue mg_l4">0</strong>
          </div>
        </div>
        <div class="no_list_txt icon h_auto">
          <strong class="tit">입력하신 정보를 찾을수 없어요.</strong>
          <div class="txt">검색어를 올바르게 입력했는지 확인해주세요.<br>상세 검색 조건을 다시 설정해보세요..</div>
        </div>
      </div>
      <!-- 검색 있음 -->
      <kb-tabs
        type2
        class="mg_b0"
        v-model="tabIdx"
      >
        <kb-tab v-for="(tab, i) in tabAry" :key="i" :title="`${tab.title}(${tab.count})`" @click="tabClick(tab.code)" />
      </kb-tabs>
      <div class="line_list_ty2 border_none">
        <ul>
          <li>
            <div class="flex_item">
              <div>
                <kb-button not a-tag class="link">
                  <div class="th text_line_2">삼성전자</div>
                  <div class="td">234567</div>
                </kb-button>
              </div>
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
            <div class="flex_item">
              <div>
                <kb-button not a-tag class="link">
                  <div class="th text_line_2">삼성전자</div>
                  <div class="td">234567</div>
                </kb-button>
              </div>
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
            <div class="flex_item">
              <div>
                <kb-button not a-tag class="link">
                  <div class="th text_line_2">삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자삼성전자</div>
                  <div class="td">234567</div>
                </kb-button>
              </div>
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
            <div class="flex_item">
              <div>
                <kb-button not a-tag class="link">
                  <div class="th text_line_2">종목명</div>
                  <div class="td">종목코드</div>
                </kb-button>
              </div>
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
import IN02A001 from './IN02A001.vue';

export default {
  name: 'IN02A002',
  components: {
    IN02A001,
  },
  data() {
    return {
      isAPI: false,
      isSearch: false,
      isNolist: false,
      searchVal: '',
      tabIdx: 0,
      tabAry: [
        { title: '전체', count: 1230, code: '0001' },
        { title: 'KOSPI', count: 500, code: '0002' },
        { title: 'KOSDAQ', count: 500, code: '0003' },
        { title: 'K-TOC', count: 100, code: '0004' },
        { title: 'KONEX', count: 100, code: '0005' },
        { title: 'ETF', count: 15, code: '0006' },
        { title: 'ENT', count: 15, code: '0007' },
      ],
      isLike: false,
    };
  },
  created() {
    if (this.$route.path.indexOf('/VAPI/') >= 0) this.isAPI = true;
  },
  methods: {
    searchBtn() {
      console.log('검색');
      this.isSearch = true;
    },
    inputDelEvt() {
      console.log('검색 초기화');
      this.isSearch = false;
    },
    tabClick(txt) {
      console.log(txt);
    },
  },
};
</script>
