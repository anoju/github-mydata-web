<template>
  <div class="section">
    <div class="timeline_wrap">
      <p class="tit">총 10건의<br>거래변동이 있었어요.</p>
      <p class="search_date">조회기간 : 2010/2/01 - 2021/1/31</p>

      <kb-btn-toggle small inline class="type_cal">
        <kb-btn-toggle-row>
          <kb-radio
            v-model="toggleVal1"
            button
            value="1"
          >
            1개월
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="2"
          >
            3개월
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="3"
          >
            6개월
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="4"
          >
            1년
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="5"
          >
            직접선택
            <span class="ico_cal"></span>
          </kb-radio>
        </kb-btn-toggle-row>
        <kb-folding-panel
          :active="toggleVal1 === '5'"
          tag="div"
          :duration="200"
          class="datepicker_box"
        >
          <div class="flex">
            <div><kb-input line date v-model="date1" /></div>
            <span>-</span>
            <div><kb-input line date v-model="date2" /></div>
          </div>
          <div class="flex">
            <kb-button
              line
              class="btn_search"
            >
              조회하기
            </kb-button>
          </div>
        </kb-folding-panel>
      </kb-btn-toggle>

      <div class="view_option">
        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
          inline
        />
        <kb-checkbox
          switch small
          class="right"
        >
          투자자산 제외
        </kb-checkbox>
      </div>

      <!-- chart -->
      <div class="chart_area">
        <transition name="fade">
          <div class="tooltip_layer" v-if="tooltipShow">
            금액을 클릭하여 거래변동을 확인하세요
            <kb-button
              not
              class="pop_close"
              aria-label="툴팁창 닫기"
              v-on:click="tooltipShow=!tooltipShow"
            >툴팁창 닫기</kb-button>
          </div>
        </transition>
        <img src="@/assets/images/TO/02/chart_timeline.png" style="width:100%;" alt="차트 이미지" @click="scrollAction()">
      </div>
      <!-- //chart -->

      <div class="timeline_box" ref="timeline">
        <div class="top_head">
          <span class="minus">자산감소</span>
          <p class="tit">거래변동</p>
          <span class="plus">자산증가</span>
        </div>

        <div class="timeline_list"><!-- 반복 -->
          <p class="day">2021/2/24(수)</p>
          <div class="total">
            <strong class="minus">120,240,000원</strong>
            <span class="tit">합계</span>
            <strong class="plus">10,423,230,000원</strong>
          </div>
          <ul class="msg_box">
            <li class="withdraw"><!-- 출금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <!--
                      ico1 : 현금
                      ico2 : 투자
                      ico3 : 카드,대출
                      ico4 : 보험
                      ico5 : 연금
                      ico6 : 실물
                    -->
                  <i class="ico1"></i><strong>KB국민은행 출금</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
            <li class="deposit"><!-- 입금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico3"></i><strong>KB국민은행 입금</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
            <li class="withdraw"><!-- 출금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico1"></i><strong>말풍선 사이즈 220 고정 줄바꿈 허용</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
            <li class="withdraw"><!-- 출금 -->
              <div class="alarm_box">
                <p class="title">
                  <i class="ico1"></i><strong>평가금액(전일대비)</strong>
                </p>
                <p class="amount">690,000</p>
                <ul class="invest_list">
                  <li>
                    <span>국내주식</span>
                    <span>+10,000,000</span>
                  </li>
                  <li>
                    <span>해외주식</span>
                    <span>-1,000,000</span>
                  </li>
                  <li>
                    <span>펀드</span>
                    <span>-10.000.000</span>
                  </li>
                  <li>
                    <span>기타</span>
                    <span>+10,000,000</span>
                  </li>
                </ul>
                <kb-button not a-tag class="invest_life_go">
                  투자생활에서 보기
                </kb-button>
              </div>
              <span class="date">18:40</span>
            </li>
            <li class="deposit"><!-- 입금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico3"></i><strong>KB국민은행 입금 텍스트가 긴게 있나?</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
          </ul>
        </div>

        <div class="timeline_list"><!-- 반복 -->
          <p class="day">2021/2/25(목)</p>
          <div class="total">
            <strong class="minus">120,240,000원</strong>
            <span class="tit">합계</span>
            <strong class="plus">0원</strong>
          </div>
          <ul class="msg_box">
            <li class="withdraw"><!-- 출금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico1"></i><strong>KB국민은행 출금</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
            <li class="withdraw"><!-- 출금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico1"></i><strong>KB국민은행 출금</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
            <li class="withdraw"><!-- 출금 -->
              <kb-button not a-tag class="alarm_box">
                <p class="title">
                  <i class="ico1"></i><strong>KB국민은행 출금</strong>
                </p>
                <p class="amount">690,000</p>
              </kb-button>
              <span class="date">18:40</span>
            </li>
          </ul>
        </div>

        <p class="end_txt">조회 기간의 정보를 모두 확인했습니다.</p>
      </div>
    </div>

    <div class="btm_btn_util type2">
      <p class="text">오늘 정보는 마이데이터 제공 데이터를 기반으로 작성되어 실제 정보와 다를 수 있습니다.</p>
      <kb-button aTag not class="btn_refresh">새로고침</kb-button>
      <kb-button aTag not class="btn_linkage">추가연동</kb-button>
    </div>

    <!-- 2021-04-28 자산정보가 없는 경우 -->
    <template v-if="false">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          이런, 자산 정보가 없네요!<br />
          자산을 연동해주세요 :)
          <kb-button line blue class="more">추가연동</kb-button>
        </div>
        <kb-button aTag not class="banner_box type3">
          오늘 서비스를 <br />
          체험해 보시겠어요?
        </kb-button>
      </div>
    </template>
    <!-- //2021-04-28 자산정보가 없는 경우 -->
  </div>
</template>
<script>
export default {
  name: 'TO02D001',
  props: {
  },
  data() {
    return {
      toggleVal1: '1',
      selectVal1: '1',
      selectOpt1: [
        { text: '전체보기', value: '1' },
        { text: '출금만 보기', value: '2' },
      ],
      tooltipShow: true,
      date1: '',
      date2: '',
    };
  },
  methods: {
    // 2021-06-22 타임라인 클릭시 스크롤 액션 추가
    scrollAction() {
      let wrap = this.$el.closest('.scl__body');
      if (wrap === null)wrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
      const { scrollTop } = wrap;
      const header = document.querySelector('.scl__head');
      const tabmenu = document.querySelector('.tabmenu');
      let fixedHeight = 0;

      fixedHeight += header.firstChild.offsetHeight;
      fixedHeight += tabmenu.firstChild.offsetHeight;

      const top = scrollTop + this.$refs.timeline.getBoundingClientRect().top - fixedHeight;

      this.$scrollTo(wrap, { top }, 500);
    },
  },
};
</script>
