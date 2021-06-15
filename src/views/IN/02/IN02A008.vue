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
            청약중
          </kb-radio>
          <kb-radio
            v-model="sortVal"
            small
            value="2"
          >
            청약종료
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
                <div class="inner_in pd_b12">
                  <div class="ico_wrap pd_r25">
                    <ico-txt red>고위험</ico-txt>
                    <ico-txt blue>원급부분지급형</ico-txt>
                    <ico-txt yellow>온라인전용</ico-txt>
                  </div>
                  <div class="flex_wrap space_between align_center mg_t4">
                    <div class="pd_r10">
                      <div class="text_line_1"><strong>KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호</strong></div>
                      <div class="text_line_1 fz_12 fc_666 mg_t4">디펜싱부스터</div>
                    </div>
                    <div class="t_right">
                      <div class="d_day">D-26</div>
                    </div>
                  </div>
                  <ul class="sub_info_ul ty2 mg_t12">
                    <li>
                      <div class="th">연 <strong class="fz_20 fc_up">14.57%</strong></div>
                      <div class="td">특정조건 충족시 수익률 (세전 최대)</div>
                    </li>
                    <li>
                      <div class="th"><strong class="fz_20 fc_down">-10%</strong></div>
                      <div class="td">조건 미충족시 손실률 (최대)</div>
                    </li>
                  </ul>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th">기초자산</div>
                      <div class="td text_line_1">삼성전자, NAVER 삼성전자, NAVER 삼성전자, NAVER</div>
                    </li>
                    <li>
                      <div class="th">상환조건</div>
                      <div class="td text_line_1">100-100-100 / NO KI (90%원금 00-100-100 / NO KI (90%원금</div>
                    </li>
                    <li>
                      <div class="th">청약기간</div>
                      <div class="td">2021/04/16 ~ 2021/04/23</div>
                    </li>
                  </ul>
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
                <div class="inner_in pd_b12">
                  <div class="ico_wrap pd_r25">
                    <ico-txt red>중위험</ico-txt>
                    <ico-txt blue>원급부분지급형</ico-txt>
                    <ico-txt yellow>온라인전용</ico-txt>
                  </div>
                  <div class="flex_wrap space_between align_center mg_t4">
                    <div class="pd_r10">
                      <div class="text_line_1"><strong>KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호</strong></div>
                      <div class="text_line_1 fz_12 fc_666 mg_t4">디펜싱부스터</div>
                    </div>
                    <div class="t_right">
                      <div class="d_day">D-6</div>
                    </div>
                  </div>
                  <ul class="sub_info_ul ty2 mg_t12">
                    <li>
                      <div class="th">연 <strong class="fz_20 fc_up">14.57%</strong></div>
                      <div class="td">특정조건 충족시 수익률 (세전 최대)</div>
                    </li>
                    <li>
                      <div class="th"><strong class="fz_20 fc_down">-10%</strong></div>
                      <div class="td">조건 미충족시 손실률 (최대)</div>
                    </li>
                  </ul>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th">기초자산</div>
                      <div class="td text_line_1">삼성전자, NAVER 삼성전자, NAVER 삼성전자, NAVER</div>
                    </li>
                    <li>
                      <div class="th">상환조건</div>
                      <div class="td text_line_1">100-100-100 / NO KI (90%원금 00-100-100 / NO KI (90%원금</div>
                    </li>
                    <li>
                      <div class="th">청약기간</div>
                      <div class="td">2021/04/16 ~ 2021/04/23</div>
                    </li>
                  </ul>
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
  name: 'IN02A008',
  data() {
    return {
      isNolist: false,
      isLike: false,
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
