<template>
  <div class="section">
    <div class="in_chart_item mg_t40">
      <div class="tit">
        <div class="name"><strong class="line">공격투자형</strong></div>
        <div class="fz_16">투자원금 손실을 적극 감수하고,국/내외 다양한 고수익 상품에 투자하고자 하는 성향입니다.</div>
      </div>
      <div class="summary">따라서, 당사 금융투자상품별 위험도 분류 기준상 초고위험에 해당하는 상품을 권해드립니다.</div>
      <div class="chart_wrap">
        <div class="character type1"></div>
        <div class="chart">
          <img src="@/assets/images/temp/chart_donut1.png" alt="">
        </div>
      </div>
      <div class="portfolio_wrap">
        <!-- <div class="t_right">
          <kb-button v-if="openAll" not class="fz_12 fc_666" @click="OpenAllEvt">전체접기</kb-button>
          <kb-button v-else not class="fz_12 fc_666" @click="OpenAllEvt">전체펼치기</kb-button>
        </div> -->
        <kb-foldings type1 not-toggle class="chart_list">
          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#3e61ba"></i>
                </div>
                <div>
                  <strong class="type">현금</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#91a5e9"></i>
                </div>
                <div>
                  <strong class="type">국내주식</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#81bdf2"></i>
                </div>
                <div>
                  <strong class="type">해외주식</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#3bae6c"></i>
                </div>
                <div>
                  <strong class="type">국내채권</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#b7ebcd"></i>
                </div>
                <div>
                  <strong class="type">해외채권</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#74cacc"></i>
                </div>
                <div>
                  <strong class="type">상품&amp;특별자산</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#7040b1"></i>
                </div>
                <div>
                  <strong class="type">부동산</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>

          <kb-folding :active.sync="openAll">
            <template slot="title">
              <div class="chart_head">
                <div>
                  <i class="ico" style="background-color:#c79fe7"></i>
                </div>
                <div>
                  <strong class="type">파생결합상품</strong>
                  <strong class="cut">10</strong>
                </div>
                <div class="pre">67%</div>
              </div>
            </template>

            <div class="accordion_box">
              <div class="accordion_box_in">
                <ul class="txt_list">
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                  <li class="dot">
                    <kb-button not>마이다스신성장기업포커스증권투자신탁주식블라 마이다스신성장기업포커스증권투자신탁주식블라</kb-button>
                  </li>
                </ul>
                <kb-button-wrap>
                  <kb-button
                    class="more no_bg"
                  >
                    더보기
                  </kb-button>
                </kb-button-wrap>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IN12A001',
  data() {
    return {
      openAll: false,
    };
  },
  methods: {
    OpenAllEvt() {
      if (this.openAll === null) {
        this.openAll = true;
      } else {
        this.openAll = !this.openAll;
      }
    },
  },
};
</script>
