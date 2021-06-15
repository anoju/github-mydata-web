<template>
  <kb-page page-title="단일 거래 상세">
    <kb-page-body>
      <div class="result_wrap type2">
        <div class="mg_t24">
          <div><strong>(주)커피빈코리아여의도34번지</strong></div>
          <div class="fz_12 fc_666 mg_t4">아메리카노 샷추가</div>
          <div class="flex_wrap space_between mg_t8">
            <div><strong class="fz_20">2,398,000원</strong></div>
            <div><strong class="fc_down">결제</strong></div>
          </div>
        </div>
        <dl class="result_list type3 mg_t24">
          <dt class="fz_14">PAY</dt>
          <dd>네이버페이</dd>
          <dt class="fz_14">거래일시 </dt>
          <dd>2021/01/21 13:40:12</dd>
          <dt class="fz_14">결제수단 </dt>
          <dd>
            KB국민카드
            <p class="mg_t4 fz_12 fc_666">12345678901234</p>
          </dd>
          <dt class="fz_14">할부구분 </dt>
          <dd>일시불</dd>

        </dl>
        <dl class="result_list type3">
          <dt class="fz_14">이용금액</dt>
          <dd class="fc_222">3,000,00원</dd>
          <!-- 내용이 있는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>#밥값정산</kb-button></dd>
          <!-- //내용이 있는경우 -->

          <!-- 내용이 없는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>카테고리를 선택해주세요</kb-button></dd>
          <!-- //내용이 없는경우 -->
          <dt class="fz_14">결제방법</dt>
          <dd class="fc_222">오프라인결제</dd>
        </dl>
        <dl class="result_list type3">
          <dt class="fz_14">주문번호</dt>
          <dd class="fc_222">12345678901234567890</dd>
        </dl>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI09A010',
  data() {
    return {
    };
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
