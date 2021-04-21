<template>
  <kb-pop full title="상세 주문 내역">
    <kb-pop-body>
      <div class="section">
        <div class="transactional_info_detail">
          <h2>
            <span>005930</span>
            삼성전자
          </h2>

          <p class="one_money">
            <span class="sub_tit">1주 가격 (조회 시점 기준)</span>
            100,000원

            <!-- 구매완료, 구매실패 시에만 노출
            구매완료 : sucess
            구매실패 : fail
            -->
            <span class="status success">구매완료</span>

          </p>

          <div class="detail_info">
            <dl>
              <dt>주문가격 옵션</dt>
              <dd>전일종가</dd>
            </dl>
            <dl>
              <dt>총 주문 금액</dt>
              <dd>700,000원</dd>
            </dl>
            <dl>
              <dt>구매수량</dt>
              <dd>7주</dd>
            </dl>
            <dl>
              <dt>자동 구매일</dt>
              <dd>10일</dd>
            </dl>
            <dl>
              <dt>지정 수익률</dt>
              <dd>매입 평균가 +5% / -5%</dd>
            </dl>
          </div>
        </div>

        <kb-foldings
          not
          class="accordion_dl"
        >
          <kb-folding>
            <template slot="title">
              적립식 거래
            </template>
            <ul class="txt_list pd_b90">
              <li class="dot">적립식 거래는 최소 3개월 이상 매 1개월 단위로 지정하신 일자에 은행의 적금처럼 매월 일정액의 상품을 매수하는 거래입니다.</li>
              <li class="dot">시작년월이 당월인 경우 서비스 개시일은 다음 영업일이 되며, 당월이 아닌 경우에는 신청월 초일이 서비스 개시일이 됩니다.</li>
              <li class="dot">지정한 매수일이 토/공휴일인 경우 한국거래소 기준 익영업일에 자동 매수처리 됩니다.</li>
              <li class="dot">1주 가격은 상품을 조회한 시점으로 보여집니다.</li>
              <li class="dot">거래가능 시간은 평일 07:00~23:00입니다. (토/공휴일 제외)</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>

      <kb-button-wrap bottom-fixed>
        <kb-button
          purple
        >
          신청취소
        </kb-button>
        <kb-button
          line
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI02A006',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
