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
      <kb-select
        v-model="selectVal1"
        :options="selectOpt1"
        inline
      />
      <p class="date_tit t_right mg_la">조회기간 : 20/10/19 ~ 20/12/12</p>
    </div>

    <template v-if="selectVal1 === '1'">
      <div class="mg_t32">
        <dl class="flex_wrap mg_b16 fz_18 fw_bold">
          <dt class="mg_r10">입금-출금</dt>
          <dd class="mg_la">2,000,160,000원</dd>
        </dl>
        <dl class="flex_wrap mg_t8 fz_14">
          <dt class="mg_r10 fc_666">입금총액</dt>
          <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
        </dl>
        <dl class="flex_wrap mg_t8 fz_14">
          <dt class="mg_r10 fc_666">출금총액</dt>
          <dd class="mg_la"><strong>2,000,160,000원</strong></dd>
        </dl>
      </div>
    </template>

    <!-- 입금만보기 -->
    <template v-if="selectVal1 === '2'">
      <div class="mg_t32">
        <dl class="flex_wrap mg_b16 fz_18 fw_bold">
          <dt class="mg_r10">입금총액</dt>
          <dd>2,000,160,000원</dd>
        </dl>
      </div>
    </template>

    <!-- 출금만만보기 -->
    <template v-if="selectVal1 === '3'">
      <div class="mg_t32">
        <dl class="flex_wrap mg_b16 fz_18 fw_bold">
          <dt class="mg_r10">출금총액</dt>
          <dd>2,000,160,000원</dd>
        </dl>
      </div>
    </template>

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
          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/19</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
          </div>

          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/18</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
          </div>

          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/17</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
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
          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/19</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
          </div>

          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/18</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
          </div>

          <div class="accordion_box_cont">
            <p class="fz_12 fc_666">2020/10/17</p>
            <div class="mg_t16">
              <dl>
                <dt>입금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
              <dl>
                <dt>출금총액</dt>
                <dd><strong>2,000,160,000원</strong></dd>
              </dl>
            </div>
          </div>
        </div>
      </kb-folding>
    </kb-foldings>

  </div>
</template>
<script>
export default {
  name: 'IN01A006',
  data() {
    return {
      toggleVal1: '1',

      selectVal1: '1',
      selectOpt1: [
        { value: '1', text: '전체보기' },
        { value: '2', text: '입금만 보기' },
        { value: '3', text: '출금만 보기' },
      ],
    };
  },
  methods: {
  },
};
</script>
