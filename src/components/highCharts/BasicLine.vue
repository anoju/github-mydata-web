<template>
  <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" />
</template>

<script>

export default {
  name: 'BasicLine',
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
    isTodayTooltip: {
      type: Boolean,
      default: false,
    },
    avgPlotLine: {
      type: Object,
      defulat() {
        return {}; // {value: 50, align: 'right', title: '월 평균 지출', desc: '금액' }
      },
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
          type: 'spline',
          // type: 'spline',
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
        // title: {
        //   text: 'Solar Employment Growth by Sector, 2010-2016',
        // },
        // subtitle: {
        //   text: 'Source: thesolarfoundation.com',
        // },
        yAxis: {
          endOnTick: false,
          maxPadding: 0.14,
          lineColor: '#eee',
          gridLineColor: '#eee',
          title: false,
          // title: {
          //   text: 'Number of Employees',
          // },
        },
        xAxis: {
          lineColor: '#eee',
          gridLineColor: '#eee',
          crosshair: true,
          // accessibility: {
          //   rangeDescription: 'Range: 2010 to 2017',
          // },
        },
        // legend: {
        //   layout: 'vertical',
        //   align: 'right',
        //   verticalAlign: 'middle',
        // },
        tooltip: {
          backgroundColor: null,
          borderWidth: 0,
          borderRadius: 0,
          shadow: false,
          padding: 0,
          useHTML: true,
          formatter() {
            let $html = '<dl class="chart_tooltip">';
            this.points.forEach((point) => {
              $html += '<dt style="color:' + point.color + '">' + point.series.name + '</dt>';
              $html += '<dd>' + point.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</dd>';
            });
            $html += '</dl>';
            return $html;
          },
          shared: true,
        },
        legend: {
          enabled: false,
        },
        colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
            events: {
            },
          },
        },

        series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 37133, 154175],
        }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          }],
        },
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
      if (vm.isTodayTooltip) {
        vm.chartOptions.chart.events = {
          ...vm.chartOptions.chart.events,
          load() {
            const indexArray = [];
            this.series.forEach((e) => {
              indexArray.push(e.points[e.data.length - 1]);
            });
            this.tooltip.refresh(indexArray);
          },
        };
      }
      // avgPlotLine {value: 50, align: 'right', title: '월 평균 지출', desc: '금액' }
      if (!vm.lodash.isEmpty(vm.avgPlotLine)) {
        vm.chartOptions.yAxis.plotLines = [{
          value: vm.avgPlotLine.value,
          dashStyle: 'dash',
          width: 1,
          color: '#ccc',
          label: {
            align: vm.avgPlotLine.align,
            useHTML: true,
            y: -5,
            formatter() {
              return `
                  <dl>
                    <dd class="fz_12 fc_gray t_right">
                      ${vm.avgPlotLine.title}
                    </dd>
                    <dd class="fz_12 fw_bold fc_666 t_right">${vm.avgPlotLine.desc}</dd>
                  </dl>
                `;
            },
          },
        }];
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
