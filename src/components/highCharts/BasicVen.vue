<template>
  <highcharts  v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" />
</template>

<script>

export default {
  name: 'BasicVen',
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
        plotOptions: {
          venn: {
            states: {
              hover: {
                enabled: false,
              },
              inactive: {
                opacity: 1,
              },
            },
          },
        },
        legend: {
          enabled: false,
        },
        series: [{
          type: 'venn',
          opacity: 1,
          name: 'The Unattainable Triangle',
          data: [{
            sets: ['삼성전자'],
            value: 11.3,
            name: '<span style="text-align: center;">삼성전자</span> <br /> <span style="text-align: center;">11.3%</span>',
          }, {
            sets: ['하이트진로홀딩스'],
            value: 66.7,
            name: '<span style="text-align: center;">하이트진로홀딩스</span> <br /> <span style="text-align: center;">66.7%</span>',
          }, {
            sets: ['카카오'],
            value: 4.1,
            name: '<span style="text-align: justify;">카카오</span> <br /> <span style="text-align: center;">4.1%</span>',
          }, {
            sets: ['삼성전자', '하이트진로홀딩스'],
            value: 1,
            name: ' ',
          }, {
            sets: ['카카오', '하이트진로홀딩스'],
            value: 1,
            name: ' ',
          }, {
            sets: ['카카오', '삼성전자'],
            value: 1,
            name: ' ',
          }],
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
        vm.chartOptions = vm.options;
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
