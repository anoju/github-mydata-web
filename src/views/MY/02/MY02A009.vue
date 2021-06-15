<template>
  <kb-pop
    full
    title="주식 종목 추가하기"
  >
    <kb-pop-body>
      <div class="section">
        <kb-input
          v-model="searchVal"
          class="search"
          type="search"
          placeholder="검색어 입력"
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
        <template v-if="!isSearch">
          <!-- 최근검색어 없을때 -->
          <div v-if="false" class="no_list_txt vh_30">
            <strong class="fz_14 fc_666">최근 검색한 종목이 없어요.</strong>
          </div>

          <!-- 최근검색어 있을때 -->
          <div v-else class="mg_t32">
            <kb-title-bar h4 title="최근검색어">
              <template slot="left"><strong class="fc_blue mg_l4">12</strong></template>
              <kb-button not class="fz_12 fc_666">전체삭제</kb-button>
            </kb-title-bar>
            <ul class="latest_search_list">
              <li>
                <kb-button not class="keyword">삼성전자</kb-button>
                <kb-button not class="delete">삭제</kb-button>
              </li>
              <li>
                <kb-button not class="keyword">한국전력</kb-button>
                <kb-button not class="delete">삭제</kb-button>
              </li>
              <li>
                <kb-button not class="keyword">LG전자</kb-button>
                <kb-button not class="delete">삭제</kb-button>
              </li>
              <li>
                <kb-button not class="keyword">셀트리온 셀트리온셀트리온셀트리온셀트리온셀트리온셀트리온셀트리온셀트리온셀트리온셀트리온</kb-button>
                <kb-button not class="delete">삭제</kb-button>
              </li>
            </ul>
          </div>
        </template>

        <!-- 검색 후 -->
        <template v-else>
          <!-- 검색어 없을때 -->
          <div v-if="false" class="no_list_txt icon vh_50">
            <strong class="tit">검색 결과를 찾지 못했어요.</strong>
          </div>

          <div v-else class="mg_t36">
            <kb-title-bar h4 title="검색결과">
              <template slot="left"><strong class="fc_blue mg_l4">{{menuList.length}}</strong></template>
              <ul class="title_util">
                <li>
                  <kb-checkbox class="no_bg" small lblClass="fz_12 fc_666">
                    전체선택
                    <!-- 전체해제 -->
                  </kb-checkbox>
                </li>
              </ul>
            </kb-title-bar>
            <ul class="checkbox_list_wrap mg_t24">
              <li v-for="(el, i) in menuList" :key="i">
                <kb-checkbox
                  :value="el.value"
                  v-model="menuVal"
                >
                  {{el.name}}
                </kb-checkbox>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow :disabled="menuVal.length == 0"><span class="bt_num">{{menuVal.length}}</span>종목 선택완료</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'MY02A009',
  data() {
    return {
      isSearch: true,
      searchVal: '',
      menuVal: [],
      menuList: [
        { name: '삼성전자', value: '1' },
        { name: '삼성SDI', value: '2' },
        { name: '삼성바이오로직스', value: '3' },
        { name: '삼성바이오로직스', value: '4' },
        { name: '삼성바이오로직스', value: '5' },
        { name: '삼성바이오로직스', value: '6' },
        { name: '삼성바이오로직스', value: '7' },
      ],
    };
  },
  methods: {
    inputDelEvt() {
      this.isSearch = false;
    },
    searchBtn() {
      if (this.searchVal === '') {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
    },
  },
};
</script>
