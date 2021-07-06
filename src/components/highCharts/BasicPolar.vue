<template>
  <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs"/>
</template>

<script>
export default {
  name: 'BasicPolar',
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
      chartOptions: {
        chart: {
          polar: true,
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
          backgroundColor: null,
          borderWidth: 0,
          borderRadius: 0,
          shadow: false,
          padding: 0,
          useHTML: true,
          formatter() {
            const { series } = this;
            return `
              <dl class="chart_tooltip">
                <dt style="color:${this.color}">${series.name}</dt>
                <dd>${this.y + '%'}</dd>
              </dl>
            `;
          },
        },
        pane: {
          startAngle: 0,
          endAngle: 360,
        },

        xAxis: {
          lineColor: '#eee',
          gridLineColor: '#eee',
          tickInterval: 45,
          min: 0,
          max: 360,
          labels: {
            format: '{value}°',
          },
          lineWidth: 0,
        },

        yAxis: {
          endOnTick: false,
          maxPadding: 0.14,
          lineColor: '#eee',
          gridLineColor: '#eee',
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0,
        },
        // colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
        colors: ['#91a5e9', '#3bae6c', '#7040b1', '#3e61ba', '#b7ebcd', '#c79fe7', '#81bdf2', '#74cacc', '#c76ee6'],
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
            pointStart: 0,
            pointInterval: 45,
            events: {
              click(e) {
                console.log(70, 'polarClick', e);
              },
            },
          },
          column: {
            pointPadding: 0,
            groupPadding: 0,
            events: {
              click(e) {
                console.log(70, 'polarClick', e);
              },
            },
          },
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'vertical',
          enabled: false,
        },

        series: [{
          type: 'column',
          name: 'Column',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
          pointPlacement: 'between',
        }, {
          type: 'line',
          name: 'Line',
          data: [1, 2, 3, 4, 5, 6, 7, 8],
        }, {
          type: 'area',
          name: 'Area',
          data: [1, 8, 2, 7, 3, 6, 4, 5],
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
      if (this.isChartClick) {
        this.chartOptions.plotOptions.series.events = {
          click(e) {
            console.log(63, 'lineClick', e);
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
