<template>
  <div class="chart_box dounut">
    <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs"/>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);
export default {
  name: 'BasicDounut',
  components: {
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    isLegend: {
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
    centerImageType: {
      type: String,
      default: null,
    },
    centerTitle: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isInit: false,
      updateArgs: [true, true, true],
      basicOption: {},
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          // 공통 : 높이(기본 : 227) + 라벨 사이즈
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
            const { point } = this;
            return `
              <div class="chart_tooltip">
                <dl class="flex_wrap">
                  <dt class="fz_12 fw_bold fc_666">${point.name}</dt>
                  <dd class="mg_l8 fz_14 fw_bold">${point.y + '%'}</dd>
                </dl>
              </div>
            `;
          },
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            // colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
            colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
            borderWidth: 0,
            dataLabels: {
              enabled: false,
            },
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
          innerSize: '78%', // 공통 : 도넛 사이즈
          data: [{
            name: 'Chrome',
            y: 61.41,
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
      const vm = this;
      if (!vm.lodash.isEmpty(vm.options)) {
        vm.chartOptions = {
          ...vm.chartOptions,
          ...vm.options,
        };
      }
      if (vm.isChartClick) {
        vm.chartOptions.plotOptions.series.events = {
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
      if (!vm.lodash.isEmpty(vm.centerImageType)) {
        vm.chartOptions.title = {
          text: `<div class="chart_char"><p class="ico ${vm.centerImageType}"></p></div>`, // 가운데 이미지 들어가는 버전
          align: 'center',
          verticalAlign: 'middle',
          useHTML: true,
        };
      }
      if (!vm.lodash.isEmpty(vm.centerTitle)) {
        vm.chartOptions.title = {
          text: vm.centerTitle, // 가운데 이미지 들어가는 버전
          align: 'center',
          verticalAlign: 'middle',
          useHTML: true,
        };
      }
      if (vm.isLegend) {
        vm.chartOptions.legend.enabled = vm.isLegend;
      }
      return new Promise((res) => {
        res();
      });
    },
    log() {
      console.log(104);
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
