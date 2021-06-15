<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">최근 1년동안 나에게 <strong>가장 많은 수익</strong>을 가져다 준 효자 종목은?</h1>
        <div class="under_line_chart mg_t40">
          <ul>
            <li
              v-for="(item, i) in listAry"
              :key="i"
            >
              <div class="info">
                <div class="th">
                  <strong>{{item.company}}</strong>
                </div>
                <div class="td">
                  <div
                    class="per"
                    :class="{fc_blue:item.max}"
                  >{{item.per}}%</div>
                  <div class="money">{{item.money}}</div>
                </div>
              </div>
              <div class="bar_wrap">
                <div class="bar" :style="`width:${item.per}%;`"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="round_txt_box mg_t32" v-scroll-animate="'zoomIn'">
          <strong>삼성전자 수익금이<br>가장 높았어요!</strong>
        </div>
        <div class="fz_12 fc_666 t_center mg_t16">2020/04/14 ~ 2021/04/14의 분석</div>
        <div class="t_center mg_t26">
          <kb-button link blue>
            자세히보기<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          목록보기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO01D003',
  data() {
    return {
      chartDate: [
        { company: '삼성잔자', money: '500,000' },
        { company: 'SKT', money: '100,000' },
        { company: 'LG디스플레이', money: '50,000' },
      ],
      listAry: [],
      total: 50000,
    };
  },
  beforeMount() {
    this.readyEvt();
  },
  methods: {
    readyEvt() {
      let total = 0;
      let max = 0;
      this.chartDate.forEach((item) => {
        const val = this.$onlyNumber(item.money);
        if (val > max)max = val;
        total += Number(val);
      });
      this.chartDate.forEach((item) => {
        const val = Number(this.$onlyNumber(item.money));
        const percent = Math.round((val / total) * 100);
        const isMax = max === val;
        const obj = {
          company: item.company,
          money: item.money,
          per: percent,
          max: isMax,
        };
        this.listAry.push(obj);
      });
    },
  },
};
</script>
