<template>
  <kb-pop
    modal
    class="ui-calendar"
    title="기간선택"
  >
    <kb-pop-body>
      <div
        v-show="isCalendarDay"
        class="calendar-swiper"
      >
        <div class="calendar-head">
          <div class="tit">
            <kb-button
              not
              @click="showSelect('year')"
            >
              {{ titYear }}
            </kb-button>
            /
            <kb-button
              not
              @click="showSelect('month')"
            >
              {{ titMonth }}
            </kb-button>
          </div>
          <kb-button
            not
            class="swiper-arr swiper-arr-y swiper-prev-y"
            :class="{disabled:(minDate !== null && Number(titYear) <= Number(minDate.substr(0,4)))}"
            :disabled="(minDate !== null && Number(titYear) <= Number(minDate.substr(0,4)))"
            aria-hidden="이전년도 보기"
            @click="setCalYear('prev')"
          >이전년도 보기</kb-button>
          <kb-button
            not
            class="swiper-arr swiper-prev"
            :class="{disabled:(minDate !== null && Number(titYear+titMonth) <= Number(minDate.substr(0,6)))}"
            :disabled="(minDate !== null && Number(titYear+titMonth) <= Number(minDate.substr(0,6)))"
            aria-label="이전달 보기"
            aria-disabled="false"
            @click="calSwiperPrev"
          >이전달 보기</kb-button>
          <kb-button
            not
            class="swiper-arr swiper-next"
            :class="{disabled:(maxDate !== null && Number(maxDate.substr(0,6)) <= Number(titYear+titMonth))}"
            :disabled="(maxDate !== null && Number(maxDate.substr(0,6)) <= Number(titYear+titMonth))"
            aria-label="다음달 보기"
            aria-disabled="false"
            @click="calSwiperNext"
          >다음달 보기</kb-button>
          <kb-button
            not
            class="swiper-arr swiper-arr-y swiper-next-y"
            :class="{disabled:(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(titYear))}"
            :disabled="(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(titYear))"
            aria-hidden="다음년도 보기"
            @click="setCalYear('next')"
          >다음년도 보기</kb-button>
        </div>
        <!-- <div class="t_center">
                    오늘 날짜 {{ todayDate }}
                </div> -->
        <div
          class="calendar-swiper-body"
          :style="{height:warpHeight}"
        >
          <div
            v-swiper:calSwiper="swiperOption"
            @ready="calReady"
            @slideChangeTransitionEnd="calChangeTransitionEnd"
          >
            <div class="swiper-wrapper">
              <swiper-slide
                v-for="(calendar, i) in calendarAry"
                :key="i"
              >
                <calendarBody
                  :year="calendar.Y"
                  :month="calendar.M"
                  :today-date="todayDate"
                  :min-date="minDate"
                  :max-date="maxDate"
                  :select-date="selectDate"
                  @select="daySelect"
                />
              </swiper-slide>
            </div>
            <div class="swiper-pagination" />
          </div>
        </div>
      </div>
      <div
        v-show="isCalendarMonth"
      >
        <div class="calendar-head">
          <div
            v-if="type === 'month'"
            class="tit"
          >
            <kb-button
              not
              @click="showSelect('year')"
            >
              {{ titYear }}
            </kb-button>
            /
            <strong
              class="button not active"
            >
              {{ titMonth }}
            </strong>
          </div>
          <div
            v-else
            class="tit"
          >
            <kb-button
              not
              @click="showSelect('year')"
            >
              {{ titYear }}
            </kb-button>
            /
            <kb-button
              not
              class="active"
              @click="showSelect('day')"
            >
              {{ titMonth }}
            </kb-button>
          </div>
        </div>
        <div class="calendar-select">
          <ul>
            <li
              v-for="(month, i) in monthAry"
              :key="i"
            >
              <kb-button
                not
                class="ui-select-btn"
                :class="{
                  selected:calendarMonth == Number(month) && calendarYear == titYear,
                  disabled:(minDate !== null && Number(titYear+month) < Number(minDate.substr(0,6))) || (maxDate !== null && Number(maxDate.substr(0,6)) < Number(titYear+month))
                }"
                :disabled="(minDate !== null && Number(titYear+month) < Number(minDate.substr(0,6))) || (maxDate !== null && Number(maxDate.substr(0,6)) < Number(titYear+month))"
                @click="onSelectYearMonth(month,'month')"
              >
                {{ month }}월
              </kb-button>
            </li>
          </ul>
          <kb-button
            not
            class="ui-year-arr prev"
            :class="{disabled:(minDate !== null && Number(titYear) <= Number(minDate.substr(0,4)))}"
            :disabled="(minDate !== null && Number(titYear) <= Number(minDate.substr(0,4)))"
            aria-label="이전 년도"
            @click="setMonth('prev')"
          />
          <kb-button
            not
            class="ui-year-arr next"
            :class="{disabled:(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(titYear))}"
            :disabled="(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(titYear))"
            aria-label="다음 년도"
            @click="setMonth('next')"
          />
        </div>
      </div>
      <div
        v-show="isCalendarYear"
      >
        <div class="calendar-head">
          <div
            v-if="type === 'year'"
            class="tit"
          >
            <strong
              class="button not active"
            >
              {{ titYear }}
            </strong>
          </div>
          <div
            v-else
            class="tit"
          >
            <kb-button
              not
              class="active"
              @click="showSelect('day')"
            >
              {{ titYear }}
            </kb-button>
            /
            <kb-button
              not
              @click="showSelect('month')"
            >
              {{ titMonth }}
            </kb-button>
          </div>
        </div>
        <div class="calendar-select">
          <ul>
            <li
              v-for="(year, i) in yearAry"
              :key="i"
            >
              <kb-button
                not
                class="ui-select-btn"
                :class="{
                  selected:titYear == year,
                  out: (i===0 || i>=11),
                  disabled:(minDate !== null && Number(year) < Number(minDate.substr(0,4))) || (maxDate !== null && Number(maxDate.substr(0,4)) < Number(year))
                }"
                :disabled="(minDate !== null && Number(year) < Number(minDate.substr(0,4))) || (maxDate !== null && Number(maxDate.substr(0,4)) < Number(year))"
                @click="onSelectYearMonth(year,'year')"
              >
                {{ year }}년
              </kb-button>
            </li>
          </ul>
          <kb-button
            not
            class="ui-year-arr prev"
            :class="{disabled:(minDate !== null && Number(yearAry[0]) <= Number(minDate.substr(0,4)))}"
            :disabled="(minDate !== null && Number(yearAry[0]) <= Number(minDate.substr(0,4)))"
            aria-label="이전 년도"
            @click="setYearAry('prev')"
          />
          <kb-button
            not
            class="ui-year-arr next"
            :class="{disabled:(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(yearAry[11]))}"
            :disabled="(maxDate !== null && Number(maxDate.substr(0,4)) <= Number(yearAry[11]))"
            aria-label="다음 년도"
            @click="setYearAry('next')"
          />
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
import calendarBody from './modalCalendarBody.vue';

