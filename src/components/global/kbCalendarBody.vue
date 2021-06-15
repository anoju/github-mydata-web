<template>
  <div class="ui_tbl_datepicker">
    <strong class="blind"> {{ year }}년 {{ month }}월 달력</strong>
    <div class="ui_datepicker_calendar">
      <div class="thead">
        <div class="th first">
          일
        </div>
        <div class="th">
          월
        </div>
        <div class="th">
          화
        </div>
        <div class="th">
          수
        </div>
        <div class="th">
          목
        </div>
        <div class="th">
          금
        </div>
        <div class="th last">
          토
        </div>
      </div>
      <div class="tbody">
        <div
          v-for="(day, i) in dayAry"
          :key="i"
          class="td"
          :class="{unused:day.day === 0, first: (i%7) == 0, last: (i%7) == 6}"
        >
          <button
            v-if="day.day !== 0"
            type="button"
            class="ui_date_btn"
            :class="{
              today:todayDate === Number(day.date),
              selected:selectDay === day.date,
              disabled:(minDate !== null && Number(day.date) < Number(minDate)) || (maxDate !== null && Number(maxDate) < Number(day.date))
            }"
            :data-date="day.date"
            :disabled="(minDate !== null && Number(day.date) < Number(minDate)) || (maxDate !== null && Number(maxDate) < Number(day.date))"
            @click="selectedDay(day,$event)"
          >
            {{ day.day }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kbCalendarBody',
  props: {
    year: { type: [String, Number], default: null },
    month: { type: [String, Number], default: null },
    todayDate: { type: [String, Number], default: null },
    minDate: { type: [String, Number], default: null },
    maxDate: { type: [String, Number], default: null },
    selectDate: { type: [String, Number], default: null },
  },
  data() {
    return {
      selectDay: '',
      dayAry: [],
      firstDay: 1,
    };
  },
  watch: {
    selectDate() {
      this.selectDay = this.selectDate;
    },
    year() {
      this.setAray();
    },
    month() {
      this.setAray();
    },
  },
  beforeMount() {
    this.setAray();
    if (this.selectDate !== '') this.selectDay = this.selectDate;
  },
  mounted() {

  },
  updated() {
    // console.log('update')
  },
  methods: {
    setAray() {
      this.dayAry = [];
      const numY = Number(this.year);
      const numM = Number(this.month);
      const firstDayIdx = new Date(numY, (numM - 1), 1, 0, 0, 0, 0).getDay();
      const lastDay = this.getLastDay(numY, numM);
      const lastDayIdx = lastDay + firstDayIdx;
      const endIdx = ((lastDayIdx) % 7 === 0) ? lastDayIdx : lastDayIdx + (7 - ((lastDayIdx) % 7));
      let day = 0;
      let dayTxt = null;
      for (let i = 0; i < endIdx; i += 1) {
        if ((firstDayIdx <= i) && (i < lastDayIdx)) {
          day += 1;
          if ((`${day}`).length === 1) {
            dayTxt = `0${day}`;
          } else {
            dayTxt = `${day}`;
          }
        } else {
          dayTxt = null;
        }
        this.dayAry.push({
          date: `${this.year}${this.month}${dayTxt}`,
          day: Number(dayTxt),
        });
      }
    },
    getLastDay(year, month) {
      let $day = 31;
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        $day = 30;
      } else if (month === 2) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
          $day = 29;
        } else {
          $day = 28;
        }
      }
      return $day;
    },
    selectedDay(day, event) {
      event.preventDefault();
      const val = day.date;
      this.selectDay = day.date;
      this.$emit('select', val);
    },
  },
};
</script>
