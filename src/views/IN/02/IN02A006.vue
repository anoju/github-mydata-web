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
      <div class="box_list_ty1">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
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
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
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
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
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
  name: 'IN02A004',
  data() {
    return {
      isNolist: false,
      isLike: false,
      searchVal: '',
      sortVal: '1',
      sortOpt: [
        { text: '주식관련채권', value: '1' },
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
        component: () => import('@/views/IN/02/IN02A007.vue'),
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
