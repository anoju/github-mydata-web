<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">최근 1년간 내가 증권계좌에 <strong>입금/출금을 얼마나 했을까?</strong></h1>
        <div class="flex_bar mg_t40">
          <div style="background-color:#3e61ba;width:65%;"></div>
          <div style="background-color:#74cacc;width:35%;"></div>
        </div>
        <div class="chart_legend full mg_t24">
          <ul>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#3e61ba;"></i>
                <strong>입금</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#74cacc;"></i>
                <strong>출금</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
          </ul>
        </div>
        <div class="round_txt_box mg_t32" v-scroll-animate="'zoomIn'">
          <strong>출금보다 입금이 더 많으셨어요.</strong>
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
  name: 'TO01D009',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
