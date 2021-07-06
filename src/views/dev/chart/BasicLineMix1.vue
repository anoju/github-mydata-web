<template>
  <div>
    <hr class="hr_line" aria-hidden="true">
    <h2 class="fz_18 fw_bold pd_y20">포트폴리오 진단</h2>
    <highcharts v-if="isInit" :options="chartOptions" :updateArgs="updateArgs" />
  </div>
</template>

<script>
export default {
  name: 'BasicLineMix1',
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
      chartOptions: {
        chart: {
          height: 228, // 공통 : 높이(기본 : 228, 큰거 : 253)  + 라벨 사이즈 (이거 체크 될까여??)
        },
        credits: {
          enabled: false,
        },
        title: false,
        xAxis: {
          tickInterval: 33,
          min: 0,
          max: 100,
          lineColor: '#eee', // 공통 : 라인색상
          gridLineColor: '#eee', // 공통 : 라인색상
          lineWidth: 1,
          gridLineWidth: 1,
          title: {
            text: '변동성(%)',
          },
          crosshair: true,
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
          tickInterval: 50,
          min: 0,
          max: 100,
          lineColor: '#eee', // 공통 : 라인색상
          gridLineColor: '#eee', // 공통 : 라인색상
          lineWidth: 1,
          title: {
            text: '기대수익률(%)',
          },
          // 공통 : y축 범례스타일
          labels: {
            enabled: false,
            style: {
              color: '#222',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
        },
        plotOptions: {
          series: {
            borderRadius: 4, // 공통 : border 둥근 효과
          },
          column: {
            pointWidth: 24, // 공통 : 바 width값 기본 : 24, 작은거 : 16
            pointPadding: 0.1,
            borderWidth: 0,
          },
        },
        series: [{
          name: '효율적 투자선',
          type: 'spline',
          data: [[10, 0], [40, 50], [100, 100]],
          enableMouseTracking: false,
          color: '#ccc',
          label: {
            style: {
              color: 'red',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
          marker: {
            enabled: false,
          },
        },
        {
          name: '내 포트폴리오',
          type: 'scatter',
          data: [[20, 30]],
          enableMouseTracking: false,
          color: 'blue',
          label: {
            style: {
              color: 'red',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
          marker: {
            radius: 8,
            symbol: 'circle',
            fillColor: '#fff',
            lineWidth: 3,
            lineColor: '#5177bc',
          },
        },
        {
          name: '모델 포트폴리오',
          type: 'scatter',
          data: [[90, 70]],
          enableMouseTracking: false,
          color: 'blue',
          label: {
            style: {
              color: 'red',
              font: 'normal 12px/1.33 "KBFGText", "Apple SD Gothic Neo", "AppleSDGothicNeo", sans-serif',
            },
          },
          marker: {
            radius: 4,
            symbol: 'circle',
            fillColor: '#ffdc00',
          },
        }],
      },
    };
  },
  computed: {
  },
  methods: {
    init() {
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
      this.chartOptions = t;
    },
  },
};
</script>
