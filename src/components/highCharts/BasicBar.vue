<template>
  <div>
    <highcharts
      v-if="isInit"
      :options="chartOptions"
      :updateArgs="updateArgs"
    />
  </div>
</template>

<script>
export default {
  name: 'BasicBar',
  components: {},
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
    isToolTipType1: {
      type: Boolean,
      default: false,
    },
    isToolTipType2: {
      type: Boolean,
      default: false,
    },
    isSmallBarWidth: {
      type: Boolean,
      default: false,
    },
    isScroll: {
      type: Boolean,
      default: false,
    },
    avgPlotLine: {
      type: Object,
      defulat() {
        return {}; // {value: 50, align: 'right', title: '월 평균 지출', desc: '금액' }
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

      // 1번째막대그래프
      chartOptions: {
        chart: {
          type: 'column',
          events: {
            load() {
              this.update({
                chart: {
                  height: this.chartHeight + this.legend.legendHeight,
                },
              });
            },
          },
          height: 228, // 공통 : 높이(기본 : 228, 큰거 : 253)  + 라벨 사이즈 (이거 체크 될까여??)
        },
        credits: {
          enabled: false,
        },
        title: false,
        xAxis: {
          lineColor: '#eee', // 공통 : 라인색상
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
          // 공통 : x축 범례스타일
          labels: {
            enabled: true,
            style: {
              color: '#222',
              font:
                'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        yAxis: {
          lineColor: '#eee', // 공통 : 라인색상
          gridLineColor: '#eee', // 공통 : 라인색상
          lineWidth: 0,
          title: false,
          // 공통 : y축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font:
                'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        // 공통 : 기본 색상 정의
        colors: [
          '#3e61ba',
          '#91a5e9',
          '#81bdf2',
          '#3bae6c',
          '#b7ebcd',
          '#74cacc',
          '#7040b1',
          '#c79fe7',
          '#c76ee6',
        ],
        plotOptions: {
          series: {
            borderRadius: 4,
          },
          column: {
            pointWidth: 24,
            pointPadding: 0.1,
            borderWidth: 0,
            events: {},
          },
        },
        legend: {
          enabled: false,
          itemStyle: {
            color: '#222',
            font:
              'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
          },
        },
        // 공통 : 툴팁 타입
        tooltip: {
          backgroundColor: null,
          borderWidth: 0,
          borderRadius: 0,
          shadow: false,
          padding: 0,
          useHTML: true,
          outside: false,
          formatter() {
            let $html = '<div class="chart_tooltip">';
            $html += '<dl class="flex_wrap">';
            $html
              += '<dt class="fz_12 fw_bold fc_666">'
              + this.point.series.name
              + '</dt>';
            $html
              += '<dd class="fz_14 fw_bold">'
              + this.point.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              + '원</dd>';
            $html += '</dl>';
            $html += '</div>';
            return $html;
          },
        },
        series: [
          {
            name: '1월',
            data: [10, 50, 100],
            // 공통 : hover시 색상 변경
            states: {
              hover: {
                color: '#3b3f47',
              },
            },
          },
          {
            name: '2월',
            data: [10, 25, 75],
            states: {
              hover: {
                color: '#3b3f47',
              },
            },
          },
        ],
      },
    };
  },
  computed: {},
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
      if (!vm.isBasicUnit) {
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
      // 공통 디자인 적용
      if (vm.isBigChart) {
        vm.chartOptions.chart.height = 253;
      }
      if (vm.isToolTipType1) {
        vm.chartOptions.tooltip = {
          ...vm.chartOptions.tooltip,
          formatter() {
            let $html = '<div class="chart_tooltip">';
            $html += '<p class="fz_14">' + this.point.y + '%</p>';
            $html += '</div>';
            return $html;
          },
        };
      }
      if (vm.isToolTipType2) {
        vm.chartOptions.tooltip = {
          ...vm.chartOptions.tooltip,
          formatter() {
            return `<dl class="chart_tooltip">
                <dt style="color:${this.series.color}">${
  this.series.name
}</dt>              
                <dd>
                  ${this.point.y + '점'}
                  <!-- 100점 : type1, 80~90점 : type2, 60~70점 : type3, 50~60점 : type4, 50점 미만 : type5-->
                  <i class="ico type1"></i>
                </dd>
              </dl>`;
          },
        };
      }
      if (vm.isSmallBarWidth) {
        vm.chartOptions.plotOptions.column.pointWidth = 16;
      }
      if (vm.isScroll) {
        vm.chartOptions.chart = {
          ...vm.chartOptions.chart,
          scrollablePlotArea: {
            minWidth: 0,
            opacity: 1,
          },
        };
        vm.chartOptions.xAxis = {
          ...vm.chartOptions.xAxis,
          scrollbar: {
            enabled: true,
          },
        };
      }
      // avgPlotLine {value: 50, align: 'right', title: '월 평균 지출', desc: '금액' }
      if (!vm.lodash.isEmpty(vm.avgPlotLine)) {
        vm.chartOptions.yAxis.plotLines = [
          {
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
          },
        ];
      }
      return new Promise((res) => {
        res();
      });
    },
    maxWidth() {
      let length = 0;
      this.chartOptions.series.forEach((el) => {
        if (length < el.data.length) {
          length = el.data.length;
        }
      });

      this.chartOptions.chart.scrollablePlotArea.minWidth = length * 60;
    },
  },
  mounted() {
    if (this.isScroll) {
      this.maxWidth();
    }
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
