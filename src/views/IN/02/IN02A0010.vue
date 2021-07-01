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
          label="위험등급"
          label-class="fc_222"
          class="mg_t0"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
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
                초저위험
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="3"
              >
                저위험
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="4"
              >
                중위험
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="5"
              >
                고위험
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="6"
              >
                초고위험
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="7"
              >
                초고위험+
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
  name: 'IN02A0010',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      searchRdoVal1: '1',
      searchSelVal: '1',
      searchSelOpt: [
        { text: '전체', value: '1' },
      ],
    };
  },
  methods: {
    filterClick() {
      const val1 = this.searchRdoVal1;
      const val2 = this.searchSelVal;
      this.$emit('close', { payload: [val1, val2] });
    },
  },
};
</script>
