<template>
  <kb-page page-title="단일 거래 상세">
    <kb-page-body>
      <div class="result_wrap type2">
        <div class="tit_bank mg_t24">
          <p class="bank">
            <span>NH 홍길동</span>
            2,398,000원
          </p>
          <!--
            거래유형
            입금 : fc_blue
            출금 : fc_red
          -->
          <p class="status fc_blue">입금</p>
        </div>
        <dl class="result_list type3 mg_t24">
          <dt class="fz_14">유형구분</dt>
          <dd>입금/ATM</dd>
          <dt class="fz_14">거래일시 </dt>
          <dd>2021/01/21 13:40:12</dd>
          <dt class="fz_14">거래수단</dt>
          <dd>
            <kb-button link line blue>KB마이핏통장</kb-button>
            <p class="mg_t4 fz_12 fc_666">12345678901234</p>
          </dd>
          <!-- 내용이 있는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>#밥값정산</kb-button></dd>
          <dt class="fz_14">메모</dt>
          <dd><kb-button link line blue>여의도 맛집회동</kb-button></dd>
          <!-- //내용이 있는경우 -->

          <!-- 내용이 없는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>카테고리를 선택해주세요</kb-button></dd>
          <dt class="fz_14">메모</dt>
          <dd><kb-button link line blue>메모를 남겨보세요</kb-button></dd>
          <!-- //내용이 없는경우 -->
        </dl>
        <dl class="result_list type3">
          <dt class="fz_14">거래금액</dt>
          <dd class="fc_222">3,000,00원</dd>
          <dt class="fz_14">거래 후 잔액</dt>
          <dd class="fc_222">2,344,000,00원</dd>
        </dl>
        <dl class="result_list type3">
          <dt class="fz_14">거래번호</dt>
          <dd class="fc_222">12385823923</dd>
          <dt class="fz_14">납입회차</dt>
          <dd class="fc_222">1/7</dd>
        </dl>
        <!-- 월관리 등록 후 -->
        <dl class="result_list full">
          <dt class="fz_16 fw_bold fc_222">월 지출 대상 거래입니다.</dt>
          <dd><kb-button link blue>월 지출 추천목록<i class="bt_ic_arr" aria-hidden="true" /></kb-button></dd>
        </dl>
        <!-- //월관리 등록 후 -->

        <!-- 월관리 등록 전 -->
        <kb-button not aTag class="manage_link mg_t100 mg_b0">
          2개월간 연속 출금된 이력이 있어요.<br />
          함께 관리하시겠어요?
        </kb-button>
        <!-- //월관리 등록 전 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI04A004',
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
