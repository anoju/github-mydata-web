<template>
  <kb-pop
    full
    title="메모 검색하기"
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

          <div v-else class="mg_t30">
            <kb-btn-toggle small inline>
              <kb-btn-toggle-row>
                <kb-radio
                  v-for="(el, i) in menuList"
                  :key="i"
                  :value="el.value"
                  v-model="menuVal"
                  button
                >
                  {{el.name}}
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
            <kb-title-bar h4 title="검색결과" class="mg_t22">
              <template slot="left"><strong class="fc_blue mg_l4">12</strong></template>
              <ul class="title_util">
                <li>
                  <kb-checkbox class="no_bg" small lblClass="fz_12 fc_666">
                    전체선택
                    <!-- 전체해제 -->
                  </kb-checkbox>
                </li>
                <li>
                  <kb-select
                    v-model="sortVal"
                    :options="sortOpt"
                    inline
                    dir="rtl"
                    class="fz_12"
                  />
                </li>
              </ul>
            </kb-title-bar>
            <div class="memo_line_list mg_t12">
              <li>
                <kb-checkbox />
                <kb-button class="memo_inner" a-tag not>
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <img src="~@/assets/images/temp/news_img1.png" alt="" />
                  </div>
                </kb-button>
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </li>
              <li>
                <kb-checkbox />
                <kb-button class="memo_inner" a-tag not>
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <!-- <img src="~@/assets/images/temp/news_img1.png" alt="" /> -->
                  </div>
                </kb-button>
                <kb-button
                  star
                  :class="{checked:isStar2}"
                  role="checkbox"
                  :aria-checked="isStar2?'true':'false'"
                  @click="isStar2 = !isStar2"
                >관심등록</kb-button>
              </li>
              <li>
                <kb-checkbox />
                <kb-button class="memo_inner" a-tag not>
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <img src="~@/assets/images/temp/news_img1.png" alt="" />
                  </div>
                </kb-button>
                <kb-button
                  star
                  :class="{checked:isStar3}"
                  role="checkbox"
                  :aria-checked="isStar3?'true':'false'"
                  @click="isStar3 = !isStar3"
                >관심등록</kb-button>
              </li>
            </div>

            <kb-button-wrap bottom-fixed scl-hide class="icon_type">
              <kb-button>
                <div class="bt_ic_delete"></div>
                <div class="txt">선택삭제</div>
              </kb-button>
              <kb-button>
                <div class="bt_ic_share"></div>
                <div class="txt">공유</div>
              </kb-button>
              <kb-button>
                <div class="bt_ic_event"></div>
                <div class="txt">응모하기</div>
              </kb-button>
            </kb-button-wrap>
          </div>
        </template>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'MY02A005',
  data() {
    return {
      isSearch: true,
      searchVal: '',
      menuVal: 'all',
      menuList: [
        { name: '전체', value: 'all' },
        { name: '미종목', value: 'not' },
        { name: '삼성전자', value: '1' },
        { name: '삼성SDI', value: '2' },
        { name: '삼성바이오로직스', value: '3' },
        { name: '삼성바이오로직스', value: '4' },
        { name: '삼성바이오로직스', value: '5' },
        { name: '삼성바이오로직스', value: '6' },
        { name: '삼성바이오로직스', value: '7' },
      ],
      sortVal: '1',
      sortOpt: [
        { text: '최신순', value: '1' },
        { text: '오래된순', value: '2' },
        { text: '즐겨찾기순', value: '3' },
      ],
      isStar1: false,
      isStar2: false,
      isStar3: false,
    };
  },
  methods: {
    inputDelEvt() {
      this.isSearch = true;
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
