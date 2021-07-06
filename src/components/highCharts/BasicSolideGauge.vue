<template>
  <highcharts v-if="isInit" :options="chartOptions"/>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'BasicSolideGauge',
  components: {
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    isBigChart: {
      type: Boolean,
      default: false,
    },
    isChartClick: {
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
          type: 'solidgauge',
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
        title: {
          text: null,
        },
        subtitle: {
          text: null,
        },
        tooltip: {
          enabled: false,
        },
        pane: {
          startAngle: 360,
          endAngle: 0,
          background: [{
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
            borderWidth: 0,
          }],
        },
        yAxis: {
          endOnTick: false,
          maxPadding: 0.14,
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: [],
        },
        plotOptions: {
          solidgauge: {
            dataLabels: {
              borderWidth: 0,
              useHTML: true,
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true,
          },
        },
        legend: {
          enabled: false,
        },
        series: [{
          name: 'Monve',
          data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80,
          }],
          dataLabels: {
            format: '<div style="text-align:center">'
            + '<span style="font-size:25px"> {y}% </span> <br/>'
            + '</div>',
          },
          tooltip: {
            valueSuffix: '%',
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
      if (vm.isBigChart) {
        vm.chartOptions.chart.height = 253;
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
