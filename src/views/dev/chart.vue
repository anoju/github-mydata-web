/* eslint-disable import/named */
<template>
  <div>
    <select v-model="chartType">
      <option value="bar">막대</option>
      <option value="doughnut">도넛</option>
      <option value="line">선</option>
      <option value="pie">원</option>
      <option value="barline">혼합</option>
      <option value="bar2">다중막대</option>
      <option value="tooltip">툴팁</option>
      <option value="scroll">Scroll</option>
    </select>
    <div v-if="this.chartType === 'bar'">
      <bar-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'doughnut'">
      <doughnut-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'line'">
      <line-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'pie'">
      <pie-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'barline'">
      <bar-line-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'bar2'">
      <bar2-chart :chartData="this.chartData" :options="this.options"/>
    </div>
    <div v-else-if="this.chartType === 'tooltip'">
      <tooltip-chart :chartData="this.chartData" :options="this.options"/>
    </div>

    <div v-else-if="this.chartType === 'scroll'">
      <div class="chartWrapper">
        <div class="chartAreaWrapper" style="max-height:800px">
          <bar-scroll-chart :chartData="this.chartData" :options="this.options"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import BarChart from './chart/bar';
// eslint-disable-next-line import/no-duplicates
import Bar2Chart from './chart/bar';
// eslint-disable-next-line import/no-duplicates
import BarLineChart from './chart/bar';
import DoughnutChart from './chart/doughnut';
import LineChart from './chart/line';
import PieChart from './chart/pie';
// eslint-disable-next-line import/no-duplicates
import BarScrollChart from './chart/bar';
// eslint-disable-next-line import/no-duplicates
import TooltipChart from './chart/bar';

