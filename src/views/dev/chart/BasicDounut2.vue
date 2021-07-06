<template>
  <div class="chart_box dounut">
    <hr class="hr_line" aria-hidden="true">
    <h2 class="fz_18 fw_bold pd_y20">가운데 이미지</h2>
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
    isChartClick: {
      type: Boolean,
      default: false,
    },
    isBgClick: {
      type: Boolean,
      default: false,
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
        title: {
          /* 이미지별 클래스 정의
          type1 : 포스아거 (공격투자형)
          type2 : 루나키키 (적극투자형)
          type3 : 멜랑콜리 (위험중립형)
          type4 : 심쿵비비 (안전추구형)
          type5 : 롤로라무 (안전형)
           */
          text: '<div class="chart_char"><p class="ico type2"></p></div>', // 가운데 이미지 들어가는 버전
          align: 'center',
          verticalAlign: 'middle',
          useHTML: true,
        },
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
                  <dd class="mg_l8  fz_14 fw_bold">${point.y * 100 + '%'}</dd>
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
            size: 182,
            allowPointSelect: true,
            cursor: 'pointer',
            // 공통 : 기본 색상 정의
            colors: ['#3e61ba', '#91a5e9', '#81bdf2', '#3bae6c', '#b7ebcd', '#74cacc', '#7040b1', '#c79fe7', '#c76ee6'],
            borderWidth: 0,
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
            events: {
              click(e) {
                console.log(63, 'pieClick', e);
              },
            },
          },
        },
        legend: {
          enabled: false,
          style: {
            color: '#666',
            font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
          },
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          innerSize: '78%', // 공통 : 도넛 사이즈
          data: [{
            name: '해외펀드',
            y: 61.41,
            selected: true,
          }, {
            name: '국내주식',
            y: 11.84,
          }, {
            name: '해외주식',
            y: 10.85,
          }, {
            name: '국내채권',
            y: 4.67,
          }, {
            name: '해외채권',
            y: 4.18,
          }, {
            name: '국내펀드',
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
      this.chartOptions = t;
    },
  },
};
</script>
