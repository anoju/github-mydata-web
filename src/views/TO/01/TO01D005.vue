<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">최근 1년간 내가 사용한<strong>신용카드</strong>와 <strong>체크카드의 비중</strong>은?</h1>
        <div class="chart_wrap mg_t40">
          <img src="~@/assets/images/temp/chart6.png" alt="" />
        </div>
        <div class="round_txt_box mg_t32" v-scroll-animate="'zoomIn'">
          <strong>신용카드를<br>더 많이 사용하고 있어요!</strong>
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
  name: 'TO01D005',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
