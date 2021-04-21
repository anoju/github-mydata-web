<template>
  <div class="section">
    <h2 class="gd__h1">
      달력
    </h2>
    <div>
      <h3 class="gd__h2">
        기본
      </h3>
      <div>
        <kb-input
          v-model="dateVal1"
          line
          datepicker
          title="날짜선택"
          placeholder="날짜선택"
        />

        {{ dateVal1 }}
        <br><br>
        <kb-input
          v-model="dateVal2"
          line
          monthpicker
          title="년 월선택"
          placeholder="년 월선택"
        />
        {{ dateVal2 }}
        <br><br>
        <kb-input
          v-model="dateVal3"
          line
          yearpicker
          title="년선택"
          placeholder="년선택"
        />
        {{ dateVal3 }}
      </div>

      <h3 class="gd__h2">
        min, max
      </h3>
      <div>
        <kb-form-item
          label="min='today'"
        >
          <kb-input
            v-model="dateVal4"
            line
            datepicker
            min="today"
            title="날짜선택"
            placeholder="날짜선택"
          />
          {{ dateVal4 }}
        </kb-form-item>
        <kb-form-item
          label="max='today'"
        >
          <kb-input
            v-model="dateVal5"
            line
            datepicker
            max="today"
            title="날짜선택"
            placeholder="날짜선택"
          />
          {{ dateVal5 }}
        </kb-form-item>
        <kb-form-item
          label=":min='{y:1}', :max='{m:1}' :최소일은 1년이전, 최대일은 1달 이후"
        >
          <kb-input
            v-model="dateVal6"
            line
            datepicker
            :min="{y:1}"
            :max="{m:1}"
            title="날짜선택"
            placeholder="날짜선택"
          />
          {{ dateVal6 }}
        </kb-form-item>
        <kb-form-item
          label="5년이내 월선택"
        >
          <kb-input
            v-model="dateVal7"
            line
            monthpicker
            :min="{y:5,m:-1}"
            :max="'today'"
            title="년 월선택"
            placeholder="년 월선택"
          />
          {{ dateVal7 }}
        </kb-form-item>
      </div>

      <h3 class="gd__h2">
        slide
      </h3>
      <div>
        <div>
          <kb-button
            not
            aTag
            class="btn_select_type"
            @click="panelActive1 = !panelActive1"
          >
            {{yaerMonthDay.substr(0,4)}}년 {{yaerMonthDay.substr(4,2)}}월 {{yaerMonthDay.substr(6,2)}}월
          </kb-button>
          <kb-folding-panel :active="panelActive1">
            <kb-calendar
              :value="yaerMonthDay"
              type="day"
              :min="{y:5,m:-1}"
              :max="'today'"
              @select="selectDate"
            />
          </kb-folding-panel>
        </div>
        <br>
        <div>
          <kb-button
            not
            aTag
            class="btn_select_type"
            @click="panelActive2 = !panelActive2"
          >
            {{yaerMonth.substr(0,4)}}년 {{yaerMonth.substr(4,2)}}월
          </kb-button>
          <kb-folding-panel :active="panelActive2">
            <kb-calendar
              :value="yaerMonth"
              type="month"
              :min="{y:5,m:-1}"
              :max="'today'"
              @select="selectMonth"
            />
          </kb-folding-panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'calendar',
  data() {
    return {
      yaerMonthDay: '',
      yaerMonth: '',
      panelActive1: false,
      panelActive2: false,
      dateVal1: '',
      dateVal2: '',
      dateVal3: '',
      dateVal4: '',
      dateVal5: '',
      dateVal6: '',
      dateVal7: '',
      dateVal8: '',
      dateVal9: '',
      dateVal10: '',
      dateVal11: '',
    };
  },
  beforeMount() {
    this.yaerMonthDay = this.todayString();
    this.yaerMonth = this.todayString().substr(0, 6);
  },
  mounted() {

  },
  methods: {
    todayString() {
      const date = new Date();
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      if ((`${$month}`).length === 1)$month = `0${$month}`;
      if ((`${$day}`).length === 1)$day = `0${$day}`;
      return (`${$year}${$month}${$day}`);
    },
    selectDate(val) {
      this.panelActive1 = false;
      this.yaerMonthDay = val;
    },
    selectMonth(val) {
      this.panelActive2 = false;
      this.yaerMonth = val;
    },
  },
};
</script>
