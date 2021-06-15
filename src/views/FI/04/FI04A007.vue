<template>
  <kb-pop
    bottom
    title="상세조회"
  >
    <kb-pop-body>
      <div class="section">
        <kb-form-item
          label="거래유형"
          label-class="fc_222"
          class="mg_t0"
        >
          <kb-btn-toggle small inline>
            <kb-btn-toggle-row>
              <template
                v-for="(item, i) of searchRdoVal1Ary"
              >
                <kb-radio
                  v-model="searchRdoVal1"
                  button
                  :key="i"
                  :value="item.val"
                  @click="selectRdo(item.text)"
                >
                  {{item.text}}
                </kb-radio>
              </template>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="기간선택(최대 5년까지 조회가능)"
          label-class="fc_222"
        >
          <kb-btn-toggle small inline class="type_cal">
            <kb-btn-toggle-row>
              <template
                v-for="(item, i) of searchRdoVal2Ary"
              >
                <kb-radio
                  v-model="searchRdoVal2"
                  button
                  :key="i"
                  :value="item.val"
                  @click="selectMonth($event,item.val,item.text)"
                >
                  {{item.text}}
                  <span class="ico_cal" v-if="item.val === 'etc'" />
                </kb-radio>
              </template>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
          <kb-folding-panel
            :active="searchRdoVal2 === 'etc'"
            :duration="200"
            class="datepicker_box mg_t14"
          >
            <div class="flex">
              <div><kb-input line date v-model="date1" /></div>
              <span>-</span>
              <div><kb-input line date v-model="date2" /></div>
            </div>
          </kb-folding-panel>
        </kb-form-item>
        <kb-form-item
          label="결제방법"
          label-class="fc_222"
        >
          <kb-btn-toggle small inline>
            <kb-btn-toggle-row>
              <template
                v-for="(item, i) of searchRdoVal4Ary"
              >
                <kb-radio
                  v-model="searchRdoVal4"
                  button
                  :key="i"
                  :value="item.val"
                  @click="selectRdo2(item.text)"
                >
                  {{item.text}}
                </kb-radio>
              </template>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
        <kb-form-item
          label="카테고리 선택"
          label-class="fc_222"
        >
          <kb-btn-toggle middle class="wrap">
            <kb-btn-toggle-row :col="3">
              <template
                v-for="(item, i) of searchRdoVal3Ary"
              >
                <kb-radio
                  v-model="searchRdoVal3"
                  @click="toggleChk"
                  button
                  :value="item.val"
                  :lbl-class="item.add ? 'fc_blue' : null"
                  :key="i"
                >
                  {{item.text}}
                </kb-radio>
              </template>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-form-item>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>초기화</kb-button>
      <kb-button yellow @click="filterClick">조회하기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI04A007',
  props: {
    searchType: { type: [String, Number], default: null },
  },
  beforeMount() {
    if (this.searchType === 2) {
      this.searchRdoVal1Ary = this.searchRdoVal1Ary_ty2;
    } else if (this.searchType === 3) {
      this.searchRdoVal1Ary = this.searchRdoVal1Ary_ty3;
    } else {
      this.searchRdoVal1Ary = this.searchRdoVal1Ary_ty1;
    }
  },
  data() {
    return {
      searchRdoVal1: '1',
      searchRdoVal1Txt: '전체',
      searchRdoVal1Ary: [],
      searchRdoVal1Ary_ty1: [
        { val: '1', text: '전체' },
        { val: '2', text: '입금' },
        { val: '3', text: '출금' },
      ],
      searchRdoVal1Ary_ty2: [
        { val: '1', text: '전체' },
        { val: '2', text: '충전' },
        { val: '3', text: '결제' },
        { val: '4', text: '송금' },
        { val: '5', text: '적립' },
      ],
      searchRdoVal1Ary_ty3: [
        { val: '1', text: '전체' },
        { val: '2', text: '결제' },
        { val: '3', text: '결제취소' },
      ],
      searchRdoVal2: '1',
      searchRdoVal2Txt: '1개월',
      searchRdoVal2Ary: [
        { val: '1', text: '1개월' },
        { val: '3', text: '3개월' },
        { val: '6', text: '6개월' },
        { val: '12', text: '1년' },
        { val: 'month', text: '월간' },
        { val: 'etc', text: '직접선택' },
      ],
      searchRdoVal3: '',
      searchRdoVal3Txt: '',
      searchRdoVal3Ary: [
        { val: '13', text: '맛집탐방', add: true },
        { val: '14', text: '막내용돈', add: true },
        { val: '15', text: '매월삼전', add: true },
        { val: '16', text: '식비', add: false },
        { val: '17', text: '카페/간식', add: false },
        { val: '18', text: '쇼핑', add: false },
        { val: '19', text: '문화/여가', add: false },
        { val: '20', text: '술/유흥', add: false },
        { val: '21', text: '교육', add: false },
        { val: '22', text: '의료/건강', add: false },
        { val: '23', text: '생활', add: false },
        { val: '24', text: '주거/공과금', add: false },
        { val: '25', text: '뷰티', add: false },
        { val: '26', text: '자동차', add: false },
        { val: '27', text: '교통', add: false },
        { val: '28', text: '금융', add: false },
        { val: '29', text: '자녀육아', add: false },
        { val: '30', text: '기타', add: false },
      ],
      searchRdoVal4: '1',
      searchRdoVal4Txt: '전체',
      searchRdoVal4Ary: [
        { val: '1', text: '전체' },
        { val: '2', text: '온라인' },
        { val: '3', text: '오프라인' },
      ],
      monthVal: '',
      date1: '',
      date2: '',
    };
  },
  methods: {
    selectRdo(txt) {
      this.searchRdoVal1Txt = txt;
    },
    selectRdo2(txt) {
      this.searchRdoVal4Txt = txt;
    },
    selectMonth(e, val, txt) {
      if (val !== 'month') {
        this.searchRdoVal2Txt = txt;
        return;
      }
      const el = e.target;
      this.$modal({
        component: () => import('@/components/modalContainer/modalCalendar.vue'),
        componentProps: {
          value: this.monthVal,
          type: 'month',
          min: { y: 5 },
          max: 'today',
        },
        returnFocus: el,
      }).then((result) => {
        if ((result.payload !== undefined) && (this.value !== result.payload)) {
          const inpVal = result.payload;
          this.monthVal = inpVal.substr(0, 4) + '/' + inpVal.substr(4, 2);
        }
      });
    },
    toggleChk(e) {
      if (this.searchRdoVal3 === e.target.value) {
        this.searchRdoVal3 = '';
        this.searchRdoVal3Txt = '';
      } else {
        const lbl = e.target.parentNode.querySelector('.lbl');
        this.searchRdoVal3Txt = lbl.innerText;
      }
    },
    filterClick() {
      const val1 = this.searchRdoVal1Txt;
      let val2 = this.searchRdoVal2Txt;
      if (this.monthVal !== '') {
        val2 = this.monthVal;
      }
      if (this.date1 !== '' && this.date2 !== '') {
        val2 = this.date1 + '~' + this.date2;
      }
      const val3 = this.searchRdoVal3Txt;
      const val4 = this.searchRdoVal4Txt;

      this.$emit('close', { payload: [val1, val2, val3, val4] });
    },
  },
};
</script>
