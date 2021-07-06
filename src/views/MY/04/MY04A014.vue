<template>
  <kb-page page-title="주문체결내역">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
          v-model="tabIdx"
        >
          <kb-tab
            title="체결내역"
            to="/MY/04/MY04A016"
          >
            <!-- 내용없음 -->
            <div class="assets_none_box" v-if="dataNone">
              <div class="none_box pd_t136">
                <i></i>
                체결 내역이 없습니다.
                <kb-button line blue>금융상품 검색<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
              </div>
            </div>
            <!-- //내용없음 -->

            <!-- 2021-06-17 기획 변경에 따른 내용변경 -->
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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액(단가/수량)</dt>
                      <dd>
                        346,500,000원<br />
                        (100.000/1,000)
                      </dd>
                    </dl>
                  </div>
                </kb-button>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>매우높은위험</span>
                      <span>원금부분지급형</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                  </div>
                </kb-button>
              </div>
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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액(단가/수량)</dt>
                      <dd>
                        346,500,000원<br />
                        (100.000/1,000)
                      </dd>
                    </dl>
                  </div>
                </kb-button>
                <kb-button aTag not class="list_box">
                  <div class="left">
                    <p class="kind">
                      <span>주식</span>
                      <span>매우높은위험</span>
                      <span>원금부분지급형</span>
                    </p>
                    <p class="tit"> LG디스플레이 LG디스플레이</p>
                  </div>
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                  </div>
                </kb-button>
              </div>

            </div>
            <!-- //2021-06-17 기획 변경에 따른 내용변경 -->

          </kb-tab>
          <kb-tab
            title="체결예정내역"
            to="/MY/04/MY04A014"
          >

            <!-- 내용없음 -->
            <div class="assets_none_box" v-if="dataNone">
              <div class="none_box pd_t136">
                <i></i>
                체결 내역이 없습니다.
                <kb-button line blue>금융상품 검색<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
              </div>
            </div>
            <!-- //내용없음 -->

            <!-- 2021-06-17 기획 변경에 따른 내용변경 -->
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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                    <dl>
                      <dt>결제예정일</dt>
                      <dd>2021/06/21</dd>
                    </dl>
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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                    <dl>
                      <dt>결제예정일</dt>
                      <dd>2021/06/21</dd>
                    </dl>
                  </div>
                </kb-button>
              </div>

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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                    <dl>
                      <dt>결제예정일</dt>
                      <dd>2021/06/21</dd>
                    </dl>
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
                  <div class="box">
                    <dl>
                      <dt>계좌번호</dt>
                      <dd>123-123-123-01</dd>
                    </dl>
                    <dl>
                      <dt>체결금액</dt>
                      <dd>
                        346,500,000원
                      </dd>
                    </dl>
                    <dl>
                      <dt>결제예정일</dt>
                      <dd>2021/06/21</dd>
                    </dl>
                  </div>
                </kb-button>
              </div>

            </div>
            <!-- //2021-06-17 기획 변경에 따른 내용변경 -->

          </kb-tab>
        </kb-tabs>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A016',
  data() {
    return {
      tabIdx: 0,
      dataNone: false,
    };
  },
  watch: {
    $route(to) {
      if (to.path.indexOf('MY04A016') > 0) this.tabIdx = 0;
      else if (to.path.indexOf('MY04A014') > 0) this.tabIdx = 1;
    },
  },
  mounted() {
    if (this.$route.path.indexOf('MY04A014') > 0) this.tabIdx = 1;
  },
  methods: {
  },
};
</script>
