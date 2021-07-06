<template>
  <div>
    <BasicLineMix1 />

    <hr class="hr_line mg_b20" aria-hidden="true">

    <h2 class="fz_16 fw_bold">추가 색상 정의</h2>
    <p class="fz_14">상승 색상 : #de092f</p>
    <p class="fz_14">상승 색상(hover) : #91001a</p>
    <p class="fz_14">하락 색상 : #2859d1</p>
    <p class="fz_14">하락 색상(hover) : #002c99</p>
  </div>
</template>

<script>
import BasicLineMix1 from '@/views/dev/chart/BasicLineMix1.vue';

export default {
  mame: 'BasicDounut',
  components: {
    BasicLineMix1,
  },
};
</script>
