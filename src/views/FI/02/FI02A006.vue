<template>
  <kb-page
    page-title="소비달력"
    @scroll="scrollChk"
    :class="{scl_lock:isSclLock}"
  >
    <kb-page-body
      class="pd_b0"
      v-touch:start="touchStartEvt"
      v-touch:end="touchEndEvt"
    >
      <div class="section">
        <div class="flex_wrap space_between align_center">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh">09:00:03</kb-button>
          </div>
        </div>
        <div class="calendar_head mg_t12">
          <kb-button
            not
            class="swiper_arr swiper_prev"
            @click="controlMonth('prev')"
            :disabled="(Number(yearMonth) <= (Number(today.substr(0,6)) - 500 ))"
          >이전달</kb-button>
          <div class="tit">
            <kb-button
              not
              @click="selectMonth($event.target)"
            >
              {{year}}년 {{Number(month)}}월
            </kb-button>
          </div>
          <kb-button
            not
            class="swiper_arr swiper_next"
            @click="controlMonth('next')"
            :disabled="(Number(yearMonth) >= Number(today.substr(0,6)))"
          >다음달</kb-button>
        </div>
        <kb-btn-toggle small inline class="mg_t24">
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
              <span class="point">2</span>
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

        <div class="calendar_table mg_t24">
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
                <kb-button
                  v-if="day.day !== 0"
                  not
                  a-tag
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
                    999,999,999
                  </div>
                </kb-button>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar_detail_head">
          <kb-button
            not
            a-tag
            :class="{expend:isFoldingCalendar}"
            @click="toggleCalendar"
          >
            <div class="head_in">
              {{selectDay.substr(0,4)}}년 {{Number(selectDay.substr(4,2))}}월 {{Number(selectDay.substr(6,2))}}일
              <strong class="mg_l8"  v-if="selectDay === today">오늘</strong>
            </div>
          </kb-button>
        </div>

        <div
          class="calendar_detail_wrap"
          :class="{expend:isFoldingCalendar}"
        >
          <div class="no_list_txt icon">
            <strong class="tit">거래내역이 없습니다.</strong>
          </div>
          <div class="line_list_ty2 border_none">
            <ul>
              <li>
                <div class="item">
                  <kb-button aTag not class="inner">
                    <div class="flex_wrap space_between align_center">
                      <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      <div class="fz_14"><strong>승인</strong></div>
                    </div>
                    <div class="sub_info mg_t8">
                      <ul>
                        <li>KB국민카드</li>
                        <li>본인 1234</li>
                        <li>일시불</li>
                      </ul>
                    </div>
                    <div class="flex_wrap space_between align_end mg_t3">
                      <div class="breakall">
                        <strong>여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당여의도식당</strong>
                      </div>
                      <div class="nowrap pd_l10">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </div>
                  </kb-button>
                  <div class="category_info">
                    <ul>
                      <li class="tag">#식비</li>
                      <li>강추 맛집</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <kb-button aTag not class="inner">
                    <div class="flex_wrap space_between align_center">
                      <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      <div class="fz_14"><strong class="fc_up">승인취소</strong></div>
                    </div>
                    <div class="sub_info mg_t8">
                      <ul>
                        <li>KB국민카드</li>
                        <li>본인 1234</li>
                        <li>일시불</li>
                      </ul>
                    </div>
                    <div class="flex_wrap space_between align_end mg_t3">
                      <div class="breakall">
                        <strong>여의도식당</strong>
                      </div>
                      <div class="nowrap  pd_l10">
                        <strong class="fz_18">-12,400원</strong>
                      </div>
                    </div>
                  </kb-button>
                  <div class="category_info">
                    <ul>
                      <li class="tag">#식비</li>
                      <li>강추 맛집</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <kb-button aTag not class="inner">
                    <div class="flex_wrap space_between align_center">
                      <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                      <div class="fz_14"><strong>승인</strong></div>
                    </div>
                    <div class="sub_info mg_t8">
                      <ul>
                        <li>KB국민카드</li>
                        <li>본인 1234</li>
                        <li>일시불</li>
                      </ul>
                    </div>
                    <div class="flex_wrap space_between align_end mg_t3">
                      <div class="breakall">
                        <strong>여의도식당</strong>
                      </div>
                      <div class="nowrap pd_l10">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </div>
                  </kb-button>
                  <div class="category_info">
                    <ul>
                      <li class="tag">#식비</li>
                      <li>강추 맛집</li>
                    </ul>
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
  name: 'FI02A006',
  data() {
    return {
      isSclLock: false,
      scrollTop: 0,
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
      touchStartY: 0,
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
    scrollChk(e) {
      this.scrollTop = e.target.scrollTop;
    },
    touchStartEvt(e) {
      if (this.scrollTop === 0 && !this.isFoldingCalendar) this.isSclLock = true;
      this.touchStartY = (e.type === 'touchstart') ? e.touches[0].clientY : e.clientY;
    },
    touchEndEvt(e) {
      this.isSclLock = false;
      const move = (e.type === 'touchend') ? e.changedTouches[0].clientY : e.clientY;
      this.touchDistance = move - this.touchStartY;

      // down
      if (this.touchDistance > 10) this.swipeDownEvt();

      // up
      if (this.touchDistance < -10) this.swipeUpEvt();
    },
    swipeUpEvt() {
      if (!this.isFoldingCalendar) {
        this.toggleCalendar();
        const wrap = this.$el.closest('.scl__body');
        setTimeout(() => {
          console.log(this.scrollTop);
          if (this.scrollTop !== 0) this.$scrollTo(wrap, { top: 0 }, 10);
        }, 50);
      }
    },
    swipeDownEvt() {
      if (this.isFoldingCalendar && this.scrollTop === 0) this.toggleCalendar();
    },
  },
};
</script>
