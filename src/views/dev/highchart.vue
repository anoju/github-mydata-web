<template>
  <div class="section">

    <select v-model="chartType">
      <option value="line">라인</option>
      <option value="bar">바</option>
      <option value="combo">콤보</option>
      <option value="polar">폴라</option>
      <option value="pie">원형</option>
      <option value="dounut">도넛</option>
      <option value="scroll">스크롤</option>
      <option value="gauge">계량</option>
      <option value="ven">벤다이어그램</option>
      <option value="bubble">버블</option>
      <option value="lineMix">믹스버전</option>
    </select>
    <BasicLine v-if="chartType==='line'" isTodayTooltip/>
    <BasicBar v-if="chartType==='bar'" isTodayTooltip/>
    <BasicCombo v-if="chartType==='combo'" />
    <BasicPolar v-if="chartType==='polar'"/>
    <BasicPie v-if="chartType==='pie'" />
    <BasicDounut v-if="chartType==='dounut'"/>
    <BasicScroll v-if="chartType==='scroll'"  isTodayTooltip/>
    <BasicSolideGauge v-if="chartType==='gauge'"/>
    <BasicVen v-if="chartType==='ven'"/>
    <BasicBubble v-if="chartType==='bubble'"/>
    <BasicLineMix v-if="chartType==='lineMix'" />

  </div>
</template>

<script>
import BasicLine from '@/components/highCharts/BasicLine.vue';
import BasicBar from '@/views/dev/chart/BasicBarGroup.vue'; // 퍼블에서 변경
import BasicCombo from '@/components/highCharts/BasicCombo.vue';
import BasicPolar from '@/components/highCharts/BasicPolar.vue';
import BasicPie from '@/components/highCharts/BasicPie.vue';
import BasicDounut from '@/views/dev/chart/BasicDounutGroup.vue'; // 퍼블에서 변경
import BasicScroll from '@/components/highCharts/BasicScroll.vue';
import BasicSolideGauge from '@/components/highCharts/BasicSolideGauge.vue';
import BasicVen from '@/components/highCharts/BasicVen.vue';
import BasicBubble from '@/components/highCharts/BasicBubble.vue';
import BasicLineMix from '@/views/dev/chart/BasicLineMixGroup.vue';

export default {
  name: 'highchart',
  components: {
    // Basic,
    BasicLine,
    BasicBar,
    BasicCombo,
    BasicPolar,
    BasicPie,
    BasicDounut,
    BasicScroll,
    BasicSolideGauge,
    BasicVen,
    BasicBubble,
    BasicLineMix,
  },
  data() {
    return {
      chartType: 'line',
    };
  },
  computed: {
  },
  methods: {
    setCurrentIdx(idx) {
      if (idx === 0) {
        this.chartType = 'ven';
      } else {
        this.chartType = 'basicLine';
      }
    },
  },
  mounted() {

  },
  watch: {
  },
};
</script>
