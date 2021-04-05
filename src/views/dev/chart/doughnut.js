import { Doughnut } from './baseChart';

export default {
  extends: Doughnut,
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
