<template>
  <kb-page
    page-title="내서랍"
    :container-class="{bg_gray2:mainTab != 2}"
  >
    <kb-page-body>
      <kb-tabs class="mg_b0" v-model="mainTab">
        <kb-tab title="종목 메모" />
        <kb-tab title="미종목 메모" />
        <kb-tab title="이벤트" />
      </kb-tabs>

      <div class="section">
        <!-- //종목,미종목 메모 -->
        <template v-if="mainTab != 2">
          <template v-if="mainTab != 1">
            <kb-title-bar h4 class="mg_t24">
              <template slot="left">
                <h4 class="tit">선택 종목<strong class="fc_blue mg_l4" v-if="menuVal.length > 0">{{menuVal.length}}</strong></h4>
              </template>
              <kb-button
                link
                class="fz_12 fc_666"
              >
                주식종목 진단 가기<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </kb-title-bar>

            <kb-btn-toggle small folding class="mg_t12 folding_btn_f8f8f8">
              <kb-btn-toggle-row>
                <kb-checkbox
                  v-for="(el, i) in menuList"
                  :key="i"
                  :value="el.value"
                  :class="{new:el.new}"
                  v-model="menuVal"
                  button
                >
                  {{el.name}}
                </kb-checkbox>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </template>

          <kb-title-bar h4 class="mg_t24">
            <template slot="left">
              <h4 class="tit">메모목록<strong class="fc_blue mg_l4">13</strong></h4>
            </template>
            <kb-select
              v-model="sortVal"
              :options="sortOpt"
              inline
              dir="rtl"
              select-class="fz_12"
            />
          </kb-title-bar>

          <div class="memo_item_wrap">
            <div class="memo_item">
              <div class="memo_item_util">
                <kb-button
                  class="btn_util"
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
                <div class="memo_more_wrap" v-click-outside="utilHide1">
                  <kb-button
                    class="btn_util"
                    not
                    @click="isUtilOpen1 = !isUtilOpen1"
                  >
                    <div class="bt_ic_more" :class="{close:isUtilOpen1}"></div>
                    <div class="blind">메모편집</div>
                  </kb-button>
                  <div v-show="isUtilOpen1">
                    <ul>
                      <li><kb-button><i class="bt_ic_add" />종목추가</kb-button></li>
                      <li><kb-button><i class="bt_ic_delete" />삭제</kb-button></li>
                      <li><kb-button><i class="bt_ic_share" />공유</kb-button></li>
                      <li><kb-button><i class="bt_ic_event" />이벤트응모</kb-button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <kb-button not a-tag class="inner">
                <div class="tit text_line_2">
                  <strong>메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀</strong>
                </div>
                <div class="sub_info">
                  <ul>
                    <li>2021/03/24</li>
                  </ul>
                  <div>
                    <strong class="fz_14">삼성전자</strong> 외 10
                  </div>
                </div>
                <div class="cont_item">
                  <div class="cont">
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                  </div>
                  <div class="link_info_box">
                    <div class="link_info_img">
                      <img src="~@/assets/images/temp/news_img1.png" alt="" />
                    </div>
                    <div class="link_info_txt">
                      <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                      <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
                    </div>
                  </div>
                </div>
                <div class="cont_item">
                  <div class="cont">
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                  </div>
                  <div class="link_info_box">
                    <div class="link_info_img">
                      <img src="~@/assets/images/temp/news_img1.png" alt="" />
                    </div>
                    <div class="link_info_txt">
                      <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                      <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
                    </div>
                  </div>
                </div>
              </kb-button>
            </div>

            <div class="memo_item">
              <div class="memo_item_util">
                <kb-button
                  class="btn_util"
                  star
                  :class="{checked:isStar2}"
                  role="checkbox"
                  :aria-checked="isStar2?'true':'false'"
                  @click="isStar2 = !isStar2"
                >관심등록</kb-button>
                <div class="memo_more_wrap" v-click-outside="utilHide2">
                  <kb-button
                    class="btn_util"
                    not
                    @click="isUtilOpen2 = !isUtilOpen2"
                  >
                    <div class="bt_ic_more" :class="{close:isUtilOpen2}"></div>
                    <div class="blind">메모편집</div>
                  </kb-button>
                  <div v-show="isUtilOpen2">
                    <ul>
                      <li><kb-button><i class="bt_ic_add" />종목추가</kb-button></li>
                      <li><kb-button><i class="bt_ic_delete" />삭제</kb-button></li>
                      <li><kb-button><i class="bt_ic_share" />공유</kb-button></li>
                      <li><kb-button><i class="bt_ic_event" />이벤트응모</kb-button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <kb-button not a-tag class="inner">
                <div class="tit text_line_2">
                  <strong>메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀</strong>
                </div>
                <div class="sub_info">
                  <ul>
                    <li>2021/03/24</li>
                  </ul>
                  <div>
                    <strong class="fz_14">미분류</strong>
                  </div>
                </div>
              </kb-button>
            </div>

            <div class="memo_item">
              <div class="memo_item_util">
                <kb-button
                  class="btn_util"
                  star
                  :class="{checked:isStar3}"
                  role="checkbox"
                  :aria-checked="isStar3?'true':'false'"
                  @click="isStar3 = !isStar3"
                >관심등록</kb-button>
                <div class="memo_more_wrap" v-click-outside="utilHide3">
                  <kb-button
                    class="btn_util"
                    not
                    @click="isUtilOpen1 = !isUtilOpen3"
                  >
                    <div class="bt_ic_more" :class="{close:isUtilOpen3}"></div>
                    <div class="blind">메모편집</div>
                  </kb-button>
                  <div v-show="isUtilOpen3">
                    <ul>
                      <li><kb-button><i class="bt_ic_add" />종목추가</kb-button></li>
                      <li><kb-button><i class="bt_ic_delete" />삭제</kb-button></li>
                      <li><kb-button><i class="bt_ic_share" />공유</kb-button></li>
                      <li><kb-button><i class="bt_ic_event" />이벤트응모</kb-button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <kb-button not a-tag class="inner">
                <div class="tit text_line_2">
                  <strong>메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀</strong>
                </div>
                <div class="sub_info">
                  <ul>
                    <li>2021/03/24</li>
                  </ul>
                  <div>
                    <strong class="fz_14">삼성전자</strong>
                  </div>
                </div>
                <div class="cont_item">
                  <div class="cont">
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                    메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                  </div>
                </div>
              </kb-button>
            </div>

            <div class="memo_item">
              <div class="memo_item_util">
                <kb-button
                  class="btn_util"
                  star
                  :class="{checked:isStar4}"
                  role="checkbox"
                  :aria-checked="isStar4?'true':'false'"
                  @click="isStar4 = !isStar4"
                >관심등록</kb-button>
                <div class="memo_more_wrap" v-click-outside="utilHide4">
                  <kb-button
                    class="btn_util"
                    not
                    @click="isUtilOpen4 = !isUtilOpen4"
                  >
                    <div class="bt_ic_more" :class="{close:isUtilOpen4}"></div>
                    <div class="blind">메모편집</div>
                  </kb-button>
                  <div v-show="isUtilOpen4">
                    <ul>
                      <li><kb-button><i class="bt_ic_add" />종목추가</kb-button></li>
                      <li><kb-button><i class="bt_ic_delete" />삭제</kb-button></li>
                      <li><kb-button><i class="bt_ic_share" />공유</kb-button></li>
                      <li><kb-button><i class="bt_ic_event" />이벤트응모</kb-button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <kb-button not a-tag class="inner">
                <div class="tit text_line_2">
                  <strong>메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀</strong>
                </div>
                <div class="sub_info">
                  <ul>
                    <li>2021/03/24</li>
                  </ul>
                  <div>
                    <strong class="fz_14">삼성전자</strong>
                  </div>
                </div>
                <div class="cont_item">
                  <div class="link_info_box">
                    <div class="link_info_img">
                      <img src="~@/assets/images/temp/news_img1.png" alt="" />
                    </div>
                    <div class="link_info_txt">
                      <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                      <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
                    </div>
                  </div>
                </div>
              </kb-button>
            </div>
          </div>
          <kb-button-wrap bottom-fixed scl-hide class="icon_type">
            <kb-button>
              <div class="bt_ic_search"></div>
              <div class="blind">메모검색</div>
            </kb-button>
            <kb-button>
              <div class="bt_ic_write"></div>
              <div class="blind">새 메모작성</div>
            </kb-button>
            <div class="memo_more_wrap" v-click-outside="moreHide">
              <kb-button
                @click="isMoreOpen = !isMoreOpen"
              >
                <div class="bt_ic_more"></div>
                <div class="blind">편집툴</div>
              </kb-button>
              <div v-show="isMoreOpen" class="last">
                <ul>
                  <li><kb-button><i class="bt_ic_delete" />삭제</kb-button></li>
                  <li><kb-button><i class="bt_ic_share" />공유</kb-button></li>
                  <li><kb-button><i class="bt_ic_event" />이벤트응모</kb-button></li>
                </ul>
              </div>
            </div>
          </kb-button-wrap>
        </template>
        <!-- //종목,미종목 메모 -->

        <!-- 이벤트 -->
        <template v-else>
          <kb-input
            v-model="searchVal"
            class="search mg_t12"
            type="search"
            placeholder="검색어 입력"
            title="검색어 입력"
            @focus="inputFocusEvt"
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
          <template v-else>
            <!-- 검색어 없을때 -->
            <div v-if="false" class="no_list_txt icon vh_50">
              <strong class="tit">검색 결과를 찾지 못했어요.</strong>
            </div>

            <kb-title-bar h4 class="mg_t24">
              <template slot="left">
                <h4 class="tit">선택 종목<strong class="fc_blue mg_l4" v-if="menuVal.length > 0">{{menuVal.length}}</strong></h4>
              </template>
              <kb-button
                link
                class="fz_12 fc_666"
              >
                주식종목 진단 가기<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </kb-title-bar>

            <kb-btn-toggle small folding class="mg_t12">
              <kb-btn-toggle-row>
                <kb-checkbox
                  v-for="(el, i) in menuList"
                  :key="i"
                  :value="el.value"
                  :class="{new:el.new}"
                  v-model="menuVal"
                  button
                >
                  {{el.name}}
                </kb-checkbox>
              </kb-btn-toggle-row>
            </kb-btn-toggle>

            <kb-title-bar h4 class="mg_t24">
              <template slot="left">
                <h4 class="tit">
                  응모목록
                  <!-- 검색목록 -->
                  <strong class="fc_blue mg_l4">13</strong>
                </h4>
              </template>
              <kb-select
                v-model="sortVal"
                :options="sortOpt"
                inline
                dir="rtl"
                select-class="fz_12"
              />
            </kb-title-bar>
            <div class="memo_line_list mg_t12">
              <li>
                <kb-button
                  like2
                  :class="{checked:isLike1}"
                  role="checkbox"
                  :aria-checked="isLike1?'true':'false'"
                  @click="isLike1 = !isLike1"
                >12</kb-button>
                <kb-button not a-tag class="memo_inner">
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <img src="~@/assets/images/temp/news_img1.png" alt="" />
                  </div>
                </kb-button>
              </li>
              <li>
                <kb-button
                  like2
                  :class="{checked:isLike2}"
                  role="checkbox"
                  :aria-checked="isLike2?'true':'false'"
                  @click="isLike2 = !isLike2"
                >12</kb-button>
                <kb-button not a-tag class="memo_inner">
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <!-- <img src="~@/assets/images/temp/news_img1.png" alt="" /> -->
                  </div>
                </kb-button>
              </li>
              <li>
                <kb-button
                  like2
                  :class="{checked:isLike3}"
                  role="checkbox"
                  :aria-checked="isLike3?'true':'false'"
                  @click="isLike3 = !isLike3"
                >12</kb-button>
                <kb-button not a-tag class="memo_inner">
                  <div class="memo_info">
                    <div class="memo_tit text_line_1"><strong>저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력저탄소 업종 메모 첫줄 출력</strong></div>
                    <div class="memo_sub text_line_1">메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력 메모내용출력</div>
                  </div>
                  <div class="memo_img">
                    <img src="~@/assets/images/temp/news_img1.png" alt="" />
                  </div>
                </kb-button>
              </li>
            </div>
          </template>
        </template>
        <!-- //이벤트 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY02A001',
  data() {
    return {
      mainTab: 0,
      menuVal: [],
      menuList: [
        { name: '삼성전자', value: '1', new: true },
        { name: '삼성SDI', value: '2', new: true },
        { name: '삼성바이오로직스', value: '3', new: false },
        { name: '삼성바이오로직스', value: '4', new: false },
        { name: '삼성바이오로직스', value: '5', new: false },
        { name: '삼성바이오로직스', value: '6', new: false },
        { name: '삼성바이오로직스', value: '7', new: false },
      ],
      sortVal: '1',
      sortOpt: [
        { text: '최신순', value: '1' },
        { text: '즐겨찾기순', value: '2' },
        { text: '오래된순', value: '3' },
      ],
      isMoreOpen: false,
      isStar1: false,
      isUtilOpen1: false,
      isStar2: false,
      isUtilOpen2: false,
      isStar3: false,
      isUtilOpen3: false,
      isStar4: false,
      isUtilOpen4: false,
      isSearch: true,
      searchVal: '',
      isLike1: false,
      isLike2: false,
      isLike3: false,
    };
  },
  methods: {
    moreHide() {
      this.isMoreOpen = false;
    },
    utilHide1() {
      this.isUtilOpen1 = false;
    },
    utilHide2() {
      this.isUtilOpen2 = false;
    },
    utilHide3() {
      this.isUtilOpen3 = false;
    },
    utilHide4() {
      this.isUtilOpen4 = false;
    },
    inputFocusEvt() {
      this.isSearch = false;
    },
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
