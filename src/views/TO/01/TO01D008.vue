<template>
  <kb-page page-title="내 자산 Answer">
    <kb-page-body>
      <div class="my_qna_answer">
        <h1 class="tit">내가 가진 모든 증권계좌에 대한 <strong>총 평가금액은?</strong></h1>
        <div class="flex_bar mg_t40">
          <div style="background-color:#3e61ba;width:50%;"></div>
          <div style="background-color:#74cacc;width:30%;"></div>
          <div style="background-color:#b7ebcd;width:10%;"></div>
          <div style="background-color:#81bdf2;width:10%;"></div>
        </div>
        <div class="chart_legend full mg_t24">
          <ul>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#3e61ba;"></i>
                <strong class="fc_blue mg_r6">1위</strong>
                <strong>주식</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#74cacc;"></i>
                <strong class="fc_blue mg_r6">2위</strong>
                <strong>펀드</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#b7ebcd;"></i>
                <strong class="fc_blue mg_r6">3위</strong>
                <strong>wrap</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
            <li>
              <div class="th">
                <i class="dot" style="background-color:#81bdf2;"></i>
                <strong class="fc_blue mg_r6">4위</strong>
                <strong>기타</strong>
              </div>
              <div class="td">999,999,999,999원</div>
            </li>
          </ul>
        </div>
        <div class="round_txt_box mg_t32" v-scroll-animate="'zoomIn'">
          <strong>999,999,999,999원</strong>
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
  name: 'TO01D008',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
