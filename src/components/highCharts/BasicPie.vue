<template>
  <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs"/>
</template>

<script>
export default {
  name: 'BasicPie',
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
      basicOption: {},
      chartOptions: {},
      default: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
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
          text: 'Browser market shares in January, 2018',
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            events: {
              click(e) {
                console.log(63, 'pieClick', e);
              },
            },
          },
        },
        legend: {
          enabled: false,
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
          }, {
            name: 'Internet Explorer',
            y: 11.84,
          }, {
            name: 'Firefox',
            y: 10.85,
          }, {
            name: 'Edge',
            y: 4.67,
          }, {
            name: 'Safari',
            y: 4.18,
          }, {
            name: 'etc',
            y: 5,
          }],
        }],
      },
    };
  },
  computed: {
  },
  methods: {
    init() {
      if (!this.lodash.isEmpty(this.options)) {
        this.chartOptions = this.options;
      } else {
        this.chartOptions = this.default;
      }
      if (this.isChartClick) {
        this.chartOptions.plotOptions.series.events = {
          click(e) {
            this.$emit('chartClick', e);
          },
        };
      }
      if (this.isBgClick) {
        this.chartOptions.chart.events = {
          click(e) {
            console.log(63, 'bgClick', e);
            this.$emit('bgClick', e);
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
