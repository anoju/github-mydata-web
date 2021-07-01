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
          label="채권유형"
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
                장내
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="2"
              >
                장외
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="3"
              >
                외화
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>

        <template v-if="this.searchRdoVal1 === '1'">
          <kb-form-item
            label="장내 채권 유형"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="3">
                <kb-radio
                  v-model="searchRdoVal1_1"
                  button
                  value="1"
                >
                  주식관련 채권
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal1_1"
                  button
                  value="2"
                >
                  일반 채권
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal1_1"
                  button
                  value="3"
                >
                  소액 채권
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>
        </template>

        <template v-if="this.searchRdoVal1 === '2'">
          <kb-form-item
            label="매수가능여부"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="2">
                <kb-radio
                  v-model="searchRdoVal2_1"
                  button
                  value="1"
                >
                  매수가능 종목
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_1"
                  button
                  value="2"
                >
                  당사가 사들일 수 있는(매도가능) 종목
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>

          <kb-form-item
            label="잔존기간"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="3">
                <kb-radio
                  v-model="searchRdoVal2_2"
                  button
                  value="1"
                >
                  전체
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_2"
                  button
                  value="2"
                >
                  6개월 이내
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_2"
                  button
                  value="3"
                >
                  1년 이내
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_2"
                  button
                  value="4"
                >
                  2년 이내
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_2"
                  button
                  value="5"
                >
                  2년 초과
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>

          <kb-form-item
            label="발행자"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="2">
                <kb-radio
                  v-model="searchRdoVal2_3"
                  button
                  value="1"
                >
                  전체
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_3"
                  button
                  value="2"
                >
                  국공채등(국공채, 지방채)
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_3"
                  button
                  value="3"
                >
                  회사채등(회사채, 금융채)
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal2_3"
                  button
                  value="4"
                >
                  공사채등(특수채)
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>
        </template>

        <template v-if="this.searchRdoVal1 === '3'">
          <kb-form-item
            label="국가분류"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="3">
                <kb-radio
                  v-model="searchRdoVal3_1"
                  button
                  value="1"
                >
                  전체
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_1"
                  button
                  value="2"
                >
                  미국
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_1"
                  button
                  value="3"
                >
                  브라질
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>
          <kb-form-item
            label="채권분류"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="3">
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="1"
                >
                  전체
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="2"
                >
                  국채
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="3"
                >
                  지방채
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="4"
                >
                  특수처
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="5"
                >
                  금융채
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="6"
                >
                  회사채
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="7"
                >
                  기타
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_2"
                  button
                  value="8"
                >
                  전단기사채
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>

          <kb-form-item
            label="발행통화"
            label-class="fc_222"
          >
            <kb-btn-toggle middle class="wrap">
              <kb-btn-toggle-row :col="3">
                <kb-radio
                  v-model="searchRdoVal3_3"
                  button
                  value="1"
                >
                  전체
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_3"
                  button
                  value="2"
                >
                  BRL
                </kb-radio>
                <kb-radio
                  v-model="searchRdoVal3_3"
                  button
                  value="3"
                >
                  USD
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>
        </template>
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
  name: 'IN02A007',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      searchRdoVal1: '1',
      searchRdoVal1_1: '1',
      searchRdoVal2_1: '1',
      searchRdoVal2_2: '1',
      searchRdoVal2_3: '1',
      searchRdoVal3_1: '1',
      searchRdoVal3_2: '1',
      searchRdoVal3_3: '1',
    };
  },
  methods: {
    filterClick() {
      const val1 = this.searchRdoVal1;
      const val2 = this.searchRdoVal1_1;
      const val3 = this.searchRdoVal2_1;
      const val4 = this.searchRdoVal2_2;
      const val5 = this.searchRdoVal2_3;
      const val6 = this.searchRdoVal3_1;
      const val7 = this.searchRdoVal3_2;
      const val8 = this.searchRdoVal3_3;
      this.$emit('close', { payload: [val1, val2, val3, val4, val5, val6, val7, val8] });
    },
  },
};
</script>
