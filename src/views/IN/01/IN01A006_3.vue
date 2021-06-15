<template>
  <div class="section invest_statistics_pop">
    <kb-btn-toggle small inline class="mg_t12">
      <kb-btn-toggle-row>
        <kb-radio
          v-model="toggleVal1"
          button
          value="1"
        >
          전체업권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="2"
        >
          KB증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="3"
        >
          키움증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="4"
        >
          mini스탁
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="5"
        >
          한국투자
        </kb-radio>
      </kb-btn-toggle-row>
    </kb-btn-toggle>
    <div class="flex_wrap border_line_bottom  mg_t23 align_center">
      <p class="date_tit t_right mg_la">조회기간 : 20/10/19 ~ 20/12/12</p>
    </div>

    <div class="mg_t32">
      <dl class="flex_wrap mg_b16 fz_18 fw_bold">
        <dt class="mg_r10">주식손익</dt>
        <!--
          상승 : fc_up
          하락 : fc_down
        -->
        <dd class="mg_la fc_up">+2,000,160,000원</dd>
      </dl>
    </div>

    <kb-foldings
      type1
      not-toggle
      class="ty3"
    >
      <kb-folding>
        <template slot="title">
          <div class="accodion_header">
            <p class="title fz_16">
              <i class="ico bank mg_r8"><span style="background: skyblue;"></span></i>
              계좌명<strong class="fc_blue mg_l4">30</strong>
            </p>
            <div class="flex_wrap mg_l40 mg_t10">
              <p class="fz_12 fc_666">123-456-789 01</p>
              <p class="mg_la fz_14 fc_666">300,000,000,000원</p>
            </div>
          </div>
        </template>

        <div class="accordion_box pd_x16 pd_y20">

          <dl class="flex_wrap pd_b20 fz_16 border_line_bottom">
            <dt class="mg_r10">실현손익</dt>
            <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
          </dl>

          <div class="accordion_box_cont">
            <dl>
              <dt>국내 펀드<strong class="mg_l4 fc_blue">1</strong></dt>
              <dd>2,000,160,000원</dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>미래에셋인덱스로코리아
                레버리지2.0 증권사 투자
                신탁(주식-파생재간접형
                종류 c</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>

          <div class="accordion_box_cont">
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>해외 주식<strong class="mg_l4 fc_blue">1</strong></dt>
              <dd>2,000,160,000원</dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>네이버</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>

        </div>

        <div class="accordion_box pd_x16 pd_y20">
          <dl class="flex_wrap pd_b20 fz_16 border_line_bottom">
            <dt class="mg_r10">평가손익</dt>
            <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
          </dl>

          <div class="accordion_box_cont">
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>네이버</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>
        </div>
      </kb-folding>
      <kb-folding>
        <template slot="title">
          <div class="accodion_header">
            <p class="title fz_16">
              <i class="ico bank mg_r8"><span style="background: skyblue;"></span></i>
              계좌명<strong class="fc_blue mg_l4">30</strong>
            </p>
            <div class="flex_wrap mg_l40 mg_t10">
              <p class="fz_12 fc_666">123-456-789 01</p>
              <p class="mg_la fz_14 fc_666">300,000,000,000원</p>
            </div>
          </div>
        </template>

        <div class="accordion_box pd_x16 pd_y20">

          <dl class="flex_wrap pd_b20 fz_16 border_line_bottom">
            <dt class="mg_r10">실현손익</dt>
            <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
          </dl>

          <div class="accordion_box_cont">
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>국내 주식<strong class="mg_l4 fc_blue">1</strong></dt>
              <dd class="mg_la fc_666">2,000,160,000원</dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>네이버</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>

          <div class="accordion_box_cont">
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>해외 주식<strong class="mg_l4 fc_blue">1</strong></dt>
              <dd class="mg_la fc_666">2,000,160,000원</dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>네이버</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>

        </div>

        <div class="accordion_box pd_x16 pd_y20">
          <dl class="flex_wrap pd_b20 fz_16 border_line_bottom">
            <dt class="mg_r10">평가손익</dt>
            <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
          </dl>

          <div class="accordion_box_cont">
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>네이버</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>아마존</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
            <dl class="flex_wrap mg_t12 fz_14">
              <dt>삼성전자</dt>
              <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
            </dl>
          </div>
        </div>
      </kb-folding>
    </kb-foldings>

  </div>
</template>
<script>
export default {
  name: 'IN01A006_3',
  data() {
    return {
      toggleVal1: '1',
    };
  },
  methods: {
  },
};
</script>
