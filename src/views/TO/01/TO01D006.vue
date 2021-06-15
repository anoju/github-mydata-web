<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">나는 어느 요일에 <strong>지출을 많이 할까?</strong></h1>
        <div class="chart_wrap mg_t40">
          <img src="~@/assets/images/temp/chart7.png" alt="" />
        </div>
        <div class="round_txt_box mg_t32" v-scroll-animate="'zoomIn'">
          <strong>토요일에<br>지출이 가장 많아요!</strong>
        </div>
        <div class="fz_12 fc_666 t_center mg_t16">2020/04/14 ~ 2021/04/14의 분석</div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          목록보기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO01D006',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
