<template>
  <kb-page page-title="거래내역">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
        >
          <kb-tab
            title="주문 내역"
            active
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

            <dl class="transactional_info" v-if="!dataNone">
              <dt class="header">
                <p class="caption">종목</p>
                <p class="caption day">자동구매일</p>
                <p class="caption money">신청가격</p>
              </dt>

              <dd class="cont_box">
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <li class="day">12일</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>

              <dd class="cont_box">
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <li class="day">12일</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>

              <dd class="cont_box">
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <li class="day">12일</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>

              <dd class="cont_box">
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <li class="day">12일</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>

              <dd class="cont_box">
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <li class="day">12일</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>
            </dl>

          </kb-tab>
          <kb-tab
            title="완료 내역"
          >
            <dl class="transactional_info" v-if="!dataNone">
              <dt class="header">
                <p class="caption">종목</p>
                <p class="caption result">결과</p>
                <p class="caption money">신청가격</p>
              </dt>

              <!-- 하루 -->
              <dd class="cont_box type2">
                <p class="date">10/19</p>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result success">구매완료</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result fail">구매실패</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result success">구매완료</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>
              <!-- //하루 -->

              <!-- 하루 -->
              <dd class="cont_box type2">
                <p class="date">10/18</p>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result success">구매완료</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result fail">구매실패</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
                <kb-button aTag not>
                  <ol class="view">
                    <li class="name">
                      <span>123456</span>
                      삼성전자
                    </li>
                    <!--
                      구매완료 : success
                      구매실패 : fail
                    -->
                    <li class="result success">구매완료</li>
                    <li class="money">9,000,000,000원</li>
                  </ol>
                </kb-button>
              </dd>
              <!-- //하루 -->

            </dl>

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
