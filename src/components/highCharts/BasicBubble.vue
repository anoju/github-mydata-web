<template>
  <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" />
</template>

<script>

export default {
  name: 'BasicBubble',
  components: {
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    isBasicUnit: {
      type: Boolean,
      default: false,
    },
    isSpLineClick: {
      type: Boolean,
      default: false,
    },
    isSeriesClick: {
      type: Boolean,
      default: false,
    },
    isBgClick: {
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
          type: 'packedbubble',
          events: {
            load() {
              this.update({
                chart: {
                  height: this.chartHeight + this.legend.legendHeight,
                },
              });
            },
          },
          height: 227, // 공통 : 높이(기본 : 227)
        },
        credits: {
          enabled: false,
        },
        title: false,
        tooltip: {
          enabled: false,
        },
        // 공통 : 기본 색상 정의
        colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
        plotOptions: {
          series: {
            animation: false,
          },
          packedbubble: {
            useSimulation: false, // 버블 안움직이게
            minSize: '20%',
            maxSize: '120%',
            zMin: 0,
            zMax: 100,
            dataLabels: {
              enabled: true,
              align: 'center',
              format: '{point.name}<br><strong class="fz_18">{point.value}%</strong>',
              style: {
                color: 'black',
                fontSize: '14px',
                textOutline: 'none',
                fontWeight: 'normal',
              },
            },
            showInLegend: false,
            draggable: false,
            enableMouseTracking: false,
          },
        },
        legend: {
          enabled: false,
          itemStyle: {
            color: '#222',
            font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
          },
        },
        series: [
          {
            name: '삼성전자',
            data: [
              { name: '삼성', value: 15 },
            ],
            // color: '#3e61ba',
          },
          {
            name: '하이트진로홀딩스',
            data: [
              { name: '하이트진로홀딩스', value: 60 },
            ],
          },
          {
            name: '카카오',
            data: [
              { name: '카카오', value: 25 },
            ],
          },
        ],
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
      if (vm.isSeriesClick) {
        vm.chartOptions.plotOptions.series.events = {
          click(e) {
            vm.$emit('chartClick', e);
          },
        };
      }
      if (vm.isSpLineClick) {
        vm.chartOptions.plotOptions.spline.events = {
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
      if (!vm.isBasicUnit && !!vm.chartOptions.yAxis) {
        vm.chartOptions.yAxis.labels = {
          formatter(e) {
            if (Math.abs(e.value) >= 100000000) {
              return e.value / 100000000 + '억';
            }
            if (Math.abs(e.value) >= 10000000) {
              return e.value / 10000000 + '천만';
            }
            if (Math.abs(e.value) >= 1000000) {
              return e.value / 1000000 + '백만';
            }
            if (e.value > 0) {
              return vm.$stringUtil.numberSeperateByThree(e.value);
            }
            return vm.$stringUtil.numberSeperateByThree(e.value, true);
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
      this.chartOptions = {
        ...this.chartOptions,
        ...t,
      };
    },
  },
};
</script>
