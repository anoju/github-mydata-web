// Hicharts
import Vue from 'vue';
import Highcharts from 'highcharts';
import highchartsVue from 'highcharts-vue';
import NoData from 'highcharts/modules/no-data-to-display';
import HighchartsMore from 'highcharts/highcharts-more';
import Venn from 'highcharts/modules/venn';
import SolidGauge from 'highcharts/modules/solid-gauge';
// name is optional
// Stock(Highcharts);
Highcharts.setOptions({
  lang: { thousandsSep: ',' },
});
NoData(Highcharts);
HighchartsMore(Highcharts);
SolidGauge(Highcharts);
Venn(Highcharts);
Vue.use(highchartsVue);
