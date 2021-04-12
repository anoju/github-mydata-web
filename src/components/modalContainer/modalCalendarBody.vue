<template>
  <div class="ui-tbl-datepicker">
    <strong class="blind"> {{ year }}년 {{ month }}월 달력</strong>
    <div class="ui-datepicker-calendar">
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
          :class="{disabled:!day.active, first: (i%7) == 0, last: (i%7) == 6}"
        >
          <button
            v-if="day.active"
            type="button"
            class="ui-date-btn"
            :class="{
              today:day.today,
              selected:day.selected,
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
  name: 'modalCalendarBody',
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
      dayAry: [],
      firstDay: 1,
      firstDayIdx: null,
      lastDay: null,
      lastDayIdx: null,
      endIdx: null,
    };
  },
  watch: {
    year() {
      this.setAray();
    },
    month() {
      this.setAray();
    },
  },
  created() {
    this.setAray();
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
      this.firstDayIdx = new Date(numY, (numM - 1), 1, 0, 0, 0, 0).getDay();
      this.lastDay = this.getLastDay(numY, numM);
      this.lastDayIdx = this.lastDay + this.firstDayIdx;
      this.endIdx = ((this.lastDayIdx) % 7 === 0) ? this.lastDayIdx : this.lastDayIdx + (7 - ((this.lastDayIdx) % 7));
      let day = 0;
      let dayTxt = null;
      let fullDayTxt = null;
      let isActive = false;
      let isToday = false;
      let isSelected = false;
      for (let i = 0; i < this.endIdx; i += 1) {
        if ((this.firstDayIdx <= i) && (i < this.lastDayIdx)) {
          isActive = true;
          day += 1;
          if ((`${day}`).length === 1) {
            dayTxt = `0${day}`;
          } else {
            dayTxt = `${day}`;
          }
          fullDayTxt = `${this.year}${this.month}${dayTxt}`;
          if (this.todayDate === Number(fullDayTxt)) {
            isToday = true;
          } else {
            isToday = false;
          }
          if (this.selectDate === fullDayTxt) {
            isSelected = true;
          } else {
            isSelected = false;
          }
        } else {
          fullDayTxt = null;
          isActive = false;
          dayTxt = null;
        }
        this.dayAry.push({
          active: isActive,
          today: isToday,
          selected: isSelected,
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
      this.$emit('select', val);
    },
  },
};
</script>
