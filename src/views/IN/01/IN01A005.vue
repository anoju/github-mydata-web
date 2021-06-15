<template>
  <div class="section">
    <!-- 투자자산 변동 -->

    <kb-btn-toggle small inline class="mg_t24 mg_b40">
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
          KB증권
          <span class="point">2</span>
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="2"
        >
          키움증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="3"
        >
          신한증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="4"
        >
          한국투자
        </kb-radio>
      </kb-btn-toggle-row>
    </kb-btn-toggle>

    <div class="invest_statistics_box">
      <div class="list_filter_wrap">
        <div class="list_filter_bar bd_line">
          <div class="left"></div>
          <div class="right">
            <div class="item_warp">
              <span class="item">
                {{this.searchTxt1}}
              </span>
            </div>
            <kb-button
              filter
              @click="openFilter($event.target)"
            >
              검색필터
            </kb-button>
          </div>
        </div>
      </div>

      <p class="fz_14 fc_666">조회기간 : 20212/01/01 - 2021/03/31</p>
      <kb-swiper full-width auto-height class="mg_t0">
        <!-- 상승일때 -->
        <swiper-slide>
          <div class="section">
            <h2 class="mg_t24 fz_18 fw_bold">
              <span class="block fz_12 mg_b4 fw_normal">입출금 제외</span>
              2,000,160원이 늘었어요!
            </h2>

            <div class="rate_return">
              <p class="mg_t20 fz_18 fc_666 fw_bold">
                <span class="block fz_12 mg_b4 fw_normal">기간내 단순 수익률</span>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <span class="fc_up">+2.01%</span>
              </p>

              <!--
                  상승 : up
                  하락 : down
                  없음 : none
                -->
              <i class="ico up"></i>
            </div>

            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">출금가능금액</div>
                  <div class="td"><strong class="fz_16 fc_222">1,200,000원</strong></div>
                </li>
                <li>
                  <div class="th">이체금액</div>
                  <div class="td"><strong class="fz_16 fc_222">300,000,000원</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <!-- //상승일때 -->
        <!-- 하락일때 -->
        <swiper-slide>
          <div class="section">
            <h2 class="mg_t24 fz_18 fw_bold">
              <span class="block fz_12 mg_b4 fw_normal">입출금 제외</span>
              2,000,160원이 늘었어요!
            </h2>

            <div class="rate_return">
              <p class="mg_t20 fz_18 fc_666 fw_bold">
                <span class="block fz_12 mg_b4 fw_normal">기간내 단순 수익률</span>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <span class="fc_down">-2.01%</span>
              </p>

              <!--
                  상승 : up
                  하락 : down
                  없음 : none
                -->
              <i class="ico down"></i>
            </div>

            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">출금가능금액</div>
                  <div class="td"><strong class="fz_16 fc_222">1,200,000원</strong></div>
                </li>
                <li>
                  <div class="th">이체금액</div>
                  <div class="td"><strong class="fz_16 fc_222">300,000,000원</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <!-- //하락일때 -->
        <!-- 데이터가 없을때 -->
        <swiper-slide>
          <div class="section">
            <h2 class="mg_t24 fz_18 fw_bold">
              <span class="block fz_12 mg_b4 fw_normal">입출금 제외</span>
              운용할 투자자산이 없습니다.
            </h2>

            <div class="rate_return">
              <p class="mg_t20 fz_18 fc_666 fw_bold">
                <span class="block fz_12 mg_b4 fw_normal">기간내 단순 수익률</span>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <span>-%</span>
              </p>

              <!--
                  상승 : up
                  하락 : down
                  없음 : none
                -->
              <i class="ico none"></i>
            </div>

            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">출금가능금액</div>
                  <div class="td"><strong class="fz_16 fc_222">1,200,000원</strong></div>
                </li>
                <li>
                  <div class="th">이체금액</div>
                  <div class="td"><strong class="fz_16 fc_222">300,000,000원</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <!-- //데이터가 없을때 -->
        <!-- 그래프 타입 -->
        <swiper-slide>
          <div class="section">
            <div class="chart_area">
              <img src="@/assets/images/temp/sample_in01a005.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <!-- //그래프 타입 -->
      </kb-swiper>

      <hr aria-hidden="true" class="hr_line mg_t24 mg_b32">

      <template v-if="noData">
        <div class="no_list_txt icon">
          <strong class="tit">
            투자 이력이 없어<br />
            표시할 정보가 없습니다.
          </strong>
        </div>
      </template>

      <template v-if="!noData">

        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
          inline
        />

        <!-- 전체 보기 -->
        <template v-if="selectVal1 === '1'">
          <div class="info_txt_list border_none mg_t23">
            <ul class="list">
              <li>
                <div class="th">손익금액</div>
                <div class="td"><strong class="fz_14 fc_red">1,200,000원</strong></div>
              </li>
              <li>
                <div class="th">시작일 자산</div>
                <div class="td fz_14">300,000,000원</div>
              </li>
              <li>
                <div class="th">종료일 자산</div>
                <div class="td fz_14">300,000,000원</div>
              </li>
            </ul>
          </div>

          <div class="money_list">
            <kb-button not aTag @click="showGraphDetail(0,$event.target)">
              <p class="tit">입금</p>
              <p class="money">+300,000,000원</p>
              <i aria-hidden="true" class="bt_ic_arr"></i>
            </kb-button>
            <kb-button not aTag @click="showGraphDetail(0,$event.target)">
              <p class="tit">출금</p>
              <p class="money">+300,000,000원</p>
              <i aria-hidden="true" class="bt_ic_arr"></i>
            </kb-button>
            <kb-button not aTag @click="showGraphDetail(1,$event.target)">
              <p class="tit">주식손익</p>
              <p class="money fc_up">+300,000,000원</p>
              <i aria-hidden="true" class="bt_ic_arr"></i>
            </kb-button>
            <kb-button not aTag @click="showGraphDetail(2,$event.target)">
              <p class="tit">펀드손익</p>
              <p class="money fc_down">+300,000,000원</p>
              <i aria-hidden="true" class="bt_ic_arr"></i>
            </kb-button>
            <kb-button not aTag @click="showGraphDetail(3,$event.target)">
              <p class="tit">Wrap손익</p>
              <p class="money">+300,000,000원</p>
              <i aria-hidden="true" class="bt_ic_arr"></i>
            </kb-button>
          </div>
        </template>
        <!-- //전체 보기 -->

        <!-- 월별보기 -->
        <template v-if="selectVal1 === '2'">
          <div class="month_box">
            <p class="month">2021/01/21~2021/02/20</p>
            <div class="info_txt_list border_none mg_t23">
              <ul class="list">
                <li>
                  <div class="th">손익금액</div>
                  <div class="td"><strong class="fz_14 fc_red">1,200,000원</strong></div>
                </li>
                <li>
                  <div class="th">시작일 자산</div>
                  <div class="td fz_14">300,000,000원</div>
                </li>
                <li>
                  <div class="th">종료일 자산</div>
                  <div class="td fz_14">300,000,000원</div>
                </li>
              </ul>
            </div>

            <div class="money_list2">
              <kb-button not aTag>
                <p class="tit">입금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">출금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">주식손익</p>
                <p class="money fc_up">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">펀드손익</p>
                <p class="money fc_down">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">입금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
            </div>
          </div>

          <div class="month_box">
            <p class="month">2021/01/21~2021/02/20</p>
            <div class="info_txt_list border_none mg_t23">
              <ul class="list">
                <li>
                  <div class="th">손익금액</div>
                  <div class="td"><strong class="fz_14 fc_red">1,200,000원</strong></div>
                </li>
                <li>
                  <div class="th">시작일 자산</div>
                  <div class="td fz_14">300,000,000원</div>
                </li>
                <li>
                  <div class="th">종료일 자산</div>
                  <div class="td fz_14">300,000,000원</div>
                </li>
              </ul>
            </div>

            <div class="money_list2">
              <kb-button not aTag>
                <p class="tit">입금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">출금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">주식손익</p>
                <p class="money fc_up">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">펀드손익</p>
                <p class="money fc_down">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
              <kb-button not aTag>
                <p class="tit">입금</p>
                <p class="money">+300,000,000원</p>
                <i aria-hidden="true" class="bt_ic_arr"></i>
              </kb-button>
            </div>
          </div>

        </template>
      <!-- //월별보기 -->
      </template>

    </div>

  </div>
</template>
<script>
export default {
  name: 'IN01A005',
  data() {
    return {
      noData: false,
      tabIdx: 0,
      toggleVal1: '1',
      searchTxt1: '최근 3개월',

      selectVal1: '1',
      selectOpt1: [
        { value: '1', text: '전체보기' },
        { value: '2', text: '월별보기' },
      ],
    };
  },
  methods: {
    openFilter(el) {
      this.$modal({
        component: () => import('@/views/IN/01/IN01A007.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        this.searchTxt1 = `${result.payload[0]}`;
      });
    },
    showGraphDetail(num, el, val = null) {
      const viewsAray = [];
      viewsAray.push('입출금내역');
      viewsAray.push('주식손익');
      viewsAray.push('펀드손익');
      viewsAray.push('Wrap손익');

      this.$modal({
        component: () => import('@/views/IN/01/IN01A_pop.vue'),
        componentProps: {
          index: num,
          selVal: val,
          views: viewsAray,
        },
        returnFocus: el,
      });
    },
  },
};
</script>
