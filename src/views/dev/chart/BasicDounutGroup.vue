<template>
  <div>
    <BasicDounut1 />
    <BasicDounut2 />
    <BasicDounut3 />
    <BasicDounut4 />

    <hr class="hr_line mg_b20" aria-hidden="true">

    <h2 class="fz_16 fw_bold">추가 색상 정의</h2>
    <p class="fz_14">상승 색상 : #de092f</p>
    <p class="fz_14">상승 색상(hover) : #91001a</p>
    <p class="fz_14">하락 색상 : #2859d1</p>
    <p class="fz_14">하락 색상(hover) : #002c99</p>
  </div>
</template>

<script>
import BasicDounut1 from '@/views/dev/chart/BasicDounut1.vue';
import BasicDounut2 from '@/views/dev/chart/BasicDounut2.vue';
import BasicDounut3 from '@/views/dev/chart/BasicDounut3.vue';
import BasicDounut4 from '@/views/dev/chart/BasicDounut4.vue';

export default {
  mame: 'BasicDounut',
  components: {
    BasicDounut1,
    BasicDounut2,
    BasicDounut3,
    BasicDounut4,
  },
};
</script>
