<template>
  <kb-page page-title="소비달력">
    <kb-page-body class="pd_b0">
      <div
        class="section"
      >
        <div class="t_center">
          <kb-button
            line
            h40
            @click="controlMonth('prev')"
            :disabled="(Number(yearMonth) <= (Number(today.substr(0,6)) - 500 ))"
          >이전달</kb-button>
          <kb-button
            line
            h40
            @click="selectMonth($event.target)"
          >
            {{year}}년 {{Number(month)}}월
          </kb-button>
          <kb-button
            line
            h40
            @click="controlMonth('next')"
            :disabled="(Number(yearMonth) >= Number(today.substr(0,6)))"
          >다음달</kb-button>
        </div>
        <kb-btn-toggle small inline>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal1"
              button
              value="all"
            >
              전체
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="1"
            >
              KB국민카드
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="2"
            >
              삼성카드
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="3"
            >
              현대카드
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="4"
            >
              신한카드
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>

        <div class="calendar_table">
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
              v-for="(week, j) in weekDayAry"
              :key="'w'+j"
              class="tr"
            >
              <div
                v-for="(day, i) in week"
                :key="'d'+i"
                class="td"
                :class="{unused:day.day === 0, first: (i % 7) == 0, last: (i % 7) == 6}"
              >
                <a
                  href="#"
                  v-if="day.day !== 0"
                  role="button"
                  class="calendar_btn"
                  :class="{
                    today:Number(today) === Number(day.date),
                    selected:(Number(selectDay) === Number(day.date)),
                    disabled:(Number(today) < Number(day.date) || Number(day.date) < firstDate)
                  }"
                  :data-date="day.date"
                  @click="calendarSelect($event, day.date, (Number(today) < Number(day.date) || Number(day.date) < firstDate))"
                >
                  <div class="day">
                    {{ day.day }}
                  </div>
                  <div class="cont">
                    내용 노출
                  </div>
                </a>
              </div>
            </div>
            <!--
            <div
              v-for="(day, k) in dayAry"
              :key="'d'+k"
              class="td"
              :class="{unused:day.day === 0, first: (k % 7) == 0, last: (k % 7) == 6}"
            >
              <a
                href="#"
                v-if="day.day !== 0"
                role="button"
                class="calendar_btn"
                :class="{
                  today:Number(today) === Number(day.date),
                  selected:(Number(selectDay) === Number(day.date)),
                  disabled:(Number(today) < Number(day.date) || Number(day.date) < firstDate)
                }"
                :data-date="day.date"
                @click="calendarSelect($event, day.date, (Number(today) < Number(day.date) || Number(day.date) < firstDate))"
              >
                <div class="day">
                  {{ day.day }}
                </div>
                <div class="cont">
                  내용 노출
                </div>
              </a>
            </div>
            -->
          </div>
        </div>

        <kb-title-bar>
          <template slot="left">
            <div class="tit">
              <strong
                v-if="selectDay === today"
                class="fc_blue"
              >오늘 &middot;</strong>
              {{selectDay.substr(0,4)}}년 {{Number(selectDay.substr(4,2))}}월 {{Number(selectDay.substr(6,2))}}일
            </div>
          </template>
          <kb-button
            line
            h32
            @click="toggleCalendar"
          >
            달력
            <template v-if="!isFoldingCalendar">
              접기
            </template>
            <template v-else>
              열기
            </template>
          </kb-button>
        </kb-title-bar>

        <div
          class="calendar_detail_wrap"
          :class="{expend:isFoldingCalendar}"
        >
          <div class="no_list_txt">
            <strong class="tit">내역이 없습니다.</strong>
          </div>
          <div class="line_list_ty1">
            <ul>
              <li>
                <div class="item">
                  <i class="ico" style="background:skyblue"></i>
                  <div class="inner">
                    <div class="flex">
                      <div class="left">
                        <div class="tit"><strong>여의도식당</strong></div>
                      </div>
                      <div class="right">
                        <div class="price"><strong>300,000,000원</strong></div>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="left">
                        <ul class="sub">
                          <li><strong>출금 1234</strong></li>
                          <li><strong>일시불</strong></li>
                          <li>2021/03/04 13:50:23</li>
                        </ul>
                      </div>
                      <div class="right">
                        <div class="sub"><strong>승인</strong></div>
                      </div>
                    </div>
                    <div class="sub">
                      <strong class="mg_r8 fc_blue">#점심</strong>
                      <span>카드재결제</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <i class="ico" style="background:skyblue"></i>
                  <div class="inner">
                    <div class="flex">
                      <div class="left">
                        <div class="tit"><strong>여의도식당</strong></div>
                      </div>
                      <div class="right">
                        <div class="price"><strong>-300,000,000원</strong></div>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="left">
                        <ul class="sub">
                          <li><strong>출금 1234</strong></li>
                          <li><strong>일시불</strong></li>
                          <li>2021/03/04 13:50:23</li>
                        </ul>
                      </div>
                      <div class="right">
                        <div class="sub"><strong class="fc_red">승인취소</strong></div>
                      </div>
                    </div>
                    <div class="sub">
                      <strong class="mg_r8 fc_blue">#점심</strong>
                      <span>카드재결제</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02C007',
  data() {
    return {
      yearMonth: '',
      year: '',
      month: '',
      today: '',
      firstDate: '',
      selectDay: '',
      dayAry: [],
      weekDayAry: [],
      isFoldingCalendar: false,
      isFoldingCalendarIng: false,
      toggleVal1: 'all',
    };
  },
  watch: {
    yearMonth() {
      this.year = this.yearMonth.substr(0, 4);
      this.month = this.yearMonth.substr(4, 2);
      this.setDayAray();
    },
  },
  beforeMount() {
    this.readyEvt();
  },
  mounted() {
  },
  methods: {
    readyEvt() {
      this.yearMonth = this.todayString().substr(0, 6);
      this.today = this.todayString();
      this.selectDay = this.todayString();
      this.firstDate = Number(this.today) - 50000 + 1;
      const firstDate = `${this.firstDate}`;
      const Lastday = this.getLastDay(Number(firstDate.substr(0, 4)), Number(firstDate.substr(4, 2)));
      const firstDateLast = firstDate.substr(0, 6) + Lastday;
      if (Number(firstDateLast) < this.firstDate) {
        const year = firstDate.substr(0, 4);
        let month = Number(firstDate.substr(4, 2)) + 1;
        if ((`${month}`).length === 1)month = `0${month}`;
        this.firstDate = Number(`${year}${month}01`);
      }
      this.setDayAray();
    },
    todayString() {
      const date = new Date();
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      if ((`${$month}`).length === 1)$month = `0${$month}`;
      if ((`${$day}`).length === 1)$day = `0${$day}`;
      return (`${$year}${$month}${$day}`);
    },
    setDayAray() {
      this.dayAry = [];
      this.weekDayAry = [];
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

      this.weekDayAry = this.$arrayDivision([...this.dayAry], 7);
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
    calendarSelectFirst(val) {
      let firstDay = `${val}01`;
      if (Number(firstDay) < this.firstDate)firstDay = `${this.firstDate}`;
      this.selectDay = firstDay;
    },
    calendarSelect(e, val, disabled) {
      e.preventDefault();
      if (disabled) return;
      this.selectDay = val;
    },
    controlMonth(type) {
      if (this.isFoldingCalendar) this.toggleCalendar();
      let year = Number(this.year);
      let month = Number(this.month);
      if (type === 'prev') {
        month -= 1;
        if (month < 1) {
          month += 12;
          year -= 1;
        }
      }
      if (type === 'next') {
        month += 1;
        if (month > 12) {
          month -= 12;
          year += 1;
        }
      }
      if ((`${month}`).length === 1)month = `0${month}`;
      this.yearMonth = `${year}${month}`;
      this.calendarSelectFirst(this.yearMonth);
    },
    selectMonth(el) {
      this.$modal({
        component: () => import('@/components/modalContainer/modalCalendar.vue'),
        componentProps: {
          value: this.yearMonth,
          type: 'month',
          min: { y: 5 },
          max: 'today',
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          if (this.isFoldingCalendar) this.toggleCalendar();
          this.yearMonth = result.payload;
          this.calendarSelectFirst(this.yearMonth);
        }
      });
    },
    toggleCalendar() {
      this.isFoldingCalendar = !this.isFoldingCalendar;
      let $selected = this.$el.querySelector('.calendar_table').querySelector('.selected');
      if ($selected === null && this.isFoldingCalendar) {
        this.yearMonth = this.selectDay.substr(0, 6);
        setTimeout(() => {
          $selected = this.$el.querySelector('.calendar_table').querySelector('.selected');
          this.toggleCalendarAction($selected, this.isFoldingCalendar);
        }, 10);
      } else {
        this.toggleCalendarAction($selected, this.isFoldingCalendar);
      }
    },
    toggleCalendarAction(selected, val) {
      if (this.isFoldingCalendarIng) return;
      this.isFoldingCalendarIng = true;
      const tr = selected.closest('.tr');
      const siblings = this.$getSiblings(tr);
      siblings.forEach((el) => {
        if (val) {
          this.$slideUp(el, 300, () => {
            this.isFoldingCalendarIng = false;
          });
        } else {
          this.$slideDown(el, 300, () => {
            this.isFoldingCalendarIng = false;
          });
        }
      });
    },
    swipeTopEvt() {
      if (!this.isFoldingCalendar) {
        this.toggleCalendar();
        const wrap = this.$el.closest('.scl__body');
        setTimeout(() => {
          this.$scrollTo(wrap, { top: 0 }, 100);
        }, 300);
      }
    },
    swipeBottomEvt() {
      const wrap = this.$el.closest('.scl__body');
      if (this.isFoldingCalendar && (wrap.scrollTop === 0)) this.toggleCalendar();
    },
  },
};
</script>
