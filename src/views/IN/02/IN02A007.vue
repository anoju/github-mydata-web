<template>
  <kb-pop
    full
    title="상세검색(SB 업데이트 될 예정)"
  >
    <kb-pop-body>
      <div class="section">
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
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="2"
              >
                원화채권
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="3"
              >
                외화채권
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="4"
              >
                전단채
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal1"
                button
                value="5"
              >
                CP
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="매수가능여부"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="2">
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
                매수가능
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="발행자"
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
                국채
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="3"
              >
                지방채
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="4"
              >
                툭수채
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="5"
              >
                금융채
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal3"
                button
                value="6"
              >
                회사채
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
          label="신용등급"
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
                AAA- 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="3"
              >
                AA- 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="4"
              >
                A- 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="5"
              >
                BBB- 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="6"
              >
                BB+ 이하
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="7"
              >
                BB- 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal4"
                button
                value="8"
              >
                등급없음
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="표면이율"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="2"
              >
                1.0% 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="3"
              >
                1.5% 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="4"
              >
                2.0% 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="5"
              >
                2.5% 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="6"
              >
                3.0% 이상
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal6"
                button
                value="7"
              >
                3.5% 이상
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="잔존만기"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="1"
              >
                전체
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="2"
              >
                1개월 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="3"
              >
                3개월 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="4"
              >
                6개월 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="5"
              >
                1년 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="6"
              >
                3년 미만
              </kb-radio>
              <kb-radio
                v-model="searchRdoVal7"
                button
                value="7"
              >
                5년 미만
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
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
  name: 'IN02A007',
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
      searchRdoVal5: '1',
      searchRdoVal6: '1',
    };
  },
  methods: {
    filterClick() {
      const val1 = this.searchRdoVal1;
      const val2 = this.searchRdoVal2;
      const val3 = this.searchRdoVal3;
      const val4 = this.searchRdoVal4;
      const val5 = this.searchRdoVal5;
      const val6 = this.searchRdoVal6;
      this.$emit('close', { payload: [val1, val2, val3, val4, val5, val6] });
    },
  },
};
</script>
