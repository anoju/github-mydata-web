<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">내가 최근 1년 동안 거래한 주식 종목 중 <strong>매도 후 더 많이 상승한 종목은</strong> 몇 개나 될까?</h1>
        <div class="t_center mg_t70 mg_b60">
          <strong class="fz_40">3</strong>
          <div class="mg_t14 fc_666">매도 후 상승 종목</div>
        </div>
        <div class="round_txt_box_list mg_t32" v-scroll-animate="'zoomIn'">
          <div class="round_txt_box">
            <div class="th">1위</div>
            <div class="td">
              <strong>국민은행</strong>
            </div>
          </div>
          <div class="round_txt_box">
            <div class="th">2위</div>
            <div class="td">
              <strong>국민은행</strong>
            </div>
          </div>
          <div class="round_txt_box">
            <div class="th">3위</div>
            <div class="td">
              <strong>국민은행</strong>
            </div>
          </div>
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
  name: 'TO01D007',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
