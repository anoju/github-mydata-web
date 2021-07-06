<template>
  <div>
    <hr class="hr_line" aria-hidden="true">
    <h2 class="fz_18 fw_bold pd_y20">3개월, 우측에 내용</h2>
    <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" />
  </div>
</template>

<script>
export default {
  name: 'BasicBar',
  components: {
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    isChartClick: {
      type: Boolean,
      default: false,
    },
    isBgClick: {
      type: Boolean,
      default: false,
    },
    isBasicUnit: {
      type: Boolean,
      default: false,
    },
    isTodayTooltip: {
      type: Boolean,
      default: false,
    },
    updateArgs: {
      type: Array,
      default() {
        return [true, true, true];
      },
    },
  },
  data() {
    return {
      isInit: false,
      chartOptions: {
        chart: {
          type: 'column',
          events: {
          },
          height: 228, // 높이
        },
        credits: {
          enabled: false,
        },
        title: false,
        xAxis: {
          lineColor: '#eee',
          categories: [
            '1개월',
            '2개월',
            '3개월',
            '',
          ],
          crosshair: true,
          // x축 범례스타일
          labels: {
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
          scrollbar: {
            enabled: true,
          },
        },
        yAxis: {
          tickInterval: 20,
          min: 0,
          max: 100,
          gridLineColor: 'none',
          lineWidth: 0,
          title: false,
          // y축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
          plotLines: [{
            value: 50,
            dashStyle: 'dash',
            width: 1,
            color: '#ccc',
            label: {
              align: 'right',
              useHTML: true,
              y: -5,
              formatter() {
                return `
                  <dl>
                    <dd class="fz_12 fc_gray t_right">
                      월 평균 지출
                    </dd>
                    <dd class="fz_12 fw_bold fc_666 t_right">금액</dd>
                  </dl>
                `;
              },
            },
          }],
        },
        // 기본 색상 정의
        colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
        plotOptions: {
          series: {
            borderRadius: 4,
          },
          column: {
            pointWidth: 24, // 차트 가로 사이즈
            pointPadding: 0.1,
            borderWidth: 0,
            events: {
            },
          },
        },
        legend: {
          enabled: false,
          itemStyle: {
            color: '#222',
            font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
          },
        },
        tooltip: {
          backgroundColor: null,
          borderWidth: 0,
          borderRadius: 0,
          shadow: false,
          padding: 0,
          useHTML: true,
          outside: false,
          formatter() {
            return `
              <div class="chart_tooltip">
                <p class="fz_14 fw_bold">12,000,000원</p>
              </div>
            `;
          },
        },
        series: [{
          name: '1월',
          data: [10, 50, 100, 0],
          states: {
            hover: {
              color: '#3b3f47',
            },
          },
        }],
      },
    };
  },
  computed: {
  },
  methods: {
    init() {
      return new Promise((res) => {
        res();
      });
    },
  },
  mounted() {
    this.init().then(() => {
      this.isInit = true;
    });
  },
  watch: {
    options(t) {
      this.chartOptions = t;
    },
  },
};
</script>
