<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="util_wrap result">
        <div class="result_wrap">
          <h2><i class="ico_check"></i>거래신청 결과입니다.</h2>
          <p class="sub_text">삼성전자 외 7건</p>
          <dl class="result_list type3 bt_none pd_t0">
            <dt>종목</dt>
            <dd>
              <kb-button link class="fc_222">
                12324 삼성전자<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </dd>
            <dt>주문 가격 옵션</dt>
            <dd>전일종가</dd>
            <dt>총 주문 금액</dt>
            <dd>300,000원</dd>
            <dt>주문 수량</dt>
            <dd>3주</dd>
            <dt>자동 구매일</dt>
            <dd>06일</dd>
            <dt>지정 수익률</dt>
            <dd>미설정</dd>
          </dl>
          <dl class="result_list type3">
            <dt>종목</dt>
            <dd>
              <kb-button link class="fc_222">
                12324 삼성전자<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </dd>
            <dt>주문 가격 옵션</dt>
            <dd>전일종가</dd>
            <dt>총 주문 금액</dt>
            <dd>300,000원</dd>
            <dt>주문 수량</dt>
            <dd>3주</dd>
            <dt>자동 구매일</dt>
            <dd>06일</dd>
            <dt>지정 수익률</dt>
            <dd>매입 평균가  +5% / -25%</dd>
          </dl>
          <dl class="result_list">
            <dt>총 주문 금액</dt>
            <dd class="fw_bold fc_222">300,000원</dd>
          </dl>
        </div>
      </div>

      <kb-foldings
        not
        class="accordion_dl section"
      >
        <kb-folding class="pd_b25" title="적립식 거래">
          <ul class="txt_list">
            <li class="dot">적립식 거래는 최소 3개월 이상, 매 1개월 단위로 지정하신 일자에 은행의 적금처럼 매월 일정액의 상품을 매수하는 거래입니다.</li>
            <li class="dot">시작년월이 당월인 경우 서비스 개시일은 다음 영업일이 되며, 당월이 아닌 경우에는 신청월 초일이 서비스 개시일이 됩니다.</li>
            <li class="dot">지정한 매수일이 토/공휴일인 경우 한국거래소 기준 익영업일에 자동 매수처리 됩니다.</li>
            <li class="dot">1주 가격은 상품을 조회한 시점으로 보여집니다.</li>
            <li class="dot">거래가능 시간은 평일 07:00 ~ 23:00입니다.<br>(토/공휴일 제외)</li>
          </ul>
        </kb-folding>
      </kb-foldings>

      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT15D001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
