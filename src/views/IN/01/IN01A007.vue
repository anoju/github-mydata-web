<template>
  <kb-pop
    bottom
    title="상세조회"
  >
    <kb-pop-body>
      <div class="section">
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
  name: 'FI03A008',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      searchRdoVal2: '1',
      searchRdoVal2Txt: '1개월',
      searchRdoVal2Ary: [
        { val: '1', text: '올해' },
        { val: '2', text: '어제 하루' },
        { val: '3', text: '이번달' },
        { val: '4', text: '3개월' },
        { val: '5', text: '6개월' },
        { val: '6', text: '1년' },
        { val: '7', text: '2년' },
        { val: '8', text: '3년' },
        { val: '9', text: '4년' },
        { val: '10', text: '5년' },
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
    filterClick() {
      const val1 = this.searchRdoVal1Txt;
      let val2 = this.searchRdoVal2Txt;
      if (this.monthVal !== '') {
        val2 = this.monthVal;
      }
      if (this.date1 !== '' && this.date2 !== '') {
        val2 = this.date1 + '~' + this.date2;
      }

      this.$emit('close', { payload: [val1, val2] });
    },
  },
};
</script>
