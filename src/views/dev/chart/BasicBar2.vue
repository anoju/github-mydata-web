<template>
  <div>
    <hr class="hr_line" aria-hidden="true">
    <h2 class="fz_18 fw_bold pd_y20">스크롤 없이 4단</h2>
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
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월',
          ],
          crosshair: true,
          // x축 범례스타일
          labels: {
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        yAxis: {
          tickInterval: 20,
          min: 0,
          max: 150,
          lineColor: '#eee',
          gridLineColor: '#eee',
          lineWidth: 0,
          title: false,
          // x축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        // 기본 색상 정의
        colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
        plotOptions: {
          series: {
            borderRadius: 4,
          },
          column: {
            pointWidth: 24,
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
                <p class="fz_14">14.5%</p>
              </div>
            `;
          },
        },
        series: [{
          name: '1월',
          data: [10, 50, 100, 150],
          states: {
            hover: {
              color: '#3b3f47',
            },
          },
        },
        {
          name: '2월',
          data: [10, 25, 75, 100],
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
      const vm = this;
      if (!vm.lodash.isEmpty(vm.options)) {
        vm.chartOptions = {
          ...vm.chartOptions,
          ...vm.options,
        };
      }
      if (vm.isChartClick) {
        vm.chartOptions.plotOptions.column.events = {
          click(e) {
            vm.$emit('chartClick', e);
          },
        };
      }
      if (vm.isBgClick) {
        vm.chartOptions.chart.events = {
          click(e) {
            vm.$emit('bgClick', e);
          },
        };
      }
      if (vm.isTodayTooltip) {
        vm.chartOptions.chart.events = {
          ...vm.chartOptions.chart.events,
          load() {
            const index = this.series[0].data.length - 1;
            this.tooltip.refresh(this.series[0].points[index]);
          },
        };
      }
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
