<template>
  <highcharts v-if="!lodash.isEmpty(chartOptions)" :options="chartOptions" :updateArgs="updateArgs"/>
</template>

<script>
export default {
  components: {
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    isSpLineClick: {
      type: Boolean,
      default: false,
    },
    isSeriesClick: {
      type: Boolean,
      default: false,
    },
    isColumnClick: {
      type: Boolean,
      default: false,
    },
    isPieClick: {
      type: Boolean,
      default: false,
    },
    isSolidgaugeClick: {
      type: Boolean,
      defualt: false,
    },
    isBgClick: {
      type: Boolean,
      default: false,
    },
    isBasicUnit: {
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
      chartOptions: {
      },
    };
  },
  computed: {
  },
  methods: {
    init() {
      const vm = this;
      vm.chartOptions = vm.options;

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
      if (vm.isColumnClick) {
        vm.chartOptions.plotOptions.column.events = {
          click(e) {
            vm.$emit('chartClick', e);
          },
        };
      }
      if (vm.isPieClick) {
        vm.chartOptions.plotOptions.pie.events = {
          click(e) {
            vm.$emit('chartClick', e);
          },
        };
      }
      if (vm.isSolidgaugeClick) {
        vm.chartOptions.plotOptions.solidgauge.events = {
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
    },
  },
  mounted() {
    // console.log(80, 'combo');
    this.init();
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
