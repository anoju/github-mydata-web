<template>
  <kb-page page-title="주문체결내역">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
        >
          <kb-tab
            title="체결내역"
          >
            <!-- 내용없음 -->
            <div class="assets_none_box" v-if="dataNone">
              <div class="none_box pd_t136">
                <i></i>
                거래 주문 중인 상품이 없습니다. <br />
                상품을 구매해보세요
                <kb-button line blue>종목 검색<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
              </div>
            </div>
            <!-- //내용없음 -->

            <!-- 2021-05-12 기획 변경에 따른 내용변경 -->
            <div class="transactional_info" v-if="!dataNone">
              <kb-button aTag not class="list_box">
                <div class="left">
                  <p class="kind">
                    <span>주식</span>
                    <span>1233242</span>
                  </p>
                  <p class="tit"> LG디스플레이 LG디스플레이</p>
                </div>
                <div class="right">
                  <p class="kind">오늘</p>
                  <p class="date">12일 / 13:20</p>
                </div>
              </kb-button>
              <kb-button aTag not class="list_box">
                <div class="left">
                  <p class="kind">
                    <span>주식</span>
                    <span>1233242</span>
                  </p>
                  <p class="tit"> LG디스플레이 LG디스플레이</p>
                </div>
                <div class="right">
                  <p class="kind">오늘</p>
                  <p class="date">12일 / 13:20</p>
                </div>
              </kb-button>
              <kb-button aTag not class="list_box">
                <div class="left">
                  <p class="kind">
                    <span>주식</span>
                    <span>1233242</span>
                  </p>
                  <p class="tit"> LG디스플레이 LG디스플레이</p>
                </div>
                <div class="right">
                  <p class="kind">오늘</p>
                  <p class="date">12일 / 13:20</p>
                </div>
              </kb-button>
              <kb-button aTag not class="list_box">
                <div class="left">
                  <p class="kind">
                    <span>주식</span>
                    <span>1233242</span>
                  </p>
                  <p class="tit"> LG디스플레이 LG디스플레이</p>
                </div>
                <div class="right">
                  <p class="kind">오늘</p>
                  <p class="date">12일 / 13:20</p>
                </div>
              </kb-button>
            </div>
            <!-- //2021-05-12 기획 변경에 따른 내용변경 -->

          </kb-tab>
          <kb-tab
            title="체결예정내역"
          >
            <!-- 2021-05-12 기획 변경에 따른 내용변경 -->
            <div class="transactional_info" v-if="!dataNone">
              <div class="day_box">
                <p class="day">04/01</p>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>1233242</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="right">
                    <p class="kind">오늘</p>
                    <!--
                      fc_blue : 구매완료
                      defult : 구매실패
                     -->
                    <p class="date fc_blue"><strong>구매완료</strong></p>
                  </div>
                </kb-button>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>1233242</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="right">
                    <p class="kind">오늘</p>
                    <!--
                      fc_blue : 구매완료
                      defult : 구매실패
                     -->
                    <p class="date"><strong>구매실패</strong></p>
                  </div>
                </kb-button>
              </div>

              <div class="day_box">
                <p class="day">03/30</p>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>1233242</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="right">
                    <p class="kind">오늘</p>
                    <!--
                      fc_blue : 구매완료
                      defult : 구매실패
                     -->
                    <p class="date fc_blue"><strong>구매완료</strong></p>
                  </div>
                </kb-button>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>1233242</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="right">
                    <p class="kind">오늘</p>
                    <!--
                      fc_blue : 구매완료
                      defult : 구매실패
                     -->
                    <p class="date"><strong>구매실패</strong></p>
                  </div>
                </kb-button>
              </div>
            </div>
            <!-- //2021-05-12 기획 변경에 따른 내용변경 -->

          </kb-tab>
        </kb-tabs>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A006',
  data() {
    return {
      dataNone: false,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