export default {
  name: 'modalCalendar',
  components: {
    calendarBody,
  },
  props: {
    value: { type: [Object, String, Number], default: null },
    type: { type: String, default: 'day' },
    min: { type: [Object, String, Number], default: null },
    max: { type: [Object, String, Number], default: null },
  },
  data() {
    return {
      isCalendarDay: true,
      isCalendarMonth: false,
      isCalendarYear: false,
      calendarAry: [],
      monthAry: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      yearAry: [],
      calendarYear: null,
      calendarMonth: null,
      titYear: '0000',
      titMonth: '00',
      warpHeight: null,
      isPrevDisabled: false,
      isNextDisabled: false,
    };
  },
  computed: {
    swiperOption() {
      return {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      };
    },
    selectDate() {
      return this.$getOnlyNumber(this.value);
    },
    todayDate() {
      return Number(this.todayTimeString().substr(0, 8));
    },
    todayDateString() {
      return this.todayTimeString().substr(0, 8);
    },
    minDate() {
      let rtnVal = this.min;
      if (this.min === 'today')rtnVal = this.todayDateString;
      if (typeof this.min === 'object' && this.min !== null) {
        rtnVal = this.dateCalculation(this.min.y, this.min.m, this.min.d, -1);
      }
      return rtnVal;
    },
    maxDate() {
      let rtnVal = this.max;
      if (this.max === 'today')rtnVal = this.todayDateString;
      if (typeof this.max === 'object' && this.max !== null) {
        rtnVal = this.dateCalculation(this.max.y, this.max.m, this.max.d);
      }
      return rtnVal;
    },
  },
  created() {
    this.readySet();
  },
  beforeMount() {
  },
  mounted() {
    if (this.type !== 'day') this.isCalendarDay = false;
    if (this.type === 'month') this.isCalendarMonth = true;
    if (this.type === 'year') this.isCalendarYear = true;
    if (this.type === 'day') this.calSwiper.update();
  },
  methods: {
    // 날짜구하기
    todayTimeString(addDay) {
      const $today = new Date();
      if (addDay)$today.setDate($today.getDate() + addDay);
      return this.dateTimeString($today);
    },
    dateTimeString(date) {
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      let $hour = date.getHours();
      let $min = date.getMinutes();
      let $sec = date.getSeconds();
      if ((`${$month}`).length === 1)$month = `0${$month}`;
      if ((`${$day}`).length === 1)$day = `0${$day}`;
      if ((`${$hour}`).length === 1)$hour = `0${$hour}`;
      if ((`${$min}`).length === 1)$min = `0${$min}`;
      if ((`${$sec}`).length === 1)$sec = `0${$sec}`;
      return (`${$year}${$month}${$day}${$hour}${$min}${$sec}`);
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
    dateCalculation(Y, M, D, i = 1) {
      const $date = new Date();
      let $dateYear = $date.getFullYear();
      let $dateMonth = $date.getMonth();
      let $dateDate = $date.getDate();
      if (Y !== undefined)$dateYear += (Number(Y) * i);
      if (M !== undefined)$dateMonth += (Number(M) * i);
      if (D !== undefined)$dateDate += (Number(D) * i);
      const $rtnDate = new Date($dateYear, $dateMonth, $dateDate);
      return this.dateTimeString($rtnDate).substr(0, 8);
    },
    // 달력 배열
    calAryPush(idx, type) {
      if (type === undefined)type = 'next';
      if (type !== 'prev' && type !== 'next') return;
      let year = this.calendarYear;
      let month = this.calendarMonth;
      // if (this.selectDate.length === 8) {
      //     year = Number(this.selectDate.substr(0, 4))
      //     month = Number(this.selectDate.substr(4, 2))
      // }
      month += idx;
      const n = Math.abs(Math.floor(month / 12));
      if (month < 1) {
        year -= n;
        month += (12 * n);
      } else if (month > 12) {
        year += n;
        month -= (12 * n);
      }
      if (month === 0) {
        year -= 1;
        month = 12;
      }
      if ((`${month}`).length === 1)month = `0${month}`;
      if (this.minDate !== null) {
        if (Number(this.minDate.substr(0, 6)) > Number(`${year}${month}`)) {
          this.isPrevDisabled = true;
          return;
        }
      }
      if (this.maxDate !== null) {
        if (Number(this.maxDate.substr(0, 6)) < Number(`${year}${month}`)) return;
      }

      if (type === 'prev') this.calendarAry.unshift({ idx: `${idx}`, Y: `${year}`, M: `${month}` });
      if (type === 'next') this.calendarAry.push({ idx: `${idx}`, Y: `${year}`, M: `${month}` });
    },
    yaerAryPush(year) {
      this.yearAry = [];
      const start = (Math.floor(year / 10) * 10) - 1;
      const end = ((Math.floor(year / 10) + 1) * 10);
      for (let i = start; i <= end; i += 1) {
        this.yearAry.push(`${i}`);
      }
    },

    // swiper관련
    calSwiperPrev() {
      this.calSwiper.slidePrev();
    },
    calSwiperNext() {
      this.calSwiper.slideNext();
    },
    calReady() {
      setTimeout(() => {
        if (!this.isPrevDisabled) this.calSwiper.slideTo(1, 0);
      }, 100);
    },
    calChangeTransitionEnd() {
      const $length = this.calSwiper.pagination.bullets.length;
      let $index = this.calSwiper.snapIndex;
      if ($index === ($length - 1)) {
        const firstIdx = this.calendarAry[this.calendarAry.length - 1].idx;
        this.calAryPush(Number(firstIdx) + 1);
      }
      if ($index === 0) {
        const lastIdx = this.calendarAry[0].idx;
        this.calAryPush(Number(lastIdx) - 1, 'prev');
        if (!this.isPrevDisabled) {
          this.calSwiper.slideTo(1, 0);
          $index += 1;
        }
      }
      this.titYear = this.calendarAry[$index].Y;
      this.titMonth = this.calendarAry[$index].M;
      setTimeout(() => {
        this.setSwiperHeight($index);
      }, 100);
    },
    setSwiperHeight(i) {
      const height = this.calSwiper.slides[i].querySelector('.ui-tbl-datepicker').offsetHeight;
      this.warpHeight = `${height}px`;
    },

    // 버튼기능
    daySelect(val) {
      this.$emit('close', { payload: val });
    },
    showSelect(type) {
      let isDay = false;
      let isMonth = false;
      let isYear = false;
      if (type === 'day')isDay = true;
      if (type === 'month')isMonth = true;
      if (type === 'year')isYear = true;
      this.isCalendarDay = isDay;
      this.isCalendarMonth = isMonth;
      this.isCalendarYear = isYear;

      if (type === 'day') {
        setTimeout(() => {
          if (this.isPrevDisabled && this.calSwiper.slides.length <= 2) {
            this.calSwiper.slideTo(0, 0);
          } else {
            this.calSwiper.slideTo(1, 0);
          }
          const $index = this.calSwiper.snapIndex;
          this.setSwiperHeight($index);
        }, 10);
      }
      if (type === 'year') this.yaerAryPush(Number(this.titYear));
    },
    readySet() {
      const YearMonth = (this.value !== '') ? this.$getOnlyNumber(this.value) : this.todayDateString;
      this.setYearMonth(YearMonth.substr(0, 4), YearMonth.substr(4, 2));
    },
    setYearMonth(year, month) {
      this.calendarAry = [];
      this.isPrevDisabled = false;
      this.titYear = year;
      this.titMonth = month;
      // if (this.selectDate.length === 8) {
      //     this.calendarMonth = Number(this.selectDate.substr(4, 2))
      //     this.calendarYear = Number(this.selectDate.substr(0, 4))
      // } else {
      this.calendarMonth = Number(month);
      this.calendarYear = Number(year);
      // }

      this.calAryPush(-1);
      this.calAryPush(0);
      this.calAryPush(1);

      this.yaerAryPush(Number(year));
    },
    onSelectYearMonth(val, type) {
      if (this.type === 'year' && type === 'year') {
        this.daySelect(val);
      } else if (this.type === 'month' && type === 'month') {
        this.daySelect(this.titYear + val);
      } else {
        this.calendarAry = [];
        this.isPrevDisabled = false;
        if (type === 'month') {
          this.calendarMonth = Number(val);
          this.titMonth = val;
          this.calendarYear = Number(this.titYear);
        }
        if (type === 'year') {
          this.calendarMonth = Number(this.titMonth);
          this.calendarYear = Number(val);
          this.titYear = val;
        }

        this.calAryPush(-1);
        this.calAryPush(0);
        this.calAryPush(1);

        if (this.type === 'month') {
          this.isCalendarDay = false;
          this.isCalendarMonth = true;
          this.isCalendarYear = false;
        } else {
          this.isCalendarDay = true;
          this.isCalendarMonth = false;
          this.isCalendarYear = false;

          if (type === 'year') this.yaerAryPush(Number(val));

          setTimeout(() => {
            console.log(this.calSwiper.slides.length);
            if (this.isPrevDisabled && this.calSwiper.slides.length <= 2) {
              this.calSwiper.slideTo(0, 0);
            } else {
              this.calSwiper.slideTo(1, 0);
            }
            const $index = this.calSwiper.snapIndex;
            this.setSwiperHeight($index);
          }, 10);
        }
      }
    },
    setMonth(type) {
      let year = Number(this.titYear);
      if (type === 'prev')year -= 1;
      if (type === 'next')year += 1;
      // this.calendarYear = Number(year)
      this.titYear = year;
    },
    setCalYear(type) {
      if (type === undefined)type = 'next';
      if (type !== 'prev' && type !== 'next') return;
      let year = Number(this.titYear);
      if (type === 'prev')year -= 1;
      if (type === 'next')year += 1;
      this.onSelectYearMonth(`${year}`, 'year');
    },
    setYearAry(type) {
      if (type === undefined)type = 'next';
      if (type !== 'prev' && type !== 'next') return;
      const first = this.yearAry[0];
      const last = this.yearAry[this.yearAry.length - 1];
      if (type === 'prev') this.yaerAryPush(Number(first));
      if (type === 'next') this.yaerAryPush(Number(last));
    },
  },
};
</script>
