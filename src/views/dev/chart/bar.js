import { Bar } from './baseChart';

export default {
  extends: Bar,
  props: ['chartData', 'options'],
  mounted() {
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options);
  },
};
