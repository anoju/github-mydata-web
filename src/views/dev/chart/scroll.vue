<template>
  <div class="section">
    <!-- {{scrollLeft}} -->
    <br>
    <kb-button
      line
      shadow
      color="blue"
      h28
      @click="outerTrigger"
    >
      버튼 링크
    </kb-button>
    <div class="chartWrapper" id="chartWrapper">
      <div class="chartAreaWrapper">
        <canvas id="myChart" height="600" width="1200"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'scroll',
  data: () => ({
    chartData: {
      datasets: [],
      labels: [],
    },
    options: [],
    type: null,
    myChart: null,
    scrollLeft: null,
    isLoading: false,
    dataLenth: 0,
    isFirst: true,
  }),
  methods: {
    async getData() {
      console.log(37, 'getData');
      const vm = this;
      const rst = await vm.$http.request('GET', '/api/combo');
      return new Promise((res) => res(rst));
    },
    createChart(chartId) {
      const vm = this;
      const ctx = document.getElementById(chartId).getContext('2d');
      vm.options = {
        ...vm.options,
        // events: ['click'],
        onClick: (e) => {
          console.log(34, e);
        },
      };
      vm.myChart = new Chart(ctx, {
        type: vm.type,
        data: vm.chartData,
        options: vm.options,
      });
      window.myChart = vm.myChart;
      document.querySelector('.chartWrapper').scrollLeft = document.body.clientWidth;
      return new Promise((res) => res());
    },
    outerTrigger() {
      this.highLightGraph('February');
    },
    highLightGraph(pointToChange) {
      const vm = this;
      const chartIndexArray = vm.myChart.data;
      const chartIndex = chartIndexArray.labels.indexOf(pointToChange);
      // console.log(56, vm.myChart.data, vm.myChart.data.datasets[0], chartIndex);
      vm.myChart.data.datasets[0].data[chartIndex] += 1;
      vm.myChart.update();
    },
    scrollPaging() {
      const vm = this;
      const maxScrollLeft = document.querySelector('.chartWrapper').scrollWidth - document.querySelector('.chartWrapper').clientWidth;
      vm.scrollLeft = Math.round(document.querySelector('.chartWrapper').scrollLeft);
      if ((vm.scrollLeft === 0 || vm.scrollLeft === maxScrollLeft) && !vm.isLoading && !vm.isFirst) {
        vm.isLoading = true;
        vm.getData().then((rs) => {
          const { datasets, labels } = rs.data.data;
          if (vm.scrollLeft === 0) {
            vm.chartData.labels = this.$produce(Array.from(vm.chartData.labels), (draft) => {
              draft.unshift(...labels);
            });

            if (vm.chartData.labels.length > vm.dataLenth) {
              vm.chartData.datasets.forEach((e) => e.data.splice(vm.dataLenth));
              vm.chartData.labels = vm.chartData.labels.slice(0, vm.dataLenth * 2);
            }
            vm.chartData.datasets.forEach((e, idx) => e.data.unshift(...datasets[idx].data));
          } else {
            vm.chartData.labels = [...vm.chartData.labels, ...labels];
            if (vm.chartData.datasets[0].data.length > vm.dataLenth) {
              vm.chartData.datasets.forEach((e) => e.data.splice(0, vm.dataLenth));
              vm.chartData.labels = vm.chartData.labels.slice(vm.dataLenth);
            }
            vm.chartData.datasets = vm.chartData.datasets.map((e, idx) => ({ ...e, data: e.data.concat(datasets[idx].data) }));
          }

          // console.log(93, vm.chartData.labels, vm.chartData.datasets);
        }).then(() => {
          vm.myChart.update();
          document.querySelector('.chartWrapper').scrollLeft = maxScrollLeft / 2;
        }).finally(() => {
          vm.isLoading = false;
        });
      } else {
        vm.isFirst = false;
      }
    },
  },
  computed: {
  },
  mounted() {
    const vm = this;
    vm.getData().then((rst) => {
      vm.chartData = rst.data.data;
      vm.dataLenth = rst.data.data.labels.length;
      vm.options = rst.data.options;
      vm.type = rst.data.type;
      vm.createChart('myChart');
    });
    // document.querySelector('.chartWrapper').addEventListener('scroll', vm.scrollPaging);
  },
  destroyed() {
    // document.querySelector('.chartWrapper').removeEventListener('scroll', this.scrollPaging);
  },
};
</script>
<style scoped>
.chartWrapper {
    width: 90vw;
    overflow-x: scroll;
    margin: 0 auto;
}

.chartAreaWrapper {
    width: 150vw;
}

</style>
