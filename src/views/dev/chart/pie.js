import { Pie } from './baseChart';

export default {
  extends: Pie,
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
