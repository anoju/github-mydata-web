<template>
  <kb-pop
    full
    title="상세검색"
  >
    <kb-pop-body>
      <div class="section">
        <div class="mg_b30">
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
        </div>

        <kb-form-item
          label="투자성향"
          label-class="fc_222"
          class="mg_t0"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="2">
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="2"
              >
                투자성향 적합상품만
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="펀드속성"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="2"
              >
                국내
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="3"
              >
                해외
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="4"
              >
                세졔혜택
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="5"
              >
                온라인 전용
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal2"
                button
                value="6"
              >
                퇴직연금
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="펀드유형"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="2"
              >
                주식형
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="3"
              >
                주식혼합형
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="4"
              >
                채권혼합형
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="5"
              >
                채권형
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="6"
              >
                MMF
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="7"
              >
                기타
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="펀드규모"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="2"
              >
                1백억 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="3"
              >
                1백억~5백억
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="4"
              >
                5백억~1천억
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="5"
              >
                1천억~5천억
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="6"
              >
                5천억이상
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="운용사"
          label-class="fc_222"
        >
          <kb-select
            v-model="searchSelVal"
            :options="searchSelOpt"
          />
        </kb-form-item>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>초기화</kb-button>
      <kb-button yellow @click="filterClick">300개 결과 보기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'IN02A005',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      searchRdoVal1: '1',
      searchRdoVal2: '1',
      searchRdoVal3: '1',
      searchRdoVal4: '1',
      searchSelVal: '1',
      searchSelOpt: [
        { text: '전체', value: '1' },
      ],
    };
  },
  methods: {
    filterClick() {
      const val1 = this.searchRdoVal1;
      const val2 = this.searchRdoVal2;
      const val3 = this.searchRdoVal3;
      const val4 = this.searchRdoVal4;
      const val5 = this.searchSelVal;
      this.$emit('close', { payload: [val1, val2, val3, val4, val5] });
    },
  },
};
</script>
