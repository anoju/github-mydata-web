<template>
  <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" ref="chart"/>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'BasicCombo',
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
          height: 228, // 공통 : 높이(기본 : 228)
        },
        credits: {
          enabled: false,
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'],
          // 공통 : x축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        yAxis: {
          opposite: true,
          lineColor: '#eee', // 공통 : 라인색상
          gridLineColor: '#eee', // 공통 : 라인색상
          lineWidth: 0,
          title: false,
          // 공통 : y축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        colors: ['#91a5e9', '#3bae6c', '#7040b1', '#3e61ba', '#b7ebcd', '#c79fe7', '#81bdf2', '#74cacc', '#c76ee6'],
        plotOptions: {
          series: {
            events: {
            },
          },
          column: {
            events: {
            },
          },
          pie: {
            events: {
            },
          },
        },
        legend: {
          enabled: false,
        },
        series: [{
          type: 'column',
          name: 'Jane',
          data: [3, 2, 1, 3, 4],
        }, {
          type: 'column',
          name: 'John',
          data: [2, 3, 5, 7, 6],
        }, {
          type: 'column',
          name: 'Joe',
          data: [4, 3, 3, 9, 0],
        }, {
          type: 'spline',
          name: 'Average2',
          data: [7, 5.67, 7, 1.33, 2.33],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white',
          },
        }, {
          type: 'spline',
          name: 'Average',
          data: [3, 2.67, 3, 6.33, 3.33],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white',
          },
        }, {
          type: 'pie',
          name: 'Total consumption',
          data: [{
            name: 'Jane',
            y: 13,
            color: Highcharts.getOptions().colors[0], // Jane's color
          }, {
            name: 'John',
            y: 23,
            color: Highcharts.getOptions().colors[1], // John's color
          }, {
            name: 'Joe',
            y: 19,
            color: Highcharts.getOptions().colors[2], // Joe's color
          }],
          center: [100, 80],
          size: 100,
          showInLegend: false,
          dataLabels: {
            enabled: false,
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
      if (vm.isSeriesClick) {
        vm.chartOptions.plotOptions.series.events = {
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
      if (vm.isBgClick) {
        vm.chartOptions.chart.events = {
          click(e) {
            vm.$emit('bgClick', e);
          },
        };
      }
      // 공통 디자인 적용
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
