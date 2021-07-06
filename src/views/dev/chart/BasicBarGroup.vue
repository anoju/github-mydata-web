<template>
  <div>
    <BasicBar1 />
    <BasicBar2 />
    <BasicBar3 />
    <BasicBar4 />
    <BasicBar5 />

    <hr class="hr_line mg_b20" aria-hidden="true">

    <h2 class="fz_16 fw_bold">추가 색상 정의</h2>
    <p class="fz_14">상승 색상 : #de092f</p>
    <p class="fz_14">상승 색상(hover) : #91001a</p>
    <p class="fz_14">하락 색상 : #2859d1</p>
    <p class="fz_14">하락 색상(hover) : #002c99</p>
  </div>
</template>

<script>
import BasicBar1 from '@/views/dev/chart/BasicBar1.vue';
import BasicBar2 from '@/views/dev/chart/BasicBar2.vue';
import BasicBar3 from '@/views/dev/chart/BasicBar3.vue';
import BasicBar4 from '@/views/dev/chart/BasicBar4.vue';
import BasicBar5 from '@/views/dev/chart/BasicBar5.vue';

export default {
  mame: 'basicbar',
  components: {
    BasicBar1,
    BasicBar2,
    BasicBar3,
    BasicBar4,
    BasicBar5,
  },
};
</script>