export default {
  components: {
    BarChart,
    Bar2Chart,
    BarLineChart,
    DoughnutChart,
    LineChart,
    PieChart,
    BarScrollChart,
    TooltipChart,
  },
  data() {
    return {
      chartType: '',
      chartData: {
      },
      options: {
      },
    };
  },
  methods: {
    getPointColor(chart) {
      console.log(chart);
      let rtnColor = '';
      if (chart.dataset.data[chart.dataIndex] === 10) {
        rtnColor = '#FF0000';
      } else {
        rtnColor = '#000000';
      }
      return rtnColor;
    },
  },
  mounted() {
  },
  watch: {
    chartType(newVal) {
      if (newVal === 'bar') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          datasets: [{
            label: 'Dataset 1',
            data: [
              10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
            ],
            backgroundColor: '#008B8B',
          }, {
            label: 'Dataset 2',
            data: [
              15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125,
            ],
            backgroundColor: '#9ACD32',
          }],
        };
        this.options = {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        };
      } else if (newVal === 'doughnut') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Dataset 1',
            data: [
              10, 20, 30, 40, 50, 60,
            ],
            backgroundColor: [
              '#FF0000',
              '#FF8C00',
              '#FFFF00',
              '#008000',
              '#0000FF',
              '#800080',
            ],
          }],
        };
        this.options = {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
          tooltips: {
            enabled: false,
            mode: 'index',
            position: 'nearest',
            custom(tooltip) {
              let tooltipEl = document.getElementById('chartjs-tooltip');

              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.innerHTML = '<table></table>';
                // eslint-disable-next-line no-underscore-dangle
                this._chart.canvas.parentNode.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              // eslint-disable-next-line no-undef
              if (tooltip.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove('above', 'below', 'no-transform');
              // eslint-disable-next-line no-undef
              if (tooltip.yAlign) {
                // eslint-disable-next-line no-undef
                tooltipEl.classList.add(tooltip.yAlign);
              } else {
                tooltipEl.classList.add('no-transform');
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              // eslint-disable-next-line no-undef
              if (tooltip.body) {
                // eslint-disable-next-line no-undef
                const titleLines = tooltip.title || [];
                // eslint-disable-next-line no-undef
                const bodyLines = tooltip.body.map(getBody);

                let innerHtml = '<thead>';

                titleLines.forEach((title) => {
                  innerHtml += '<tr><th>' + title + '</th></tr>';
                });
                innerHtml += '</thead><tbody>';

                bodyLines.forEach((body, i) => {
                  // eslint-disable-next-line no-undef
                  const colors = tooltip.labelColors[i];
                  let style = 'background:' + colors.backgroundColor;
                  style += '; border-color:' + colors.borderColor;
                  style += '; border-width: 2px';
                  const span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                  innerHtml += '<tr><td>' + span + body + '</td></tr>';
                });
                innerHtml += '</tbody>';

                const tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
              }
              // eslint-disable-next-line no-underscore-dangle
              const positionY = this._chart.canvas.offsetTop;
              // eslint-disable-next-line no-underscore-dangle
              const positionX = this._chart.canvas.offsetLeft;

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              // eslint-disable-next-line no-undef
              tooltipEl.style.left = positionX + tooltip.caretX + 'px';
              // eslint-disable-next-line no-undef
              tooltipEl.style.top = positionY + tooltip.caretY + 'px';
            },
          },
        };
      } else if (newVal === 'line') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Dataset 1',
            data: [
              10, 20, 40, 80, 160, 320,
            ],
            fill: false,
            backgroundColor: this.getPointColor,
            pointRadius: 5,
            pointHoverRadius: 15,
            showLine: false,
          }],
        };
        this.options = {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        };
      } else if (newVal === 'pie') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Dataset 1',
            data: [
              10, 20, 30, 40, 50, 60,
            ],
            backgroundColor: [
              '#FF0000',
              '#FF8C00',
              '#FFFF00',
              '#008000',
              '#0000FF',
              '#800080',
            ],
          }],
        };
        this.options = {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        };
      } else if (newVal === 'barline') {
        this.chartData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            type: 'bar',
            label: 'Dataset 1',
            borderWidth: 2,
            fill: false,
            data: [
              10, 20, 30, 40, 50, 60,
            ],
            backgroundColor: '#FF0000',

          }, {
            type: 'bar',
            label: 'Dataset 2',
            data: [
              15, 25, 35, 45, 55, 65,
            ],
            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: '#FF8C00',

          }, {
            type: 'line',
            label: 'Dataset 3',
            data: [
              30, 40, 50, 60, 70, 80,
            ],
            pointRadius: 10,
            pointHoverRadius: 15,
            showLine: false,
            fill: false,
            backgroundColor: '#FFFF00',
          }],
        };
        this.options = {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Combo Bar Line Chart',
          },
          tooltips: {
            mode: 'index',
            intersect: true,
          },
        };
      } else if (newVal === 'bar2') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Dataset 1',
            yAxisID: 'y-axis-1',
            data: [
              10, 20, 30, 40, 50, 60,
            ],
            backgroundColor: '#008B8B',
          }, {
            label: 'Dataset 2',
            yAxisID: 'y-axis-2',
            data: [
              15, 25, 35, 45, 55, 65,
            ],
            backgroundColor: '#9ACD32',
          }],

        };
        this.options = {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Multi Axis',
          },
          tooltips: {
            mode: 'index',
            intersect: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
              },
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }, {
              ticks: {
                min: 0,
                max: 100,
                callback(value) {
                  return '$' + value;
                },

              },
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnChartArea: false,
              },
            }],
          },
        };
      } else if (newVal === 'scroll') {
        this.chartData = {
          labels: ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Dataset 1',
            yAxisID: 'y-axis-1',
            data: [
              10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
            ],
          }, {
            label: 'Dataset 2',
            yAxisID: 'y-axis-2',
            data: [
              15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125,
            ],
          }],

        };
        this.options = {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Multi Axis',
          },
          tooltips: {
            mode: 'index',
            intersect: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
              },
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }, {
              ticks: {
                min: 0,
                max: 100,
                callback(value) {
                  return '$' + value;
                },

              },
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnChartArea: false,
              },
            }],
          },
        };
      }
    },
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
    max-width: 800px;
    max-height: 800px;
}

</style>
